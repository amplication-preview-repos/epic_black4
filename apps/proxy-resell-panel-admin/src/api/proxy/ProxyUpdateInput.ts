import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type ProxyUpdateInput = {
  country?: string | null;
  ip?: string | null;
  port?: number | null;
  provider?: ProviderWhereUniqueInput | null;
  status?: "Option1" | null;
};
