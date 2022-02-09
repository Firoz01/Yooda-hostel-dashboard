import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-json-server";
import FoodList from "./components/Foods/FoodList";
import FoodEdit from "./components/Foods/FoodEdit";
import FoodCreate from "./components/Foods/FoodCreate";
import StudentList from "./components/Students/StudentList";
import { People, Fastfood } from "@material-ui/icons";
import "./App.css";
import StudentCreate from "./components/Students/StudentCreate";
import StudentEdit from "./components/Students/StudentEdit";

function App() {
  return (
    <>
      <Admin
        title="My Custom Admin"
        dataProvider={restProvider("http://localhost:4200")}
      >
        <Resource
          name="foods"
          list={FoodList}
          edit={FoodEdit}
          create={FoodCreate}
          icon={Fastfood}
        />
        <Resource
          name="students"
          list={StudentList}
          create={StudentCreate}
          edit={StudentEdit}
          icon={People}
        />
      </Admin>
    </>
  );
}

export default App;
