import { Injectable, computed, signal } from '@angular/core';

import { CHAVES, gravarJson, lerJson } from './armazenamento';

@Injectable({ providedIn: 'root' })
export class FavoritosService {
  // IDs dos atletas favoritados
  readonly ids = signal<number[]>(this.carregar());

  readonly total = computed(() => this.ids().length);

  private carregar(): number[] {
    const salvo = lerJson<unknown>(CHAVES.favoritos, []);
    return Array.isArray(salvo) ? salvo.filter((id): id is number => typeof id === 'number') : [];
  }

  ehFavorito(id: number): boolean {
    return this.ids().includes(id);
  }

  /** Adiciona ou remove; devolve true se ficou favoritado */
  alternar(id: number): boolean {
    const novos = this.ehFavorito(id) ? this.ids().filter((item) => item !== id) : [...this.ids(), id];
    this.ids.set(novos);
    gravarJson(CHAVES.favoritos, novos);
    return novos.includes(id);
  }
}
