import React, { useContext } from "react";
import PropTypes from "prop-types";
import Style from "./Pagination.module.scss";
import { TableContext } from "../../context/TableContext";
import { items, nextPage, prevPage } from "../../utils/paginateData";

const Pagination = () => {
  const { elements, setElements } = useContext(TableContext);
  const { first, last, total } = items(
    elements.sortSearchElements,
    elements.page,
    elements.nbElements
  );

  const handleClick = (e) => {
    switch (e.target.dataset.direction) {
      case "prev":
        setElements({
          ...elements,
          elementsDisplayed: prevPage(
            elements.sortSearchElements,
            elements.page,
            elements.nbElements
          ),
          page: elements.page >= 1 && elements.page - 1,
        });
        break;
      case "next":
        setElements({
          ...elements,
          elementsDisplayed: nextPage(
            elements.sortSearchElements,
            elements.page,
            elements.nbElements
          ),
          page:
            elements.page < Math.ceil(total / elements.nbElements) &&
            elements.page + 1,
        });
        break;
      default:
        return;
    }
  };
  return (
    <div className={Style.container}>
      <p>
        Showing {first} to {total < last ? total : last} of {total}
      </p>
      <div>
        {elements.page === 1 ? null : (
          <button type="button" data-direction="prev" onClick={handleClick}>
            Previous
          </button>
        )}
        <span className={Style.page}>{elements.page}</span>
        {last >= total ? null : (
          <button type="button" data-direction="next" onClick={handleClick}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

Pagination.propTypes = {};

export default Pagination;
