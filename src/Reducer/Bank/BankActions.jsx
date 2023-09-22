import BankActionTypeEnum from "./BankActionTypeEnum";

export const openAccountAction = () => ({
  type: BankActionTypeEnum.OPEN_ACCOUNT,
});

export const depositAction = () => ({
  type: BankActionTypeEnum.DEPOSIT,
});

export const withdrawAction = () => ({
  type: BankActionTypeEnum.WITHDRAW,
});

export const requestLoanAction = () => ({
  type: BankActionTypeEnum.REQUEST_LOAN,
});

export const payLoanAction = () => ({
  type: BankActionTypeEnum.PAY_LOAN,
});

export const closeAccountAction = () => ({
  type: BankActionTypeEnum.CLOSE_ACCOUNT,
});
