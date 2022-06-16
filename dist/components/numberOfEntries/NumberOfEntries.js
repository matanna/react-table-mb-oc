"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireWildcard(require("react"));

var _NumberOfEntriesModule = _interopRequireDefault(require("./NumberOfEntries.module.scss"));

var _TableContext = require("../../context/TableContext");

/**
 * It takes the initial array, and splices it into a new array, starting at the index of the first element of the current
 * page, and ending at the index of the last element of the current page
 * @returns A select element with the options of 3, 5, 10, 25, 50, and 100.
 */
var NumberOfEntries = function NumberOfEntries() {
  var _useContext = (0, _react.useContext)(_TableContext.TableContext),
      elements = _useContext.elements,
      setElements = _useContext.setElements,
      style = _useContext.style;
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
  };

  var handleChange = function handleChange(e) {
    setElements((0, _objectSpread2.default)((0, _objectSpread2.default)({}, elements), {}, {
      nbElements: parseInt(e.target.value),
      page: 1
    }));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _NumberOfEntriesModule.default.container
  }, /*#__PURE__*/_react.default.createElement("span", null, "Show"), /*#__PURE__*/_react.default.createElement("select", {
    name: "numberDisplayed",
    onChange: handleChange,
    style: buildCss()
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "3"
  }, "3"), /*#__PURE__*/_react.default.createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/_react.default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react.default.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react.default.createElement("option", {
    value: "100"
  }, "100")), /*#__PURE__*/_react.default.createElement("span", null, "entries"));
};

var _default = NumberOfEntries;
exports.default = _default;