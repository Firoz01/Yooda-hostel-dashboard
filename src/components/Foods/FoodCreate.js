import React from 'react';
import { Create, SimpleForm, NumberInput, TextInput, CreateButton } from 'react-admin';

const FoodCreate = (props) => {
    return (
      <Create title="Create A Food item" {...props}>
        <SimpleForm>
          <TextInput source="name" />
          <NumberInput source="price" />
          <CreateButton basePath="/foods" />
        </SimpleForm>
      </Create>
    );
};

export default FoodCreate;