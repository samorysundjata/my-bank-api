import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function createAccount(account) {
  const data = JSON.parse(await readFile(filename));

  account = {
    id: data.nextId++,
    name: account.name,
    balance: account.balance,
  };
  data.accounts.push(account);

  await writeFile(filename, JSON.stringify(data, null, 2));

  return account;
}

async function getAccounts() {
  const data = JSON.parse(await readFile(filename));
  delete data.nextId;
  return data;
}

async function getAccount(id) {
  const data = JSON.parse(await readFile(filename));
  const account = data.accounts.find((account) => account.id === parseInt(id));
  return data;
}

async function deleteAccount(id) {
  const data = JSON.parse(await readFile(filename));
  data.accounts = data.accounts.filter(
    (account) => account.id !== parseInt(id)
  );
  await writeFile(filename, JSON.stringify(data, null, 2));
}

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

async function updateBalance(account) {}

export default {
  createAccount,
  getAccounts,
  getAccount,
  deleteAccount,
  updateAccount,
};
