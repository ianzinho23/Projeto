import { Component, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SessaoService } from '../../servicos/sessao.service';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-cabecalho',
  imports: [RouterLink, RouterLinkActive, Logo],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
  host: { '(document:keydown.escape)': 'fecharMenu()' },
})
export class Cabecalho {
  sessao = inject(SessaoService);

  // 'publico' = páginas abertas (home); 'painel' = área do profissional
  modo = input<'publico' | 'painel'>('painel');

  menuAberto = signal(false);

  alternarMenu() {
    this.menuAberto.update((aberto) => !aberto);
  }

  fecharMenu() {
    this.menuAberto.set(false);
  }

  sair() {
    this.fecharMenu();
    this.sessao.sair();
  }
}
