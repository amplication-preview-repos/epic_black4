import { Proxy as TProxy } from "../api/proxy/Proxy";

export const PROXY_TITLE_FIELD = "country";

export const ProxyTitle = (record: TProxy): string => {
  return record.country?.toString() || String(record.id);
};
