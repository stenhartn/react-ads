"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var hideHOC=function(a){return function(b){if(!b.enableAds)return null;var c=_react.default.createElement(a,b);return c}},_default=hideHOC;exports.default=_default;