import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProviderTitle } from "../provider/ProviderTitle";

export const ProxyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
