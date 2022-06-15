import React, { useContext } from "react";
import PropTypes from "prop-types";
import Style from "./NumberOfEntries.module.scss";
import { TableContext } from "../../context/TableContext";

/**
 * It takes the initial array, and splices it into a new array, starting at the index of the first element of the current
 * page, and ending at the index of the last element of the current page
 * @returns A select element with the options of 2, 10, 25, 50, and 100.
 */
const NumberOfEntries = () => {
  const { elements, setElements } = useContext(TableContext);

  const handleChange = (e) => {
    setElements({
      ...elements,
      nbElements: parseInt(e.target.value),
      page: 1,
    });
  };

  return (
    <div>
      <span>Show </span>
      <select name="numberDisplayed" onChange={handleChange}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span> entries</span>
    </div>
  );
};

NumberOfEntries.propTypes = {};

export default NumberOfEntries;
