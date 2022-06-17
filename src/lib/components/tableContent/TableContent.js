import React, { useContext, useState } from "react";
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
import { isEqual } from "lodash";

/**
 * It renders the table's content, and it sorts the data when the user clicks on the sort buttons
 * @returns A table with the columns and rows that the user has chosen.
 */
const TableContent = () => {
  // Sort columns in the order chose by the user
  const { columns, elements, setElements, style } = useContext(TableContext);
  const sortColumns = columns.sort((a, b) => a.order - b.order);

  // State for highlighted the good sort icon which is active
  const [sortActiveIcon, setSortActiveIcon] = useState({
    dataName: "",
    direction: "",
  });

  /**
   * It takes the event, the array of elements to sort, and the columns to sort by, and returns a sorted array of elements
   * @param e - the event object
   */
  const handleClick = (e) => {
    // Create sortIcon object for check if the icon is already active (sort is already active)
    const sortIcon = {
      dataName: e.target.parentNode.dataset.name,
      direction: e.target.dataset.sort,
    };
    // If is equal, disable sort, if not, active sort
    if (isEqual(sortIcon, sortActiveIcon)) {
      setSortActiveIcon({ dataName: "", direction: "" });
      setElements({
        ...elements,
        sortSearchElements: elements.initialElements,
      });
    } else {
      setElements({
        ...elements,
        sortSearchElements: sortData(e, elements.sortSearchElements, columns),
      });
      setSortActiveIcon({
        dataName: e.target.parentNode.dataset.name,
        direction: e.target.dataset.sort,
      });
    }
  };

  return (
    <table role="grid" className={Style.table}>
      <thead style={style.border ? { borderColor: style.border } : {}}>
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
      <tbody style={style.border ? { borderColor: style.border } : {}}>
        {elements.elementsDisplayed.map((e, i) => (
          <Row
            key={e.id ? e.id : `element-${i}`}
            element={e}
            oddEven={i % 2 === 0 ? "even" : "odd"}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableContent;
