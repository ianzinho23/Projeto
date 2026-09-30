import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Logo } from '../../compartilhado/logo/logo';
import { SessaoService, TipoConta } from '../../servicos/sessao.service';
import { ToastService } from '../../servicos/toast.service';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, RouterLink, Logo],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  private router = inject(Router);
  private sessao = inject(SessaoService);
  private toast = inject(ToastService);

  // Etapa atual: 1, 2, 3 e 4 (tela de sucesso)
  etapa = signal(1);

  // Mensagem de erro mostrada dentro da própria etapa (no lugar do alert)
  erro = signal('');

  // Etapa 1
  tipoDeConta = signal<TipoConta | ''>('');

  // Etapa 2
  nomeCompleto = signal('');
  email = signal('');
  senha = signal('');
  confirmarSenha = signal('');
  verSenha = signal(false);
  verConfirmarSenha = signal(false);

  // Etapa 3
  cidade = signal('');
  uf = signal('');
  organizacao = signal('');

  // Tela de sucesso
  primeiroNome = signal('Profissional');

  ufs = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
    'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ];

  // O texto do campo de organização muda conforme o tipo de conta
  rotuloOrganizacao = computed(() =>
    this.tipoDeConta() === 'empresario' ? 'Nome da empresa / escritório' : 'Nome do clube / organização',
  );

  placeholderOrganizacao = computed(() =>
    this.tipoDeConta() === 'empresario' ? 'Ex: Barreto Sports Management' : 'Bahia',
  );

  mostrarEtapa(numero: number) {
    this.erro.set('');
    this.etapa.set(numero);
    window.scrollTo(0, 0);
  }

  escolherTipo(tipo: TipoConta) {
    this.erro.set('');
    this.tipoDeConta.set(tipo);
  }

  continuarEtapa1() {
    if (this.tipoDeConta() === '') {
      this.erro.set('Escolha uma opção para continuar.');
      return;
    }
    this.mostrarEtapa(2);
  }

  continuarEtapa2() {
    const email = this.email().trim();

    if (this.nomeCompleto().trim() === '' || email === '') {
      this.erro.set('Preencha o nome e o e-mail para continuar.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      this.erro.set('Digite um e-mail válido, como nome@email.com.');
      return;
    }

    if (this.senha().length < 6) {
      this.erro.set('A senha precisa ter no mínimo 6 caracteres.');
      return;
    }

    if (this.senha() !== this.confirmarSenha()) {
      this.erro.set('As senhas não são iguais. Confira e tente de novo.');
      return;
    }

    this.mostrarEtapa(3);
  }

  criarConta() {
    const tipo = this.tipoDeConta();

    if (this.cidade().trim() === '' || this.uf() === '' || this.organizacao().trim() === '' || tipo === '') {
      this.erro.set('Preencha cidade, UF e organização para finalizar o cadastro.');
      return;
    }

    // Sessão de demonstração: guarda o usuário no localStorage (sem servidor)
    this.sessao.entrar({
      nome: this.nomeCompleto().trim(),
      email: this.email().trim().toLowerCase(),
      tipoConta: tipo,
      organizacao: this.organizacao().trim(),
    });

    this.primeiroNome.set(this.sessao.primeiroNome());
    this.toast.sucesso('Conta criada! Sua sessão de demonstração está ativa.');
    this.mostrarEtapa(4);
  }

  acessarPlataforma() {
    this.router.navigateByUrl('/empresa');
  }
}
