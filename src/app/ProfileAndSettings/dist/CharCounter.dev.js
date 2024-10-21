"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var inputField = document.getElementById('grid-first-name');
var charCount = document.getElementById('charCount');
var maxChars = 60;

var _default = inputField.addEventListener('input', function () {
  var currentLength = this.value.length;
  var remainingChars = maxChars - currentLength;
  charCount.textContent = remainingChars;

  if (remainingChars < 0) {
    this.value = this.value.slice(0, maxChars);
  }
});

exports["default"] = _default;