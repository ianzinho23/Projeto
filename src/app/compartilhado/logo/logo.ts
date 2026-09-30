import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo" [class.logo--pequeno]="pequeno()" aria-label="ModoCarreira, ir para a página inicial">
      <span class="logo-icone" aria-hidden="true">ϟ</span>
      <span class="logo-texto">Modo<span class="verde">Carreira</span></span>
    </a>
  `,
  styleUrl: './logo.css',
})
export class Logo {
  pequeno = input(false);
}
