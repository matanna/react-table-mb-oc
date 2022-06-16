import React from "react";
import ReactDOM from "react-dom/client";
import { Table } from "./lib";
import { style, columns, employees } from "./mocks/mocks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Table elements={employees} columns={columns} style={style} />
  </React.StrictMode>
);
