"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortData = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

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
      return (0, _toConsumableArray2.default)(initialArray).sort(function (a, b) {
        if (event.target.dataset.sort === "desc") {
          return a[event.target.parentNode.dataset.name].localeCompare(b[event.target.parentNode.dataset.name]);
        }

        if (event.target.dataset.sort === "asc") {
          return b[event.target.parentNode.dataset.name].localeCompare(a[event.target.parentNode.dataset.name]);
        }
      });

    case "number":
      return (0, _toConsumableArray2.default)(initialArray).sort(function (a, b) {
        if (event.target.dataset.sort === "desc") {
          return a[event.target.parentNode.dataset.name] - b[event.target.parentNode.dataset.name];
        }

        if (event.target.dataset.sort === "asc") {
          return b[event.target.parentNode.dataset.name] - a[event.target.parentNode.dataset.name];
        }
      });

    case "date":
      return (0, _toConsumableArray2.default)(initialArray).sort(function (a, b) {
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