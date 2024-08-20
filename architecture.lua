-- lua is only used here for aesthetics

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
│   │   │   ├── componentName
│   │   │   │   ├── componentName.scss
│   │   │   │   └── ComponentName.tsx
│   │   │   └── componentName
│   │   │       ├── componentName.scss
│   │   │       └── ComponentName.tsx
│   │   ├── layouts
│   │   │   ├── Layout.tsx -- main layout
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── pages -- !! file based routing
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   └── index.tsx
│   │   └── styles
│   │       ├── abstracts
│   │       │   ├── _variables.scss
│   │       │   ├── _mixins.scss
│   │       │   └── _functions.scss
│   │       ├── base
│   │       │   ├── _reset.scss
│   │       │   ├── _typography.scss
│   │       │   └── _base.scss
│   │       ├── layouts
│   │       │   ├── _header.scss
│   │       │   ├── _footer.scss
│   │       │   └── _grid.scss
│   │       ├── pages
│   │       │   ├── _index.scss
│   │       │   └── _about.scss
│   │       └── main.scss
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── Dockerfile
│   ├── next-env.d.ts
│   ├── next.config.mjs -- .mjs needs esnext as module format
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
├── architecture.lua
├── docker-compose.yml
└── README.md
