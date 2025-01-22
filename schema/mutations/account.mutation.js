import { GraphQLBoolean, GraphQLInt } from "graphql";
import Account from "../types/Account.js";
import AccountInput from "../types/AccountInput.js";
import AccountService from "../../services/account.services.js";

const accountMutation = {
  createAccount: {
    type: Account,
    args: {
      account: {
        name: "account",
        type: AccountInput,
      },
    },
    resolve(_, args) {
      return AccountService.createAccount(args.account);
    },
  },

  deleteAccount: {
    type: GraphQLBoolean,
    args: {
      id: {
        name: "id",
        type: GraphQLInt,
      },
    },
    resolve(_, args) {
      return AccountService.deleteAccount(args.id);
    },
  },

  updateAccount: {
    type: Account,
    args: {
      account: {
        name: "account",
        type: AccountInput,
      },
    },
    resolve(_, args) {
      return AccountService.updateAccount(args.account);
    },
  },
};

export default accountMutation;
