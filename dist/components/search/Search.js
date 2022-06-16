"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireWildcard(require("react"));

var _SearchModule = _interopRequireDefault(require("./Search.module.scss"));

var _TableContext = require("../../context/TableContext");

var _searchData = require("../../utils/searchData");

/**
 * It's a function that returns a div that contains a label and an input
 * @returns A React component that renders a search bar.
 */
var Search = function Search() {
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
      sortSearchElements: (0, _searchData.searchData)(elements.initialElements, e.target.value)
    }));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _SearchModule.default.container
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "search"
  }, "Search :"), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    id: "search",
    onChange: handleChange,
    style: buildCss()
  }));
};

var _default = Search;
exports.default = _default;