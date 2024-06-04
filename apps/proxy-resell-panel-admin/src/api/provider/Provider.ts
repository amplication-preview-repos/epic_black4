import { Proxy } from "../proxy/Proxy";

export type Provider = {
  apiKey: string | null;
  apiUrl: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  proxies?: Array<Proxy>;
  updatedAt: Date;
};
