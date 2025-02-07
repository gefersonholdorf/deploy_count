## 🧑‍💻 Deploy Count
Deploy Count é um projeto de estudo que permite realizar o registro do deploy feito em sistemas, utilizando tecnologias modernas para facilitar o desenvolvimento 
e a escalabilidade. O projeto foi criado para aprender a configurar e trabalhar com Node.js, TypeScript, Prisma, Zod, MySQL, Docker e outras ferramentas para criar 
um ambiente de desenvolvimento robusto.

## Tecnologias Utilizadas
  - Node.js: Ambiente de execução para JavaScript no backend.
  - TypeScript: Superconjunto do JavaScript que adiciona tipagem estática, aumentando a produtividade e a manutenção do código.
  - Prisma: ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados MySQL.
  - Zod: Biblioteca de validação de dados em TypeScript, garantindo que as entradas sejam válidas antes de serem processadas.
  - MySQL: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar as informações de contagem de implantações.
  - Docker: Ferramenta para criar contêineres, garantindo que o ambiente de desenvolvimento seja idêntico ao ambiente de produção.

## Funcionalidades
  - Inserção de Pessoas
  - Inserção de Sistemas
  - Inserção de Deploys realizados
  - Visualização dos deploys cadastrados

## Arquivo .env
```bash
# Variáveis de ambiente para configuração do Prisma
DATABASE_URL="mysql://root:senha123rte@db:3306/deploy_count"

# Porta do servidor
PORT=3399
```

## Requisitos para instalação

- Docker
- Docker Compose

## Instalação
```bash
git clone https://github.com/gefersonholdorf/deploy_count.git
cd deploy_count
docker-compose up -d --build
```

## Uso
Acesse o projeto localmente em http://localhost:3399 após iniciar o servidor.
