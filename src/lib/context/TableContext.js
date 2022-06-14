import { createContext, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ columns, arrayOfElements, children }) => {
  const [elements, setElements] = useState({
    initialArray: arrayOfElements,
    elements: arrayOfElements,
    nbElements: 10,
    page: 1,
  });

  return (
    <TableContext.Provider value={{ columns, elements, setElements }}>
      {children}
    </TableContext.Provider>
  );
};
