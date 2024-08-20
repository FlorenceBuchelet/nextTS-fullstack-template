--[[ lua is only used here for aesthetics ]]

/root
├── backend
│   ├── database
│   │   └── database.sqlite
│   ├── node_modules
│   ├── src
│   │   ├── dataSource
│   │   │   ├── dataSource.ts
│   │   │   └── initTestData.ts
│   │   ├── entities
│   │   │   ├── Category.ts
│   │   │   └── Entity.ts
│   │   ├── resolvers
│   │   │   ├── CategoryResolvers.ts
│   │   │   └── EntityResolvers.ts
│   │   ├── graphql
│   │   │   ├── schema.ts
│   │   │   └── typeDefs.ts
│   │   ├── helpers
│   │   │   └── ...
│   │   └── index.ts
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── .next
│   ├── node_modules
│   ├── public
│   │   ├── images
│   │   │   └── ...
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   └── ...
│   │   ├── layouts
│   │   │   └── ...
│   │   ├── pages --[[ file based routing ]]
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   └── index.tsx
│   │   ├── styles
│   │   │   ├── abstracts
│   │   │   │   ├── _variables.scss    -- Variables globales (couleurs, tailles, etc.)
│   │   │   │   ├── _mixins.scss       -- Mixins réutilisables
│   │   │   │   └── _functions.scss    -- Fonctions SCSS
│   │   │   ├── base
│   │   │   │   ├── _reset.scss        -- Reset CSS ou normalize
│   │   │   │   ├── _typography.scss   -- Styles de base pour la typographie
│   │   │   │   └── _base.scss         -- Styles de base globaux
│   │   │   ├── layouts
│   │   │   │   ├── _header.scss       -- Styles pour les layouts (header, footer, etc.)
│   │   │   │   ├── _footer.scss
│   │   │   │   └── _grid.scss         -- Styles pour la grille de mise en page
│   │   │   ├── pages
│   │   │   │   ├── _index.scss         -- Styles spécifiques aux pages
│   │   │   │   └── _about.scss
│   │   │   └── main.scss              -- Point d'entrée principal pour importer tous les fichiers SCSS
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── Dockerfile
│   ├── next-env.d.ts
│   ├── next.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
├── architecture.lua
├── docker-compose.yml
└── README.md
