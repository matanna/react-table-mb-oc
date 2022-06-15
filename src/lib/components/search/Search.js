import React, { useContext } from "react";
import PropTypes from "prop-types";
import Style from "./Search.module.scss";
import { TableContext } from "../../context/TableContext";
import { searchData } from "../../utils/searchData";

const Search = (props) => {
  const { elements, setElements } = useContext(TableContext);

  const handleChange = (e) => {
    setElements({
      ...elements,
      sortSearchElements: searchData(elements.initialElements, e.target.value),
    });
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="search" id="search" onChange={handleChange} />
    </div>
  );
};

Search.propTypes = {};

export default Search;
