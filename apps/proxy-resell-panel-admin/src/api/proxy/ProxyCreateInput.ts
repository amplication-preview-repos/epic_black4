import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type ProxyCreateInput = {
  country?: string | null;
  ip?: string | null;
  port?: number | null;
  provider?: ProviderWhereUniqueInput | null;
  status?: "Option1" | null;
};
