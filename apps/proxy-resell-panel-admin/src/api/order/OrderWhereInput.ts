import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  quantity?: IntNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
