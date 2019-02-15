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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n\n\n(() => {\n    // Wait for DOM to be fully loaded\n    document.addEventListener('DOMContentLoaded', () => {\n\n        // New class instance init\n        new _src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            first: 'wow',\n            third: ''\n        });\n    });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9NSE0uanM/ZWQwZiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaXJzdCIsInRoaXJkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLENBQUMsTUFBSTtBQUNEO0FBQ0FBLGFBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFLOztBQUVuRDtBQUNBLFlBQUksaURBQUosQ0FBUTtBQUNKQyxtQkFBTyxLQURIO0FBRUpDLG1CQUFPO0FBRkgsU0FBUjtBQUtDLEtBUkQ7QUFTSCxDQVhEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTUhNIGZyb20gJy4vc3JjL21haW4nXG5cbigoKT0+e1xuICAgIC8vIFdhaXQgZm9yIERPTSB0byBiZSBmdWxseSBsb2FkZWRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG5cbiAgICAvLyBOZXcgY2xhc3MgaW5zdGFuY2UgaW5pdFxuICAgIG5ldyBNSE0oe1xuICAgICAgICBmaXJzdDogJ3dvdycsXG4gICAgICAgIHRoaXJkOiAnJ1xuICAgICAgfSlcblxuICAgIH0pXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MHM; });\nclass MHM {\n  constructor(opts) {\n\n    // INTRO MESSAGE\n    console.info('%c[MHM Utility Framework:' + '%c Loaded' + '%c]', 'color:blue;', 'color:green; font-weight:bold;', 'color:blue;');\n\n    this.opts = opts;\n\n    // DEFAULTS\n    opts = {\n      first: this.opts.first || 'default value',\n      second: this.opts.second || 'default value',\n      third: this.opts.third || 'default value'\n\n      // ELEMENTS\n    };this.elements = {\n      snappers: {\n        linksList: document.querySelectorAll(`[data-mhm-item=\"snapper\"]`),\n        mainSnapper: document.querySelector('[data-mhm-offset]')\n      }\n    };\n\n    this.init();\n  }\n  // UTILS\n\n  /** Takes an array of arrays made of elements which if present\n  /*  triggers the function\n  **/\n  invokeIfNeeded(elementAndFns) {\n    elementAndFns.forEach(elementAndFn => {\n      const [el, fn] = elementAndFn;\n      if (typeof el === 'array' && el.length || el) {\n        return fn.apply(this);\n      }\n    });\n  }\n\n  init() {\n    this.invokeIfNeeded([[this.elements.snappers.mainSnapper, this.snapper]]);\n  }\n\n  snapper() {\n    console.log('snapper triggered');\n    console.log(this);\n    const isFixed = el => getComputedStyle(el).position === 'fixed';\n    const offsetHeight = this.elements.snappers.mainSnapper ? this.elements.snappers.mainSnapper.offsetHeight : 0;\n\n    this.elements.snappers.linksList.forEach(snapper => {\n      const snappersItems = snapper.querySelectorAll('[data-mhm-target]');\n      snappersItems.forEach(snappersItem => {\n        snappersItem.addEventListener('click', () => {\n          const targetId = snappersItem.getAttribute('data-mhm-target'),\n                target = document.querySelector(`[data-mhm-id=${targetId}]`),\n                targetPosition = target ? target.getBoundingClientRect().top : 0;\n          const mainSnapperTarget = document.querySelector(`#${this.elements.snappers.mainSnapper.getAttribute('data-mhm-offset')}`);\n          const topScrollOffset = isFixed(mainSnapperTarget) ? Math.floor(window.pageYOffset + targetPosition - offsetHeight) : Math.floor(window.pageYOffset + targetPosition);\n\n          window.scrollTo({\n            top: topScrollOffset,\n            behavior: \"smooth\"\n          });\n        });\n      });\n    });\n  }\n\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9zcmMvbWFpbi5qcz80MzFhIl0sIm5hbWVzIjpbIk1ITSIsImNvbnN0cnVjdG9yIiwib3B0cyIsImNvbnNvbGUiLCJpbmZvIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImVsZW1lbnRzIiwic25hcHBlcnMiLCJsaW5rc0xpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYWluU25hcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJpbml0IiwiaW52b2tlSWZOZWVkZWQiLCJlbGVtZW50QW5kRm5zIiwiZm9yRWFjaCIsImVsZW1lbnRBbmRGbiIsImVsIiwiZm4iLCJsZW5ndGgiLCJhcHBseSIsInNuYXBwZXIiLCJsb2ciLCJpc0ZpeGVkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwib2Zmc2V0SGVpZ2h0Iiwic25hcHBlcnNJdGVtcyIsInNuYXBwZXJzSXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXRJZCIsImdldEF0dHJpYnV0ZSIsInRhcmdldCIsInRhcmdldFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibWFpblNuYXBwZXJUYXJnZXQiLCJ0b3BTY3JvbGxPZmZzZXQiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7O0FBQWUsTUFBTUEsR0FBTixDQUFVO0FBQ3ZCQyxjQUFZQyxJQUFaLEVBQWlCOztBQUVqQjtBQUNBQyxZQUFRQyxJQUFSLENBQWEsOEJBQTRCLFdBQTVCLEdBQXdDLEtBQXJELEVBQ0EsYUFEQSxFQUNjLGdDQURkLEVBQytDLGFBRC9DOztBQUdBLFNBQUtGLElBQUwsR0FBWUEsSUFBWjs7QUFFQTtBQUNBQSxXQUFPO0FBQ0hHLGFBQU8sS0FBS0gsSUFBTCxDQUFVRyxLQUFWLElBQW1CLGVBRHZCO0FBRUhDLGNBQVEsS0FBS0osSUFBTCxDQUFVSSxNQUFWLElBQW9CLGVBRnpCO0FBR0hDLGFBQU8sS0FBS0wsSUFBTCxDQUFVSyxLQUFWLElBQW1COztBQUc5QjtBQU5PLEtBQVAsQ0FPQSxLQUFLQyxRQUFMLEdBQWdCO0FBQ2RDLGdCQUFVO0FBQ1JDLG1CQUFZQyxTQUFTQyxnQkFBVCxDQUEyQiwyQkFBM0IsQ0FESjtBQUVSQyxxQkFBY0YsU0FBU0csYUFBVCxDQUF1QixtQkFBdkI7QUFGTjtBQURJLEtBQWhCOztBQU9BLFNBQUtDLElBQUw7QUFFQztBQUNEOztBQUVBOzs7QUFHQUMsaUJBQWVDLGFBQWYsRUFBOEI7QUFDMUJBLGtCQUFjQyxPQUFkLENBQXNCQyxnQkFBZ0I7QUFDcEMsWUFBTSxDQUFDQyxFQUFELEVBQUlDLEVBQUosSUFBVUYsWUFBaEI7QUFDQSxVQUFJLE9BQU9DLEVBQVAsS0FBYyxPQUFkLElBQXlCQSxHQUFHRSxNQUE3QixJQUF3Q0YsRUFBM0MsRUFBZ0Q7QUFDOUMsZUFBT0MsR0FBR0UsS0FBSCxDQUFTLElBQVQsQ0FBUDtBQUNEO0FBQ0YsS0FMRDtBQU9IOztBQUVEUixTQUFNO0FBQ0osU0FBS0MsY0FBTCxDQUFvQixDQUNsQixDQUFDLEtBQUtSLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QkksV0FBeEIsRUFBcUMsS0FBS1csT0FBMUMsQ0FEa0IsQ0FBcEI7QUFJRDs7QUFFREEsWUFBUztBQUNEckIsWUFBUXNCLEdBQVIsQ0FBWSxtQkFBWjtBQUNBdEIsWUFBUXNCLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsVUFBTUMsVUFBVU4sTUFBTU8saUJBQWlCUCxFQUFqQixFQUFxQlEsUUFBckIsS0FBa0MsT0FBeEQ7QUFDQSxVQUFNQyxlQUFlLEtBQUtyQixRQUFMLENBQWNDLFFBQWQsQ0FBdUJJLFdBQXZCLEdBQ2IsS0FBS0wsUUFBTCxDQUFjQyxRQUFkLENBQXVCSSxXQUF2QixDQUFtQ2dCLFlBRHRCLEdBQ3FDLENBRDFEOztBQUdBLFNBQUtyQixRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLFNBQXZCLENBQWlDUSxPQUFqQyxDQUF5Q00sV0FBVztBQUNwRCxZQUFNTSxnQkFBZ0JOLFFBQVFaLGdCQUFSLENBQXlCLG1CQUF6QixDQUF0QjtBQUNBa0Isb0JBQWNaLE9BQWQsQ0FBc0JhLGdCQUFnQjtBQUNsQ0EscUJBQWFDLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLE1BQU07QUFDekMsZ0JBQU1DLFdBQVdGLGFBQWFHLFlBQWIsQ0FBMEIsaUJBQTFCLENBQWpCO0FBQUEsZ0JBQ01DLFNBQVN4QixTQUFTRyxhQUFULENBQXdCLGdCQUFlbUIsUUFBUyxHQUFoRCxDQURmO0FBQUEsZ0JBRU1HLGlCQUFpQkQsU0FBU0EsT0FBT0UscUJBQVAsR0FBK0JDLEdBQXhDLEdBQThDLENBRnJFO0FBR0EsZ0JBQU1DLG9CQUFvQjVCLFNBQVNHLGFBQVQsQ0FBd0IsSUFBRyxLQUFLTixRQUFMLENBQWNDLFFBQWQsQ0FBdUJJLFdBQXZCLENBQW1DcUIsWUFBbkMsQ0FBZ0QsaUJBQWhELENBQW1FLEVBQTlGLENBQTFCO0FBQ0EsZ0JBQU1NLGtCQUFrQmQsUUFBUWEsaUJBQVIsSUFDbEJFLEtBQUtDLEtBQUwsQ0FBV0MsT0FBT0MsV0FBUCxHQUFxQlIsY0FBckIsR0FBc0NQLFlBQWpELENBRGtCLEdBRWRZLEtBQUtDLEtBQUwsQ0FBV0MsT0FBT0MsV0FBUCxHQUFxQlIsY0FBaEMsQ0FGVjs7QUFJQU8saUJBQU9FLFFBQVAsQ0FBZ0I7QUFDWlAsaUJBQUtFLGVBRE87QUFFWk0sc0JBQVU7QUFGRSxXQUFoQjtBQUtILFNBZEQ7QUFlSCxPQWhCRDtBQWlCSCxLQW5CRztBQW9CUDs7QUE1RXNCIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNSE0ge1xuICBjb25zdHJ1Y3RvcihvcHRzKXtcblxuICAvLyBJTlRSTyBNRVNTQUdFXG4gIGNvbnNvbGUuaW5mbygnJWNbTUhNIFV0aWxpdHkgRnJhbWV3b3JrOicrJyVjIExvYWRlZCcrJyVjXScsXG4gICdjb2xvcjpibHVlOycsJ2NvbG9yOmdyZWVuOyBmb250LXdlaWdodDpib2xkOycsJ2NvbG9yOmJsdWU7JylcblxuICB0aGlzLm9wdHMgPSBvcHRzXG5cbiAgLy8gREVGQVVMVFNcbiAgb3B0cyA9IHtcbiAgICAgIGZpcnN0OiB0aGlzLm9wdHMuZmlyc3QgfHwgJ2RlZmF1bHQgdmFsdWUnLFxuICAgICAgc2Vjb25kOiB0aGlzLm9wdHMuc2Vjb25kIHx8ICdkZWZhdWx0IHZhbHVlJyxcbiAgICAgIHRoaXJkOiB0aGlzLm9wdHMudGhpcmQgfHwgJ2RlZmF1bHQgdmFsdWUnLFxuICB9XG5cbiAgLy8gRUxFTUVOVFNcbiAgdGhpcy5lbGVtZW50cyA9IHtcbiAgICBzbmFwcGVyczoge1xuICAgICAgbGlua3NMaXN0IDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtbWhtLWl0ZW09XCJzbmFwcGVyXCJdYCksXG4gICAgICBtYWluU25hcHBlciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1obS1vZmZzZXRdJyksXG4gICAgfVxuICB9XG5cbiAgdGhpcy5pbml0KClcblxuICB9XG4gIC8vIFVUSUxTXG5cbiAgLyoqIFRha2VzIGFuIGFycmF5IG9mIGFycmF5cyBtYWRlIG9mIGVsZW1lbnRzIHdoaWNoIGlmIHByZXNlbnRcbiAgLyogIHRyaWdnZXJzIHRoZSBmdW5jdGlvblxuICAqKi9cbiAgaW52b2tlSWZOZWVkZWQoZWxlbWVudEFuZEZucykge1xuICAgICAgZWxlbWVudEFuZEZucy5mb3JFYWNoKGVsZW1lbnRBbmRGbiA9PiB7XG4gICAgICAgIGNvbnN0IFtlbCxmbl0gPSBlbGVtZW50QW5kRm5cbiAgICAgICAgaWYoKHR5cGVvZiBlbCA9PT0gJ2FycmF5JyAmJiBlbC5sZW5ndGgpIHx8IGVsICkge1xuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gIH1cblxuICBpbml0KCl7XG4gICAgdGhpcy5pbnZva2VJZk5lZWRlZChbXG4gICAgICBbdGhpcy5lbGVtZW50cy5zbmFwcGVycy5tYWluU25hcHBlciwgdGhpcy5zbmFwcGVyXVxuICAgIF0pXG5cbiAgfVxuXG4gIHNuYXBwZXIoKXtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc25hcHBlciB0cmlnZ2VyZWQnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgICAgY29uc3QgaXNGaXhlZCA9IGVsID0+IGdldENvbXB1dGVkU3R5bGUoZWwpLnBvc2l0aW9uID09PSAnZml4ZWQnXG4gICAgICAgICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gdGhpcy5lbGVtZW50cy5zbmFwcGVycy5tYWluU25hcHBlciA/XG4gICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNuYXBwZXJzLm1haW5TbmFwcGVyLm9mZnNldEhlaWdodCA6IDBcblxuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc25hcHBlcnMubGlua3NMaXN0LmZvckVhY2goc25hcHBlciA9PiB7XG4gICAgICAgICAgY29uc3Qgc25hcHBlcnNJdGVtcyA9IHNuYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWhtLXRhcmdldF0nKVxuICAgICAgICAgIHNuYXBwZXJzSXRlbXMuZm9yRWFjaChzbmFwcGVyc0l0ZW0gPT4ge1xuICAgICAgICAgICAgICBzbmFwcGVyc0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHNuYXBwZXJzSXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWhtLXRhcmdldCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbWhtLWlkPSR7dGFyZ2V0SWR9XWApLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXQgPyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDogMFxuICAgICAgICAgICAgICAgICAgY29uc3QgbWFpblNuYXBwZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmVsZW1lbnRzLnNuYXBwZXJzLm1haW5TbmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1taG0tb2Zmc2V0Jyl9YClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcFNjcm9sbE9mZnNldCA9IGlzRml4ZWQobWFpblNuYXBwZXJUYXJnZXQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3Iod2luZG93LnBhZ2VZT2Zmc2V0ICsgdGFyZ2V0UG9zaXRpb24gLSBvZmZzZXRIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5mbG9vcih3aW5kb3cucGFnZVlPZmZzZXQgKyB0YXJnZXRQb3NpdGlvbilcblxuICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcFNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);