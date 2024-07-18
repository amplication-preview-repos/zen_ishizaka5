import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="totalAmount" source="totalAmount" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
