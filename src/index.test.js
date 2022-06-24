import App from "./lib/App";
import { columns, employees } from "./mocks/mocks";
import { render } from "@testing-library/react";
import { Table } from "./lib";

it("test", () => {
  const screen = render(<Table columns={columns} elements={employees} />);
});
