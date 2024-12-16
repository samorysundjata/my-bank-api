## My Bank API - Node.JS

![Node.js Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![VS Code Badge](https://img.shields.io/badge/Made%20with-VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Descrição

/\*\*

- Esta é uma API Node.js simples que fornece endpoints para realizar operações CRUD (Create, Read, Update, Delete).
-
- Endpoints disponíveis:
-
- `GET /accounts`: Retorna uma lista de todas as contas.
- `GET /accounts/:id`: Retorna uma conta específica pelo ID.
- `POST /accounts`: Cria uma nova conta.
- `PUT /accounts/:id`: Atualiza uma conta existente pelo ID.
- `DELETE /accounts/:id`: Remove uma conta específica pelo ID.
- `PATCH /accounts/:id/balance`: Atualiza o saldo de uma conta específica pelo ID.
-
- Esta API utiliza um banco de dados em memória para armazenar os itens.
-
- @module SimpleAPI
  \*/

## Instalação

```bash
# Clone o repositório
git clone https://github.com/samorysundjata/my-bank-api

# Navegue até o diretório do projeto
cd my-bank-api

# Instale as dependências
npm install

# Inicie o servidor
nodemon index.js
```

O servidor estará rodando de boas em `http://localhost:3000`.
