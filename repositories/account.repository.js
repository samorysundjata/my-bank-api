import { promises as fs } from "fs";
import { get } from "http";

const { readFile, writeFile } = fs;

async function getAccounts() {
  const data = JSON.parse(await readFile(filename));
  return data.accounts;
}

async function getAccount(id) {
  const accounts = await getAccounts();
  const account = accounts.find((account) => account.id === parseInt(id));
  if (account) {
    return account;
  } else {
    throw new Error("Registro não encontrado");
  }
}

async function insertAccount(account) {
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

export default {
  getAccounts,
  getAccount,
  insertAccount,
  deleteAccount,
  updateAccount,
};
