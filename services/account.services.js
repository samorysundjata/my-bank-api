import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

import AccountRepository from "../repositories/account.repository.js";

async function createAccount(account) {
  return await AccountRepository.insertAccount(account);
}

async function getAccounts() {
  return await AccountRepository.getAccounts();
}

async function getAccount(id) {
  return await AccountRepository.getAccount(id);
}

async function deleteAccount(id) {}

async function updateAccount(account) {
  const data = JSON.parse(await readFile(global.filename));
  const index = data.accounts.findIndex((a) => a.id === account.id);

  if (index === -1) {
    throw new Error("Registro não encontrado");
  }

  data.accounts[index].name = account.name;
  data.accounts[index].balance = account.balance;
  await writeFile(global.filename, JSON.stringify(data, null, 2));

  return data.accounts[index];
}

async function updateBalance(account) {
  const data = JSON.parse(await readFile(global.filename));
  const index = data.accounts.findIndex((a) => a.id === account.id);

  if (index === -1) {
    throw new Error("Registro não encontrado");
  }

  data.accounts[index].balance = account.balance;
  await writeFile(global.filename, JSON.stringify(data, null, 2));

  return data.accounts[index];
}

export default {
  createAccount,
  getAccounts,
  getAccount,
  deleteAccount,
  updateAccount,
  updateBalance,
};
