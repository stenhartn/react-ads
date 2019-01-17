"use strict";var _utils=require("../utils");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ixBids=exports.createBid=void 0;function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}var createBid=function(a){var b=a.siteId,c=a.size;return{bidder:"ix",params:{siteId:b,size:c}}};exports.createBid=createBid;var ixBids=function(a){return function(b,c){var d=a.mapping[b];if(!d)return[];var e=d.map(function(b){return a.xSlots[b]});if("string"==typeof c)return[];var f=(0,_utils.formatSizes)(c),g=f.reduce(function(a,b){if("string"==typeof b)return a;var c=_slicedToArray(b,2),d=c[0],f=c[1],g=e.find(function(a){var b=_slicedToArray(a.size,2),c=b[0],e=b[1];return d===c&&f===e});return g?(a.push(createBid({siteId:g.siteId,size:g.size})),a):a},[]);return g}};exports.ixBids=ixBids;