import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  NumberField,
} from "react-admin";
const StudentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="fullName" />
        <NumberField source="roll" />
        <NumberField source="age" />
        <TextField source="class" />
        <TextField source="hall" />
        <TextField source="status" />
        <EditButton basePath="/students" />
        <DeleteButton basePath="/students" />
      </Datagrid>
    </List>
  );
};

export default StudentList;
