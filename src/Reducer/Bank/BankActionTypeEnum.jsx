import Enum from "../../utils/Enum";

const BankActionTypeEnum = Enum({
  OPEN_ACCOUNT: "OPEN_ACCOUNT",
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
  REQUEST_LOAN: " REQUEST_LOAN",
  PAY_LOAN: "PAY_LOAN",
  CLOSE_ACCOUNT: "CLOSE_ACCOUNT",
});

export default BankActionTypeEnum;
