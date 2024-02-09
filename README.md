Trybers and Dragons
Este projeto é uma aplicação de jogos de interpretação de papéis (RPG) desenvolvida com base nos princípios da arquitetura SOLID e de Programação Orientada a Objetos (POO). O projeto é Dockerizado para facilitar o ambiente de desenvolvimento e execução.

Configuração com Docker
Clone este repositório em sua máquina local:

git clone <URL do repositório>
Navegue até o diretório do projeto:

cd trybers_and_dragons
Inicialize o serviço Node.js utilizando Docker Compose:

docker-compose up -d
Este comando criará e inicializará um container chamado trybers_and_dragons.

Para acessar o terminal interativo do container criado, execute o seguinte comando:

docker exec -it trybers_and_dragons bash
Isso abrirá um terminal dentro do container, onde você pode executar os comandos necessários para o desenvolvimento e execução da aplicação.

Execução do Projeto
Dentro do terminal do container, instale as dependências do projeto (caso existam) utilizando o npm:

npm install
Execute os testes do projeto utilizando o seguinte comando:

npm test
Certifique-se de executar todos os comandos relacionados ao desenvolvimento e teste do projeto dentro do terminal do container Docker.

Atualizações de Dependências: Evite executar o comando npm audit fix, pois isso pode atualizar várias dependências do projeto, gerando conflitos com o avaliador. Sempre execute os testes localmente utilizando npm test.
