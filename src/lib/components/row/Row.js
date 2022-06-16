import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Style from "./Row.module.scss";
import { columns } from "../../../mocks/mocks";
import { TableContext } from "../../context/TableContext";

const Row = ({ element, oddEven }) => {
  const { style } = useContext(TableContext);
  const [bgRow, setBgRow] = useState({
    odd: "",
    even: "",
  });

  useEffect(() => {
    setBgRow({
      odd: style.bgOddRow ? style.bgOddRow : "#f9f9f9",
      even: style.bgEvenRow ? style.bgEvenRow : "#ffffff",
    });
  }, []);

  const handleHover = (e) => {
    return style.active
      ? (e.target.parentNode.style.background = style.active)
      : (e.target.parentNode.style.background = "#f4f4ff");
  };

  const handleLeave = (e) => {
    if (oddEven === "odd") {
      return (e.target.parentNode.style.background = bgRow.odd);
    }
    if (oddEven === "even") {
      return (e.target.parentNode.style.background = bgRow.even);
    }
  };

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

Row.propTypes = {};

export default Row;
