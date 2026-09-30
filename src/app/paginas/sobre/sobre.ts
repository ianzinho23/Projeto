import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Cabecalho } from '../../compartilhado/cabecalho/cabecalho';
import { Rodape } from '../../compartilhado/rodape/rodape';

@Component({
  selector: 'app-sobre',
  imports: [RouterLink, Cabecalho, Rodape],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre implements OnInit, OnDestroy {
  // ---------- Manifesto (aparece linha por linha) ----------
  manifesto = [
    { texto: 'Todo atleta merece ser visto.', classe: '' },
    { texto: 'Não apenas os que têm clube grande atrás.', classe: '' },
    { texto: 'Não apenas os de capital.', classe: '' },
    { texto: 'Não apenas os que conhecem alguém.', classe: '' },
    { texto: 'O talento não avisa onde nasce.', classe: 'linha-transparente' },
    { texto: 'Mas a falta de visibilidade o silencia.', classe: 'linha-transparente' },
    { texto: 'MODOCARREIRA EXISTE PARA MUDAR\nISSO.', classe: 'linha-maior' },
  ];

  // Textos dos dois botões (são as linhas 8 e 9 da animação)
  textoCriarPerfil = 'Criar perfil grátis ›';
  textoVerAtletas = 'Ver atletas';

  // Quantas linhas já apareceram (de 0 até 9)
  linhasVisiveis = signal(0);
  private temporizadores: ReturnType<typeof setTimeout>[] = [];

  ngOnInit() {
    const totalDeLinhas = this.manifesto.length + 2; // 7 frases + 2 botões

    // Quem prefere menos movimento vê tudo de uma vez
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      this.linhasVisiveis.set(totalDeLinhas);
      return;
    }

    for (let indice = 0; indice < totalDeLinhas; indice++) {
      const temporizador = setTimeout(() => {
        this.linhasVisiveis.set(indice + 1);
      }, indice * 500);
      this.temporizadores.push(temporizador);
    }
  }

  // Cancela os temporizadores se o usuário sair da página antes do fim
  ngOnDestroy() {
    this.temporizadores.forEach((temporizador) => clearTimeout(temporizador));
  }

  // ---------- Como funciona ----------
  passos = [
    { numero: '01', titulo: 'Publique a jornada', texto: 'Treinos, jogos, competições e marcos pessoais — em números, fotos e vídeos.' },
    { numero: '02', titulo: 'Construa a evolução', texto: 'As estatísticas viram uma curva mês a mês. O progresso fica visível, não só o resultado.' },
    { numero: '03', titulo: 'Seja encontrado', texto: 'Olheiros filtram por esporte, posição, idade, categoria e região e chegam até o seu perfil.' },
    { numero: '04', titulo: 'Receba o contato', texto: 'Clubes e profissionais abrem conversa direto pelo perfil, sem intermediário e já com histórico na mão.' },
  ];

  // ---------- Dois lados ----------
  itensAtleta = [
    'Perfil completo com posição, físico e categoria',
    'Estatísticas de temporada sempre atualizadas',
    'Destaques em vídeo reunidos em um só lugar',
    'Linha do tempo de conquistas e convocações',
  ];

  itensProfissional = [
    'Busca por esporte, posição, idade e região',
    'Comparação por números, não por indicação',
    'Curva de evolução mês a mês',
    'Contato direto pelo perfil do atleta',
  ];

  // ---------- Nossa história ----------
  historia = [
    { ano: '2022', titulo: 'Ideia', texto: 'Dois atletas de base percebem que talentos são invisíveis sem clube grande por trás. A ideia nasce numa cancha de futebol de várzea.' },
    { ano: '2023', titulo: 'Primeiro protótipo', texto: 'Testamos com 40 atletas e 8 olheiros no interior de São Paulo. Em 3 meses, 2 atletas fecharam contrato com clubes da Série C.' },
    { ano: '2024', titulo: 'Expansão', texto: 'Lançamos para 5 estados, incluímos outros esportes e construímos o sistema de evolução estatística mês a mês.' },
    { ano: '2025', titulo: 'Plataforma nacional', texto: 'ModoCarreira opera em todo o Brasil, com perfis em 12 modalidades e presença em clubes de base de todas as séries profissionais.' },
  ];

  // ---------- Valores ----------
  valores = [
    { icone: '⚡', titulo: 'Mérito visível', texto: 'Nenhum atleta deve depender de quem conhece. O número fala por si.' },
    { icone: '🎯', titulo: 'Dados, não achismo', texto: 'Toda evolução é registrada, comparável e auditável. Sem inflação de ego.' },
    { icone: '🏃', titulo: 'Base primeiro', texto: 'Só existimos para quem ainda não chegou ao profissional. É quem mais precisa de visibilidade.' },
    { icone: '🤝', titulo: 'Conexão direta', texto: 'Sem intermediários isolados. Atleta e profissional se encontram com contato completo.' },
    { icone: '🔒', titulo: 'Acesso universal', texto: 'Cadastro gratuito para atletas. Nenhum talento deve ficar de fora por falta de dinheiro.' },
    { icone: '✅', titulo: 'Evolução como produto', texto: 'Não vendemos o resultado de hoje. Vendemos o crescimento ao longo do tempo.' },
  ];

  // ---------- FAQ ----------
  perguntas = [
    { pergunta: 'O cadastro é gratuito para atletas?', resposta: 'Sim. Criar e manter o perfil de atleta no ModoCarreira nunca tem custo, independente do esporte ou categoria.' },
    { pergunta: 'Quais esportes a plataforma suporta?', resposta: 'Hoje são 12 modalidades cadastradas, do futebol ao vôlei, com campos de estatística específicos para cada uma.' },
    { pergunta: 'Como os olheiros encontram os atletas?', resposta: 'Por filtros de esporte, posição, idade, categoria e região, comparando evolução real em vez de indicação de terceiros.' },
    { pergunta: 'Preciso de clube para criar perfil?', resposta: 'Não. O perfil é individual do atleta e pode ser criado com ou sem vínculo a um clube no momento do cadastro.' },
    { pergunta: 'Os dados são verificados?', resposta: 'Estatísticas e convocações passam por checagem antes de entrar no histórico público do atleta.' },
  ];

  // Índice da pergunta aberta (null = todas fechadas). Só uma abre por vez.
  perguntaAberta = signal<number | null>(null);

  alternarPergunta(indice: number) {
    this.perguntaAberta.update((atual) => (atual === indice ? null : indice));
  }
}
