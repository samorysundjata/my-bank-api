export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "My Bank API",
    description: "API para gerenciamento de contas bancárias",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  paths: {
    "/account": {
      get: {
        summary: "Lista todas as contas",
        responses: {
          200: {
            description: "Lista de contas",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Account",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Cria uma nova conta",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Account",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Conta criada",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Account",
                },
              },
            },
          },
        },
      },
    },
    "/account/{id}": {
      get: {
        summary: "Obtém uma conta pelo ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
            },
            description: "ID da conta",
          },
        ],
        responses: {
          200: {
            description: "Conta encontrada",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Account",
                },
              },
            },
          },
          404: {
            description: "Conta não encontrada",
          },
        },
      },
      patch: {
        summary: "Atualiza uma conta pelo ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
            },
            description: "ID da conta",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Account",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Conta atualizada",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Account",
                },
              },
            },
          },
          404: {
            description: "Conta não encontrada",
          },
        },
      },
      delete: {
        summary: "Deleta uma conta pelo ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
            },
            description: "ID da conta",
          },
        ],
        responses: {
          204: {
            description: "Conta deletada",
          },
          404: {
            description: "Conta não encontrada",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Account: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          name: {
            type: "string",
            example: "Lucas Gabriel Pereira Moreira",
          },
          balance: {
            type: "number",
            example: 19217506,
          },
        },
      },
    },
  },
};
