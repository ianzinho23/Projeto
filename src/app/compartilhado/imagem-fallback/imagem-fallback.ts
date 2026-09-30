import { Directive, computed, input, signal } from '@angular/core';

/**
 * Uso: <img [appImagemFallback]="url" alt="...">
 * Se a imagem falhar ao carregar, troca por um placeholder local (uma única vez).
 */
@Directive({
  selector: 'img[appImagemFallback]',
  host: {
    '[src]': 'origem()',
    '(error)': 'aoFalhar()',
  },
})
export class ImagemFallback {
  appImagemFallback = input.required<string>();
  // Qual placeholder usar quando falhar (padrão: imagem genérica)
  fallback = input<string>('assets/image-fallback.svg');

  private falhou = signal(false);

  origem = computed(() => (this.falhou() ? this.fallback() : this.appImagemFallback()));

  aoFalhar() {
    this.falhou.set(true);
  }
}
