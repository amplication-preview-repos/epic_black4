import { ProxyCreateNestedManyWithoutProvidersInput } from "./ProxyCreateNestedManyWithoutProvidersInput";

export type ProviderCreateInput = {
  apiKey?: string | null;
  apiUrl?: string | null;
  name?: string | null;
  proxies?: ProxyCreateNestedManyWithoutProvidersInput;
};
