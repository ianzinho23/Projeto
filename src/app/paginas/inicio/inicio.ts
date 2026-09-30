import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Cabecalho } from '../../compartilhado/cabecalho/cabecalho';
import { ImagemFallback } from '../../compartilhado/imagem-fallback/imagem-fallback';
import { Rodape } from '../../compartilhado/rodape/rodape';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, Cabecalho, Rodape, ImagemFallback],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  estatisticas = [
    { numero: '2.400+', legenda: 'Atletas Cadastrados' },
    { numero: '180+', legenda: 'Clubes Parceiros' },
    { numero: '340+', legenda: 'Contratos Firmados' },
    { numero: '320+', legenda: 'Olheiros Ativos' },
  ];

  passos = [
    {
      numero: '01',
      rotulo: 'Passo 1',
      titulo: 'Crie seu Perfil',
      texto:
        'Monte sua vitrine com estatísticas, vídeos de destaque, histórico de clubes e conquistas. Seu currículo esportivo completo em um só lugar.',
    },
    {
      numero: '02',
      rotulo: 'Passo 2',
      titulo: 'Seja Descoberto',
      texto:
        'Olheiros, empresários e clubes de todo o Brasil buscam talentos na plataforma. Seu perfil aparece para quem realmente decide.',
    },
    {
      numero: '03',
      rotulo: 'Passo 3',
      titulo: 'Feche Oportunidades',
      texto:
        'Receba propostas, agende avaliações e negocie diretamente. Do contato inicial ao contrato, tudo dentro da plataforma.',
    },
  ];

  recursos = [
    { icone: '📊', titulo: 'Métricas detalhadas por atleta', texto: 'Gols, assistências, dribles, minutos jogados e muito mais.' },
    { icone: '✅', titulo: 'Perfis verificados e atualizados', texto: 'Dados confirmados pelos clubes e comissões técnicas.' },
    { icone: '💬', titulo: 'Contato direto com o atleta', texto: 'Negocie e agende avaliações diretamente pela plataforma.' },
  ];

  depoimentos = [
    {
      texto:
        'Em três meses na plataforma já identifiquei quatro jovens que hoje estão em testes conosco. A filtragem por região e categoria economiza semanas de trabalho.',
      foto: 'assets/avatar-placeholder.svg',
      nome: 'Rodrigo Mendes',
      cargo: 'Olheiro — Clube Atlético Mineiro',
    },
    {
      texto:
        'Representava jogadores que nunca tinham visibilidade fora do estado. Hoje tenho atletas Sub-17 com propostas de clubes europeus por conta da exposição aqui.',
      foto: 'assets/avatar-placeholder.svg',
      nome: 'Carla Nascimento',
      cargo: 'Empresária de Futebol',
    },
    {
      texto:
        'Meu filho jogava em clube do interior sem ninguém saber. Em dois meses com o perfil completo, recebeu convite para teste em time da Série B. É transformador.',
      foto: 'assets/avatar-placeholder.svg',
      nome: 'Jonas Pereira',
      cargo: 'Pai do Atleta Bruno Pereira, 16 anos',
    },
  ];
}
