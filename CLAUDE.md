# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**IAMaster** (iamaster.com.br) é uma plataforma de treinamento em IA voltada inicialmente
para servidores do TRE-RN, com planos de expansão para advogados, médicos e outros
profissionais. O projeto tem duas partes distintas:

1. **Landing page** — React + Vite (`src/`)
2. **Conteúdo de treinamento** — HTML/CSS/JS estático (`public/treinamento/`)

## Infraestrutura

- **Backend:** Supabase (projeto `hlfndpjmkpnwxiackvce`)
- **Deploy:** Cloudflare Pages via GitHub (`osmar-junior/ia`)
- **Domínio:** iamaster.com.br

## Comandos
```bash
npm run dev       # Servidor local com HMR
npm run build     # Build de produção
npm run preview   # Preview do build localmente
npm run lint      # ESLint
```

## Estrutura do conteúdo de treinamento
```
public/
  treinamento/
    js/                   # JS compartilhado entre todos os cursos
      auth.js             # Sistema de autenticação (sessionStorage + Supabase)
    login.html            # Página de login (entrada de CPF → busca turma)
    tre-rn-2026/          # Curso principal (estrutura modular)
      index.html          # Índice do curso
      js/
        main.js           # App: getBasePath(), loadLayout(), navbar, highlight
        topicos.js        # Progresso de tópicos (localStorage) e badges de módulo
        utils.js          # Toast, helpers
      components/
        header.html       # Navbar injetada via fetch + loadComponent()
        footer.html
      modulos/
        <modulo>/
          index.html      # Índice do módulo
          topico-N.html
          *-data.js       # Dados externos usados pela página (ex: ferramentas-data.js)
      oficinas/
        oficina-NN-nome.html   # Arquivos planos, sem subpasta
    adv-flavio-macedo/    # Curso jurídico (estrutura própria — conteúdo na raiz do curso, sem subpasta modulos/)
  admin/
    index.html            # Painel administrativo (CRUD de usuários, cursos e turmas)
```

## Convenções críticas

### getBasePath() em main.js
Cada curso tem seu próprio `main.js` com `getBasePath()` adaptada à estrutura de pastas:

**tre-rn-2026** (3 níveis): `/oficinas/` → `'../'` | `/modulos/` → `'../../'` | raiz → `'./'`

**adv-flavio-macedo** (2 níveis): `/oficinas/` → `'../'` | raiz → `'./'` (sem subpasta modulos/)

`auth.js` tem sua própria `getBasePath()` com lógica ligeiramente diferente (inclui o caso da raiz `/treinamento/`). Não confundir as duas.

### Progresso e sessionStorage
- `topicos.js` persiste progresso em **localStorage** com chave `trern-topicos-concluidos` (array de IDs).
- `auth.js` persiste sessão do usuário em **sessionStorage** com chaves `treinamento_turma`, `treinamento_subpasta`, `treinamento_curso`, `treinamento_user_id`, `treinamento_user_name`.
- `getCurrentSubpasta()` em `auth.js` extrai o slug do curso do pathname para isolar sessões entre cursos.

### Variável do cliente Supabase
Usar sempre `sb` (não `supabase` — conflita com o global do CDN).
```js
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

### Sessão do admin no painel
A chamada `signUp` altera a sessão ativa. Salvar a sessão do admin com `getSession()`
antes e restaurar com `setSession()` após o cadastro de novo usuário.

### RLS no Supabase
Políticas RLS na tabela `usuario` **não devem referenciar `usuario` em subconsultas**
(causa recursão e erro 500). Verificações de admin devem usar a função
`is_admin()` com `SECURITY DEFINER`.

## Tabelas Supabase

- `usuario` — servidores/alunos cadastrados
- `curso` — cursos disponíveis
- `turma` — turmas vinculadas a cursos
- `usuario_turma` — matrícula de usuários em turmas

## Funções Supabase (SECURITY DEFINER)

- `is_admin()`
- `admin_create_usuario()`
- `admin_reset_password()`
- `verificar_acesso()`
- `buscar_usuario_por_cpf()`
- `marcar_acesso_realizado()`
- `registrar_acesso()`

## Arquitetura da landing page (React)

**Roteamento:** React Router v6 com `Layout` compartilhado (Navbar + Footer).

**Hierarquia de componentes:**
- `src/pages/` — componentes de rota completos
- `src/components/home/` — seções da Home (Hero, Instructor, Tracks, Testimonials)
- `src/components/track/` — seções de trilhas (TrackHero, Syllabus, Pricing, FAQ)
- `src/components/layout/` — Navbar, Footer, Layout
- `src/components/ui/` — primitivos reutilizáveis (Button, GlassCard)

**Estilo:** Tailwind CSS com tema dark customizado.
- `dark`: `#0A0A0B` (fundo)
- `neon`: `#00E5FF` (destaque)
- Helper `cn()` (clsx + tailwind-merge) para classes condicionais

**Animações:** Framer Motion — reveals escalonados, spring physics em cards.

**Rotas atuais:** `/` (Home) e `/trilha-juridica` (TrilhaJuridica). Novas rotas são adicionadas em `src/App.jsx` dentro do `<Route path="/" element={<Layout />}>`.

## Padrões de desenvolvimento

- Discutir alterações antes de implementar quando o impacto for amplo
- Testar mudanças em arquivo separado (ex: `index-test.html`) antes de aplicar ao oficial
- Ao editar com str_replace: sempre visualizar o trecho antes de editar
- ZIPs: usar `cd /pasta && zip -r saida.zip arquivos/` — limpar `__MACOSX` em extrações do macOS
