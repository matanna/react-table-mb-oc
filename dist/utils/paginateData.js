"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prevPage = exports.nextPage = exports.items = exports.currentPage = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var currentPage = function currentPage(elements, page, elementsPerPage) {
  var values = (0, _toConsumableArray2.default)(elements).splice((page - 1) * elementsPerPage, elementsPerPage);
  return values.length === 0 ? (0, _toConsumableArray2.default)(elements) : values;
};

exports.currentPage = currentPage;

var prevPage = function prevPage(elements, page, elementsPerPage) {
  return (0, _toConsumableArray2.default)(elements).splice((page - 2) * elementsPerPage, elementsPerPage);
};

exports.prevPage = prevPage;

var nextPage = function nextPage(elements, page, elementsPerPage) {
  return (0, _toConsumableArray2.default)(elements).splice(page * elementsPerPage, elementsPerPage);
};

exports.nextPage = nextPage;

var items = function items(elements, page, elementsPerPage) {
  return {
    first: elementsPerPage * (page - 1) + 1,
    last: elementsPerPage * page,
    total: elements.length
  };
};

exports.items = items;