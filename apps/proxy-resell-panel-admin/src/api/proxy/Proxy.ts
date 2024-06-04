import { Provider } from "../provider/Provider";

export type Proxy = {
  country: string | null;
  createdAt: Date;
  id: string;
  ip: string | null;
  port: number | null;
  provider?: Provider | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
