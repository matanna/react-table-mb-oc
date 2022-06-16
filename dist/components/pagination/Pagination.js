"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireWildcard(require("react"));

var _PaginationModule = _interopRequireDefault(require("./Pagination.module.scss"));

var _TableContext = require("../../context/TableContext");

var _paginateData = require("../../utils/paginateData");

/**
 * It renders a pagination component that displays the current page, the total number of elements, and the number of
 * elements displayed on the current page
 * @returns A function that returns a div with a paragraph and a div with buttons.
 */
var Pagination = function Pagination() {
  var _useContext = (0, _react.useContext)(_TableContext.TableContext),
      elements = _useContext.elements,
      setElements = _useContext.setElements,
      style = _useContext.style;

  var _items = (0, _paginateData.items)(elements.sortSearchElements, elements.page, elements.nbElements),
      first = _items.first,
      last = _items.last,
      total = _items.total;
  /**
   * Function for build css style dynamically in terms of colors are in context style object
   * @returns {{borderColor: (*|string), background: (*|string)}}
   */


  var buildCss = function buildCss() {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style.subBorder ? {
      borderColor: style.subBorder
    } : {
      borderColor: "#ddd"
    }), style.active ? {
      background: style.active
    } : {
      background: "#f4f4ff"
    });
  }; // Display the next or prev page when click


  var handleClick = function handleClick(e) {
    switch (e.target.dataset.direction) {
      case "prev":
        setElements((0, _objectSpread2.default)((0, _objectSpread2.default)({}, elements), {}, {
          elementsDisplayed: (0, _paginateData.prevPage)(elements.sortSearchElements, elements.page, elements.nbElements),
          page: elements.page >= 1 && elements.page - 1
        }));
        break;

      case "next":
        setElements((0, _objectSpread2.default)((0, _objectSpread2.default)({}, elements), {}, {
          elementsDisplayed: (0, _paginateData.nextPage)(elements.sortSearchElements, elements.page, elements.nbElements),
          page: elements.page < Math.ceil(total / elements.nbElements) && elements.page + 1
        }));
        break;

      default:
        return;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _PaginationModule.default.container
  }, /*#__PURE__*/_react.default.createElement("p", null, "Showing ", first, " to ", total < last ? total : last, " of ", total), /*#__PURE__*/_react.default.createElement("div", null, elements.page === 1 ? /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: _PaginationModule.default.disabled
  }, "Previous") : /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "data-direction": "prev",
    onClick: handleClick,
    style: buildCss()
  }, "Previous"), /*#__PURE__*/_react.default.createElement("span", {
    className: _PaginationModule.default.page
  }, elements.page), last >= total ? /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: _PaginationModule.default.disabled
  }, "Next") : /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "data-direction": "next",
    onClick: handleClick,
    style: buildCss()
  }, "Next")));
};

var _default = Pagination;
exports.default = _default;