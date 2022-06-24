"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortData = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * We sort the data based on the type of the column we want to sort
 * @param event
 * @param initialArray - the array of data we want to sort
 * @param columns - the columns array that we created in the previous step
 * @returns a sorted array.
 */
var sortData = function sortData(event, initialArray, columns) {
  // Get the type of the column we want to sort
  var type = columns[columns.map(function (e) {
    return e.data;
  }).indexOf(event.target.parentNode.dataset.name)].typeData; // we sort differently for each type in terms of the direction chose (desc or asc)

  switch (type) {
    case "string":
      return _toConsumableArray(initialArray).sort(function (a, b) {
        if (event.target.dataset.sort === "desc") {
          return a[event.target.parentNode.dataset.name].localeCompare(b[event.target.parentNode.dataset.name]);
        }

        if (event.target.dataset.sort === "asc") {
          return b[event.target.parentNode.dataset.name].localeCompare(a[event.target.parentNode.dataset.name]);
        }
      });

    case "number":
      return _toConsumableArray(initialArray).sort(function (a, b) {
        if (event.target.dataset.sort === "desc") {
          return a[event.target.parentNode.dataset.name] - b[event.target.parentNode.dataset.name];
        }

        if (event.target.dataset.sort === "asc") {
          return b[event.target.parentNode.dataset.name] - a[event.target.parentNode.dataset.name];
        }
      });

    case "date":
      return _toConsumableArray(initialArray).sort(function (a, b) {
        if (event.target.dataset.sort === "desc") {
          return Date.parse(a[event.target.parentNode.dataset.name]) - Date.parse(b[event.target.parentNode.dataset.name]);
        }

        if (event.target.dataset.sort === "asc") {
          return Date.parse(b[event.target.parentNode.dataset.name]) - Date.parse(a[event.target.parentNode.dataset.name]);
        }
      });

    default:
      return console.error(type + " : This type is not allowed !");
  }
};

exports.sortData = sortData;