import Enum from "../../utils/Enum";

const BankStatusEnum = Enum({
  LOADING: "LOADING",
  ERROR: "ERROR",
  ACTIVE_ACCOUNT: "ACTIVE",
  DEACTIVE_ACCOUNT: 'DEACTIVE',
  ACITVE_LOAN: 'ACTIVE_LOAN'
});

export default BankStatusEnum;
