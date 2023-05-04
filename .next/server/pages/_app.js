/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/urql.ts":
/*!*************************!*\
  !*** ./src/lib/urql.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"ssrCache\": () => (/* binding */ ssrCache)\n/* harmony export */ });\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_0__);\n\n// yarn add @graphql-codegen/cli @graphql-codegen/import-types-preset @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-urql -D\nconst isServerSide = \"undefined\" == \"undefined\";\nconst ssrCache = (0,urql__WEBPACK_IMPORTED_MODULE_0__.ssrExchange)({\n    isClient: !isServerSide\n});\nconst client = (0,urql__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    url: `${\"https://api-sa-east-1.hygraph.com/v2/clgpm3c870lky01up9f5s2ozd/master\"}`,\n    exchanges: [\n        urql__WEBPACK_IMPORTED_MODULE_0__.dedupExchange,\n        urql__WEBPACK_IMPORTED_MODULE_0__.cacheExchange,\n        ssrCache,\n        urql__WEBPACK_IMPORTED_MODULE_0__.fetchExchange\n    ]\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3VycWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4RjtBQUM5Riw0S0FBNEs7QUFDNUssTUFBTUssZUFBZSxlQUFpQjtBQUN0QyxNQUFNQyxXQUFXSixpREFBV0EsQ0FBQztJQUFDSyxVQUFXLENBQUNGO0FBQVk7QUFFdEQsTUFBTUcsU0FBU1Isa0RBQVlBLENBQUM7SUFDeEJTLEtBQUssQ0FBQyxFQUFFQyx1RUFBK0IsQ0FBQyxDQUFDO0lBQ3pDRyxXQUFXO1FBQUNaLCtDQUFhQTtRQUFFRywrQ0FBYUE7UUFBRUU7UUFBVUgsK0NBQWFBO0tBQUM7QUFDdEU7QUFHMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdfcG9ydGlmb2xpby8uL3NyYy9saWIvdXJxbC50cz9hYWY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ2xpZW50LCBkZWR1cEV4Y2hhbmdlLCBzc3JFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSwgY2FjaGVFeGNoYW5nZSwgfSBmcm9tICd1cnFsJztcclxuLy8geWFybiBhZGQgQGdyYXBocWwtY29kZWdlbi9jbGkgQGdyYXBocWwtY29kZWdlbi9pbXBvcnQtdHlwZXMtcHJlc2V0IEBncmFwaHFsLWNvZGVnZW4vdHlwZXNjcmlwdCBAZ3JhcGhxbC1jb2RlZ2VuL3R5cGVzY3JpcHQtb3BlcmF0aW9ucyBAZ3JhcGhxbC1jb2RlZ2VuL3R5cGVzY3JpcHQtdXJxbCAtRFxyXG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnO1xyXG5jb25zdCBzc3JDYWNoZSA9IHNzckV4Y2hhbmdlKHtpc0NsaWVudCA6ICFpc1NlcnZlclNpZGV9KTtcclxuXHJcbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgICB1cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RCX1VSUUx9YCxcclxuICAgIGV4Y2hhbmdlczogW2RlZHVwRXhjaGFuZ2UsIGNhY2hlRXhjaGFuZ2UsIHNzckNhY2hlLCBmZXRjaEV4Y2hhbmdlXSxcclxufSlcclxuXHJcblxyXG5leHBvcnQge2NsaWVudCwgc3NyQ2FjaGV9O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiZGVkdXBFeGNoYW5nZSIsInNzckV4Y2hhbmdlIiwiZmV0Y2hFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJpc1NlcnZlclNpZGUiLCJzc3JDYWNoZSIsImlzQ2xpZW50IiwiY2xpZW50IiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0RCX1VSUUwiLCJleGNoYW5nZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/urql.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/urql */ \"./src/lib/urql.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    if (pageProps.urqlState) {\n        _lib_urql__WEBPACK_IMPORTED_MODULE_1__.ssrCache.restoreData(pageProps.urqlState);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(urql__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        value: _lib_urql__WEBPACK_IMPORTED_MODULE_1__.client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDaEI7QUFFRTtBQUNWO0FBRU4sU0FBU0csSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBRTlELElBQUdBLFVBQVVDLFNBQVMsRUFBQztRQUNyQkwsMkRBQW9CLENBQUNJLFVBQVVDLFNBQVM7SUFDMUMsQ0FBQztJQUVELHFCQUNFLDhEQUFDSiwwQ0FBUUE7UUFBQ00sT0FBT1IsNkNBQU1BO2tCQUNyQiw0RUFBQ0k7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3X3BvcnRpZm9saW8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQsIHNzckNhY2hlIH0gZnJvbSAnQC9saWIvdXJxbCdcclxuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3VycWwnXHJcbmltcG9ydCAnYW5pbWF0ZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuXHJcbiAgaWYocGFnZVByb3BzLnVycWxTdGF0ZSl7XHJcbiAgICBzc3JDYWNoZS5yZXN0b3JlRGF0YShwYWdlUHJvcHMudXJxbFN0YXRlKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciB2YWx1ZT17Y2xpZW50fT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbImNsaWVudCIsInNzckNhY2hlIiwiUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1cnFsU3RhdGUiLCJyZXN0b3JlRGF0YSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("urql");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();