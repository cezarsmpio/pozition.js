(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.pozition = {})));
}(this, (function (exports) { 'use strict';

var geolocation = navigator.geolocation;
var current = function (options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        return geolocation.getCurrentPosition(resolve, reject, options);
    });
};
var watch = function (options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        return geolocation.watchPosition(resolve, reject, options);
    });
};
var clear = function (id) {
    return geolocation.clearWatch(id);
};

exports.current = current;
exports.watch = watch;
exports.clear = clear;

Object.defineProperty(exports, '__esModule', { value: true });

})));
