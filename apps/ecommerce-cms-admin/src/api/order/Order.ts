import { JsonValue } from "type-fest";
import { Customer } from "../customer/Customer";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number | null;
  status?: "Option1" | null;
  items: JsonValue;
  customer?: Customer | null;
};
