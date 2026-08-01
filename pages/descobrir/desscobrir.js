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
    stat1Label: "JOGOS", stat1Val: "28",
    stat2Label: "GOLS", stat2Val: "14",
    bio: "Destaque na criação de jogadas ofensivas e visão de jogo. Atualmente defendendo as categorias de base locais com ótima taxa de conversão."
  },
  {
    id: 2,
    name: "Beatriz Moraes",
    initials: "BM",
    color: "#0ea5e9",
    sport: "Vôlei",
    position: "Oposto",
    city: "Santos/SP",
    age: 18,
    category: "Sub-20",
    stat1Label: "SETS", stat1Val: "96",
    stat2Label: "PONTOS", stat2Val: "412",
    bio: "Atacante de força com excelente alcance de bloqueio. Alta regularidade no saque e pontuação por partida."
  },
  {
    id: 3,
    name: "Rafael Tavares",
    initials: "RT",
    color: "#f97316",
    sport: "Basquete",
    position: "Armador",
    city: "Belo Horizonte/MG",
    age: 18,
    category: "Sub-19",
    stat1Label: "JOGOS", stat1Val: "22",
    stat2Label: "PTS/JOGO", stat2Val: "16,4",
    bio: "Armador com grande ritmo de jogo, controle de bola refinado e excelente aproveitamento nas bolas de 3 pontos."
  },
  {
    id: 4,
    name: "Camila Souza",
    initials: "CS",
    color: "#a855f7",
    sport: "Atletismo",
    position: "100m rasos",
    city: "Fortaleza/CE",
    age: 17,
    category: "Sub-18",
    stat1Label: "MELHOR 100M", stat1Val: "11s84",
    stat2Label: "MELHOR 200M", stat2Val: "24s31",
    bio: "Velocista com explosão de saída acima da média nacional na sua categoria. Recordista estadual jovem."
  },
  {
    id: 5,
    name: "Diego Nakamura",
    initials: "DN",
    color: "#eab308",
    sport: "Judô",
    position: "Categoria -73 kg",
    city: "Curitiba/PR",
    age: 19,
    category: "Sub-21",
    stat1Label: "LUTAS", stat1Val: "34",
    stat2Label: "VITÓRIAS", stat2Val: "25",
    bio: "Judoca com técnica apurada em golpes de projeção (Seoi-nage). Atleta disciplinado com foco em torneios internacionais."
  },
  {
    id: 6,
    name: "Isabela Rocha",
    initials: "IR",
    color: "#ec4899",
    sport: "Natação",
    position: "200 m Medley",
    city: "Rio de Janeiro/RJ",
    age: 16,
    category: "Sub-17",
    stat1Label: "200M MEDLEY", stat1Val: "2:18,4",
    stat2Label: "100M LIVRE", stat2Val: "58s80",
    bio: "Nadadora versátil com excelente transição entre os nados e ótima resistência de prova."
  },
  {
    id: 7,
    name: "Gustavo Lima",
    initials: "GL",
    color: "#3b82f6",
    sport: "Handebol",
    position: "Pivô",
    city: "Vitória/ES",
    age: 18,
    category: "Sub-20",
    stat1Label: "JOGOS", stat1Val: "18",
    stat2Label: "GOLS", stat2Val: "77",
    bio: "Pivô físico e dominante na área de 6 metros. Alta capacidade de giro e finalizações precisas."
  },
  {
    id: 8,
    name: "Marina Alencar",
    initials: "MA",
    color: "#f43f5e",
    sport: "Futsal",
    position: "Ala",
    city: "Goiânia/GO",
    age: 15,
    category: "Sub-15",
    stat1Label: "JOGOS", stat1Val: "16",
    stat2Label: "GOLS", stat2Val: "18",
    bio: "Ala hibrida com drible curto desconcertante e ótima recomposição defensiva."
  },
  {
    id: 9,
    name: "Pedro Quintana",
    initials: "PQ",
    color: "#06b6d4",
    sport: "Futebol",
    position: "Zagueiro",
    city: "Porto Alegre/RS",
    age: 19,
    category: "Sub-20",
    stat1Label: "JOGOS", stat1Val: "26",
    stat2Label: "DUELOS AÉREOS", stat2Val: "74%",
    bio: "Zagueiro técnico, forte na imposição física e com boa saída de bola usando o pé esquerdo."
  },
  {
    id: 10,
    name: "Tainara Belo",
    initials: "TB",
    color: "#84cc16",
    sport: "Basquete",
    position: "Ala-pivô",
    city: "Recife/PE",
    age: 17,
    category: "Sub-17",
    stat1Label: "JOGOS", stat1Val: "20",
    stat2Label: "PTS/JOGO", stat2Val: "13,8",
    bio: "Atleta com grande presença no garrafão, destacando-se na coleta de rebotes ofensivos."
  },
  {
    id: 11,
    name: "Henrique Dória",
    initials: "HD",
    color: "#0284c7",
    sport: "Natação",
    position: "50 m Livre",
    city: "Salvador/BA",
    age: 18,
    category: "Sub-20",
    stat1Label: "50M LIVRE", stat1Val: "23s41",
    stat2Label: "100M LIVRE", stat2Val: "51s72",
    bio: "Velocista puro das piscinas. Destaca-se por uma braçada potente e saída limpa de bloco."
  },
  {
    id: 12,
    name: "Júlia Pastore",
    initials: "JP",
    color: "#eab308",
    sport: "Atletismo",
    position: "Salto em distância",
    city: "São Paulo/SP",
    age: 16,
    category: "Sub-17",
    stat1Label: "MELHOR SALTO", stat1Val: "5,92m",
    stat2Label: "MÉDIA", stat2Val: "5,68m",
    bio: "Saltadora com excelente velocidade de corrida de aproximação e precisão de tábua."
  }
];

const AGE_RANGES = {
  all: () => true,
  '14-16': (age) => age >= 14 && age <= 16,
  '17-18': (age) => age >= 17 && age <= 18,
  '19+': (age) => age >= 19
};

const gridContainer = document.getElementById('athletesGrid');
const searchInput = document.getElementById('searchInput');
const sportSelect = document.getElementById('sportSelect');
const ageButtons = document.querySelectorAll('.btn-idade');
const resultsCount = document.getElementById('resultsCount');

const modal = document.getElementById('profileModal');
const closeModalBtn = document.getElementById('closeModal');
const modalAvatar = document.getElementById('modalAvatar');
const modalName = document.getElementById('modalName');
const modalSub = document.getElementById('modalSub');
const modalBio = document.getElementById('modalBio');
const modalStats = document.getElementById('modalStats');

let currentAgeFilter = 'all';

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
          <span class="valor-estatistica">${athlete.stat1Val}</span>
          <span class="rotulo-estatistica">${athlete.stat1Label}</span>
        </div>
        <div class="item-estatistica">
          <span class="valor-estatistica">${athlete.stat2Val}</span>
          <span class="rotulo-estatistica">${athlete.stat2Label}</span>
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

function filterAthletes() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedSport = sportSelect.value;
  const matchesAge = AGE_RANGES[currentAgeFilter] || AGE_RANGES.all;

  const filtered = athletesData.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(query) ||
      athlete.sport.toLowerCase().includes(query) ||
      athlete.position.toLowerCase().includes(query) ||
      athlete.city.toLowerCase().includes(query);

    const matchesSport = selectedSport === '' || athlete.sport === selectedSport;

    return matchesSearch && matchesSport && matchesAge(athlete.age);
  });

  renderAthletes(filtered);
}

function renderModalStats(athlete) {
  modalStats.innerHTML = `
    <div class="item-estatistica">
      <span class="valor-estatistica">${athlete.stat1Val}</span>
      <span class="rotulo-estatistica">${athlete.stat1Label}</span>
    </div>
    <div class="item-estatistica">
      <span class="valor-estatistica">${athlete.stat2Val}</span>
      <span class="rotulo-estatistica">${athlete.stat2Label}</span>
    </div>
    <div class="item-estatistica">
      <span class="valor-estatistica">${athlete.category}</span>
      <span class="rotulo-estatistica">CATEGORIA</span>
    </div>
  `;
}

function openProfile(id) {
  const athlete = athletesData.find((a) => a.id === id);
  if (!athlete) return;

  modalAvatar.textContent = athlete.initials;
  modalAvatar.style.backgroundColor = athlete.color;
  modalName.textContent = athlete.name;
  modalSub.textContent = `${athlete.sport} (${athlete.position}) • ${athlete.city} • ${athlete.age} anos`;
  modalBio.textContent = athlete.bio;
  renderModalStats(athlete);

  modal.classList.add('ativo');
}

function closeProfile() {
  modal.classList.remove('ativo');
}

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

ageButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    ageButtons.forEach((b) => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    currentAgeFilter = btn.getAttribute('data-age');
    filterAthletes();
  });
});
renderAthletes(athletesData);