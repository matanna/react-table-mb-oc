import { createContext, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ columns, initialElements, children }) => {
  const [elements, setElements] = useState({
    initialElements: initialElements,
    sortOrSearchElements: initialElements,
    elementsDisplayed: initialElements,
    search: "",
    nbElements: 3,
    page: 1,
  });

  return (
    <TableContext.Provider value={{ columns, elements, setElements }}>
      {children}
    </TableContext.Provider>
  );
};
