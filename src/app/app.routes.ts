import { Routes } from '@angular/router';

import { sessaoGuard } from './servicos/sessao.service';

// Cada rota substitui uma página .html do projeto original
export const routes: Routes = [
  {
    path: '',
    title: 'ModoCarreira',
    loadComponent: () => import('./paginas/inicio/inicio').then((m) => m.Inicio),
  },
  {
    path: 'login',
    title: 'Entrar | ModoCarreira',
    loadComponent: () => import('./paginas/login/login').then((m) => m.Login),
  },
  {
    path: 'cadastro',
    title: 'ModoCarreira - Cadastro',
    loadComponent: () => import('./paginas/cadastro/cadastro').then((m) => m.Cadastro),
  },
  {
    path: 'empresa',
    canActivate: [sessaoGuard], // sem sessão de demonstração, volta para /login
    title: 'ModoCarreira - Painel',
    loadComponent: () => import('./paginas/empresa/empresa').then((m) => m.Empresa),
  },
  {
    path: 'descobrir',
    title: 'Modo Carreira - Descobrir Talentos',
    loadComponent: () => import('./paginas/descobrir/descobrir').then((m) => m.Descobrir),
  },
  {
    path: 'sobre',
    title: 'ModoCarreira - Sobre',
    loadComponent: () => import('./paginas/sobre/sobre').then((m) => m.Sobre),
  },
  { path: '**', redirectTo: '' },
];
