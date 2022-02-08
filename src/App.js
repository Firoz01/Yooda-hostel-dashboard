import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import FoodList from "./components/Foods/FoodList";

import "./App.css";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:4200")}>
      <Resource name="foods" list={FoodList} />
    </Admin>
  );
}

export default App;
