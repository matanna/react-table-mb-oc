import { createContext, useState } from "react";
import { currentPage } from "../utils/paginateData";
import { useEffect } from "react";

export const TableContext = createContext();

export const TableProvider = ({
  columns,
  initialElements,
  style,
  children,
}) => {
  const [elements, setElements] = useState({
    initialElements: initialElements,
    sortSearchElements: initialElements,
    elementsDisplayed: [],
    nbElements: 3,
    page: 1,
  });
  console.log(style);
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
