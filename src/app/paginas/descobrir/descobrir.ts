import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Cabecalho } from '../../compartilhado/cabecalho/cabecalho';
import { Rodape } from '../../compartilhado/rodape/rodape';
import { ATLETAS, Atleta, golsDoAtleta } from '../../dados/atletas';
import { ContatosService } from '../../servicos/contatos.service';
import { FavoritosService } from '../../servicos/favoritos.service';
import { ToastService } from '../../servicos/toast.service';

type Ordenacao = 'relevancia' | 'nome' | 'gols' | 'idade';
type ChaveFiltro = 'busca' | 'esporte' | 'categoria' | 'estado' | 'idade' | 'favoritos';

interface FiltroAtivo {
  chave: ChaveFiltro;
  texto: string;
}

// Cada faixa de idade é uma função que diz se a idade entra ou não
const FAIXAS_DE_IDADE: Record<string, (idade: number) => boolean> = {
  all: () => true,
  '14-16': (idade) => idade >= 14 && idade <= 16,
  '17-18': (idade) => idade >= 17 && idade <= 18,
  '19+': (idade) => idade >= 19,
};

@Component({
  selector: 'app-descobrir',
  imports: [FormsModule, RouterLink, Cabecalho, Rodape],
  templateUrl: './descobrir.html',
  styleUrl: './descobrir.css',
  host: { '(document:keydown.escape)': 'fecharPerfil()' },
})
export class Descobrir {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toast = inject(ToastService);
  private contatos = inject(ContatosService);
  favoritos = inject(FavoritosService);

  // ---------- Filtros ----------
  busca = signal('');
  esporte = signal('');
  categoria = signal('');
  estado = signal('');
  faixaIdade = signal('all');
  somenteFavoritos = signal(false);
  ordenacao = signal<Ordenacao>('relevancia');

  esportes = ['Futebol'];
  categorias = ['Sub-17', 'Sub-20'];
  estados = [
    { sigla: 'SP', nome: 'São Paulo (SP)' },
    { sigla: 'RS', nome: 'Rio Grande do Sul (RS)' },
    { sigla: 'PE', nome: 'Pernambuco (PE)' },
    { sigla: 'PR', nome: 'Paraná (PR)' },
    { sigla: 'BA', nome: 'Bahia (BA)' },
    { sigla: 'CE', nome: 'Ceará (CE)' },
    { sigla: 'MG', nome: 'Minas Gerais (MG)' },
    { sigla: 'AM', nome: 'Amazonas (AM)' },
  ];
  botoesIdade = [
    { valor: 'all', rotulo: 'TODOS' },
    { valor: '14-16', rotulo: '14-16' },
    { valor: '17-18', rotulo: '17-18' },
    { valor: '19+', rotulo: '19+' },
  ];
  opcoesOrdenacao: { valor: Ordenacao; rotulo: string }[] = [
    { valor: 'relevancia', rotulo: 'Relevância' },
    { valor: 'nome', rotulo: 'Nome (A–Z)' },
    { valor: 'gols', rotulo: 'Mais gols' },
    { valor: 'idade', rotulo: 'Idade (menor para maior)' },
  ];

  // ---------- Lista: filtra e depois ordena (sem mexer no ATLETAS original) ----------
  private filtrados = computed(() => {
    const texto = this.busca().trim().toLowerCase();
    const entraNaIdade = FAIXAS_DE_IDADE[this.faixaIdade()] || FAIXAS_DE_IDADE['all'];
    const idsFavoritos = this.favoritos.ids();

    return ATLETAS.filter((atleta) => {
      const combinaBusca =
        atleta.nome.toLowerCase().includes(texto) ||
        atleta.esporte.toLowerCase().includes(texto) ||
        atleta.posicao.toLowerCase().includes(texto) ||
        atleta.cidade.toLowerCase().includes(texto) ||
        atleta.clube.toLowerCase().includes(texto);

      const combinaEsporte = this.esporte() === '' || atleta.esporte === this.esporte();
      const combinaCategoria = this.categoria() === '' || atleta.categoria === this.categoria();
      const combinaEstado = this.estado() === '' || atleta.cidade.endsWith('/' + this.estado());
      const combinaFavorito = !this.somenteFavoritos() || idsFavoritos.includes(atleta.id);

      return combinaBusca && combinaEsporte && combinaCategoria && combinaEstado && combinaFavorito && entraNaIdade(atleta.idade);
    });
  });

  atletasVisiveis = computed(() => {
    const lista = [...this.filtrados()]; // cópia: nunca ordenamos o array original
    const porNome = (a: Atleta, b: Atleta) => a.nome.localeCompare(b.nome, 'pt-BR');

    switch (this.ordenacao()) {
      case 'nome':
        return lista.sort(porNome);
      case 'gols':
        // quem não tem o dado de gols vai para o fim da lista
        return lista.sort((a, b) => (golsDoAtleta(b) ?? -1) - (golsDoAtleta(a) ?? -1) || porNome(a, b));
      case 'idade':
        return lista.sort((a, b) => a.idade - b.idade || porNome(a, b));
      default:
        return lista; // relevância = ordem original
    }
  });

  // Chips dos filtros que estão ligados agora
  filtrosAtivos = computed<FiltroAtivo[]>(() => {
    const ativos: FiltroAtivo[] = [];
    if (this.busca().trim() !== '') ativos.push({ chave: 'busca', texto: `Busca: “${this.busca().trim()}”` });
    if (this.esporte() !== '') ativos.push({ chave: 'esporte', texto: this.esporte() });
    if (this.categoria() !== '') ativos.push({ chave: 'categoria', texto: this.categoria() });
    if (this.estado() !== '') ativos.push({ chave: 'estado', texto: `Estado: ${this.estado()}` });
    if (this.faixaIdade() !== 'all') ativos.push({ chave: 'idade', texto: `Idade: ${this.faixaIdade()}` });
    if (this.somenteFavoritos()) ativos.push({ chave: 'favoritos', texto: 'Somente favoritos' });
    return ativos;
  });

  removerFiltro(chave: ChaveFiltro) {
    switch (chave) {
      case 'busca': this.busca.set(''); break;
      case 'esporte': this.esporte.set(''); break;
      case 'categoria': this.categoria.set(''); break;
      case 'estado': this.estado.set(''); break;
      case 'idade': this.faixaIdade.set('all'); break;
      case 'favoritos': this.somenteFavoritos.set(false); break;
    }
  }

  limparFiltros() {
    this.busca.set('');
    this.esporte.set('');
    this.categoria.set('');
    this.estado.set('');
    this.faixaIdade.set('all');
    this.somenteFavoritos.set(false);
  }

  // ---------- Favoritos ----------
  alternarFavorito(atleta: Atleta) {
    const favoritou = this.favoritos.alternar(atleta.id);
    if (favoritou) {
      this.toast.sucesso(`${atleta.nome} foi adicionado aos favoritos.`);
    } else {
      this.toast.aviso(`${atleta.nome} foi removido dos favoritos.`);
    }
  }

  // ---------- Modal do perfil ----------
  atletaSelecionado = signal<Atleta | null>(null);
  private gatilho: HTMLElement | null = null; // botão que abriu o modal (para devolver o foco)
  private botaoFechar = viewChild<ElementRef<HTMLButtonElement>>('botaoFechar');

  // ---------- Contato simulado ----------
  contatoAberto = signal(false);
  contatoRegistrado = signal(false);
  assunto = signal('');
  mensagem = signal('');
  erroContato = signal('');

  // Quantos contatos você já iniciou com o atleta que está aberto
  contatosDoAtleta = computed(() => {
    const atleta = this.atletaSelecionado();
    return atleta ? this.contatos.quantosDoAtleta(atleta.id) : 0;
  });

  ficha = computed(() => {
    const atleta = this.atletaSelecionado();
    if (!atleta) return [];

    return [
      { rotulo: 'Idade', valor: `${atleta.idade} anos` },
      { rotulo: 'Altura', valor: atleta.altura },
      { rotulo: 'Peso', valor: atleta.peso },
      { rotulo: 'Pé dominante', valor: atleta.pe },
      { rotulo: 'Categoria', valor: atleta.categoria },
      { rotulo: 'Clube', valor: atleta.clube },
    ];
  });

  constructor() {
    // Quando o modal aparece, o foco vai para o botão de fechar
    effect(() => {
      this.botaoFechar()?.nativeElement.focus();
    });

    // Link vindo do painel: /descobrir?atleta=3 abre direto o perfil
    const idDaUrl = Number(this.route.snapshot.queryParamMap.get('atleta'));
    const atleta = ATLETAS.find((item) => item.id === idDaUrl);
    if (atleta) {
      this.atletaSelecionado.set(atleta);
    }
  }

  abrirPerfil(atleta: Atleta, evento: Event) {
    this.gatilho = evento.currentTarget instanceof HTMLElement ? evento.currentTarget : null;
    this.reiniciarContato();
    this.atletaSelecionado.set(atleta);
  }

  fecharPerfil() {
    if (this.atletaSelecionado() === null) return;

    this.atletaSelecionado.set(null);
    this.reiniciarContato();

    // Devolve o foco ao botão que abriu o perfil
    this.gatilho?.focus();
    this.gatilho = null;

    // Se o modal veio de um link com ?atleta=, limpa o endereço
    if (this.route.snapshot.queryParamMap.has('atleta')) {
      this.router.navigate([], { queryParams: { atleta: null }, queryParamsHandling: 'merge', replaceUrl: true });
    }
  }

  // Fecha só se o clique foi no fundo escuro (não dentro do card)
  cliqueNoFundo(evento: MouseEvent) {
    if (evento.target === evento.currentTarget) {
      this.fecharPerfil();
    }
  }

  // ---------- Contato ----------
  private reiniciarContato() {
    this.contatoAberto.set(false);
    this.contatoRegistrado.set(false);
    this.assunto.set('');
    this.mensagem.set('');
    this.erroContato.set('');
  }

  alternarContato() {
    this.contatoRegistrado.set(false);
    this.erroContato.set('');
    this.contatoAberto.update((aberto) => !aberto);
  }

  enviarContato() {
    const atleta = this.atletaSelecionado();
    if (!atleta) return;

    const assunto = this.assunto().trim();
    const mensagem = this.mensagem().trim();

    if (assunto.length < 3) {
      this.erroContato.set('Escreva um assunto com pelo menos 3 letras.');
      return;
    }

    if (mensagem.length < 10) {
      this.erroContato.set('A mensagem precisa ter pelo menos 10 caracteres.');
      return;
    }

    // Nada é enviado: o contato fica só no localStorage
    this.contatos.registrar({ atletaId: atleta.id, atletaNome: atleta.nome, assunto, mensagem });
    this.toast.sucesso(`Contato com ${atleta.nome} registrado com sucesso.`);

    this.assunto.set('');
    this.mensagem.set('');
    this.erroContato.set('');
    this.contatoAberto.set(false);
    this.contatoRegistrado.set(true);
  }
}
