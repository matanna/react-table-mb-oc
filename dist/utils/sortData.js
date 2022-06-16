"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortData = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

/**
 * We sort the data based on the type of the column we want to sort
 * @param e - the event object
 * @param initialArray - the array of data we want to sort
 * @param columns - the columns array that we created in the previous step
 * @returns a sorted array.
 */
var sortData = function sortData(e, initialArray, columns) {
  // Get the type of the column we want to sort
  var type = columns[columns.map(function (e) {
    return e.data;
  }).indexOf(e.target.parentNode.dataset.name)].typeData; // we sort differently for each type in terms of the direction chose (desc or asc)

  switch (type) {
    case "string":
      return (0, _toConsumableArray2.default)(initialArray).sort(function (a, b) {
        if (e.target.dataset.sort === "desc") {
          return a[e.target.parentNode.dataset.name].localeCompare(b[e.target.parentNode.dataset.name]);
        }

        if (e.target.dataset.sort === "asc") {
          return b[e.target.parentNode.dataset.name].localeCompare(a[e.target.parentNode.dataset.name]);
        }
      });

    case "number":
      return (0, _toConsumableArray2.default)(initialArray).sort(function (a, b) {
        if (e.target.dataset.sort === "desc") {
          return a[e.target.parentNode.dataset.name] - b[e.target.parentNode.dataset.name];
        }

        if (e.target.dataset.sort === "asc") {
          return b[e.target.parentNode.dataset.name] - a[e.target.parentNode.dataset.name];
        }
      });

    case "date":
      return (0, _toConsumableArray2.default)(initialArray).sort(function (a, b) {
        if (e.target.dataset.sort === "desc") {
          return Date.parse(a[e.target.parentNode.dataset.name]) - Date.parse(b[e.target.parentNode.dataset.name]);
        }

        if (e.target.dataset.sort === "asc") {
          return Date.parse(b[e.target.parentNode.dataset.name]) - Date.parse(a[e.target.parentNode.dataset.name]);
        }
      });

    default:
      return;
  }
};

exports.sortData = sortData;