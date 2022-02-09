import React from "react";
import { NumberField, Show, SimpleShowLayout, TextField } from "react-admin";
const FoodShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="name" />
        <NumberField source="price" />
      </SimpleShowLayout>
    </Show>
  );
};

export default FoodShow;
