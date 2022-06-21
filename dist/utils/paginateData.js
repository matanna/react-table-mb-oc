"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prevPage = exports.nextPage = exports.items = exports.currentPage = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

/**
 * It takes an array, a page number, and the number of elements per page, and returns the elements that should be displayed
 * on that page
 * @param elements - the array of elements to be paginated
 * @param page - The current page number
 * @param elementsPerPage - The number of elements to display per page.
 * @returns The current page of elements.
 */
var currentPage = function currentPage(elements, page, elementsPerPage) {
  var values = (0, _toConsumableArray2.default)(elements).splice((page - 1) * elementsPerPage, elementsPerPage);
  return values.length === 0 ? (0, _toConsumableArray2.default)(elements) : values;
};
/**
 * It takes an array of elements, a page number, and the number of elements per page, and returns the elements that should
 * be displayed on the previous page
 * @param elements - the array of elements to be paginated
 * @param page - the current page number
 * @param elementsPerPage - The number of elements to show per page.
 * @returns The elements of the array that are on the previous page.
 */


exports.currentPage = currentPage;

var prevPage = function prevPage(elements, page, elementsPerPage) {
  return (0, _toConsumableArray2.default)(elements).splice((page - 2) * elementsPerPage, elementsPerPage);
};
/**
 * It takes an array, a page number, and the number of elements per page, and returns the elements that should be displayed
 * on that page
 * @param elements - the array of elements to paginate
 * @param page - the current page number
 * @param elementsPerPage - The number of elements to show per page.
 * @returns The next page of elements.
 */


exports.prevPage = prevPage;

var nextPage = function nextPage(elements, page, elementsPerPage) {
  return (0, _toConsumableArray2.default)(elements).splice(page * elementsPerPage, elementsPerPage);
};
/**
 * It returns an object with the first, last, and total number of elements in a given page
 * @param elements - the array of elements to paginate
 * @param page - The current page number.
 * @param elementsPerPage - The number of elements to show per page.
 * @returns An object with three properties: first, last, and total.
 */


exports.nextPage = nextPage;

var items = function items(elements, page, elementsPerPage) {
  return {
    first: elementsPerPage * (page - 1) + 1,
    last: elementsPerPage * page,
    total: elements.length
  };
};

exports.items = items;