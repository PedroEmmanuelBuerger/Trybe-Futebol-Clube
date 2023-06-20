
## Trybe Futebol Clube

Trybe Futebol Clube é um projeto desenvolvido como parte do curso "Trybe" para simular o um campeonato de times de futebol brasileiro, a qual tem o sistema de pontuação, sistema de partidas em andamento e finalizadas, sistema de login e sistema de classificação de todos os times no campeonato.

## Funcionalidades
O projeto possui as seguintes funcionalidades:

Criação de novas partidas: é possivel criar novas partidas caso tenha o cargo de admin.
alterar partidas em andamentos: é possivel mudar o corpo de uma partida que esta em andamento.
finalizar partida: é possivel finalizar uma partida em andamento.
visualização de todas a partidas: è possivel visualizar todas a partidas em andamentos e finalizadas.
visualizar a tabela de pontos: é possivel visualizar a tabela de colocação dos times, sendo isso jogos em casa, jogos fora de casa ou todos os jogos.

## Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Typescript
- POO
- Javascript
- Node
- docker
- Sequelize
- Mocha

## Instalação
Para instalar e executar o projeto localmente, siga os passos abaixo:

Clone o repositório para sua máquina local.
git clone git@github.com:PedroEmmanuelBuerger/project-Trybe-Futebol-Clube.git

Instale o Node.js em sua máquina.

Instale as dependências do projeto(tanto as depenencias gerais quanto as dependencias do backend e frontend).
cd project-Trybe-Futebol-Clube

npm install &&  npm run install:apps

Inicie os containers do docker para rodar todos os ambientes.
npm run compose:up

Para acessar o frontend entre em: http://localhost:3000

## Principais Aprendizados
Principal aprendizado foi o uso de todas as ferramentas utilizadas no curso da trybe, sendo elas criação de arquivos Dockerfile e Docker Compose, bibliotecas ORM como o Sequelize, programação orientada a objetos com TypeScript e testes unitários com a biblioteca Mocha, entre outros. Tambem foi uma excelente experiencia para fazer pela primeira vez uma aplicação fullStack tendo frontend e backend na mesma aplicação e build.

## Conclusão
A Aplicação trybe futebol clube traz uma interface intuitiva e manipulavel sobre um campeonato de times, a qual é possivel visualizar qual time esta mandante no campeonato, com a classificação de times, fora ver o resultado das partidas a qual ocasionaram nesta pontuação.
