import express from "express";
import winston from "winston";
import accountsRouter from "./routes/accounts.routes.js";
import { promises as fs } from "fs";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./doc.js";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

const { readFile, writeFile } = fs;
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.filename = "accounts.json";
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "my-bank-api.log" }),
  ],
  format: combine(label({ label: "my-bank-api" }), timestamp(), myFormat),
});

const schema = buildSchema(`	
  type Account {
    id: Int,
    name: String,
    balance: Float
    }
  
  type Query {
    accounts: [Account]
    account(id: Int): Account
  }
`);

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/account", accountsRouter);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: null,
    graphiql: true,
  })
);

app.listen(3000, async () => {
  try {
    await readFile(filename);
    logger.info("Servidor rodando de boas na porta 3000!");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    writeFile(global.filename, JSON.stringify(initialJson))
      .then(() => {
        logger.info("Servidor rodando de boas na porta 3000 e arquivo criado!");
      })
      .catch((err) => {
        logger.error(err);
      });
  }
});
