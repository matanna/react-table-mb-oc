"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = void 0;

var formatDate = function formatDate(date) {
  if (navigator.language === "fr-FR") {
    var elements = date.split("-");
    return "".concat(elements[2], "/").concat(elements[1], "/").concat(elements[0]);
  }
};

exports.formatDate = formatDate;