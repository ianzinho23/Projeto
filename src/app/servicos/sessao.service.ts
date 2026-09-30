import { Injectable, computed, inject, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { ToastService } from './toast.service';
import { CHAVES, gravarJson, gravarTexto, lerJson, lerTexto, removerChave } from './armazenamento';

export type TipoConta = 'clube' | 'empresario';

export interface Usuario {
  nome: string;
  email: string;
  tipoConta: TipoConta;
  organizacao: string;
}

// Confere se o que veio do localStorage realmente parece um Usuario
function ehUsuario(valor: unknown): valor is Usuario {
  if (typeof valor !== 'object' || valor === null) return false;
  const v = valor as Record<string, unknown>;
  return (
    typeof v['nome'] === 'string' &&
    typeof v['email'] === 'string' &&
    (v['tipoConta'] === 'clube' || v['tipoConta'] === 'empresario') &&
    typeof v['organizacao'] === 'string'
  );
}

/** Sessão de demonstração: NÃO é autenticação real. */
@Injectable({ providedIn: 'root' })
export class SessaoService {
  private router = inject(Router);
  private toast = inject(ToastService);

  readonly usuario = signal<Usuario | null>(this.carregarUsuario());
  readonly logado = signal<boolean>(lerTexto(CHAVES.logado) === 'true' && this.usuario() !== null);

  readonly primeiroNome = computed(() => this.usuario()?.nome.trim().split(' ')[0] || 'Profissional');

  private carregarUsuario(): Usuario | null {
    const salvo = lerJson<unknown>(CHAVES.usuario, null);
    return ehUsuario(salvo) ? salvo : null;
  }

  /** Guarda o usuário e marca a sessão como ativa */
  entrar(usuario: Usuario) {
    gravarJson(CHAVES.usuario, usuario);
    gravarTexto(CHAVES.logado, 'true');
    this.usuario.set(usuario);
    this.logado.set(true);
  }

  /** Login: reaproveita o cadastro feito com o mesmo e-mail, ou cria um usuário de demonstração */
  entrarPorEmail(email: string) {
    const emailLimpo = email.trim().toLowerCase();
    const salvo = this.usuario();

    if (salvo && salvo.email.toLowerCase() === emailLimpo) {
      this.entrar(salvo);
      return;
    }

    const nomeDoEmail = emailLimpo.split('@')[0].replace(/[._-]+/g, ' ').trim();
    const nome = nomeDoEmail.replace(/\b\w/g, (letra) => letra.toUpperCase()) || 'Profissional';

    this.entrar({ nome, email: emailLimpo, tipoConta: 'clube', organizacao: 'ModoCarreira Demo' });
  }

  /** Limpa a sessão e volta para o login */
  sair() {
    removerChave(CHAVES.logado);
    removerChave(CHAVES.usuario);
    this.usuario.set(null);
    this.logado.set(false);
    this.toast.sucesso('Você saiu da conta.');
    this.router.navigateByUrl('/login');
  }
}

/** Guard simples: sem sessão ativa, vai para /login */
export const sessaoGuard: CanActivateFn = () => {
  const sessao = inject(SessaoService);
  const router = inject(Router);
  return sessao.logado() ? true : router.createUrlTree(['/login']);
};
