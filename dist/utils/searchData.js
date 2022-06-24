"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchData = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * It takes an array of objects and a search string, and returns an array of objects that match the search string
 * @param elements - The array of objects to search through.
 * @param search - The search term
 * @returns An array of objects that match the search criteria.
 */
var searchData = function searchData(elements, search) {
  // Transform all objects in array of values
  var values = elements.map(function (e) {
    return Object.keys(e).map(function (key) {
      return e[key];
    }).join(" ");
  }); //Create regex for search

  var regex = new RegExp(search); // Filter values by regex

  return values.reduce(function (acc, e, i) {
    return e.search(regex) === -1 ? acc : [].concat(_toConsumableArray(acc), [i]);
  }, []).map(function (e) {
    return elements[e];
  });
};

exports.searchData = searchData;