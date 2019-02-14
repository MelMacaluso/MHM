/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_MHM_toggler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _functions_MHM_snapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);\n\n\n\n(() => {\n    // Init message\n    console.info('%c[MHM Utility Framework:' + '%c Loaded' + '%c]', 'color:blue;', 'color:green; font-weight:bold;', 'color:blue;');\n\n    //Utilities, to be executed when the window has loaded\n    window.addEventListener('load', () => {\n        Object(_functions_MHM_toggler__WEBPACK_IMPORTED_MODULE_0__[\"MHM_toggler\"])();\n        Object(_functions_MHM_snapper__WEBPACK_IMPORTED_MODULE_1__[\"MHM_snapper\"])();\n    });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9NSE0uanM/ZWQwZiJdLCJuYW1lcyI6WyJjb25zb2xlIiwiaW5mbyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJNSE1fdG9nZ2xlciIsIk1ITV9zbmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOztBQUVBLENBQUMsTUFBSTtBQUNEO0FBQ0FBLFlBQVFDLElBQVIsQ0FBYSw4QkFBNEIsV0FBNUIsR0FBd0MsS0FBckQsRUFBMkQsYUFBM0QsRUFBeUUsZ0NBQXpFLEVBQTBHLGFBQTFHOztBQUVBO0FBQ0FDLFdBQU9DLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLE1BQUs7QUFDakNDLFFBQUEsMEVBQUFBO0FBQ0FDLFFBQUEsMEVBQUFBO0FBQ0gsS0FIRDtBQUlILENBVEQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TUhNX3RvZ2dsZXJ9IGZyb20gJy4vZnVuY3Rpb25zL01ITV90b2dnbGVyJ1xuaW1wb3J0IHtNSE1fc25hcHBlcn0gZnJvbSAnLi9mdW5jdGlvbnMvTUhNX3NuYXBwZXInXG5cbigoKT0+e1xuICAgIC8vIEluaXQgbWVzc2FnZVxuICAgIGNvbnNvbGUuaW5mbygnJWNbTUhNIFV0aWxpdHkgRnJhbWV3b3JrOicrJyVjIExvYWRlZCcrJyVjXScsJ2NvbG9yOmJsdWU7JywnY29sb3I6Z3JlZW47IGZvbnQtd2VpZ2h0OmJvbGQ7JywnY29sb3I6Ymx1ZTsnKVxuXG4gICAgLy9VdGlsaXRpZXMsIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIHdpbmRvdyBoYXMgbG9hZGVkXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+IHtcbiAgICAgICAgTUhNX3RvZ2dsZXIoKVxuICAgICAgICBNSE1fc25hcHBlcigpXG4gICAgfSlcbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MHM_toggler\", function() { return MHM_toggler; });\n/* harmony import */ var _MHM_select_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);\n/* harmony import */ var _MHM_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);\n\n\n\nconst MHM_toggler = () => {\n    const togglers = Object(_MHM_items__WEBPACK_IMPORTED_MODULE_1__[\"MHM_items\"])().togglers;\n    togglers.forEach(toggler => {\n        const targetId = toggler.getAttribute('data-mhm-target');\n        const classToToggle = toggler.getAttribute('data-mhm-class');\n        const target = Object(_MHM_select_id__WEBPACK_IMPORTED_MODULE_0__[\"MHM_select_id\"])(targetId);\n        toggler.addEventListener('click', () => {\n            target.classList.toggle(classToToggle);\n        });\n    });\n};\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9mdW5jdGlvbnMvTUhNX3RvZ2dsZXIuanM/NTVlMyJdLCJuYW1lcyI6WyJNSE1fdG9nZ2xlciIsInRvZ2dsZXJzIiwiTUhNX2l0ZW1zIiwiZm9yRWFjaCIsInRvZ2dsZXIiLCJ0YXJnZXRJZCIsImdldEF0dHJpYnV0ZSIsImNsYXNzVG9Ub2dnbGUiLCJ0YXJnZXQiLCJNSE1fc2VsZWN0X2lkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxNQUFLO0FBQ3JCLFVBQU1DLFdBQVcsNERBQUFDLEdBQVlELFFBQTdCO0FBQ0FBLGFBQVNFLE9BQVQsQ0FBaUJDLFdBQVc7QUFDeEIsY0FBTUMsV0FBV0QsUUFBUUUsWUFBUixDQUFxQixpQkFBckIsQ0FBakI7QUFDQSxjQUFNQyxnQkFBZ0JILFFBQVFFLFlBQVIsQ0FBcUIsZ0JBQXJCLENBQXRCO0FBQ0EsY0FBTUUsU0FBUyxvRUFBQUMsQ0FBY0osUUFBZCxDQUFmO0FBQ0FELGdCQUFRTSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxNQUFLO0FBQ25DRixtQkFBT0csU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0JMLGFBQXhCO0FBQ0gsU0FGRDtBQUdILEtBUEQ7QUFRSCxDQVZEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01ITV9zZWxlY3RfaWR9IGZyb20gJy4vTUhNX3NlbGVjdF9pZCdcbmltcG9ydCB7TUhNX2l0ZW1zfSBmcm9tICcuL01ITV9pdGVtcydcblxuY29uc3QgTUhNX3RvZ2dsZXIgPSAoKT0+IHtcbiAgICBjb25zdCB0b2dnbGVycyA9IE1ITV9pdGVtcygpLnRvZ2dsZXJzXG4gICAgdG9nZ2xlcnMuZm9yRWFjaCh0b2dnbGVyID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0b2dnbGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1taG0tdGFyZ2V0JylcbiAgICAgICAgY29uc3QgY2xhc3NUb1RvZ2dsZSA9IHRvZ2dsZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1obS1jbGFzcycpXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IE1ITV9zZWxlY3RfaWQodGFyZ2V0SWQpXG4gICAgICAgIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzVG9Ub2dnbGUpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHtNSE1fdG9nZ2xlcn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MHM_select_id\", function() { return MHM_select_id; });\nconst MHM_select_id = selector => {\n    const id = Array.from(document.querySelectorAll(`[data-mhm-id=${selector}]`))[0];\n    return id;\n};\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9mdW5jdGlvbnMvTUhNX3NlbGVjdF9pZC5qcz9mODBhIl0sIm5hbWVzIjpbIk1ITV9zZWxlY3RfaWQiLCJzZWxlY3RvciIsImlkIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQSxNQUFNQSxnQkFBZ0JDLFlBQVk7QUFDOUIsVUFBTUMsS0FBS0MsTUFBTUMsSUFBTixDQUFXQyxTQUFTQyxnQkFBVCxDQUEyQixnQkFBZUwsUUFBUyxHQUFuRCxDQUFYLEVBQW1FLENBQW5FLENBQVg7QUFDQSxXQUFPQyxFQUFQO0FBQ0gsQ0FIRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTUhNX3NlbGVjdF9pZCA9IHNlbGVjdG9yID0+IHtcbiAgICBjb25zdCBpZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtbWhtLWlkPSR7c2VsZWN0b3J9XWApKVswXVxuICAgIHJldHVybiBpZFxufVxuXG5leHBvcnQge01ITV9zZWxlY3RfaWR9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MHM_items\", function() { return MHM_items; });\nconst MHM_items = () => {\n    const targets = {\n        togglers: Array.from(document.querySelectorAll(`[data-mhm-item=\"toggler\"]`)),\n        snappers: Array.from(document.querySelectorAll(`[data-mhm-item=\"snapper\"]`))\n    };\n    return targets;\n};\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9mdW5jdGlvbnMvTUhNX2l0ZW1zLmpzPzY0NTQiXSwibmFtZXMiOlsiTUhNX2l0ZW1zIiwidGFyZ2V0cyIsInRvZ2dsZXJzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic25hcHBlcnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUFBLE1BQU1BLFlBQVksTUFBTTtBQUNwQixVQUFNQyxVQUFVO0FBQ1pDLGtCQUFVQyxNQUFNQyxJQUFOLENBQVdDLFNBQVNDLGdCQUFULENBQTJCLDJCQUEzQixDQUFYLENBREU7QUFFWkMsa0JBQVVKLE1BQU1DLElBQU4sQ0FBV0MsU0FBU0MsZ0JBQVQsQ0FBMkIsMkJBQTNCLENBQVg7QUFGRSxLQUFoQjtBQUlBLFdBQU9MLE9BQVA7QUFDSCxDQU5EIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNSE1faXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0cyA9IHtcbiAgICAgICAgdG9nZ2xlcnM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtbWhtLWl0ZW09XCJ0b2dnbGVyXCJdYCkpLFxuICAgICAgICBzbmFwcGVyczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1taG0taXRlbT1cInNuYXBwZXJcIl1gKSksXG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRzXG59XG5cbmV4cG9ydCB7TUhNX2l0ZW1zfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MHM_snapper\", function() { return MHM_snapper; });\n/* harmony import */ var _MHM_select_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);\n/* harmony import */ var _MHM_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);\n/* harmony import */ var _utils_isFixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);\n\n\n\n\nconst MHM_snapper = () => {\n    const snappers = Object(_MHM_items__WEBPACK_IMPORTED_MODULE_1__[\"MHM_items\"])().snappers,\n          mainSnapper = document.querySelector('[data-mhm-offset]'),\n          offsetHeightElement = document.querySelector(mainSnapper.getAttribute('data-mhm-offset')),\n          offsetHeight = offsetHeightElement.offsetHeight;\n\n    snappers.forEach(snapper => {\n        const snappersItems = snapper.querySelectorAll('[data-mhm-target]');\n        snappersItems.forEach(snappersItem => {\n            snappersItem.addEventListener('click', () => {\n                const targetId = snappersItem.getAttribute('data-mhm-target'),\n                      target = Object(_MHM_select_id__WEBPACK_IMPORTED_MODULE_0__[\"MHM_select_id\"])(targetId),\n                      targetPosition = target ? target.getBoundingClientRect().top : 0;\n\n                window.scrollTo({\n                    top: Object(_utils_isFixed__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(offsetHeightElement) ? Math.floor(window.pageYOffset + targetPosition - offsetHeight) : Math.floor(window.pageYOffset + targetPosition),\n                    behavior: \"smooth\"\n                });\n            });\n        });\n    });\n};\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9mdW5jdGlvbnMvTUhNX3NuYXBwZXIuanM/YWRjMCJdLCJuYW1lcyI6WyJNSE1fc25hcHBlciIsInNuYXBwZXJzIiwiTUhNX2l0ZW1zIiwibWFpblNuYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRIZWlnaHRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0SGVpZ2h0IiwiZm9yRWFjaCIsInNuYXBwZXIiLCJzbmFwcGVyc0l0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInNuYXBwZXJzSXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXRJZCIsInRhcmdldCIsIk1ITV9zZWxlY3RfaWQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwiaXNGaXhlZCIsIk1hdGgiLCJmbG9vciIsInBhZ2VZT2Zmc2V0IiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsTUFBTTtBQUN0QixVQUFNQyxXQUFXLDREQUFBQyxHQUFZRCxRQUE3QjtBQUFBLFVBQ01FLGNBQWNDLFNBQVNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHBCO0FBQUEsVUFFTUMsc0JBQXNCRixTQUFTQyxhQUFULENBQXVCRixZQUFZSSxZQUFaLENBQXlCLGlCQUF6QixDQUF2QixDQUY1QjtBQUFBLFVBR01DLGVBQWVGLG9CQUFvQkUsWUFIekM7O0FBS0FQLGFBQVNRLE9BQVQsQ0FBaUJDLFdBQVc7QUFDeEIsY0FBTUMsZ0JBQWdCRCxRQUFRRSxnQkFBUixDQUF5QixtQkFBekIsQ0FBdEI7QUFDQUQsc0JBQWNGLE9BQWQsQ0FBc0JJLGdCQUFnQjtBQUNsQ0EseUJBQWFDLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLE1BQU07QUFDekMsc0JBQU1DLFdBQVdGLGFBQWFOLFlBQWIsQ0FBMEIsaUJBQTFCLENBQWpCO0FBQUEsc0JBQ01TLFNBQVMsb0VBQUFDLENBQWNGLFFBQWQsQ0FEZjtBQUFBLHNCQUVNRyxpQkFBaUJGLFNBQVNBLE9BQU9HLHFCQUFQLEdBQStCQyxHQUF4QyxHQUE4QyxDQUZyRTs7QUFJQUMsdUJBQU9DLFFBQVAsQ0FBZ0I7QUFDWkYseUJBQUssOERBQUFHLENBQVFqQixtQkFBUixJQUNMa0IsS0FBS0MsS0FBTCxDQUFXSixPQUFPSyxXQUFQLEdBQXFCUixjQUFyQixHQUFzQ1YsWUFBakQsQ0FESyxHQUVIZ0IsS0FBS0MsS0FBTCxDQUFXSixPQUFPSyxXQUFQLEdBQXFCUixjQUFoQyxDQUhVO0FBSVpTLDhCQUFVO0FBSkUsaUJBQWhCO0FBT0gsYUFaRDtBQWFILFNBZEQ7QUFlSCxLQWpCRDtBQWtCSCxDQXhCRCIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNSE1fc2VsZWN0X2lkfSBmcm9tICcuL01ITV9zZWxlY3RfaWQnXG5pbXBvcnQge01ITV9pdGVtc30gZnJvbSAnLi9NSE1faXRlbXMnXG5pbXBvcnQgaXNGaXhlZCBmcm9tICcuLi91dGlscy9pc0ZpeGVkJ1xuXG5jb25zdCBNSE1fc25hcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCBzbmFwcGVycyA9IE1ITV9pdGVtcygpLnNuYXBwZXJzLFxuICAgICAgICAgIG1haW5TbmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbWhtLW9mZnNldF0nKSxcbiAgICAgICAgICBvZmZzZXRIZWlnaHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtYWluU25hcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWhtLW9mZnNldCcpKSxcbiAgICAgICAgICBvZmZzZXRIZWlnaHQgPSBvZmZzZXRIZWlnaHRFbGVtZW50Lm9mZnNldEhlaWdodFxuXG4gICAgc25hcHBlcnMuZm9yRWFjaChzbmFwcGVyID0+IHtcbiAgICAgICAgY29uc3Qgc25hcHBlcnNJdGVtcyA9IHNuYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWhtLXRhcmdldF0nKVxuICAgICAgICBzbmFwcGVyc0l0ZW1zLmZvckVhY2goc25hcHBlcnNJdGVtID0+IHtcbiAgICAgICAgICAgIHNuYXBwZXJzSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHNuYXBwZXJzSXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWhtLXRhcmdldCcpLFxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IE1ITV9zZWxlY3RfaWQodGFyZ2V0SWQpLFxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0ID8gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA6IDBcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogaXNGaXhlZChvZmZzZXRIZWlnaHRFbGVtZW50KSA/XG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3Iod2luZG93LnBhZ2VZT2Zmc2V0ICsgdGFyZ2V0UG9zaXRpb24gLSBvZmZzZXRIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5mbG9vcih3aW5kb3cucGFnZVlPZmZzZXQgKyB0YXJnZXRQb3NpdGlvbiksXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQge01ITV9zbmFwcGVyfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst isFixed = el => {\n  const position = getComputedStyle(el).position;\n  return position === 'fixed' || false;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isFixed);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS91dGlscy9pc0ZpeGVkLmpzP2I0OGYiXSwibmFtZXMiOlsiaXNGaXhlZCIsImVsIiwicG9zaXRpb24iLCJnZXRDb21wdXRlZFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFVBQVVDLE1BQU07QUFDcEIsUUFBTUMsV0FBV0MsaUJBQWlCRixFQUFqQixFQUFxQkMsUUFBdEM7QUFDQSxTQUFPQSxhQUFhLE9BQWIsSUFBd0IsS0FBL0I7QUFDRCxDQUhEOztBQUtBLCtEQUFlRixPQUFmIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc0ZpeGVkID0gZWwgPT4ge1xuICBjb25zdCBwb3NpdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoZWwpLnBvc2l0aW9uXG4gIHJldHVybiBwb3NpdGlvbiA9PT0gJ2ZpeGVkJyB8fCBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);