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

var _TableContext = require("../../context/TableContext");

/**
 * It renders a table row of data
 * @returns A table row with the data from the element object.
 */
var Row = function Row(_ref) {
  var element = _ref.element,
      oddEven = _ref.oddEven;

  var _useContext = (0, _react.useContext)(_TableContext.TableContext),
      columns = _useContext.columns,
      style = _useContext.style;

  var _useState = (0, _react.useState)({
    odd: "",
    even: ""
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      bgRow = _useState2[0],
      setBgRow = _useState2[1]; // If context style object exist, then apply its style


  (0, _react.useEffect)(function () {
    setBgRow({
      odd: style.bgOddRow ? style.bgOddRow : "#f9f9f9",
      even: style.bgEvenRow ? style.bgEvenRow : "#ffffff"
    });
  }, []); // On mouse over

  var handleHover = function handleHover(e) {
    return style.active ? e.target.parentNode.style.background = style.active : e.target.parentNode.style.background = "#f4f4ff";
  }; // On mouse leave


  var handleLeave = function handleLeave(e) {
    if (oddEven === "odd") {
      return e.target.parentNode.style.background = bgRow.odd;
    }

    if (oddEven === "even") {
      return e.target.parentNode.style.background = bgRow.even;
    }
  };
  /**
   * Function for build css style dynamically in terms of colors are in context style object
   * @returns {{borderColor: (*|string), background: (*|string)}}
   */


  var buildCss = function buildCss() {
    var subBorder = style.subBorder ? {
      borderColor: style.subBorder
    } : {
      borderColor: "#ddd"
    };

    if (oddEven === "odd") {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, subBorder), {
        background: bgRow.odd
      });
    }

    if (oddEven === "even") {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, subBorder), {
        background: bgRow.even
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement("tr", {
    role: "row",
    style: buildCss(),
    onMouseEnter: handleHover,
    onMouseLeave: handleLeave
  }, columns.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement("td", {
      key: "columns-".concat(i)
    }, element[e.data]);
  }));
};

var _default = Row;
exports.default = _default;