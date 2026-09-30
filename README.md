# ModoCarreira (Angular 21)

Plataforma que conecta atletas de base com olheiros e clubes. Projeto de demonstração: **sem backend**, tudo fica no navegador (localStorage).

## Como rodar

```bash
npm install
npm start          # http://localhost:4200
npm run build      # versão de produção em dist/
```

Node 20.19+ (ou 22.12+). O build de produção baixa o Google Fonts para embutir no HTML, então precisa de internet.

## Roteiro da demonstração

1. **Home** (`/`) → "Criar Meu Perfil" ou "Entrar"
2. **Cadastro** (`/cadastro`, 3 etapas) ou **Login** (`/login`), qualquer e-mail e senha funcionam
3. **Painel** (`/empresa`), resumo, favoritos e contatos recentes
4. **Descobrir** (`/descobrir`), buscar, filtrar, ordenar
5. **Perfil** (modal), favoritar ♥ e "Iniciar contato"
6. Voltar ao **painel**: os números de favoritos e contatos já mudaram. Botão **Sair** encerra a sessão.

## Dados salvos no navegador (localStorage)

| Chave | Conteúdo |
|---|---|
| `modoCarreira.logado` | `"true"` quando há sessão de demonstração |
| `modoCarreira.usuario` | `{ nome, email, tipoConta, organizacao }` |
| `modoCarreira.favoritos` | lista de IDs de atletas favoritados |
| `modoCarreira.contatos` | contatos simulados (nada é enviado) |

`/empresa` só abre com sessão ativa (guard em `servicos/sessao.service.ts`). Não é autenticação real.

## Estrutura

```
public/assets/            avatar-placeholder.svg, image-fallback.svg, olheiros.svg
src/styles.css            variáveis, reset, foco, botões (.btn), cards (.card-base), grade dos heros
src/app/
├── app.ts / app.routes.ts / app.config.ts
├── dados/atletas.ts      lista mock + interface Atleta + golsDoAtleta()
├── servicos/             armazenamento, sessao (+guard), favoritos, contatos, toast
├── compartilhado/        toast, logo, cabecalho, rodape, imagem-fallback (diretiva)
└── paginas/              inicio, login, cadastro, empresa, descobrir, sobre
```
