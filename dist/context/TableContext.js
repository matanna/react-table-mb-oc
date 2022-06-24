"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableProvider = exports.TableContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _paginateData = require("../utils/paginateData");

var _propTypes = _interopRequireDefault(require("prop-types"));

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
      _useState2 = _slicedToArray(_useState, 2),
      elements = _useState2[0],
      setElements = _useState2[1];
  /**
   * For calculated and displayed elements in the table in terms of page and nbElements properties
   */


  (0, _react.useEffect)(function () {
    setElements(_objectSpread(_objectSpread({}, elements), {}, {
      elementsDisplayed: (0, _paginateData.currentPage)(elements.sortSearchElements, elements.page, elements.nbElements)
    }));
  }, [elements.sortSearchElements, elements.nbElements, elements.page]);
  return /*#__PURE__*/_react.default.createElement(TableContext.Provider, {
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