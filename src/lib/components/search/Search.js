import React, { useContext } from "react";
import Style from "./Search.module.scss";
import { TableContext } from "../../context/TableContext";
import { searchData } from "../../utils/searchData";

/**
 * It's a function that returns a div that contains a label and an input
 * @returns A React component that renders a search bar.
 */
const Search = () => {
  const { elements, setElements, style } = useContext(TableContext);

  /**
   * Function for build css style dynamically in terms of colors are in context style object
   * @returns {{borderColor: (*|string), background: (*|string)}}
   */
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

export default Search;
