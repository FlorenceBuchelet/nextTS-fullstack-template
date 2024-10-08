-- lua is only used here for aesthetics

/root
├── backend
│   ├── database
│   │   └── database.sqlite
│   ├── node_modules
│   ├── src
│   │   ├── dataSource
│   │   │   ├── cleanDB.ts
│   │   │   ├── dataSource.ts
│   │   │   └── initTestData.ts
│   │   ├── entities
│   │   │   ├── Category.ts
│   │   │   └── Element.ts
│   │   ├── resolvers
│   │   │   ├── CategoryResolvers.ts
│   │   │   └── EntityResolvers.ts
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
│   │   ├── graphQL
│   │   │   ├── fragments
│   │   │   │   └── ...
│   │   │   ├── mutations
│   │   │   │   └── ...
│   │   │   ├── queries
│   │   │   │   └── getSomeExamples.ts
│   │   │   └── gql.ts
│   │   ├── layouts
│   │   │   ├── Layout.tsx              -- main layout
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── pages                       -- !! file based routing
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   └── index.tsx
│   │   ├── styles
│   │   │   ├── abstracts
│   │   │   │   ├── _variables.scss
│   │   │   │   ├── _mixins.scss
│   │   │   │   └── _functions.scss
│   │   │   ├── base
│   │   │   │   ├── _reset.scss
│   │   │   │   ├── _typography.scss
│   │   │   │   └── _base.scss
│   │   │   ├── layouts
│   │   │   │   ├── _header.scss
│   │   │   │   ├── _footer.scss
│   │   │   │   └── _grid.scss
│   │   │   ├── pages
│   │   │   │   ├── _index.scss
│   │   │   │   └── _about.scss
│   │   │   └── main.scss
│   │   └── types
│   │       ├── Category.d.ts
│   │       └── Example.d.ts
│   ├── .env
│   ├── .env.sample
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── Dockerfile
│   ├── next-env.d.ts
│   ├── next.config.mjs                 -- .mjs needs esnext as module format
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
├── architecture.lua
├── docker-compose.yml
└── README.md
