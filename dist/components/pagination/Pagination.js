"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PaginationModule = _interopRequireDefault(require("./Pagination.module.scss"));

var _TableContext = require("../../context/TableContext");

var _paginateData = require("../../utils/paginateData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    return _objectSpread(_objectSpread({}, style.subBorder ? {
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
        setElements(_objectSpread(_objectSpread({}, elements), {}, {
          elementsDisplayed: (0, _paginateData.prevPage)(elements.sortSearchElements, elements.page, elements.nbElements),
          page: elements.page >= 1 && elements.page - 1
        }));
        break;

      case "next":
        setElements(_objectSpread(_objectSpread({}, elements), {}, {
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