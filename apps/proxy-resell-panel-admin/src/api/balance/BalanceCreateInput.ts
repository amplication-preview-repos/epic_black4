import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BalanceCreateInput = {
  balance?: number | null;
  user?: UserWhereUniqueInput | null;
};
