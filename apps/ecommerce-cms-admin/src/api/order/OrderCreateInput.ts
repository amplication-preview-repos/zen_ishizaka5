import { InputJsonValue } from "../../types";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  totalAmount?: number | null;
  status?: "Option1" | null;
  items?: InputJsonValue;
  customer?: CustomerWhereUniqueInput | null;
};
