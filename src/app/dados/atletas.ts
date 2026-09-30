// Modelo de dados de um atleta
export interface Estatistica {
  rotulo: string;
  valor: string;
}

export interface Atleta {
  id: number;
  nome: string;
  iniciais: string;
  cor: string;
  esporte: string;
  posicao: string;
  cidade: string;
  idade: number;
  categoria: string;
  clube: string;
  altura: string;
  peso: string;
  pe: string;
  estatisticas: Estatistica[];
  bio: string;
}

// Lista de atletas (antes ficava dentro do desscobrir.js)
export const ATLETAS: Atleta[] = [
  {
    id: 1,
    nome: "Lucas Ferreira",
    iniciais: "LF",
    cor: "#22c55e",
    esporte: "Futebol",
    posicao: "Meia-atacante",
    cidade: "Campinas/SP",
    idade: 17,
    categoria: "Sub-17",
    clube: "EC Juventude SP",
    altura: "1,76 m",
    peso: "68 kg",
    pe: "Direito",
    estatisticas: [
      {
        rotulo: "JOGOS",
        valor: "28"
      },
      {
        rotulo: "GOLS",
        valor: "14"
      },
      {
        rotulo: "ASSISTÊNCIAS",
        valor: "9"
      },
      {
        rotulo: "PASSES CERTOS",
        valor: "87%"
      }
    ],
    bio: "Destaque na criação de jogadas ofensivas e visão de jogo. Atualmente defendendo as categorias de base locais com ótima taxa de conversão."
  },
  {
    id: 2,
    nome: "Pedro Quintana",
    iniciais: "PQ",
    cor: "#06b6d4",
    esporte: "Futebol",
    posicao: "Zagueiro",
    cidade: "Porto Alegre/RS",
    idade: 19,
    categoria: "Sub-20",
    clube: "Grêmio Novo Hamburgo",
    altura: "1,88 m",
    peso: "79 kg",
    pe: "Esquerdo",
    estatisticas: [
      {
        rotulo: "JOGOS",
        valor: "26"
      },
      {
        rotulo: "DUELOS AÉREOS",
        valor: "74%"
      },
      {
        rotulo: "DESARMES",
        valor: "3,1/jogo"
      },
      {
        rotulo: "PASSES CERTOS",
        valor: "91%"
      }
    ],
    bio: "Zagueiro técnico, forte na imposição física e com boa saída de bola usando o pé esquerdo."
  },
  {
    id: 3,
    nome: "Thiago Amaral",
    iniciais: "TA",
    cor: "#f97316",
    esporte: "Futebol",
    posicao: "Atacante",
    cidade: "Recife/PE",
    idade: 18,
    categoria: "Sub-20",
    clube: "Sport Recife de Base",
    altura: "1,80 m",
    peso: "74 kg",
    pe: "Direito",
    estatisticas: [
      {
        rotulo: "JOGOS",
        valor: "24"
      },
      {
        rotulo: "GOLS",
        valor: "19"
      },
      {
        rotulo: "ASSISTÊNCIAS",
        valor: "5"
      },
      {
        rotulo: "FINALIZAÇÕES NO ALVO",
        valor: "62%"
      }
    ],
    bio: "Atacante de velocidade, forte no jogo pelas costas da defesa e na finalização de primeira."
  },
  {
    id: 4,
    nome: "Bruno Cardoso",
    iniciais: "BC",
    cor: "#a855f7",
    esporte: "Futebol",
    posicao: "Volante",
    cidade: "Curitiba/PR",
    idade: 17,
    categoria: "Sub-17",
    clube: "Athletico Jr PR",
    altura: "1,74 m",
    peso: "67 kg",
    pe: "Direito",
    estatisticas: [
      {
        rotulo: "JOGOS",
        valor: "22"
      },
      {
        rotulo: "DESARMES",
        valor: "3,4/jogo"
      },
      {
        rotulo: "INTERCEPTAÇÕES",
        valor: "2,8/jogo"
      },
      {
        rotulo: "PASSES CERTOS",
        valor: "88%"
      }
    ],
    bio: "Volante de marcação com boa leitura de jogo e saída de bola limpa para o setor ofensivo."
  },
  {
    id: 5,
    nome: "Enzo Ribeiro",
    iniciais: "ER",
    cor: "#eab308",
    esporte: "Futebol",
    posicao: "Ponta-direita",
    cidade: "Salvador/BA",
    idade: 16,
    categoria: "Sub-17",
    clube: "EC Bahia de Base",
    altura: "1,71 m",
    peso: "63 kg",
    pe: "Esquerdo",
    estatisticas: [
      {
        rotulo: "JOGOS",
        valor: "19"
      },
      {
        rotulo: "ASSISTÊNCIAS",
        valor: "11"
      },
      {
        rotulo: "DRIBLES CERTOS",
        valor: "4,2/jogo"
      },
      {
        rotulo: "GOLS",
        valor: "6"
      }
    ],
    bio: "Ponta habilidoso, forte no drible curto e no cruzamento de precisão. Uma das principais promessas da base baiana."
  },
  {
    id: 6,
    nome: "Matheus Vidal",
    iniciais: "MV",
    cor: "#0ea5e9",
    esporte: "Futebol",
    posicao: "Lateral-direito",
    cidade: "Fortaleza/CE",
    idade: 19,
    categoria: "Sub-20",
    clube: "Ceará SC Sub-20",
    altura: "1,77 m",
    peso: "71 kg",
    pe: "Direito",
    estatisticas: [
      {
        rotulo: "JOGOS",
        valor: "27"
      },
      {
        rotulo: "ASSISTÊNCIAS",
        valor: "8"
      },
      {
        rotulo: "CRUZAMENTOS CERTOS",
        valor: "2,6/jogo"
      },
      {
        rotulo: "DESARMES",
        valor: "2,9/jogo"
      }
    ],
    bio: "Lateral de apoio constante, com bom fôlego para subir ao ataque e retornar na marcação."
  },
  {
    id: 7,
    nome: "Caio Bezerra",
    iniciais: "CB",
    cor: "#22c55e",
    esporte: "Futebol",
    posicao: "Meio-campista",
    cidade: "Belo Horizonte/MG",
    idade: 18,
    categoria: "Sub-20",
    clube: "Cruzeiro Base MG",
    altura: "1,78 m",
    peso: "72 kg",
    pe: "Direito",
    estatisticas: [
      {
        rotulo: "JOGOS",
        valor: "25"
      },
      {
        rotulo: "PASSES CERTOS",
        valor: "89%"
      },
      {
        rotulo: "ASSISTÊNCIAS",
        valor: "7"
      },
      {
        rotulo: "DESARMES",
        valor: "2,3/jogo"
      }
    ],
    bio: "Meio-campista de construção, com excelente visão de jogo e precisão nos passes longos."
  },
  {
    id: 8,
    nome: "Vitor Hugo Santos",
    iniciais: "VS",
    cor: "#ec4899",
    esporte: "Futebol",
    posicao: "Goleiro",
    cidade: "Manaus/AM",
    idade: 17,
    categoria: "Sub-17",
    clube: "Nacional FC Manaus",
    altura: "1,89 m",
    peso: "80 kg",
    pe: "Direito",
    estatisticas: [
      {
        rotulo: "JOGOS",
        valor: "20"
      },
      {
        rotulo: "DEFESAS",
        valor: "68"
      },
      {
        rotulo: "APROVEITAMENTO",
        valor: "78%"
      },
      {
        rotulo: "JOGOS SEM SOFRER GOL",
        valor: "7"
      }
    ],
    bio: "Goleiro com ótima reação de curta distância e liderança na organização da defesa."
  }
];

/** Gols do atleta, lidos das estatísticas (null quando não há esse dado, ex.: zagueiro ou goleiro) */
export function golsDoAtleta(atleta: Atleta): number | null {
  const estatistica = atleta.estatisticas.find((item) => item.rotulo === 'GOLS');
  if (!estatistica) return null;
  const numero = Number(estatistica.valor);
  return Number.isFinite(numero) ? numero : null;
}
