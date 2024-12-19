import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  amount?: number | null;
  quantity?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
