import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Logo } from '../../compartilhado/logo/logo';
import { SessaoService } from '../../servicos/sessao.service';
import { ToastService } from '../../servicos/toast.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, Logo],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  private sessao = inject(SessaoService);
  private toast = inject(ToastService);

  // Campos do formulário
  email = signal('');
  senha = signal('');
  lembrar = signal(false);

  // Estado da tela
  mostrarSenha = signal(false);
  loginFeito = signal(false); // true = mostra o painel "Bem-vindo de volta!"

  alternarSenha() {
    this.mostrarSenha.update((valor) => !valor);
  }

  // O navegador já valida e-mail/senha obrigatórios (ngNativeValidate no HTML)
  entrar() {
    // Sessão de demonstração: não existe autenticação real
    this.sessao.entrarPorEmail(this.email());
    this.loginFeito.set(true);
  }

  irParaPlataforma() {
    this.router.navigateByUrl('/empresa');
  }

  entrarComRedeSocial(rede: string) {
    this.toast.aviso(`Login com ${rede} não está disponível na demonstração. Use e-mail e senha.`);
  }

  esqueciSenha() {
    this.toast.aviso('Recuperação de senha não está disponível na demonstração.');
  }
}
