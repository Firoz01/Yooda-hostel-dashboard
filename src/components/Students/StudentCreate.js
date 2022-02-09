import React from "react";
import { Create, SimpleForm, NumberInput, TextInput, BooleanInput } from "react-admin";

const StudentCreate = (props) => {
  return (
    <Create title="Create A Student Details" {...props}>
      <SimpleForm>
        <TextInput source="fullName" />
        <NumberInput source="roll" />
        <NumberInput source="age" />
        <TextInput source="class" />
        <TextInput source="hall" />
        <BooleanInput source="isStatus"/>
      </SimpleForm>
    </Create>
  );
};

export default StudentCreate;
