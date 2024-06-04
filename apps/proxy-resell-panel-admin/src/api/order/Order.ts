import { User } from "../user/User";

export type Order = {
  amount: number | null;
  createdAt: Date;
  id: string;
  quantity: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
