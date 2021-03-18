# Resumo

Aplicação para listagem de repositorios do github de um usuário especifico

## Rodar o projeto em ambiente de desenvolvimento

`yarn install` ou `npm install` instalar dependencias do projeto
`yarn start` ou `npm start` inicia o projeto
quando o projeto começar a rodar ele ficara em [http://localhost:3000](http://localhost:3000).

## Como funciona a estrutura do projeto

##### Estrutura de pastas

`cypress/integration` - pasta com os testes da aplicação.

`src` - pasta raiz do projeto.
`src/assets` - pasta com todos os assets do projeto como imagens.
`src/components` - pasta com todos os componentes reutilizaveis do projeto.
`src/functions` - pasta com funções repetitivas de usos diversos.
`src/hooks` - pasta com hooks customizados do react.
`src/routes` - pasta com todas as rotas da aplicação.
`src/services` - psa.
`src/styles` - pasta com o css global e temas da aplicação.
`src/types` - pasta com todos os tipos novos a serem declarados para o typescript.

##### Estrutura de um componente

os componentes possuem 4 arquivos:

`types.ts` - Arquivo que possue todos os tipos do componente.
`functions.ts` - Arquivo com todas as funções do componente.
`styles.ts` - Arquivo com todas as estilizações do componente.
`index.tsx` - Arquivo do componente.

em alguns casos alguns componentes possuem componentes especificos dele mesmo e nesses
casos ele pode possuir uma pasta `components` que vai ficar os componentes customizados dele mesmo.

## Sobre o desenvolvimento

Aplicação desenvolvida em React.js


## Gerar uma buiild do projeto

`yarn build` ou `npm build` Gera uma build do projeto
para rodar essa build é nescessario a dependencia `serve` [https://www.npmjs.com/package/serve]
depois de gerar a build na pasta raiz do projeto executar `npx serve -s build`.

### `yarn test`

