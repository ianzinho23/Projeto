import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Cabecalho } from '../../compartilhado/cabecalho/cabecalho';
import { Rodape } from '../../compartilhado/rodape/rodape';
import { ATLETAS, Atleta } from '../../dados/atletas';
import { ContatosService } from '../../servicos/contatos.service';
import { FavoritosService } from '../../servicos/favoritos.service';
import { SessaoService } from '../../servicos/sessao.service';
import { ToastService } from '../../servicos/toast.service';

@Component({
  selector: 'app-empresa',
  imports: [RouterLink, DatePipe, Cabecalho, Rodape],
  templateUrl: './empresa.html',
  styleUrl: './empresa.css',
})
export class Empresa {
  sessao = inject(SessaoService);
  private favoritos = inject(FavoritosService);
  private contatos = inject(ContatosService);
  private toast = inject(ToastService);

  // Texto do tipo de conta escolhido no cadastro
  tipoDeConta = computed(() => {
    const tipo = this.sessao.usuario()?.tipoConta;
    return tipo === 'empresario' ? 'Empresário' : 'Clube / Olheiro';
  });

  // Números do resumo: os dois primeiros são da plataforma, os outros dois são seus
  resumo = computed(() => [
    { numero: '2.400+', legenda: 'Atletas disponíveis' },
    { numero: '180+', legenda: 'Clubes parceiros na base' },
    { numero: String(this.favoritos.total()), legenda: 'Atletas favoritados por você' },
    { numero: String(this.contatos.total()), legenda: 'Contatos iniciados por você' },
  ]);

  atletasFavoritos = computed(() => ATLETAS.filter((atleta) => this.favoritos.ids().includes(atleta.id)));

  contatosRecentes = computed(() => this.contatos.recentes().slice(0, 3));

  dicas = [
    { numero: '01', titulo: 'Descubra Talentos', texto: 'Use os filtros de esporte, posição, categoria e região para encontrar o atleta certo.' },
    { numero: '02', titulo: 'Veja o Perfil Completo', texto: 'Estatísticas, evolução, vídeos de destaque e ficha técnica de cada atleta.' },
    { numero: '03', titulo: 'Entre em Contato', texto: 'Fale direto com o atleta ou responsável pelo perfil, sem intermediários.' },
  ];

  removerFavorito(atleta: Atleta) {
    this.favoritos.alternar(atleta.id);
    this.toast.aviso(`${atleta.nome} foi removido dos seus favoritos.`);
  }

  sair() {
    this.sessao.sair();
  }
}
