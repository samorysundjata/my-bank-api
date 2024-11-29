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

export default {
  createAccount,
};
