# Portfólio

Site de apresentação profissional: quem sou, skills, experiências e contatos.
Todo o conteúdo vem de um CMS, então atualizar o portfólio não exige mexer no código.

## Stack

- **Next.js 13** (pages router) com SSR e **TypeScript**
- **Hygraph** (GraphQL CMS) como fonte de dados, consumido via **urql**
- **Tailwind CSS** com tokens de tema próprios
- **Phosphor Icons** e **Animate.css**
- Fontes **Inter** e **JetBrains Mono** (`next/font`)

## Como rodar

```bash
npm install
# crie um .env na raiz (ele é ignorado pelo git):
# NEXT_PUBLIC_DB_URQL=<url da API de conteúdo do Hygraph>
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run codegen    # regenera src/generated/graphql.tsx após mudar as queries
```

Sem `NEXT_PUBLIC_DB_URQL` a página responde 500, porque a query do SSR volta sem dados.

## Estrutura

```
src/
  components/   Header, Main (hero), AboutMe, Skills, Experience, Contacts
  graphql/      queries (.graphql) usadas pelo codegen
  generated/    hooks/tipos gerados (não editar à mão)
  lib/          urql (client + cache SSR) e useReveal
  pages/        _app (providers e fontes) e index (SSR das 4 queries)
  styles/       globals.css (base, componentes utilitários, reveal)
```

## Decisões importantes

- **Conteúdo no CMS, não no código.** Skills, experiências, foto e textos são editados no Hygraph e refletem no site sem novo deploy de código.
- **Dados buscados em `getServerSideProps`** e restaurados no client pelo `ssrExchange` do urql. Assim a primeira renderização já vem com conteúdo e não há "piscada" de carregamento.
- **Visual redesenhado sem mudar a essência.** Mesma ordem de seções, âncoras (`#aboutPage`, `#skillsPage`, `#experiencePage`, `#contactsPage`) e conteúdo; mudou só a camada visual (tema dark, hierarquia tipográfica, cards, hero com foto).
- **Tokens de tema no `tailwind.config.js`** (`bg`, `line`, `ink`, `accent`). Para trocar a identidade visual basta alterar esses valores.
- **Animação ao rolar via `IntersectionObserver`** (`src/lib/useReveal.ts`). Substituiu listeners de `scroll` com posições fixas em pixels, que quebravam ao mudar o layout. Respeita `prefers-reduced-motion`.
- **Acessibilidade básica:** foco visível, `aria-label` na navegação por ícones (mobile), imagens decorativas com `alt` vazio, estados de carregamento com `role="status"`.
- **HTML do "Sobre mim" vem do CMS** (`dangerouslySetInnerHTML`, classe `.cms-content`). Só deve receber conteúdo de fonte confiável, no caso o próprio Hygraph editado por mim.

## Ir para o site

https://portifolio-new-next.vercel.app/
