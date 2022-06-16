"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableProvider = exports.TableContext = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = require("react");

var _paginateData = require("../utils/paginateData");

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * This file create a context for make accessible the state everywhere in the application
 * and dispatch it with a component Provider
 */
var TableContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * It takes in the columns, the initial elements, the style and the children, and it returns a TableContext.Provider with
 * the columns, the elements, the setElements function, the style and the children
 * @returns The TableProvider is being returned.
 */

exports.TableContext = TableContext;

var TableProvider = function TableProvider(_ref) {
  var columns = _ref.columns,
      initialElements = _ref.initialElements,
      style = _ref.style,
      children = _ref.children;

  // Global state for all the application
  var _useState = (0, _react.useState)({
    initialElements: initialElements,
    sortSearchElements: initialElements,
    elementsDisplayed: [],
    nbElements: 3,
    page: 1
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      elements = _useState2[0],
      setElements = _useState2[1];
  /**
   * For calculated and displayed elements in the table in terms of page and nbElements properties
   */


  (0, _react.useEffect)(function () {
    setElements((0, _objectSpread2.default)((0, _objectSpread2.default)({}, elements), {}, {
      elementsDisplayed: (0, _paginateData.currentPage)(elements.sortSearchElements, elements.page, elements.nbElements)
    }));
  }, [elements.sortSearchElements, elements.nbElements, elements.page]);
  return /*#__PURE__*/React.createElement(TableContext.Provider, {
    value: {
      columns: columns,
      elements: elements,
      setElements: setElements,
      style: style
    }
  }, children);
};

exports.TableProvider = TableProvider;
TableProvider.prototype = {
  initialElements: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  style: _propTypes.default.exact({
    border: _propTypes.default.string,
    subBorder: _propTypes.default.string,
    bgOddRow: _propTypes.default.string,
    bgEvenRow: _propTypes.default.string,
    active: _propTypes.default.string
  }).isRequired
};