"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchData = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var searchData = function searchData(elements, search) {
  // Transform all objects in array of values
  var values = elements.map(function (e) {
    return Object.keys(e).map(function (key) {
      return e[key];
    }).join(" ");
  }); //Create regex for search

  var regex = new RegExp(search); // Filter values by regex

  return values.reduce(function (acc, e, i) {
    return e.search(regex) === -1 ? acc : [].concat((0, _toConsumableArray2.default)(acc), [i]);
  }, []).map(function (e) {
    return elements[e];
  });
};

exports.searchData = searchData;