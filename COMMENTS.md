
# Escolhas para o projeto

Para o client foi escolhido o ReactJS por conta do pre-requisito do próprio desafio.

Já para o server, inicialmente escolhi o Node.js, mas acabei utilizando o Express.js,
uma vez que ao realizar algumas pesquisas de exemplos e tutoriais de CRUDs com Node.js, 
achei que para o fim o desafio o Express.js se encaixaria melhor, já que é uma aplicação
simples e que teria que ser desenvolvida em um curto espaço de tempo. O Express.js se
mostrou mais simples de configurar que o Node.js. 
Para o banco de dados foi escolhido o Mongoose por conta de experiências passadas, e 
também por ter sido muito utilizado nos diversos tutoriais que li.

## Bibliotecas

### Client

As bibliotecas que utilizei levaram em consideração experiências passadas, tanto em relação
a bibliotecas que são muito utilizadas pela comunidade, quanto para facilitar o desenvolvimento,
me possibilitando não utilizar tanto tempo para pensar como codar ideias (forms, design de componentes
e páginas, roteador).

### Server

Nesse caso, as bibliotecas escolhidas levaram em consideração alguns tutorias que encontrei, e comentários
feitos pela comunidade em artigos e também no StackOverflow. Entendo que podem existir opções com melhor
desempenho ou intuição de código, mas por conta do curto espaço de tempo utilizado na construção do
desafio, as bibliotecas que utilizei me ajudaram bastante.

## O que gostaria de melhorar

### Client

No client, eu gostaria de organizar melhor aonde certas constantes ficam localizadas e são setadas. Gostaria
de utilizar, assim como no server, o Dotenv, para setar variáveis de ambiente como a URL para o server.

Também gostaria de configurar o axios, a fim de não precisar fazer requisições utilizando a URL do server hardcoded, 
centralizando a configuração com o server, para facilitar futuras possíveis modificações.

Além disso, não realizei testes, mas gostaria de ter feito.

### Server

Já no server, gostaria de ter feito testes de unidade com as funções do controller e do service, pois os testes
feitos foram apenas de integração, fazendo requisição diretamente para a aplicação.

Para realizar os testes com os controllers, teria que pesquisar melhor e entender como mockar o banco de dados.