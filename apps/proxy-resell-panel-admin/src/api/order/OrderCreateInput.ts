import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  amount?: number | null;
  quantity?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
