// ==========================================
// LISTA DE ATLETAS
// ==========================================
const athletesData = [
  {
    id: 1,
    name: "Lucas Ferreira",
    initials: "LF",
    color: "#22c55e",
    sport: "Futebol",
    position: "Meia-atacante",
    city: "Campinas/SP",
    age: 17,
    category: "Sub-17",
    club: "EC Juventude SP",
    height: "1,76 m",
    weight: "68 kg",
    foot: "Direito",
    stats: [
      { label: "JOGOS", val: "28" },
      { label: "GOLS", val: "14" },
      { label: "ASSISTÊNCIAS", val: "9" },
      { label: "PASSES CERTOS", val: "87%" }
    ],
    bio: "Destaque na criação de jogadas ofensivas e visão de jogo. Atualmente defendendo as categorias de base locais com ótima taxa de conversão."
  },
  {
    id: 2,
    name: "Pedro Quintana",
    initials: "PQ",
    color: "#06b6d4",
    sport: "Futebol",
    position: "Zagueiro",
    city: "Porto Alegre/RS",
    age: 19,
    category: "Sub-20",
    club: "Grêmio Novo Hamburgo",
    height: "1,88 m",
    weight: "79 kg",
    foot: "Esquerdo",
    stats: [
      { label: "JOGOS", val: "26" },
      { label: "DUELOS AÉREOS", val: "74%" },
      { label: "DESARMES", val: "3,1/jogo" },
      { label: "PASSES CERTOS", val: "91%" }
    ],
    bio: "Zagueiro técnico, forte na imposição física e com boa saída de bola usando o pé esquerdo."
  },
  {
    id: 3,
    name: "Thiago Amaral",
    initials: "TA",
    color: "#f97316",
    sport: "Futebol",
    position: "Atacante",
    city: "Recife/PE",
    age: 18,
    category: "Sub-20",
    club: "Sport Recife de Base",
    height: "1,80 m",
    weight: "74 kg",
    foot: "Direito",
    stats: [
      { label: "JOGOS", val: "24" },
      { label: "GOLS", val: "19" },
      { label: "ASSISTÊNCIAS", val: "5" },
      { label: "FINALIZAÇÕES NO ALVO", val: "62%" }
    ],
    bio: "Atacante de velocidade, forte no jogo pelas costas da defesa e na finalização de primeira."
  },
  {
    id: 4,
    name: "Bruno Cardoso",
    initials: "BC",
    color: "#a855f7",
    sport: "Futebol",
    position: "Volante",
    city: "Curitiba/PR",
    age: 17,
    category: "Sub-17",
    club: "Athletico Jr PR",
    height: "1,74 m",
    weight: "67 kg",
    foot: "Direito",
    stats: [
      { label: "JOGOS", val: "22" },
      { label: "DESARMES", val: "3,4/jogo" },
      { label: "INTERCEPTAÇÕES", val: "2,8/jogo" },
      { label: "PASSES CERTOS", val: "88%" }
    ],
    bio: "Volante de marcação com boa leitura de jogo e saída de bola limpa para o setor ofensivo."
  },
  {
    id: 5,
    name: "Enzo Ribeiro",
    initials: "ER",
    color: "#eab308",
    sport: "Futebol",
    position: "Ponta-direita",
    city: "Salvador/BA",
    age: 16,
    category: "Sub-17",
    club: "EC Bahia de Base",
    height: "1,71 m",
    weight: "63 kg",
    foot: "Esquerdo",
    stats: [
      { label: "JOGOS", val: "19" },
      { label: "ASSISTÊNCIAS", val: "11" },
      { label: "DRIBLES CERTOS", val: "4,2/jogo" },
      { label: "GOLS", val: "6" }
    ],
    bio: "Ponta habilidoso, forte no drible curto e no cruzamento de precisão. Uma das principais promessas da base baiana."
  },
  {
    id: 6,
    name: "Matheus Vidal",
    initials: "MV",
    color: "#0ea5e9",
    sport: "Futebol",
    position: "Lateral-direito",
    city: "Fortaleza/CE",
    age: 19,
    category: "Sub-20",
    club: "Ceará SC Sub-20",
    height: "1,77 m",
    weight: "71 kg",
    foot: "Direito",
    stats: [
      { label: "JOGOS", val: "27" },
      { label: "ASSISTÊNCIAS", val: "8" },
      { label: "CRUZAMENTOS CERTOS", val: "2,6/jogo" },
      { label: "DESARMES", val: "2,9/jogo" }
    ],
    bio: "Lateral de apoio constante, com bom fôlego para subir ao ataque e retornar na marcação."
  },
  {
    id: 7,
    name: "Caio Bezerra",
    initials: "CB",
    color: "#22c55e",
    sport: "Futebol",
    position: "Meio-campista",
    city: "Belo Horizonte/MG",
    age: 18,
    category: "Sub-20",
    club: "Cruzeiro Base MG",
    height: "1,78 m",
    weight: "72 kg",
    foot: "Direito",
    stats: [
      { label: "JOGOS", val: "25" },
      { label: "PASSES CERTOS", val: "89%" },
      { label: "ASSISTÊNCIAS", val: "7" },
      { label: "DESARMES", val: "2,3/jogo" }
    ],
    bio: "Meio-campista de construção, com excelente visão de jogo e precisão nos passes longos."
  },
  {
    id: 8,
    name: "Vitor Hugo Santos",
    initials: "VS",
    color: "#ec4899",
    sport: "Futebol",
    position: "Goleiro",
    city: "Manaus/AM",
    age: 17,
    category: "Sub-17",
    club: "Nacional FC Manaus",
    height: "1,89 m",
    weight: "80 kg",
    foot: "Direito",
    stats: [
      { label: "JOGOS", val: "20" },
      { label: "DEFESAS", val: "68" },
      { label: "APROVEITAMENTO", val: "78%" },
      { label: "JOGOS SEM SOFRER GOL", val: "7" }
    ],
    bio: "Goleiro com ótima reação de curta distância e liderança na organização da defesa."
  }
];

// ==========================================
// FAIXAS DE IDADE
// ==========================================
const AGE_RANGES = {
  all: (age) => true,
  '14-16': (age) => age >= 14 && age <= 16,
  '17-18': (age) => age >= 17 && age <= 18,
  '19+': (age) => age >= 19
};

// ==========================================
// ELEMENTOS DA PÁGINA
// ==========================================
const gridContainer = document.getElementById('athletesGrid');
const searchInput = document.getElementById('searchInput');
const sportSelect = document.getElementById('sportSelect');
const categorySelect = document.getElementById('categorySelect');
const stateSelect = document.getElementById('stateSelect');
const ageButtons = document.querySelectorAll('.btn-idade');
const resultsCount = document.getElementById('resultsCount');

const modal = document.getElementById('profileModal');
const closeModalBtn = document.getElementById('closeModal');
const modalAvatar = document.getElementById('modalAvatar');
const modalName = document.getElementById('modalName');
const modalSub = document.getElementById('modalSub');
const modalLocal = document.getElementById('modalLocal');
const modalBio = document.getElementById('modalBio');
const modalStats = document.getElementById('modalStats');
const modalFicha = document.getElementById('modalFicha');

let currentAgeFilter = 'all';

// ==========================================
// FUNÇÕES DE RENDERIZAÇÃO
// ==========================================
function createAthleteCard(athlete) {
  const card = document.createElement('article');
  card.className = 'card-atleta';
  card.innerHTML = `
    <div>
      <div class="cabecalho-card">
        <div class="selo-avatar" style="background-color: ${athlete.color}">${athlete.initials}</div>
        <div class="info-atleta">
          <div class="linha-nome">
            <span class="nome-atleta">${athlete.name}</span>
            <span class="icone-verificado">✓</span>
          </div>
          <div class="detalhes-atleta">
            ${athlete.sport} • ${athlete.position}<br>
            📍 ${athlete.city} • ${athlete.age} anos • ${athlete.category}
          </div>
        </div>
      </div>

      <div class="container-estatisticas">
        <div class="item-estatistica">
          <span class="valor-estatistica">${athlete.stats[0].val}</span>
          <span class="rotulo-estatistica">${athlete.stats[0].label}</span>
        </div>
        <div class="item-estatistica">
          <span class="valor-estatistica">${athlete.stats[1].val}</span>
          <span class="rotulo-estatistica">${athlete.stats[1].label}</span>
        </div>
      </div>
    </div>

    <button class="btn-perfil" data-id="${athlete.id}">VER PERFIL &gt;</button>
  `;
  return card;
}

function renderAthletes(data) {
  gridContainer.innerHTML = '';
  resultsCount.textContent = data.length;
  data.forEach((athlete) => gridContainer.appendChild(createAthleteCard(athlete)));
}

// ==========================================
// LÓGICA DE FILTRAGEM
// ==========================================
function filterAthletes() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedSport = sportSelect.value;
  const selectedCategory = categorySelect.value;
  const selectedState = stateSelect.value;
  const matchesAge = AGE_RANGES[currentAgeFilter] || AGE_RANGES.all;

  const filtered = athletesData.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(query) ||
      athlete.sport.toLowerCase().includes(query) ||
      athlete.position.toLowerCase().includes(query) ||
      athlete.city.toLowerCase().includes(query) ||
      athlete.club.toLowerCase().includes(query);

    const matchesSport = selectedSport === '' || athlete.sport === selectedSport;
    const matchesCategory = selectedCategory === '' || athlete.category === selectedCategory;
    const matchesState = selectedState === '' || athlete.city.includes(selectedState);

    return matchesSearch && matchesSport && matchesCategory && matchesState && matchesAge(athlete.age);
  });

  renderAthletes(filtered);
}

// ==========================================
// MODAL
// ==========================================
function renderModalStats(athlete) {
  modalStats.innerHTML = athlete.stats.map((stat) => `
    <div class="item-estatistica">
      <span class="valor-estatistica">${stat.val}</span>
      <span class="rotulo-estatistica">${stat.label}</span>
    </div>
  `).join('');
}

function renderModalFicha(athlete) {
  const linhas = [
    { rotulo: "Idade", valor: `${athlete.age} anos` },
    { rotulo: "Altura", valor: athlete.height },
    { rotulo: "Peso", valor: athlete.weight },
    { rotulo: "Pé dominante", valor: athlete.foot },
    { rotulo: "Categoria", valor: athlete.category },
    { rotulo: "Clube", valor: athlete.club }
  ];

  modalFicha.innerHTML = linhas.map((linha) => `
    <div class="linha-ficha">
      <span class="rotulo-linha-ficha">${linha.rotulo}</span>
      <span class="valor-linha-ficha">${linha.valor}</span>
    </div>
  `).join('');
}

function openProfile(id) {
  const athlete = athletesData.find((a) => a.id === id);
  if (!athlete) return;

  modalAvatar.textContent = athlete.initials;
  modalAvatar.style.backgroundColor = athlete.color;
  modalName.textContent = athlete.name;
  modalSub.textContent = `${athlete.sport} • ${athlete.position} • ${athlete.category} • ${athlete.club}`;
  modalLocal.textContent = `📍 ${athlete.city}`;
  modalBio.textContent = athlete.bio;
  renderModalStats(athlete);
  renderModalFicha(athlete);

  modal.classList.add('ativo');
}

function closeProfile() {
  modal.classList.remove('ativo');
}

// ==========================================
// EVENTOS
// ==========================================
gridContainer.addEventListener('click', (event) => {
  const btn = event.target.closest('.btn-perfil');
  if (!btn) return;
  openProfile(Number(btn.dataset.id));
});

closeModalBtn.addEventListener('click', closeProfile);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeProfile();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('ativo')) closeProfile();
});

searchInput.addEventListener('input', filterAthletes);
sportSelect.addEventListener('change', filterAthletes);
categorySelect.addEventListener('change', filterAthletes);
stateSelect.addEventListener('change', filterAthletes);

ageButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    ageButtons.forEach((b) => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    currentAgeFilter = btn.getAttribute('data-age');
    filterAthletes();
  });
});

// Inicialização
renderAthletes(athletesData);
