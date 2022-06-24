"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prevPage = exports.nextPage = exports.items = exports.currentPage = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * It takes an array, a page number, and the number of elements per page, and returns the elements that should be displayed
 * on that page
 * @param elements - the array of elements to be paginated
 * @param page - The current page number
 * @param elementsPerPage - The number of elements to display per page.
 * @returns The current page of elements.
 */
var currentPage = function currentPage(elements, page, elementsPerPage) {
  var values = _toConsumableArray(elements).splice((page - 1) * elementsPerPage, elementsPerPage);

  return values.length === 0 ? _toConsumableArray(elements) : values;
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
  return _toConsumableArray(elements).splice((page - 2) * elementsPerPage, elementsPerPage);
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
  return _toConsumableArray(elements).splice(page * elementsPerPage, elementsPerPage);
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