import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
