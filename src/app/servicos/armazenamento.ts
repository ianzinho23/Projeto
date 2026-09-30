// Funções pequenas para ler/gravar no localStorage sem quebrar o app
// (o localStorage pode estar bloqueado ou conter dados inválidos).

export const CHAVES = {
  logado: 'modoCarreira.logado',
  usuario: 'modoCarreira.usuario',
  favoritos: 'modoCarreira.favoritos',
  contatos: 'modoCarreira.contatos',
} as const;

export function lerTexto(chave: string): string | null {
  try {
    return localStorage.getItem(chave);
  } catch {
    return null;
  }
}

export function gravarTexto(chave: string, valor: string): void {
  try {
    localStorage.setItem(chave, valor);
  } catch {
    // sem espaço ou bloqueado: o app continua funcionando só em memória
  }
}

export function removerChave(chave: string): void {
  try {
    localStorage.removeItem(chave);
  } catch {
    // ignora
  }
}

// Lê um JSON e devolve `padrao` se não existir ou estiver quebrado
export function lerJson<T>(chave: string, padrao: T): T {
  const texto = lerTexto(chave);
  if (texto === null) return padrao;
  try {
    return JSON.parse(texto) as T;
  } catch {
    return padrao;
  }
}

export function gravarJson(chave: string, valor: unknown): void {
  gravarTexto(chave, JSON.stringify(valor));
}
