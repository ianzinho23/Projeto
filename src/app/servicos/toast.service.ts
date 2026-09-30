import { Injectable, signal } from '@angular/core';

export type TipoToast = 'sucesso' | 'aviso' | 'erro';

export interface Toast {
  id: number;
  tipo: TipoToast;
  mensagem: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);
  private proximoId = 1;

  sucesso(mensagem: string) {
    this.mostrar('sucesso', mensagem);
  }

  aviso(mensagem: string) {
    this.mostrar('aviso', mensagem);
  }

  erro(mensagem: string) {
    this.mostrar('erro', mensagem);
  }

  fechar(id: number) {
    this.toasts.update((lista) => lista.filter((toast) => toast.id !== id));
  }

  private mostrar(tipo: TipoToast, mensagem: string) {
    const id = this.proximoId++;
    this.toasts.update((lista) => [...lista.slice(-2), { id, tipo, mensagem }]); // no máximo 3 na tela
    setTimeout(() => this.fechar(id), tipo === 'erro' ? 6000 : 4000);
  }
}
