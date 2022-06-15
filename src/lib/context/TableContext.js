import { createContext, useState } from "react";
import { currentPage } from "../utils/paginateData";
import { useEffect } from "react";

export const TableContext = createContext();

export const TableProvider = ({ columns, initialElements, children }) => {
  const [elements, setElements] = useState({
    initialElements: initialElements,
    sortSearchElements: initialElements,
    elementsDisplayed: [],
    nbElements: 3,
    page: 1,
  });

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
    <TableContext.Provider value={{ columns, elements, setElements }}>
      {children}
    </TableContext.Provider>
  );
};
