/**
 * This file create a context for make accessible the state everywhere in the application
 * and dispatch it with a component Provider
 */
import React from "react";
import { createContext, useState } from "react";
import { currentPage } from "../utils/paginateData";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const TableContext = createContext();

/**
 * It takes in the columns, the initial elements, the style and the children, and it returns a TableContext.Provider with
 * the columns, the elements, the setElements function, the style and the children
 * @returns The TableProvider is being returned.
 */
export const TableProvider = ({
  columns,
  initialElements,
  style,
  children,
}) => {
  // Global state for all the application
  const [elements, setElements] = useState({
    initialElements: initialElements,
    sortSearchElements: initialElements,
    elementsDisplayed: [],
    nbElements: 3,
    page: 1,
  });

  /**
   * For calculated and displayed elements in the table in terms of page and nbElements properties
   */
  useEffect(() => {
    setElements({
      ...elements,
      elementsDisplayed: currentPage(
        elements.sortSearchElements,
        elements.page,
        elements.nbElements
      ),
    });
  }, [elements.sortSearchElements, elements.nbElements, elements.page]);

  return (
    <TableContext.Provider value={{ columns, elements, setElements, style }}>
      {children}
    </TableContext.Provider>
  );
};

TableProvider.prototype = {
  initialElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.exact({
    border: PropTypes.string,
    subBorder: PropTypes.string,
    bgOddRow: PropTypes.string,
    bgEvenRow: PropTypes.string,
    active: PropTypes.string,
  }).isRequired,
};
