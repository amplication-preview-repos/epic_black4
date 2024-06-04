import { User } from "../user/User";

export type Balance = {
  balance: number | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
