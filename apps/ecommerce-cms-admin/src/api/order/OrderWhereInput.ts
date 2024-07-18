import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  totalAmount?: FloatNullableFilter;
  status?: "Option1";
  items?: JsonFilter;
  customer?: CustomerWhereUniqueInput;
};
