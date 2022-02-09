import React from "react";
import { Edit, SimpleForm, NumberInput, TextInput } from "react-admin";

const FoodEdit = (props) => {
  return (
    <Edit title="Edit A Food item" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <NumberInput source="price" />
      </SimpleForm>
    </Edit>
  );
};

export default FoodEdit;
