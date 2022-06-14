import React from "react";
import ReactDOM from "react-dom/client";
import { Table } from "./lib";
import { columns, employees } from "./mocks/mocks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Table arrayOfElements={employees} columns={columns} />
  </React.StrictMode>
);
