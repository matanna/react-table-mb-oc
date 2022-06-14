import React, { useContext } from "react";
import PropTypes from "prop-types";
import Style from "./Pagination.module.scss";
import { TableContext } from "../../context/TableContext";

const Pagination = () => {
  const { elements, setElements } = useContext(TableContext);
  const total = elements.initialArray.length;
  const first = elements.nbElements * (elements.page - 1) + 1;
  const last = elements.nbElements * elements.page;

  const handleClick = (e) => {
    switch (e.target.dataset.direction) {
      case "prev":
        setElements({
          ...elements,
          /*elements: , */
          page: elements.page === 1 ? 1 : elements.page - 1,
        });
        console.log(elements);
        break;
      case "next":
        setElements({
          ...elements,
          /*elements: ,*/
          page:
            elements.page === Math.ceil(total / elements.nbElements)
              ? elements.page
              : elements.page + 1,
        });
        console.log(elements);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <p>
        Showing {first} to {total < last ? total : last} of {total}
      </p>
      <div>
        <button type="button" data-direction="prev" onClick={handleClick}>
          Previous
        </button>
        <span className={Style.page}>{elements.page}</span>
        <button type="button" data-direction="next" onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {};

export default Pagination;
