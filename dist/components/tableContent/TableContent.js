"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _TableContentModule = _interopRequireDefault(require("./TableContent.module.scss"));

var _TableContext = require("../../context/TableContext");

var _index = require("../index");

var _assets = require("../../assets");

var _sortData = require("../../utils/sortData");

var _lodash = require("lodash");

/**
 * It renders the table's content, and it sorts the data when the user clicks on the sort buttons
 * @returns A table with the columns and rows that the user has chosen.
 */
var TableContent = function TableContent() {
  // Sort columns in the order chose by the user
  var _useContext = (0, _react.useContext)(_TableContext.TableContext),
      columns = _useContext.columns,
      elements = _useContext.elements,
      setElements = _useContext.setElements,
      style = _useContext.style;

  var sortColumns = columns.sort(function (a, b) {
    return a.order - b.order;
  }); // State for highlighted the good sort icon which is active

  var _useState = (0, _react.useState)({
    dataName: "",
    direction: ""
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      sortActiveIcon = _useState2[0],
      setSortActiveIcon = _useState2[1];
  /**
   * It takes the event, the array of elements to sort, and the columns to sort by, and returns a sorted array of elements
   * @param e - the event object
   */


  var handleClick = function handleClick(e) {
    // Create sortIcon object for check if the icon is already active (sort is already active)
    var sortIcon = {
      dataName: e.target.parentNode.dataset.name,
      direction: e.target.dataset.sort
    }; // If is equal, disable sort, if not, active sort

    if ((0, _lodash.isEqual)(sortIcon, sortActiveIcon)) {
      setSortActiveIcon({
        dataName: "",
        direction: ""
      });
      setElements((0, _objectSpread2.default)((0, _objectSpread2.default)({}, elements), {}, {
        sortSearchElements: elements.initialElements
      }));
    } else {
      setElements((0, _objectSpread2.default)((0, _objectSpread2.default)({}, elements), {}, {
        sortSearchElements: (0, _sortData.sortData)(e, elements.sortSearchElements, columns)
      }));
      setSortActiveIcon({
        dataName: e.target.parentNode.dataset.name,
        direction: e.target.dataset.sort
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement("table", {
    role: "grid",
    className: _TableContentModule.default.table
  }, /*#__PURE__*/_react.default.createElement("thead", {
    style: style.border ? {
      borderColor: style.border
    } : {}
  }, /*#__PURE__*/_react.default.createElement("tr", {
    role: "row"
  }, sortColumns.map(function (e) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: e.data
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _TableContentModule.default.titleContent
    }, /*#__PURE__*/_react.default.createElement("span", null, e.title), /*#__PURE__*/_react.default.createElement("div", {
      className: _TableContentModule.default.icon,
      "data-name": e.data
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      onClick: handleClick,
      "data-sort": "desc"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: sortActiveIcon.dataName === e.data && sortActiveIcon.direction === "desc" ? _assets.upArrowActive : _assets.upArrow,
      alt: "sort button"
    })), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      onClick: handleClick,
      "data-sort": "asc"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: sortActiveIcon.dataName === e.data && sortActiveIcon.direction === "asc" ? _assets.downArrowActive : _assets.downArrow,
      alt: "sort button"
    })))));
  }))), /*#__PURE__*/_react.default.createElement("tbody", {
    style: style.border ? {
      borderColor: style.border
    } : {}
  }, elements.elementsDisplayed.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_index.Row, {
      key: e.id ? e.id : "element-".concat(i),
      element: e,
      oddEven: i % 2 === 0 ? "even" : "odd"
    });
  })));
};

var _default = TableContent;
exports.default = _default;