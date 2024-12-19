import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BalanceWhereInput = {
  balance?: FloatNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
