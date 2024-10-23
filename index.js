import express from "express";
import accountsRouter from "./routes/accounts.js";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

global.filename = "accounts.json";

const app = express();
app.use(express.json());

app.use("/account", accountsRouter);

app.listen(3000, async () => {
  try {
    await readFile(filename);
    console.log("Servidor rodando de boas na porta 3000!");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    writeFile(global.filename, JSON.stringify(initialJson))
      .then(() => {
        console.log("Servidor rodando de boas na porta 3000 e arquivo criado!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
