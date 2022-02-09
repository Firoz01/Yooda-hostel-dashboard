import React from "react";
import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
} from "react-admin";

const StudentEdit = (props) => {
  return (
    <Edit title="Edit A Student Details" {...props}>
      <SimpleForm>
        <TextInput source="fullName" />
        <NumberInput source="roll" />
        <NumberInput source="age" />
        <TextInput source="class" />
        <TextInput source="hall" />
        <TextInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default StudentEdit;
