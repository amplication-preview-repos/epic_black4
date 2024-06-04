import { ProxyUpdateManyWithoutProvidersInput } from "./ProxyUpdateManyWithoutProvidersInput";

export type ProviderUpdateInput = {
  apiKey?: string | null;
  apiUrl?: string | null;
  name?: string | null;
  proxies?: ProxyUpdateManyWithoutProvidersInput;
};
