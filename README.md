## A1 - Teste de frontend para a SmartMEI

[Ver o site LIVE!](https://admiring-einstein-8dd1a8.netlify.com/)

Teste realizado para a vaga de desenvolvedor frontend na empresa [SmartMEI](https://www.smartmei.com.br/), usando React, Typescript e Graphql.

O objetivo do site é carregar uma lista de trabalhos da [API de Jobs do Graphql](https://api.graphql.jobs/), exibir detalhes e poder se inscrever na vaga selecionada.

Qualquer dúvida, entrar em contato em **fioribazarello@gmail.com**.


### Como rodar?

Basta instalar as dependências usando:

`npm i`

E iniciar o site localmente:

`npm start`

Ele será aberto automáticamente no seu navegador padrão no endereço `http://localhost:3000`.


## Premisas

Além das regras de negócio passadas foram assumidas as seguintes premissas:

* A lista de vagas inscritas não precisam ser salvas, visto a falta de autenticação. Podemos usar, contudo, os dados de cadastro da última vaga para ajudar o usuário a preencher o formulário.

* Visto a falta de paginação no backend, a paginação é feita apenas no frontend.