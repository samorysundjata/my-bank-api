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
- - `GET /items`: Retorna uma lista de todos os itens.
- - `GET /items/:id`: Retorna um item específico pelo ID.
- - `POST /items`: Cria um novo item.
- - `PUT /items/:id`: Atualiza um item existente pelo ID.
- - `DELETE /items/:id`: Remove um item específico pelo ID.
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
