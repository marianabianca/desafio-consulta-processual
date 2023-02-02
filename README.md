# Desafio consulta processual

## Pre requisitos
- Ter o MongoDB instalado na máquina
- Ter o NPM instalado na máquina

## Como rodar
- Primeiramente, inicialize o MongoDB
    - Linux `sudo systemctl status mongod`
    - Mac `brew services start mongodb`
- Agora, na raiz do repositório, rode `npm run dev`
    - Para finalziar a aplicação, use `ctrl + c`

## Como rodar os testes do servidor
- Entre na pasta do server
- Rode o comando `npm run test`

---

## Bibliotecas utilizadas

### Client (frontend)

- [Chakra ui](https://chakra-ui.com/): Biblioteca de componentes para React.
Foi escolhida por conta de sua praticidade em utilizar para criar páginas, e
também por seu design limpo e moderno.
- [Axios](https://axios-http.com/): Biblioteca utilizada para criar requisições
HTTP. Foi escolhida por facilitar a criação das requisições feitas para o cliente
(backend), muito utilizada pela comunidade e está em constante atualização.
- [Formik](https://formik.org/): Biblioteca que auxilia na criação de forms em React,
foi escolhida por ser uma das mais populares na comunidade, relativamente simples de
utilizar, e facilita na validação de campos e leitura mais intuitiva do código.
- [React Router](https://reactrouter.com/en/main): Biblioteca para criar rotas na aplicação.
Foi escolhida por ser muito utilizada pela comunidade, fácil de entender e utilizar, e 
também por estar em constante atualização.

### Server (backend)

- [Cors](https://github.com/expressjs/cors): Biblioteca para habilitar o CORS, possibilitando
o client fazer requisições diretamente para o server localmente.
- [Dotenv](https://github.com/motdotla/dotenv): Biblioteca para carregar variáveis de ambiente
de uma forma simples e fácil de se modificar. Foi utilizada, principalmente, para concentrar as 
configurações do banco de dados para teste e para desenvolvimento.
- [Chai](https://github.com/chaijs/chai): Biblioteca de asserções, foi utilizada para a criação
de testes. Além disso, também foi utilizada o [Chai HTTP](https://github.com/chaijs/chai-http)
para a integração das asserções do Chai com requisições HTTP.

Mais comentários sobre escolhas do projeto no arquivo COMMENTS.md
