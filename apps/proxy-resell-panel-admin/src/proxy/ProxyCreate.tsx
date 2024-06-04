import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProviderTitle } from "../provider/ProviderTitle";

export const ProxyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <TextInput label="ip" source="ip" />
        <NumberInput step={1} label="port" source="port" />
        <ReferenceInput
          source="provider.id"
          reference="Provider"
          label="provider"
        >
          <SelectInput optionText={ProviderTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
