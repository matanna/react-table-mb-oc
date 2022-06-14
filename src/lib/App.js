import PropTypes from "prop-types";
import Style from "./App.module.scss";
import {
  NumberOfEntries,
  Pagination,
  TableContent,
  Row,
  Search,
} from "./components";
import { TableProvider } from "./context/TableContext";

const App = ({ arrayOfElements, columns }) => {
  return (
    <TableProvider columns={columns} arrayOfElements={arrayOfElements}>
      <div>
        <div className={Style.header}>
          <NumberOfEntries />
          <Search />
        </div>
        <TableContent>
          <Row />
        </TableContent>
        <Pagination />
      </div>
    </TableProvider>
  );
};

App.propTypes = {};

export default App;
