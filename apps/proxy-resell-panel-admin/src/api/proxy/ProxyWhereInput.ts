import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type ProxyWhereInput = {
  country?: StringNullableFilter;
  id?: StringFilter;
  ip?: StringNullableFilter;
  port?: IntNullableFilter;
  provider?: ProviderWhereUniqueInput;
  status?: "Option1";
};
