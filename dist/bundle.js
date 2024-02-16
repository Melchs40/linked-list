/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nclass Node {\n  constructor() {\n    this.value = null;\n    this.next = null;\n  }\n  editValue(value) {\n    this.value = value;\n  }\n\n  editNext(next) {\n    this.next = next;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.data = null;\n    this.amount = 0;\n  }\n\n  append(value) {\n    let node = new Node();\n    if (!this.data) {\n      this.data = node;\n      node.value = value;\n    } else {\n      let list = this.data;\n      while (list.next) {\n        list = list.next;\n      }\n      list.next = node;\n      node.value = value;\n    }\n    this.amount++;\n  }\n\n  prepend(value) {\n    let node = new Node();\n    if (!this.data) {\n      this.data = node;\n      node.value = value;\n    } else {\n      let temp = this.data;\n      node.value = value;\n      node.next = temp;\n      this.data = node;\n    }\n    this.amount++;\n  }\n\n  size() {\n    return this.amount;\n  }\n\n  head() {\n    if (!this.data) {\n      return 'no data';\n    } else return this.data;\n  }\n\n  tail() {\n    if (!this.data) {\n      return 'no data';\n    } else {\n      let list = this.data;\n      while (list.next) {\n        list = list.next;\n      }\n      return list;\n    }\n  }\n\n  pop() {\n    if (!this.data) {\n      return 'no data';\n    } else {\n      let list = this.data;\n      while (list.next.next) {\n        list = list.next;\n      }\n      list.next = null;\n    }\n  }\n\n  contains(value) {\n    if (!this.data) {\n      return 'no data';\n    } else {\n      let list = this.data;\n      while (list) {\n        if (list.value == value) {\n          return `Your list contains ${value}`;\n        }\n        list = list.next;\n      }\n      return `Your list doesn't contain ${value}`;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://linked-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;