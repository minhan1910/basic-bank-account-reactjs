import BankStatusEnum from "./BankStatusEnum";

import bankReducerActionHandlers from "./BankReducerActionHandlers";
import createReducer from "../ReducerGenerator";

export const initialBankState = {
  balance: 0,
  loan: 0,
  status: BankStatusEnum.DEACTIVE_ACCOUNT,
};

const bankReducer = createReducer(initialBankState, bankReducerActionHandlers);

export default bankReducer;
