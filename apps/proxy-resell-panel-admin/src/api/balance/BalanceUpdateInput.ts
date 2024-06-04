import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BalanceUpdateInput = {
  balance?: number | null;
  user?: UserWhereUniqueInput | null;
};
