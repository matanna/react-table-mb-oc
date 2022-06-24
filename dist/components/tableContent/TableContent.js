"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TableContentModule = _interopRequireDefault(require("./TableContent.module.scss"));

var _TableContext = require("../../context/TableContext");

var _index = require("../index");

var _assets = require("../../assets");

var _sortData = require("../../utils/sortData");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      _useState2 = _slicedToArray(_useState, 2),
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
      setElements(_objectSpread(_objectSpread({}, elements), {}, {
        sortSearchElements: elements.initialElements
      }));
    } else {
      setElements(_objectSpread(_objectSpread({}, elements), {}, {
        sortSearchElements: (0, _sortData.sortData)(e, elements.sortSearchElements, columns)
      }));
      setSortActiveIcon({
        dataName: e.target.parentNode.dataset.name,
        direction: e.target.dataset.sort
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _TableContentModule.default.container
  }, /*#__PURE__*/_react.default.createElement("table", {
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
  }))));
};

var _default = TableContent;
exports.default = _default;