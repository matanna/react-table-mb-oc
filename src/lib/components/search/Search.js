import React, { useContext } from "react";
import PropTypes from "prop-types";
import Style from "./Search.module.scss";
import { TableContext } from "../../context/TableContext";
import { searchData } from "../../utils/searchData";

const Search = (props) => {
  const { elements, setElements, style } = useContext(TableContext);

  const buildCss = () => {
    return {
      ...(style.subBorder
        ? { borderColor: style.subBorder }
        : { borderColor: "#ddd" }),
      ...(style.active
        ? { background: style.active }
        : { background: "#f4f4ff" }),
    };
  };

  const handleChange = (e) => {
    setElements({
      ...elements,
      sortSearchElements: searchData(elements.initialElements, e.target.value),
    });
  };

  return (
    <div className={Style.container}>
      <label htmlFor="search">Search :</label>
      <input
        type="search"
        id="search"
        onChange={handleChange}
        style={buildCss()}
      />
    </div>
  );
};

Search.propTypes = {};

export default Search;
