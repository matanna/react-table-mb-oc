"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NumberOfEntriesModule = _interopRequireDefault(require("./NumberOfEntries.module.scss"));

var _TableContext = require("../../context/TableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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