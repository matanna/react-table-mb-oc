"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _AppModule = _interopRequireDefault(require("./App.module.scss"));

var _components = require("./components");

var _TableContext = require("./context/TableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * It renders a table with a search, sort, and pagination system
 * @returns A table with a search, sort, and pagination system.
 */
var App = function App(_ref) {
  var elements = _ref.elements,
      columns = _ref.columns,
      style = _ref.style;
  return /*#__PURE__*/_react.default.createElement(_TableContext.TableProvider, {
    columns: columns,
    initialElements: elements,
    style: style ? style : {}
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _AppModule.default.app
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _AppModule.default.header
  }, /*#__PURE__*/_react.default.createElement(_components.NumberOfEntries, null), /*#__PURE__*/_react.default.createElement(_components.Search, null)), /*#__PURE__*/_react.default.createElement(_components.TableContent, null), /*#__PURE__*/_react.default.createElement(_components.Pagination, null)));
};

App.propTypes = {
  elements: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  style: _propTypes.default.exact({
    border: _propTypes.default.string,
    subBorder: _propTypes.default.string,
    bgOddRow: _propTypes.default.string,
    bgEvenRow: _propTypes.default.string,
    active: _propTypes.default.string
  })
};
var _default = App;
exports.default = _default;