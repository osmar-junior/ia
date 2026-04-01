# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

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
    tre-rn-2026/          # Curso principal (estrutura modular)
      index.html          # Índice do curso
      main.js             # JS compartilhado do curso
      modulos/
        modulo-1/
          index.html      # Índice do módulo
          topico-1.html
          topico-2.html
          ...
        modulo-2/
          ...
      oficinas/
        oficina-1/
          index.html
          ...
    adv-flavio-macedo/    # Curso jurídico (ainda não migrado para estrutura modular)
  admin/
    index.html            # Painel administrativo (CRUD de usuários, cursos e turmas)
```

## Convenções críticas

### getBasePath() em main.js
Páginas de módulos ficam sempre **dois níveis abaixo da raiz do curso**.
A função deve retornar `'../../'` para qualquer caminho contendo `/modulos/` ou `/oficinas/`.

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

## Padrões de desenvolvimento

- Discutir alterações antes de implementar quando o impacto for amplo
- Testar mudanças em arquivo separado (ex: `index-test.html`) antes de aplicar ao oficial
- Ao editar com str_replace: sempre visualizar o trecho antes de editar
- ZIPs: usar `cd /pasta && zip -r saida.zip arquivos/` — limpar `__MACOSX` em extrações do macOS
