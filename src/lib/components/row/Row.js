import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { columns } from "../../../mocks/mocks";
import { TableContext } from "../../context/TableContext";

/**
 * It renders a table row of data
 * @returns A table row with the data from the element object.
 */
const Row = ({ element, oddEven }) => {
  const { style } = useContext(TableContext);
  const [bgRow, setBgRow] = useState({
    odd: "",
    even: "",
  });

  // If context style object exist, then apply its style
  useEffect(() => {
    setBgRow({
      odd: style.bgOddRow ? style.bgOddRow : "#f9f9f9",
      even: style.bgEvenRow ? style.bgEvenRow : "#ffffff",
    });
  }, []);

  // On mouse over
  const handleHover = (e) => {
    return style.active
      ? (e.target.parentNode.style.background = style.active)
      : (e.target.parentNode.style.background = "#f4f4ff");
  };

  // On mouse leave
  const handleLeave = (e) => {
    if (oddEven === "odd") {
      return (e.target.parentNode.style.background = bgRow.odd);
    }
    if (oddEven === "even") {
      return (e.target.parentNode.style.background = bgRow.even);
    }
  };

  /**
   * Function for build css style dynamically in terms of colors are in context style object
   * @returns {{borderColor: (*|string), background: (*|string)}}
   */
  const buildCss = () => {
    const subBorder = style.subBorder
      ? { borderColor: style.subBorder }
      : { borderColor: "#ddd" };
    if (oddEven === "odd") {
      return {
        ...subBorder,
        ...{ background: bgRow.odd },
      };
    }
    if (oddEven === "even") {
      return {
        ...subBorder,
        ...{ background: bgRow.even },
      };
    }
  };

  return (
    <tr
      role="row"
      style={buildCss()}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {columns.map((e, i) => (
        <td key={`columns-${i}`}>{element[e.data]}</td>
      ))}
    </tr>
  );
};

Row.propTypes = {
  element: PropTypes.object.isRequired,
  oddEven: PropTypes.oneOf(["odd", "even"]).isRequired,
};

export default Row;
