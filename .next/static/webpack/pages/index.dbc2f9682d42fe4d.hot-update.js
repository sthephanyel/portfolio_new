"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AboutMe.tsx":
/*!************************************!*\
  !*** ./src/components/AboutMe.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutMe; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction AboutMe() {\n    var _aboutMe_aboutMes__content, _aboutMe_aboutMes__content1, _aboutMe_aboutMes__content2;\n    _s();\n    const [{ data: aboutMe  }] = (0,_generated_graphql__WEBPACK_IMPORTED_MODULE_1__.useAboutMeQuery)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const changeNavbarColor = ()=>{\n            if (window.scrollY >= 86) {\n                const headerCss = document.querySelector(\".headerAnimateCss\");\n                headerCss === null || headerCss === void 0 ? void 0 : headerCss.classList.add(\"animate__animated\", \"animate__bounceInLeft\", \"animate__fast\");\n            } else {\n                const headerCss = document.querySelector(\".headerAnimateCss\");\n                headerCss === null || headerCss === void 0 ? void 0 : headerCss.classList.remove(\"animate__animated\", \"animate__bounceInLeft\", \"animate__fast\");\n            }\n            if (window.scrollY >= 150) {\n                const asideImage = document.querySelector(\".asideImageAnimateCss\");\n                asideImage === null || asideImage === void 0 ? void 0 : asideImage.classList.add(\"animate__animated\", \"animate__fadeInLeft\", \"animate__fast\");\n                const mainText = document.querySelector(\".mainTextAnimateCss\");\n                mainText === null || mainText === void 0 ? void 0 : mainText.classList.add(\"animate__animated\", \"animate__fadeInRight\", \"animate__fast\");\n            } else {\n                const asideImage = document.querySelector(\".asideImageAnimateCss\");\n                asideImage === null || asideImage === void 0 ? void 0 : asideImage.classList.remove(\"animate__animated\", \"animate__fadeInLeft\", \"animate__fast\");\n                const mainText = document.querySelector(\".mainTextAnimateCss\");\n                mainText === null || mainText === void 0 ? void 0 : mainText.classList.remove(\"animate__animated\", \"animate__fadeInRight\", \"animate__fast\");\n            }\n        };\n        window.addEventListener(\"scroll\", changeNavbarColor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col w-full h-screen overflow-hidden text-white bg-black-200 justify-center align-center text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full h-20 justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"flex items-center flex-row p-5 justify-center align-center headerAnimateCss\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-6 h-6 mr-2 bg-green-50 rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl font-semibold\",\n                            children: aboutMe === null || aboutMe === void 0 ? void 0 : aboutMe.aboutMes[0].title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full h-full justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"flex w-5/12 h-full p-20 asideImageAnimateCss\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-full h-full bg-blue-600 rounded-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: aboutMe === null || aboutMe === void 0 ? void 0 : aboutMe.aboutMes[0].picture.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"flex flex-col w-3/5 h-full p-5 justify-center text-center mainTextAnimateCss\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-8 text-left text-xl mt-6 prose prose-lg mx-auto\",\n                                dangerouslySetInnerHTML: {\n                                    __html: typeof ((_aboutMe_aboutMes__content = aboutMe === null || aboutMe === void 0 ? void 0 : aboutMe.aboutMes[0].content) === null || _aboutMe_aboutMes__content === void 0 ? void 0 : _aboutMe_aboutMes__content.html) === \"string\" ? (_aboutMe_aboutMes__content1 = aboutMe === null || aboutMe === void 0 ? void 0 : aboutMe.aboutMes[0].content) === null || _aboutMe_aboutMes__content1 === void 0 ? void 0 : _aboutMe_aboutMes__content1.html : \"\"\n                                },\n                                children: (_aboutMe_aboutMes__content2 = aboutMe === null || aboutMe === void 0 ? void 0 : aboutMe.aboutMes[0].content) === null || _aboutMe_aboutMes__content2 === void 0 ? void 0 : _aboutMe_aboutMes__content2.markdown\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-left text-lg before:content-['</>'] before:pr-2 before:text-lg before:ml-0.5 before:text-yellow-50\",\n                                    children: aboutMe === null || aboutMe === void 0 ? void 0 : aboutMe.aboutMes[0].titleFinal\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\new_portfolio\\\\src\\\\components\\\\AboutMe.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(AboutMe, \"dDihLdcIg7oQCZF9N7Dp3DDshNM=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_1__.useAboutMeQuery\n    ];\n});\n_c = AboutMe;\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qix5Q0FBQUEsS0FBQUEsSUFBQUEsNEJBQThCNkIsSUFBSSxHQUVuQyxFQUFFO2dDQUNOOzBDQUNLN0IsQ0FBQUEsOEJBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU21CLFFBQVEsQ0FBQyxFQUFFLENBQUNTLE9BQU8sY0FBNUI1Qix5Q0FBQUEsS0FBQUEsSUFBQUEsNEJBQThCOEIsUUFBUTs7Ozs7OzBDQUUvQyw4REFBQ2Q7Z0NBQUlELFdBQVU7MENBQ1gsNEVBQUNHO29DQUFHSCxXQUFVOzhDQUEyR2Ysb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTbUIsUUFBUSxDQUFDLEVBQUUsQ0FBQ1ksVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEwsQ0FBQztHQWhFdUJoQzs7UUFFTUgsK0RBQWVBOzs7S0FGckJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fib3V0TWUudHN4P2FhYWEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZUFib3V0TWVRdWVyeSB9IGZyb20gJ0AvZ2VuZXJhdGVkL2dyYXBocWwnO1xyXG5pbXBvcnQgeyBjbGllbnQsIHNzckNhY2hlIH0gZnJvbSAnQC9saWIvdXJxbCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRNZSgpe1xyXG5cclxuICAgIGNvbnN0IFt7ZGF0YTogYWJvdXRNZX1dID0gdXNlQWJvdXRNZVF1ZXJ5KCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgY2hhbmdlTmF2YmFyQ29sb3IgPSAoKSA9PntcclxuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPj0gODYpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyQ3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckFuaW1hdGVDc3MnKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlckNzcz8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fYm91bmNlSW5MZWZ0JywgJ2FuaW1hdGVfX2Zhc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyQ3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckFuaW1hdGVDc3MnKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlckNzcz8uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fYm91bmNlSW5MZWZ0JywgJ2FuaW1hdGVfX2Zhc3QnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPj0gMTUwKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFzaWRlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGVJbWFnZUFuaW1hdGVDc3MnKTtcclxuICAgICAgICAgICAgICAgIGFzaWRlSW1hZ2U/LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2ZhZGVJbkxlZnQnLCAnYW5pbWF0ZV9fZmFzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5UZXh0QW5pbWF0ZUNzcycpO1xyXG4gICAgICAgICAgICAgICAgbWFpblRleHQ/LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2ZhZGVJblJpZ2h0JywgJ2FuaW1hdGVfX2Zhc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNpZGVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZUltYWdlQW5pbWF0ZUNzcycpO1xyXG4gICAgICAgICAgICAgICAgYXNpZGVJbWFnZT8uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fZmFkZUluTGVmdCcsICdhbmltYXRlX19mYXN0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblRleHRBbmltYXRlQ3NzJyk7XHJcbiAgICAgICAgICAgICAgICBtYWluVGV4dD8uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fZmFkZUluUmlnaHQnLCAnYW5pbWF0ZV9fZmFzdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hhbmdlTmF2YmFyQ29sb3IpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctZnVsbCBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gdGV4dC13aGl0ZSBiZy1ibGFjay0yMDAganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGgtMjAganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGZsZXgtcm93IHAtNSBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgaGVhZGVyQW5pbWF0ZUNzcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNiBoLTYgbXItMiBiZy1ncmVlbi01MCByb3VuZGVkLWZ1bGwnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LXNlbWlib2xkXCI+e2Fib3V0TWU/LmFib3V0TWVzWzBdLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBoLWZ1bGwganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT0nZmxleCB3LTUvMTIgaC1mdWxsIHAtMjAgYXNpZGVJbWFnZUFuaW1hdGVDc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBoLWZ1bGwgYmctYmx1ZS02MDAgcm91bmRlZC0yeGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWJvdXRNZT8uYWJvdXRNZXNbMF0ucGljdHVyZS51cmx9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy0zLzUgaC1mdWxsIHAtNSBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBtYWluVGV4dEFuaW1hdGVDc3MnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTggdGV4dC1sZWZ0IHRleHQteGwgbXQtNiBwcm9zZSBwcm9zZS1sZyBteC1hdXRvJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFib3V0TWU/LmFib3V0TWVzWzBdLmNvbnRlbnQ/Lmh0bWwgPT09ICdzdHJpbmcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhYm91dE1lPy5hYm91dE1lc1swXS5jb250ZW50Py5odG1sKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWJvdXRNZT8uYWJvdXRNZXNbMF0uY29udGVudD8ubWFya2Rvd259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1sZyBiZWZvcmU6Y29udGVudC1bJzwvPiddIGJlZm9yZTpwci0yIGJlZm9yZTp0ZXh0LWxnIGJlZm9yZTptbC0wLjUgYmVmb3JlOnRleHQteWVsbG93LTUwXCI+e2Fib3V0TWU/LmFib3V0TWVzWzBdLnRpdGxlRmluYWx9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VBYm91dE1lUXVlcnkiLCJSZWFjdCIsInVzZUVmZmVjdCIsIkFib3V0TWUiLCJhYm91dE1lIiwiZGF0YSIsImNoYW5nZU5hdmJhckNvbG9yIiwid2luZG93Iiwic2Nyb2xsWSIsImhlYWRlckNzcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFzaWRlSW1hZ2UiLCJtYWluVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaGVhZGVyIiwiaDEiLCJhYm91dE1lcyIsInRpdGxlIiwiYXNpZGUiLCJpbWciLCJzcmMiLCJwaWN0dXJlIiwidXJsIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50IiwiaHRtbCIsIm1hcmtkb3duIiwidGl0bGVGaW5hbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AboutMe.tsx\n"));

/***/ })

});