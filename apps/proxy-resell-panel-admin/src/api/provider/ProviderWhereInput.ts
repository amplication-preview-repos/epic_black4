import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProxyListRelationFilter } from "../proxy/ProxyListRelationFilter";

export type ProviderWhereInput = {
  apiKey?: StringNullableFilter;
  apiUrl?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  proxies?: ProxyListRelationFilter;
};
