import { SortOrder } from "../../util/SortOrder";

export type ProxyOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ip?: SortOrder;
  port?: SortOrder;
  providerId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
