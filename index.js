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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MHM; });\nclass MHM {\n  constructor(opts) {\n\n    this.opts = opts;\n\n    // DEFAULTS\n    opts = {\n      first: this.opts.first || 'default value',\n      second: this.opts.second || 'default value',\n      third: this.opts.third || 'default value'\n\n      // ELEMENTS\n    };this.elements = {\n      snappers: {\n        linksList: document.querySelectorAll(`[data-mhm-item=\"snapper\"]`),\n        mainSnapper: document.querySelector('[data-mhm-offset]')\n      },\n      togglers: document.querySelectorAll(`[data-mhm-item=\"toggler\"]`)\n    };\n\n    this.methodsLoaded = [];\n\n    this.init();\n\n    // LOAD MESSAGE\n    console.info(`%c[MHM Utility Framework loaded: %c${this.methodsLoaded.length ? this.methodsLoaded : 'NO functions loaded'}%c]`, 'color:blue;', 'color:green; font-weight:bold;', 'color:blue;');\n  }\n  // UTILS\n\n  /** Takes an array of arrays made of elements which if present\n  /*  triggers the function\n  **/\n  invokeIfNeeded(elementAndFns) {\n    elementAndFns.forEach(elementAndFn => {\n      const [el, fn] = elementAndFn;\n\n      if (el.length) {\n        this.methodsLoaded.push(fn.name);\n        return fn.apply(this);\n      }\n    });\n  }\n\n  init() {\n\n    this.invokeIfNeeded([[this.elements.snappers.linksList, this.snapper], [this.elements.togglers, this.toggler]]);\n  }\n\n  snapper() {\n    const isFixed = el => getComputedStyle(el).position === 'fixed',\n          offsetHeight = this.elements.snappers.mainSnapper ? this.elements.snappers.mainSnapper.offsetHeight : 0;\n\n    this.elements.snappers.linksList.forEach(snapper => {\n      const snappersItems = snapper.querySelectorAll('[data-mhm-target]');\n\n      snappersItems.forEach(snappersItem => {\n        snappersItem.addEventListener('click', () => {\n          const targetId = snappersItem.getAttribute('data-mhm-target'),\n                target = document.querySelector(`[data-mhm-id=${targetId}]`),\n                targetPosition = target ? target.getBoundingClientRect().top : 0;\n          const mainSnapperTarget = document.querySelector(`#${this.elements.snappers.mainSnapper.getAttribute('data-mhm-offset')}`);\n          const topScrollOffset = isFixed(mainSnapperTarget) ? Math.floor(window.pageYOffset + targetPosition - offsetHeight) : Math.floor(window.pageYOffset + targetPosition);\n\n          window.scrollTo({\n            top: topScrollOffset,\n            behavior: \"smooth\"\n          });\n        });\n      });\n    });\n  }\n\n  toggler() {\n    this.elements.togglers.forEach(toggler => {\n      const targetId = toggler.getAttribute('data-mhm-target'),\n            classToToggle = toggler.getAttribute('data-mhm-class'),\n            target = document.querySelector(`[data-mhm-id=${targetId}]`);\n      toggler.addEventListener('click', () => {\n        target.classList.toggle(classToToggle);\n      });\n    });\n  }\n\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9zcmMvbWFpbi5qcz80MzFhIl0sIm5hbWVzIjpbIk1ITSIsImNvbnN0cnVjdG9yIiwib3B0cyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJlbGVtZW50cyIsInNuYXBwZXJzIiwibGlua3NMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFpblNuYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlcnMiLCJtZXRob2RzTG9hZGVkIiwiaW5pdCIsImNvbnNvbGUiLCJpbmZvIiwibGVuZ3RoIiwiaW52b2tlSWZOZWVkZWQiLCJlbGVtZW50QW5kRm5zIiwiZm9yRWFjaCIsImVsZW1lbnRBbmRGbiIsImVsIiwiZm4iLCJwdXNoIiwibmFtZSIsImFwcGx5Iiwic25hcHBlciIsInRvZ2dsZXIiLCJpc0ZpeGVkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwib2Zmc2V0SGVpZ2h0Iiwic25hcHBlcnNJdGVtcyIsInNuYXBwZXJzSXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXRJZCIsImdldEF0dHJpYnV0ZSIsInRhcmdldCIsInRhcmdldFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibWFpblNuYXBwZXJUYXJnZXQiLCJ0b3BTY3JvbGxPZmZzZXQiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJjbGFzc1RvVG9nZ2xlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFlLE1BQU1BLEdBQU4sQ0FBVTtBQUN2QkMsY0FBWUMsSUFBWixFQUFpQjs7QUFFakIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaOztBQUVBO0FBQ0FBLFdBQU87QUFDSEMsYUFBTyxLQUFLRCxJQUFMLENBQVVDLEtBQVYsSUFBbUIsZUFEdkI7QUFFSEMsY0FBUSxLQUFLRixJQUFMLENBQVVFLE1B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QUFDUCxTQUFLdkIsUUFBTCxDQUFjTyxRQUFkLENBQXVCUSxPQUF2QixDQUErQlEsV0FBVztBQUN4QyxZQUFNUSxXQUFXUixRQUFRUyxZQUFSLENBQXFCLGlCQUFyQixDQUFqQjtBQUFBLFlBQ01hLGdCQUFnQnRCLFFBQVFTLFlBQVIsQ0FBcUIsZ0JBQXJCLENBRHRCO0FBQUEsWUFFTUMsU0FBUzlCLFNBQVNHLGFBQVQsQ0FBd0IsZ0JBQWV5QixRQUFTLEdBQWhELENBRmY7QUFHQVIsY0FBUU8sZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsTUFBSztBQUNyQ0csZUFBT2EsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0JGLGFBQXhCO0FBQ0QsT0FGRDtBQUdELEtBUEQ7QUFRRDs7QUE5RnNCIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNSE0ge1xuICBjb25zdHJ1Y3RvcihvcHRzKXtcblxuICB0aGlzLm9wdHMgPSBvcHRzXG5cbiAgLy8gREVGQVVMVFNcbiAgb3B0cyA9IHtcbiAgICAgIGZpcnN0OiB0aGlzLm9wdHMuZmlyc3QgfHwgJ2RlZmF1bHQgdmFsdWUnLFxuICAgICAgc2Vjb25kOiB0aGlzLm9wdHMuc2Vjb25kIHx8ICdkZWZhdWx0IHZhbHVlJyxcbiAgICAgIHRoaXJkOiB0aGlzLm9wdHMudGhpcmQgfHwgJ2RlZmF1bHQgdmFsdWUnLFxuICB9XG5cbiAgLy8gRUxFTUVOVFNcbiAgdGhpcy5lbGVtZW50cyA9IHtcbiAgICBzbmFwcGVyczoge1xuICAgICAgbGlua3NMaXN0IDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtbWhtLWl0ZW09XCJzbmFwcGVyXCJdYCksXG4gICAgICBtYWluU25hcHBlciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1obS1vZmZzZXRdJyksXG4gICAgfSxcbiAgICB0b2dnbGVyczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtbWhtLWl0ZW09XCJ0b2dnbGVyXCJdYClcbiAgfVxuXG4gIHRoaXMubWV0aG9kc0xvYWRlZCA9IFtdXG5cbiAgdGhpcy5pbml0KClcblxuICAvLyBMT0FEIE1FU1NBR0VcbiAgY29uc29sZS5pbmZvKGAlY1tNSE0gVXRpbGl0eSBGcmFtZXdvcmsgbG9hZGVkOiAlYyR7dGhpcy5tZXRob2RzTG9hZGVkLmxlbmd0aCA/XG4gICAgdGhpcy5tZXRob2RzTG9hZGVkIDogJ05PIGZ1bmN0aW9ucyBsb2FkZWQnfSVjXWAsXG4gICdjb2xvcjpibHVlOycsJ2NvbG9yOmdyZWVuOyBmb250LXdlaWdodDpib2xkOycsJ2NvbG9yOmJsdWU7JylcblxuICB9XG4gIC8vIFVUSUxTXG5cbiAgLyoqIFRha2VzIGFuIGFycmF5IG9mIGFycmF5cyBtYWRlIG9mIGVsZW1lbnRzIHdoaWNoIGlmIHByZXNlbnRcbiAgLyogIHRyaWdnZXJzIHRoZSBmdW5jdGlvblxuICAqKi9cbiAgaW52b2tlSWZOZWVkZWQoZWxlbWVudEFuZEZucykge1xuICAgIGVsZW1lbnRBbmRGbnMuZm9yRWFjaChlbGVtZW50QW5kRm4gPT4ge1xuICAgICAgY29uc3QgW2VsLGZuXSA9IGVsZW1lbnRBbmRGblxuXG4gICAgICBpZihlbC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5tZXRob2RzTG9hZGVkLnB1c2goZm4ubmFtZSlcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGluaXQoKXtcblxuICAgIHRoaXMuaW52b2tlSWZOZWVkZWQoW1xuICAgICAgW3RoaXMuZWxlbWVudHMuc25hcHBlcnMubGlua3NMaXN0LCB0aGlzLnNuYXBwZXJdLFxuICAgICAgW3RoaXMuZWxlbWVudHMudG9nZ2xlcnMsIHRoaXMudG9nZ2xlcl1cbiAgICBdKVxuXG4gIH1cblxuICBzbmFwcGVyKCl7XG4gICAgY29uc3QgaXNGaXhlZCA9IGVsID0+IGdldENvbXB1dGVkU3R5bGUoZWwpLnBvc2l0aW9uID09PSAnZml4ZWQnLFxuICAgICAgICAgIG9mZnNldEhlaWdodCA9IHRoaXMuZWxlbWVudHMuc25hcHBlcnMubWFpblNuYXBwZXIgP1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5zbmFwcGVycy5tYWluU25hcHBlci5vZmZzZXRIZWlnaHQgOiAwXG5cbiAgICB0aGlzLmVsZW1lbnRzLnNuYXBwZXJzLmxpbmtzTGlzdC5mb3JFYWNoKHNuYXBwZXIgPT4ge1xuICAgICAgY29uc3Qgc25hcHBlcnNJdGVtcyA9IHNuYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWhtLXRhcmdldF0nKVxuXG4gICAgICBzbmFwcGVyc0l0ZW1zLmZvckVhY2goc25hcHBlcnNJdGVtID0+IHtcbiAgICAgICAgc25hcHBlcnNJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gc25hcHBlcnNJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1taG0tdGFyZ2V0JyksXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbWhtLWlkPSR7dGFyZ2V0SWR9XWApLFxuICAgICAgICAgICAgICAgIHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0ID8gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA6IDBcbiAgICAgICAgICBjb25zdCBtYWluU25hcHBlclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuZWxlbWVudHMuc25hcHBlcnMubWFpblNuYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1obS1vZmZzZXQnKX1gKVxuICAgICAgICAgIGNvbnN0IHRvcFNjcm9sbE9mZnNldCA9IGlzRml4ZWQobWFpblNuYXBwZXJUYXJnZXQpID9cbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHdpbmRvdy5wYWdlWU9mZnNldCArIHRhcmdldFBvc2l0aW9uIC0gb2Zmc2V0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgOiBNYXRoLmZsb29yKHdpbmRvdy5wYWdlWU9mZnNldCArIHRhcmdldFBvc2l0aW9uKVxuXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogdG9wU2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZXIoKXtcbiAgICB0aGlzLmVsZW1lbnRzLnRvZ2dsZXJzLmZvckVhY2godG9nZ2xlciA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJZCA9IHRvZ2dsZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1obS10YXJnZXQnKSxcbiAgICAgICAgICAgIGNsYXNzVG9Ub2dnbGUgPSB0b2dnbGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1taG0tY2xhc3MnKSxcbiAgICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1obS1pZD0ke3RhcmdldElkfV1gKVxuICAgICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc1RvVG9nZ2xlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);