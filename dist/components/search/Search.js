"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SearchModule = _interopRequireDefault(require("./Search.module.scss"));

var _TableContext = require("../../context/TableContext");

var _searchData = require("../../utils/searchData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    return _objectSpread(_objectSpread({}, style.subBorder ? {
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
    setElements(_objectSpread(_objectSpread({}, elements), {}, {
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