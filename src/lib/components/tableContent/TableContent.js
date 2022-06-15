import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Style from "./TableContent.module.scss";
import { TableContext } from "../../context/TableContext";
import { Row } from "../index";
import {
  downArrow,
  downArrowActive,
  upArrow,
  upArrowActive,
} from "../../assets";
import { sortData } from "../../utils/sortData";

const TableContent = ({ children }) => {
  // Sort columns in the order chose by the user
  const { columns, elements, setElements } = useContext(TableContext);
  const sortColumns = columns.sort((a, b) => a.order - b.order);

  const [sortActiveIcon, setSortActiveIcon] = useState({
    dataName: "",
    direction: "",
  });

  /**
   * It takes the event, the data, and the columns as arguments, and then it sets the elements to the sorted data
   * @param e - the event object
   */
  const handleClick = (e) => {
    const sortArray = sortData(e, elements.initialElements, columns);
    setElements({
      ...elements,
      initialElements: sortArray,
      elementsDisplayed: [...sortArray].splice(
        (elements.page - 1) * elements.nbElements,
        elements.nbElements
      ),
    });
    setSortActiveIcon({
      dataName: e.target.parentNode.dataset.name,
      direction: e.target.dataset.sort,
    });
  };
  console.log(elements);
  return (
    <table role="grid" className={Style.table}>
      <thead className={Style.thead}>
        <tr role="row">
          {sortColumns.map((e) => (
            <th key={e.data}>
              <div className={Style.titleContent}>
                <span>{e.title}</span>
                <div className={Style.icon} data-name={e.data}>
                  <button type="button" onClick={handleClick} data-sort="desc">
                    <img
                      src={
                        sortActiveIcon.dataName === e.data &&
                        sortActiveIcon.direction === "desc"
                          ? upArrowActive
                          : upArrow
                      }
                      alt="sort button"
                    />
                  </button>
                  <button type="button" onClick={handleClick} data-sort="asc">
                    <img
                      src={
                        sortActiveIcon.dataName === e.data &&
                        sortActiveIcon.direction === "asc"
                          ? downArrowActive
                          : downArrow
                      }
                      alt="sort button"
                    />
                  </button>
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {elements.elementsDisplayed.map((e, i) => (
          <Row key={e.id ? e.id : `element-${i}`} element={e} />
        ))}
      </tbody>
    </table>
  );
};

TableContent.propTypes = {};

export default TableContent;
