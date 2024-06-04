import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProxyTitle } from "../proxy/ProxyTitle";

export const ProviderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiKey" source="apiKey" />
        <TextInput label="apiURL" source="apiUrl" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="proxies"
          reference="Proxy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProxyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
