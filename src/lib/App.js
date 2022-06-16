import PropTypes from "prop-types";
import React from "react";
import Style from "./App.module.scss";
import {
  NumberOfEntries,
  Pagination,
  TableContent,
  Search,
} from "./components";
import { TableProvider } from "./context/TableContext";

/**
 * It renders a table with a search, sort, and pagination system
 * @returns A table with a search, sort, and pagination system.
 */
const App = ({ elements, columns, style }) => {
  return (
    <TableProvider
      columns={columns}
      initialElements={elements}
      style={style ? style : {}}
    >
      <div className={Style.app}>
        <div className={Style.header}>
          <NumberOfEntries />
          <Search />
        </div>
        <TableContent />
        <Pagination />
      </div>
    </TableProvider>
  );
};

App.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.exact({
    border: PropTypes.string,
    subBorder: PropTypes.string,
    bgOddRow: PropTypes.string,
    bgEvenRow: PropTypes.string,
    active: PropTypes.string,
  }),
};

export default App;
