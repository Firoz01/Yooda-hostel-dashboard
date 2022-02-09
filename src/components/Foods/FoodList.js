import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";
const FoodList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="name" />
        <TextField source="price" />
        <EditButton basePath="/foods" />
        <DeleteButton basePath="/foods" />
      </Datagrid>
    </List>
  );
};

export default FoodList;
