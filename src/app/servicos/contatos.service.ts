import { Injectable, computed, signal } from '@angular/core';

import { CHAVES, gravarJson, lerJson } from './armazenamento';

export interface Contato {
  id: number;
  atletaId: number;
  atletaNome: string;
  assunto: string;
  mensagem: string;
  data: string; // ISO
}

export type NovoContato = Omit<Contato, 'id' | 'data'>;

function ehContato(valor: unknown): valor is Contato {
  if (typeof valor !== 'object' || valor === null) return false;
  const v = valor as Record<string, unknown>;
  return (
    typeof v['id'] === 'number' &&
    typeof v['atletaId'] === 'number' &&
    typeof v['atletaNome'] === 'string' &&
    typeof v['assunto'] === 'string' &&
    typeof v['mensagem'] === 'string' &&
    typeof v['data'] === 'string'
  );
}

/** Contatos simulados: só ficam salvos no localStorage, nada é enviado. */
@Injectable({ providedIn: 'root' })
export class ContatosService {
  readonly lista = signal<Contato[]>(this.carregar());

  readonly total = computed(() => this.lista().length);

  // Mais recentes primeiro
  readonly recentes = computed(() => [...this.lista()].reverse());

  private carregar(): Contato[] {
    const salvo = lerJson<unknown>(CHAVES.contatos, []);
    return Array.isArray(salvo) ? salvo.filter(ehContato) : [];
  }

  quantosDoAtleta(atletaId: number): number {
    return this.lista().filter((contato) => contato.atletaId === atletaId).length;
  }

  registrar(novo: NovoContato): Contato {
    const contato: Contato = { ...novo, id: Date.now(), data: new Date().toISOString() };
    const atualizada = [...this.lista(), contato];
    this.lista.set(atualizada);
    gravarJson(CHAVES.contatos, atualizada);
    return contato;
  }
}
