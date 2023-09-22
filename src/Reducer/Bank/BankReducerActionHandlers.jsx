/* eslint-disable no-unused-vars */
import BankActionTypeEnum from "./BankActionTypeEnum";
import BankStatusEnum from "./BankStatusEnum";
import { initialBankState } from "./index";

const DEFAULT_BALANCE_OPEN_ACCOUNT = 500;
const DEFAULT_DEPOSIT_MONEY = 150;
const DEFAULT_WITHDRAW_MONEY = 50;
const DEFAULT_REQUEST_LOAN = 5000;

const bankReducerActionHandlers = {
  [BankActionTypeEnum.OPEN_ACCOUNT]: (state, action) => {
    return {
      ...state,
      status: BankStatusEnum.ACTIVE_ACCOUNT,
      balance: DEFAULT_BALANCE_OPEN_ACCOUNT,
    };
  },

  [BankActionTypeEnum.DEPOSIT]: (state, action) => {
    const isDebt = state.balance < 0;

    const balanceAfterDeposit = state.balance + DEFAULT_DEPOSIT_MONEY;

    const statusAfterDeposit =
      isDebt && balanceAfterDeposit > 0
        ? BankStatusEnum.ACTIVE_ACCOUNT
        : state.status;

    return {
      ...state,
      balance: balanceAfterDeposit,
      status: statusAfterDeposit,
    };
  },

  [BankActionTypeEnum.WITHDRAW]: (state, action) => {
    return {
      ...state,
      balance:
        state.balance >= 50
          ? state.balance - DEFAULT_WITHDRAW_MONEY
          : state.balance,
    };
  },

  [BankActionTypeEnum.REQUEST_LOAN]: (state, action) => {
    return {
      ...state,
      balance: state.balance + DEFAULT_REQUEST_LOAN,
      status: BankStatusEnum.ACITVE_LOAN,
    };
  },

  [BankActionTypeEnum.PAY_LOAN]: (state, action) => {
    if (state.loan > 0) {
      return state;
    }

    const balanceAfterPayLoan = state.balance - DEFAULT_REQUEST_LOAN;

    return {
      ...state,
      balance: balanceAfterPayLoan,
      status:
        balanceAfterPayLoan > 0 ? BankStatusEnum.ACTIVE_ACCOUNT : state.status,
    };
  },

  [BankActionTypeEnum.CLOSE_ACCOUNT]: (state, action) => {
    if (state.balance !== 0 || state.loan !== 0) {
      return state;
    }

    return {
      ...initialBankState,
    };
  },
};

export default bankReducerActionHandlers;
