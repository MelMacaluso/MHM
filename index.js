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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n\n\n(() => {\n  // Wait for DOM to be fully loaded\n  document.addEventListener('DOMContentLoaded', () => {\n    /* eslint-disable no-new */\n    new _src_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      first: 'wow',\n      third: ''\n    });\n  });\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9NSE0uanM/ZWQwZiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaXJzdCIsInRoaXJkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLENBQUMsTUFBTTtBQUNMO0FBQ0FBLFdBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0FBQ2xEO0FBQ0EsUUFBSSxpREFBSixDQUFRO0FBQ05DLGFBQU8sS0FERDtBQUVOQyxhQUFPO0FBRkQsS0FBUjtBQUlELEdBTkQ7QUFPRCxDQVREIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTUhNIGZyb20gJy4vc3JjL21haW4nXG5cbigoKSA9PiB7XG4gIC8vIFdhaXQgZm9yIERPTSB0byBiZSBmdWxseSBsb2FkZWRcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cbiAgICBuZXcgTUhNKHtcbiAgICAgIGZpcnN0OiAnd293JyxcbiAgICAgIHRoaXJkOiAnJ1xuICAgIH0pXG4gIH0pXG59KSgpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MHM; });\nclass MHM {\n  constructor(opts) {\n    this.opts = opts;\n\n    // DEFAULTS\n    opts = {\n      first: this.opts.first || 'default value',\n      second: this.opts.second || 'default value',\n      third: this.opts.third || 'default value'\n\n      // ELEMENTS\n    };this.elements = {\n      snappers: {\n        linksList: document.querySelectorAll(`[data-mhm-item=\"snapper\"]`),\n        mainSnapper: document.querySelector('[data-mhm-offset]')\n      },\n      togglers: document.querySelectorAll(`[data-mhm-item=\"toggler\"]`),\n      scrollers: document.querySelector(`[data-mhm-scroll-sections]`)\n\n      /**\n      * Invokes methods based on the availability of the DOM elements they rely on.\n      */\n    };this.methodsLoaded = [];\n\n    this.init();\n\n    // Load message\n    console.info(`%c[MHM Utility Framework loaded: %c${this.methodsLoaded.length ? this.methodsLoaded : 'NO functions loaded'}%c]`, 'color:blue;', 'color:green; font-weight:bold;', 'color:blue;');\n  }\n\n  // UTILS\n\n  /**\n   * Invokes methods based on the availability of the DOM elements they rely on.\n   *\n   * @param {array} elementAndFns - Array of arrays made of elements which if available in\n   * the DOM invoke the method within that same array. (confusing, isn't it?)\n   * @returns {function} - Invokes methods passed to elementsAndFns\n   */\n  invokeIfNeeded(elementAndFns) {\n    elementAndFns.forEach(elementAndFn => {\n      const [el, fn] = elementAndFn;\n\n      if (el && el.length !== 0) {\n        this.methodsLoaded.push(fn.name);\n        return fn.apply(this);\n      }\n    });\n  }\n\n  /**\n   * Invokes the needed methods.\n   *\n   */\n  init() {\n    this.invokeIfNeeded([[this.elements.snappers.linksList, this.snapper], [this.elements.togglers, this.toggler], [this.elements.scrollers, this.scroller]]);\n  }\n\n  /**\n   * Scans the DOM for a 'Snapper' based on the constructor's\n   * {this.elements.snapper.mainSnapper} and adds a click eventListener to each of the snap links\n   * Each links is connected to the snapping position through unique attributes thatneed to match\n   * in order to trigger the snap-to: the former being 'data-mhm-target' and the\n   * latter 'data-mhm-id'. In {this.elements.snapper.mainSnapper} we need to define a\n   * 'data-mhm-offset' that gets the height of the element passed here and adds it to the top but just\n   * if that element, probably a header, is position:fixed\n   */\n  snapper() {\n    const isFixed = el => window.getComputedStyle(el).position === 'fixed',\n          offsetHeight = this.elements.snappers.mainSnapper ? this.elements.snappers.mainSnapper.offsetHeight : 0;\n\n    this.elements.snappers.linksList.forEach(snapper => {\n      const snappersItems = snapper.querySelectorAll('[data-mhm-target]');\n\n      snappersItems.forEach(snappersItem => {\n        snappersItem.addEventListener('click', () => {\n          const targetId = snappersItem.getAttribute('data-mhm-target'),\n                target = document.querySelector(`[data-mhm-id=${targetId}]`),\n                targetPosition = target ? target.getBoundingClientRect().top : 0,\n                mainSnapperTarget = document.querySelector(`#${this.elements.snappers.mainSnapper.getAttribute('data-mhm-offset')}`),\n                topScrollOffset = isFixed(mainSnapperTarget) ? Math.floor(window.pageYOffset + targetPosition - offsetHeight) : Math.floor(window.pageYOffset + targetPosition);\n\n          window.scrollTo({\n            top: topScrollOffset,\n            behavior: 'smooth'\n          });\n        });\n      });\n    });\n  }\n\n  /**\n   * Scans the DOM for 'Togglers' based on the constructor's\n   * {this.elements.togglers} and adds a click eventListener to each of the toggle elements.\n   * Each 'toggler' is connected to an element through unique attributes that\n   * need to match in order to trigger the snap-to: the former being 'data-mhm-target' and the\n   * latter 'data-mhm-id'. The class that needs toggling needs to be defined with an attribute\n   * being 'data-mhm-class'\n   */\n  toggler() {\n    this.elements.togglers.forEach(toggler => {\n      const targetId = toggler.getAttribute('data-mhm-target'),\n            classToToggle = toggler.getAttribute('data-mhm-class'),\n            target = document.querySelector(`[data-mhm-id=${targetId}]`);\n      toggler.addEventListener('click', () => {\n        target.classList.toggle(classToToggle);\n      });\n    });\n  }\n\n  scroller() {\n    let currentSection = '1';\n    const sections = this.elements.scrollers.querySelectorAll('[data-mhm-scroll-section]'),\n          offsetElement = document.querySelector(this.elements.scrollers.getAttribute('data-mhm-scroll-offset-element')),\n          offset = offsetElement ? offsetElement.clientHeight : 0,\n          arrows = document.querySelectorAll('[data-mhm-scroll-arrow]'),\n          lastSection = sections.length,\n          arrowUp = document.querySelector('[data-mhm-scroll-arrow=\"up\"]'),\n          arrowDown = document.querySelector('[data-mhm-scroll-arrow=\"down\"]'),\n          setCurrentSection = () => {\n      sections.forEach(section => {\n        const distanceFromTop = section.getBoundingClientRect().top - offset + window.scrollY,\n              sectionHeight = section.clientHeight;\n        // Update current section with the next one when going beyond 75% of the height of the section\n        if (distanceFromTop - sectionHeight * 0.25 <= window.scrollY) {\n          currentSection = section.getAttribute('data-mhm-scroll-section');\n        }\n\n        // DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG\n        // document.querySelector('.header__brand a').innerHTML = currentSection\n        // DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG-DEBUG\n      });\n      toggleArrows();\n    },\n          jumpTo = arrow => {\n      const direction = arrow.getAttribute('data-mhm-scroll-arrow'),\n            down = direction === 'down',\n            up = direction === 'up';\n      if (down && Number(currentSection) !== lastSection) {\n        currentSection = `${Number(currentSection) + 1}`;\n      } else if (up && Number(currentSection) !== 1) {\n        currentSection = `${Number(currentSection) - 1}`;\n      }\n      window.scrollTo({\n        top: document.querySelector(`[data-mhm-scroll-section=\"${currentSection}\"]`).getBoundingClientRect().top - offset + window.scrollY,\n        behavior: 'smooth'\n      });\n    },\n          toggleArrows = () => {\n      console.log('arrowstoggled');\n      if (Number(currentSection) === 1) {\n        arrowUp.style.opacity = 0;\n      } else if (Number(currentSection) === lastSection) {\n        arrowDown.style.opacity = 0;\n      } else {\n        arrowUp.style.opacity = 1;\n        arrowDown.style.opacity = 1;\n      }\n    },\n          populateSectionId = (section, i) => {\n      section.setAttribute('data-mhm-scroll-section', i);\n    };\n    // Display/Hide arrows on load\n    window.addEventListener('DOMContentLoaded', () => toggleArrows());\n    // Debounced current section updater\n    window.addEventListener('scroll', () => setCurrentSection());\n    // Add click listener to arrows\n    arrows.forEach(arrow => {\n      arrow.addEventListener('click', e => jumpTo(arrow));\n    });\n    // Populate sections id dynamically\n    sections.forEach((section, i) => populateSectionId(section, i + 1));\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy1saWJyYXJ5L01ITS9zcmMvbWFpbi5qcz80MzFhIl0sIm5hbWVzIjpbIk1ITSIsImNvbnN0cnVjdG9yIiwib3B0cyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJlbGVtZW50cyIsInNuYXBwZXJzIiwibGlua3NMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFpblNuYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlcnMiLCJzY3JvbGxlcnMiLCJtZXRob2RzTG9hZGVkIiwiaW5pdCIsImNvbnNvbGUiLCJpbmZvIiwibGVuZ3RoIiwiaW52b2tlSWZOZWVkZWQiLCJlbGVtZW50QW5kRm5zIiwiZm9yRWFjaCIsImVsZW1lbnRBbmRGbiIsImVsIiwiZm4iLCJwdXNoIiwibmFtZSIsImFwcGx5Iiwic25hcHBlciIsInRvZ2dsZXIiLCJzY3JvbGxlciIsImlzRml4ZWQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwicG9zaXRpb24iLCJvZmZzZXRIZWlnaHQiLCJzbmFwcGVyc0l0ZW1zIiwic25hcHBlcnNJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0IiwidGFyZ2V0UG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJtYWluU25hcHBlclRhcmdldCIsInRvcFNjcm9sbE9mZnNldCIsIk1hdGgiLCJmbG9vciIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImNsYXNzVG9Ub2dnbGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjdXJyZW50U2VjdGlvbiIsInNlY3Rpb25zIiwib2Zmc2V0RWxlbWVudCIsIm9mZnNldCIsImNsaWVudEhlaWdodCIsImFycm93cyIsImxhc3RTZWN0aW9uIiwiYXJyb3dVcCIsImFycm93RG93biIsInNldEN1cnJlbnRTZWN0aW9uIiwic2VjdGlvbiIsImRpc3RhbmNlRnJvbVRvcCIsInNjcm9sbFkiLCJzZWN0aW9uSGVpZ2h0IiwidG9nZ2xlQXJyb3dzIiwianVtcFRvIiwiYXJyb3ciLCJkaXJlY3Rpb24iLCJkb3duIiwidXAiLCJOdW1iZXIiLCJsb2ciLCJzdHlsZSIsIm9wYWNpdHkiLCJwb3B1bGF0ZVNlY3Rpb25JZCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJlIl0sIm1hcHBpbmdzIjoiOztBQUFlLE1BQU1BLEdBQU4sQ0FBVTtBQUN2QkMsY0FBYUMsSUFBYixFQUFtQjtBQUNqQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7O0FBRUE7QUFDQUEsV0FBTztBQUNMQyxhQUFPLEtBQUtELElBQUwsQ0FBVUMsS0FBVixJQUFtQixlQURyQjtBQUVMQyxjQUFRLEtBQUtGLElBQUwsQ0FBVUUsTUFBVixJQUFvQixlQUZ2QjtBQUdMQyxhQUFPLEtBQUtILElBQUwsQ0FBVUcsS0FBVixJQUFtQjs7QUFHNUI7QUFOTyxLQUFQLENBT0EsS0FBS0MsUUFBTCxHQUFnQjtBQUNkQyxnQkFBVTtBQUNSQyxtQkFBV0MsU0FBU0MsZ0JBQVQsQ0FBMkIsMkJBQTNCLENBREg7QUFFUkMscUJBQWFGLFNBQVNHLGFBQVQsQ0FBdUIsbUJBQXZCO0FBRkwsT0FESTtBQUtkQyxnQkFBVUosU0FBU0MsZ0JBQVQsQ0FBMkIsMkJBQTNCLENBTEk7QUFNZEksaUJBQVdMLFNBQVNHLGFBQVQsQ0FBd0IsNEJBQXhCOztBQUdiOzs7QUFUZ0IsS0FBaEIsQ0FZQSxLQUFLRyxhQUFMLEdBQXFCLEVBQXJCOztBQUVBLFNBQUtDLElBQUw7O0FBRUE7QUFDQUMsWUFBUUMsSUFBUixDQUFjLHNDQUFxQyxLQUFLSCxhQUFMLENBQW1CSSxNQUFuQixHQUMvQyxLQUFLSixhQUQwQyxHQUMxQixxQkFBc0IsS0FEL0MsRUFFQSxhQUZBLEVBRWUsZ0NBRmYsRUFFaUQsYUFGakQ7QUFHRDs7QUFFRDs7QUFFQTs7Ozs7OztBQU9BSyxpQkFBZ0JDLGFBQWhCLEVBQStCO0FBQzdCQSxrQkFBY0MsT0FBZCxDQUFzQkMsZ0JBQWdCO0FBQ3BDLFlB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QWVrRCxTQUFTO0FBQ3RCQSxZQUFNakMsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0M0QyxLQUFLWixPQUFPQyxLQUFQLENBQXJDO0FBQ0QsS0FGRDtBQUdBO0FBQ0FmLGFBQVNuQyxPQUFULENBQWlCLENBQUM0QyxPQUFELEVBQVVlLENBQVYsS0FBZ0JELGtCQUFrQmQsT0FBbEIsRUFBMkJlLElBQUksQ0FBL0IsQ0FBakM7QUFDRDtBQXpMc0IiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ITSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gb3B0c1xuXG4gICAgLy8gREVGQVVMVFNcbiAgICBvcHRzID0ge1xuICAgICAgZmlyc3Q6IHRoaXMub3B0cy5maXJzdCB8fCAnZGVmYXVsdCB2YWx1ZScsXG4gICAgICBzZWNvbmQ6IHRoaXMub3B0cy5zZWNvbmQgfHwgJ2RlZmF1bHQgdmFsdWUnLFxuICAgICAgdGhpcmQ6IHRoaXMub3B0cy50aGlyZCB8fCAnZGVmYXVsdCB2YWx1ZSdcbiAgICB9XG5cbiAgICAvLyBFTEVNRU5UU1xuICAgIHRoaXMuZWxlbWVudHMgPSB7XG4gICAgICBzbmFwcGVyczoge1xuICAgICAgICBsaW5rc0xpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW1obS1pdGVtPVwic25hcHBlclwiXWApLFxuICAgICAgICBtYWluU25hcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbWhtLW9mZnNldF0nKVxuICAgICAgfSxcbiAgICAgIHRvZ2dsZXJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1taG0taXRlbT1cInRvZ2dsZXJcIl1gKSxcbiAgICAgIHNjcm9sbGVyczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbWhtLXNjcm9sbC1zZWN0aW9uc11gKVxuICAgIH1cblxuICAgIC8qKlxuICAgKiBJbnZva2VzIG1ldGhvZHMgYmFzZWQgb24gdGhlIGF2YWlsYWJpbGl0eSBvZiB0aGUgRE9NIGVsZW1lbnRzIHRoZXkgcmVseSBvbi5cbiAgICovXG4gICAgdGhpcy5tZXRob2RzTG9hZGVkID0gW11cblxuICAgIHRoaXMuaW5pdCgpXG5cbiAgICAvLyBMb2FkIG1lc3NhZ2VcbiAgICBjb25zb2xlLmluZm8oYCVjW01ITSBVdGlsaXR5IEZyYW1ld29yayBsb2FkZWQ6ICVjJHt0aGlzLm1ldGhvZHNMb2FkZWQubGVuZ3RoXG4gICAgICA/IHRoaXMubWV0aG9kc0xvYWRlZCA6ICdOTyBmdW5jdGlvbnMgbG9hZGVkJ30lY11gLFxuICAgICdjb2xvcjpibHVlOycsICdjb2xvcjpncmVlbjsgZm9udC13ZWlnaHQ6Ym9sZDsnLCAnY29sb3I6Ymx1ZTsnKVxuICB9XG5cbiAgLy8gVVRJTFNcblxuICAvKipcbiAgICogSW52b2tlcyBtZXRob2RzIGJhc2VkIG9uIHRoZSBhdmFpbGFiaWxpdHkgb2YgdGhlIERPTSBlbGVtZW50cyB0aGV5IHJlbHkgb24uXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IGVsZW1lbnRBbmRGbnMgLSBBcnJheSBvZiBhcnJheXMgbWFkZSBvZiBlbGVtZW50cyB3aGljaCBpZiBhdmFpbGFibGUgaW5cbiAgICogdGhlIERPTSBpbnZva2UgdGhlIG1ldGhvZCB3aXRoaW4gdGhhdCBzYW1lIGFycmF5LiAoY29uZnVzaW5nLCBpc24ndCBpdD8pXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbn0gLSBJbnZva2VzIG1ldGhvZHMgcGFzc2VkIHRvIGVsZW1lbnRzQW5kRm5zXG4gICAqL1xuICBpbnZva2VJZk5lZWRlZCAoZWxlbWVudEFuZEZucykge1xuICAgIGVsZW1lbnRBbmRGbnMuZm9yRWFjaChlbGVtZW50QW5kRm4gPT4ge1xuICAgICAgY29uc3QgW2VsLCBmbl0gPSBlbGVtZW50QW5kRm5cblxuICAgICAgaWYgKGVsICYmIGVsLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLm1ldGhvZHNMb2FkZWQucHVzaChmbi5uYW1lKVxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgdGhlIG5lZWRlZCBtZXRob2RzLlxuICAgKlxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5pbnZva2VJZk5lZWRlZChbXG4gICAgICBbdGhpcy5lbGVtZW50cy5zbmFwcGVycy5saW5rc0xpc3QsIHRoaXMuc25hcHBlcl0sXG4gICAgICBbdGhpcy5lbGVtZW50cy50b2dnbGVycywgdGhpcy50b2dnbGVyXSxcbiAgICAgIFt0aGlzLmVsZW1lbnRzLnNjcm9sbGVycywgdGhpcy5zY3JvbGxlcl1cbiAgICBdKVxuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIHRoZSBET00gZm9yIGEgJ1NuYXBwZXInIGJhc2VkIG9uIHRoZSBjb25zdHJ1Y3RvcidzXG4gICAqIHt0aGlzLmVsZW1lbnRzLnNuYXBwZXIubWFpblNuYXBwZXJ9IGFuZCBhZGRzIGEgY2xpY2sgZXZlbnRMaXN0ZW5lciB0byBlYWNoIG9mIHRoZSBzbmFwIGxpbmtzXG4gICAqIEVhY2ggbGlua3MgaXMgY29ubmVjdGVkIHRvIHRoZSBzbmFwcGluZyBwb3NpdGlvbiB0aHJvdWdoIHVuaXF1ZSBhdHRyaWJ1dGVzIHRoYXRuZWVkIHRvIG1hdGNoXG4gICAqIGluIG9yZGVyIHRvIHRyaWdnZXIgdGhlIHNuYXAtdG86IHRoZSBmb3JtZXIgYmVpbmcgJ2RhdGEtbWhtLXRhcmdldCcgYW5kIHRoZVxuICAgKiBsYXR0ZXIgJ2RhdGEtbWhtLWlkJy4gSW4ge3RoaXMuZWxlbWVudHMuc25hcHBlci5tYWluU25hcHBlcn0gd2UgbmVlZCB0byBkZWZpbmUgYVxuICAgKiAnZGF0YS1taG0tb2Zmc2V0JyB0aGF0IGdldHMgdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCBwYXNzZWQgaGVyZSBhbmQgYWRkcyBpdCB0byB0aGUgdG9wIGJ1dCBqdXN0XG4gICAqIGlmIHRoYXQgZWxlbWVudCwgcHJvYmFibHkgYSBoZWFkZXIsIGlzIHBvc2l0aW9uOmZpeGVkXG4gICAqL1xuICBzbmFwcGVyICgpIHtcbiAgICBjb25zdCBpc0ZpeGVkID0gZWwgPT4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLnBvc2l0aW9uID09PSAnZml4ZWQnLFxuXG4gICAgICBvZmZzZXRIZWlnaHQgPSB0aGlzLmVsZW1lbnRzLnNuYXBwZXJzLm1haW5TbmFwcGVyXG4gICAgICAgID8gdGhpcy5lbGVtZW50cy5zbmFwcGVycy5tYWluU25hcHBlci5vZmZzZXRIZWlnaHQgOiAwXG5cbiAgICB0aGlzLmVsZW1lbnRzLnNuYXBwZXJzLmxpbmtzTGlzdC5mb3JFYWNoKHNuYXBwZXIgPT4ge1xuICAgICAgY29uc3Qgc25hcHBlcnNJdGVtcyA9IHNuYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWhtLXRhcmdldF0nKVxuXG4gICAgICBzbmFwcGVyc0l0ZW1zLmZvckVhY2goc25hcHBlcnNJdGVtID0+IHtcbiAgICAgICAgc25hcHBlcnNJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gc25hcHBlcnNJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1taG0tdGFyZ2V0JyksXG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1taG0taWQ9JHt0YXJnZXRJZH1dYCksXG4gICAgICAgICAgICB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldCA/IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgOiAwLFxuICAgICAgICAgICAgbWFpblNuYXBwZXJUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmVsZW1lbnRzLnNuYXBwZXJzLm1haW5TbmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1taG0tb2Zmc2V0Jyl9YCksXG4gICAgICAgICAgICB0b3BTY3JvbGxPZmZzZXQgPSBpc0ZpeGVkKG1haW5TbmFwcGVyVGFyZ2V0KVxuICAgICAgICAgICAgICA/IE1hdGguZmxvb3Iod2luZG93LnBhZ2VZT2Zmc2V0ICsgdGFyZ2V0UG9zaXRpb24gLSBvZmZzZXRIZWlnaHQpXG4gICAgICAgICAgICAgIDogTWF0aC5mbG9vcih3aW5kb3cucGFnZVlPZmZzZXQgKyB0YXJnZXRQb3NpdGlvbilcblxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHRvcFNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2NhbnMgdGhlIERPTSBmb3IgJ1RvZ2dsZXJzJyBiYXNlZCBvbiB0aGUgY29uc3RydWN0b3Inc1xuICAgKiB7dGhpcy5lbGVtZW50cy50b2dnbGVyc30gYW5kIGFkZHMgYSBjbGljayBldmVudExpc3RlbmVyIHRvIGVhY2ggb2YgdGhlIHRvZ2dsZSBlbGVtZW50cy5cbiAgICogRWFjaCAndG9nZ2xlcicgaXMgY29ubmVjdGVkIHRvIGFuIGVsZW1lbnQgdGhyb3VnaCB1bmlxdWUgYXR0cmlidXRlcyB0aGF0XG4gICAqIG5lZWQgdG8gbWF0Y2ggaW4gb3JkZXIgdG8gdHJpZ2dlciB0aGUgc25hcC10bzogdGhlIGZvcm1lciBiZWluZyAnZGF0YS1taG0tdGFyZ2V0JyBhbmQgdGhlXG4gICAqIGxhdHRlciAnZGF0YS1taG0taWQnLiBUaGUgY2xhc3MgdGhhdCBuZWVkcyB0b2dnbGluZyBuZWVkcyB0byBiZSBkZWZpbmVkIHdpdGggYW4gYXR0cmlidXRlXG4gICAqIGJlaW5nICdkYXRhLW1obS1jbGFzcydcbiAgICovXG4gIHRvZ2dsZXIgKCkge1xuICAgIHRoaXMuZWxlbWVudHMudG9nZ2xlcnMuZm9yRWFjaCh0b2dnbGVyID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldElkID0gdG9nZ2xlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWhtLXRhcmdldCcpLFxuICAgICAgICBjbGFzc1RvVG9nZ2xlID0gdG9nZ2xlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWhtLWNsYXNzJyksXG4gICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1obS1pZD0ke3RhcmdldElkfV1gKVxuICAgICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NUb1RvZ2dsZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHNjcm9sbGVyICgpIHtcbiAgICBsZXQgY3VycmVudFNlY3Rpb24gPSAnMSdcbiAgICBjb25zdCBzZWN0aW9ucyA9IHRoaXMuZWxlbWVudHMuc2Nyb2xsZXJzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1obS1zY3JvbGwtc2VjdGlvbl0nKSxcbiAgICAgIG9mZnNldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWxlbWVudHMuc2Nyb2xsZXJzLmdldEF0dHJpYnV0ZSgnZGF0YS1taG0tc2Nyb2xsLW9mZnNldC1lbGVtZW50JykpLFxuICAgICAgb2Zmc2V0ID0gb2Zmc2V0RWxlbWVudCA/IG9mZnNldEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogMCxcbiAgICAgIGFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1obS1zY3JvbGwtYXJyb3ddJyksXG4gICAgICBsYXN0U2VjdGlvbiA9IHNlY3Rpb25zLmxlbmd0aCxcbiAgICAgIGFycm93VXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1taG0tc2Nyb2xsLWFycm93PVwidXBcIl0nKSxcbiAgICAgIGFycm93RG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1obS1zY3JvbGwtYXJyb3c9XCJkb3duXCJdJyksXG4gICAgICBzZXRDdXJyZW50U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBkaXN0YW5jZUZyb21Ub3AgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG9mZnNldCArIHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgc2VjdGlvbkhlaWdodCA9IHNlY3Rpb24uY2xpZW50SGVpZ2h0XG4gICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgc2VjdGlvbiB3aXRoIHRoZSBuZXh0IG9uZSB3aGVuIGdvaW5nIGJleW9uZCA3NSUgb2YgdGhlIGhlaWdodCBvZiB0aGUgc2VjdGlvblxuICAgICAgICAgIGlmIChkaXN0YW5jZUZyb21Ub3AgLSAoc2VjdGlvbkhlaWdodCAqIDAuMjUpIDw9IHdpbmRvdy5zY3JvbGxZKSB7XG4gICAgICAgICAgICBjdXJyZW50U2VjdGlvbiA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLW1obS1zY3JvbGwtc2VjdGlvbicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gREVCVUctREVCVUctREVCVUctREVCVUctREVCVUctREVCVUctREVCVUctREVCVUctREVCVUctREVCVUctREVCVUdcbiAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19icmFuZCBhJykuaW5uZXJIVE1MID0gY3VycmVudFNlY3Rpb25cbiAgICAgICAgICAvLyBERUJVRy1ERUJVRy1ERUJVRy1ERUJVRy1ERUJVRy1ERUJVRy1ERUJVRy1ERUJVRy1ERUJVRy1ERUJVRy1ERUJVR1xuICAgICAgICB9KVxuICAgICAgICB0b2dnbGVBcnJvd3MoKVxuICAgICAgfSxcbiAgICAgIGp1bXBUbyA9IGFycm93ID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gYXJyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1obS1zY3JvbGwtYXJyb3cnKSxcbiAgICAgICAgICBkb3duID0gZGlyZWN0aW9uID09PSAnZG93bicsXG4gICAgICAgICAgdXAgPSBkaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgaWYgKGRvd24gJiYgTnVtYmVyKGN1cnJlbnRTZWN0aW9uKSAhPT0gbGFzdFNlY3Rpb24pIHtcbiAgICAgICAgICBjdXJyZW50U2VjdGlvbiA9IGAke051bWJlcihjdXJyZW50U2VjdGlvbikgKyAxfWBcbiAgICAgICAgfSBlbHNlIGlmICh1cCAmJiBOdW1iZXIoY3VycmVudFNlY3Rpb24pICE9PSAxKSB7XG4gICAgICAgICAgY3VycmVudFNlY3Rpb24gPSBgJHtOdW1iZXIoY3VycmVudFNlY3Rpb24pIC0gMX1gXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1obS1zY3JvbGwtc2VjdGlvbj1cIiR7Y3VycmVudFNlY3Rpb259XCJdYClcbiAgICAgICAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBvZmZzZXQgKyB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0b2dnbGVBcnJvd3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhcnJvd3N0b2dnbGVkJylcbiAgICAgICAgaWYgKE51bWJlcihjdXJyZW50U2VjdGlvbikgPT09IDEpIHtcbiAgICAgICAgICBhcnJvd1VwLnN0eWxlLm9wYWNpdHkgPSAwXG4gICAgICAgIH0gZWxzZSBpZiAoTnVtYmVyKGN1cnJlbnRTZWN0aW9uKSA9PT0gbGFzdFNlY3Rpb24pIHtcbiAgICAgICAgICBhcnJvd0Rvd24uc3R5bGUub3BhY2l0eSA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnJvd1VwLnN0eWxlLm9wYWNpdHkgPSAxXG4gICAgICAgICAgYXJyb3dEb3duLnN0eWxlLm9wYWNpdHkgPSAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwb3B1bGF0ZVNlY3Rpb25JZCA9IChzZWN0aW9uLCBpKSA9PiB7XG4gICAgICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdkYXRhLW1obS1zY3JvbGwtc2VjdGlvbicsIGkpXG4gICAgICB9XG4gICAgLy8gRGlzcGxheS9IaWRlIGFycm93cyBvbiBsb2FkXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0b2dnbGVBcnJvd3MoKSlcbiAgICAvLyBEZWJvdW5jZWQgY3VycmVudCBzZWN0aW9uIHVwZGF0ZXJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gc2V0Q3VycmVudFNlY3Rpb24oKSlcbiAgICAvLyBBZGQgY2xpY2sgbGlzdGVuZXIgdG8gYXJyb3dzXG4gICAgYXJyb3dzLmZvckVhY2goYXJyb3cgPT4ge1xuICAgICAgYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGp1bXBUbyhhcnJvdykpXG4gICAgfSlcbiAgICAvLyBQb3B1bGF0ZSBzZWN0aW9ucyBpZCBkeW5hbWljYWxseVxuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGkpID0+IHBvcHVsYXRlU2VjdGlvbklkKHNlY3Rpb24sIGkgKyAxKSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);