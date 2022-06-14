import React from "react";
import PropTypes from "prop-types";
import Style from "./Row.module.scss";
import { columns } from "../../../mocks/mocks";

const Row = ({ element }) => {
  return (
    <tr role="row">
      {columns.map((e, i) => (
        <td key={`columns-${i}`}>{element[e.data]}</td>
      ))}
    </tr>
  );
};

Row.propTypes = {};

export default Row;
