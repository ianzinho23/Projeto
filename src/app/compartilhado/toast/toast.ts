import { Component, inject } from '@angular/core';

import { ToastService } from '../../servicos/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class ToastContainer {
  servico = inject(ToastService);

  icone(tipo: string): string {
    return tipo === 'sucesso' ? '✓' : tipo === 'aviso' ? '!' : '✕';
  }
}
