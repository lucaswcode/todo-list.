# ToDo-List

## 1. Descrição técnica

Aplicação de lista de tarefas (ToDo) construída com React + TypeScript usando Vite como bundler. O projeto organiza componentes reutilizáveis (UI), hooks de estado e helpers para manter separação de responsabilidades: a UI fica em `components`/`core-components`, a lógica em `hooks` e modelos em `models`. O armazenamento dos itens é feito via `use-local-storage` (persistência local), e a navegação usa `react-router`.

## 2. Bibliotecas utilizadas

- react / react-dom: biblioteca principal para UI reativa.
- vite: bundler/dev server para desenvolvimento rápido e build otimizada.
- typescript: tipagem estática para segurança no desenvolvimento.
- tailwindcss: utilitários de CSS para estilos rápidos e consistentes.
- @tailwindcss/vite: integração do Tailwind com Vite.
- react-router: roteamento entre páginas.
- class-variance-authority: utilitário para variantes CSS/estilização condicional.
- use-local-storage: hook para sincronizar estado com localStorage (persistência local simples).
- vite-plugin-svgr: importar SVGs como componentes React (dev).
- eslint e plugins: linting e regras para manter qualidade de código.

## 3. Padrão de projeto adotado

- Organização por responsabilidade:
  - `components/` — componentes genéricos e reutilizáveis (UI primitives).
  - `core-components/` — componentes compostos específicos da aplicação (ex.: `TasksList`, `TaskItem`).
  - `hooks/` — hooks customizados para lógica de estado/reuso (`use-task`, `use-tasks`).
  - `models/` — tipos e contratos (ex.: `task.ts`).
  - `helpers/` / `utils/` — funções utilitárias e variantes de estilo.
- Padrão: component-driven + hooks para lógica (similar a Atomic Design leve). Código organizado para separar apresentação (UI) e lógica, facilitando testes e manutenção.

## 4. Setup e execução

Pré-requisitos: Node.js (recomendado >= 18) e pnpm instalado.

1. Instalar dependências:

```bash
pnpm install
```

2. Rodar em ambiente de desenvolvimento:

```bash
pnpm dev
# abre http://localhost:5173 por padrão
```

3. Build para produção:

```bash
pnpm build
pnpm preview
```

Observações:

- Nenhuma variável de ambiente é obrigatória por padrão; caso adicione integrações externas, crie um `.env` com as chaves necessárias e reinicie o dev server.
- Uso de pnpm é recomendado porque já existe `pnpm-lock.yaml`; se preferir `npm`/`yarn`, instale pacotes com o respectivo gerenciador.
