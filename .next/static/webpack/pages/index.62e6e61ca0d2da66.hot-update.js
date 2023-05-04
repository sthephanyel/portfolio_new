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

/***/ "./src/components/Skills.tsx":
/*!***********************************!*\
  !*** ./src/components/Skills.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _lib_urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/urql */ \"./src/lib/urql.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Skills() {\n    _s();\n    const [{ data: skills  }] = (0,_generated_graphql__WEBPACK_IMPORTED_MODULE_1__.useSkillsQuery)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const changeNavbarColor = ()=>{\n            if (window.scrollY >= 800) {\n                const headerCss = document.querySelector(\".headerSkillsCss\");\n                headerCss === null || headerCss === void 0 ? void 0 : headerCss.classList.add(\"animate__animated\", \"animate__bounceInLeft\", \"animate__fast\");\n                const skillCss = document.querySelectorAll(\".mainItemSkill\");\n                for(let i = 0; i < skillCss.length; i++){\n                    skillCss[i].classList.add(\"animate__animated\", \"animate__backInRight\", \"animate__fast\");\n                }\n            } else {\n                const headerCss = document.querySelector(\".headerSkillsCss\");\n                headerCss === null || headerCss === void 0 ? void 0 : headerCss.classList.remove(\"animate__animated\", \"animate__bounceInLeft\", \"animate__fast\");\n                const skillCss = document.querySelectorAll(\".mainItemSkill\");\n                for(let i = 0; i < skillCss.length; i++){\n                    skillCss[i].classList.remove(\"animate__animated\", \"animate__backInRight\", \"animate__fast\");\n                }\n            }\n        };\n        window.addEventListener(\"scroll\", changeNavbarColor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"skillsPage\",\n        className: \"flex flex-row w-full min-h-screen pt-16 overflow-hidden justify-center align-center text-center max-xl:flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-96 h-28 justify-center max-xl:w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"flex w-full items-center flex-row justify-center align-center headerSkillsCss\",\n                    children: [\n                        (skills === null || skills === void 0 ? void 0 : skills.skills) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-6 h-6 mr-2 bg-green-50 rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"relative flex h-6 w-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"relative inline-flex rounded-full h-6 w-6 bg-sky-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl font-semibold\",\n                            children: \"Skills\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full h-full justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full p-3 grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1\",\n                    children: (skills === null || skills === void 0 ? void 0 : skills.skills) ? skills === null || skills === void 0 ? void 0 : skills.skills.map((item, key)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex bg-black-200 w-full h-full justify-center items-center rounded-2xl border-2 border-green-300 mainItemSkill\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex w-full h-full justify-center items-center border-r-2 border-gray-600\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: item.pictureSkill.url,\n                                            alt: \"Image_skill\",\n                                            className: \"pr-3\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col w-full h-full justify-center items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-3xl border-b-2 border-gray-300 mb-3\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-lg\",\n                                                children: \"Experiencia\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-xl text-gray-200\",\n                                                children: [\n                                                    item.timeExpec,\n                                                    \" anos\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 19\n                            }, this)\n                        }, item.id, false, {\n                            fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex col-span-3 w-full h-full justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"relative flex h-3 w-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative inline-flex rounded-full h-3 w-3 bg-sky-500\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"pl-3\",\n                                children: \"Carregando...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sthephanyel\\\\Desktop\\\\portifolio_new\\\\src\\\\components\\\\Skills.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"C9A87eT9/83QP87iew26okzoAjc=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_1__.useSkillsQuery\n    ];\n});\n_c = Skills;\n// mantem o html em cache para ser utilizado posteriormente economizando api do graphql\nconst getStaticProps = async ()=>{\n    await _lib_urql__WEBPACK_IMPORTED_MODULE_2__.client.query(_generated_graphql__WEBPACK_IMPORTED_MODULE_1__.SkillsDocument, {}).toPromise();\n    return {\n        props: {\n            urqlState: _lib_urql__WEBPACK_IMPORTED_MODULE_2__.ssrCache.extractData()\n        }\n    };\n};\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yiw4REFBQ0c7Z0NBQUtILFdBQVU7O2tEQUNkLDhEQUFDRzt3Q0FBS0gsV0FBVTs7Ozs7O2tEQUNoQiw4REFBQ0c7d0NBQUtILFdBQVU7Ozs7Ozs7Ozs7OzswQ0FFbEIsOERBQUNJO2dDQUFHSixXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs0QkFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQTlFdUJuQjs7UUFFR0wsOERBQWNBOzs7S0FGakJLO0FBZ0Z4Qix1RkFBdUY7QUFDaEYsTUFBTWtDLGlCQUFpQyxVQUFZO0lBQ3hELE1BQU10QyxtREFBWSxDQUFDRiw4REFBY0EsRUFBRSxDQUFDLEdBQUcwQyxTQUFTO0lBRWhELE9BQU07UUFDRkMsT0FBTTtZQUNGQyxXQUFXekMsMkRBQW9CO1FBQ25DO0lBQ0o7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NraWxscy50c3g/YmRiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTa2lsbHNEb2N1bWVudCwgdXNlU2tpbGxzUXVlcnkgfSBmcm9tICdAL2dlbmVyYXRlZC9ncmFwaHFsJztcclxuaW1wb3J0IHsgY2xpZW50LCBzc3JDYWNoZSB9IGZyb20gJ0AvbGliL3VycWwnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscygpIHtcclxuXHJcbiAgY29uc3QgW3tkYXRhOiBza2lsbHN9XSA9IHVzZVNraWxsc1F1ZXJ5KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgY2hhbmdlTmF2YmFyQ29sb3IgPSAoKSA9PntcclxuICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSA4MDApe1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJDc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyU2tpbGxzQ3NzJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckNzcz8uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fYm91bmNlSW5MZWZ0JywgJ2FuaW1hdGVfX2Zhc3QnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNraWxsQ3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW5JdGVtU2tpbGwnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lsbENzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIHNraWxsQ3NzW2ldLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2JhY2tJblJpZ2h0JywgJ2FuaW1hdGVfX2Zhc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJDc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyU2tpbGxzQ3NzJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckNzcz8uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fYm91bmNlSW5MZWZ0JywgJ2FuaW1hdGVfX2Zhc3QnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNraWxsQ3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW5JdGVtU2tpbGwnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lsbENzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIHNraWxsQ3NzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2JhY2tJblJpZ2h0JywgJ2FuaW1hdGVfX2Zhc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hhbmdlTmF2YmFyQ29sb3IpO1xyXG59LFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gaWQ9J3NraWxsc1BhZ2UnIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyB3LWZ1bGwgbWluLWgtc2NyZWVuIHB0LTE2IG92ZXJmbG93LWhpZGRlbiBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgdGV4dC1jZW50ZXIgbWF4LXhsOmZsZXgtY29sJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy05NiBoLTI4IGp1c3RpZnktY2VudGVyIG1heC14bDp3LWZ1bGwnPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGhlYWRlclNraWxsc0Nzcyc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBza2lsbHM/LnNraWxscyA/KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNiBoLTYgbXItMiBiZy1ncmVlbi01MCByb3VuZGVkLWZ1bGwnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLTYgdy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtcGluZyBhYnNvbHV0ZSBpbmxpbmUtZmxleCBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtZnVsbCBiZy1za3ktNDAwIG9wYWNpdHktNzVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1mbGV4IHJvdW5kZWQtZnVsbCBoLTYgdy02IGJnLXNreS01MDBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1zZW1pYm9sZFwiPlNraWxsczwvaDE+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBwLTMgZ3JpZCBncmlkLWNvbHMtMyBnYXAtMyBtYXgtbGc6Z3JpZC1jb2xzLTIgbWF4LXNtOmdyaWQtY29scy0xJz5cclxuICAgICAgICAgIHtza2lsbHM/LnNraWxscyA/KFxyXG4gICAgICAgICAgICBza2lsbHM/LnNraWxscy5tYXAoKGl0ZW0sIGtleSk9PntcclxuICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGRyb3Atc2hhZG93LVswXzM1cHhfMzVweF9yZ2JhKDAsMCwwLDAuNDUpXSc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGJnLWJsYWNrLTIwMCB3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLTJ4bCBib3JkZXItMiBib3JkZXItZ3JlZW4tMzAwIG1haW5JdGVtU2tpbGwnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1yLTIgYm9yZGVyLWdyYXktNjAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBpY3R1cmVTa2lsbC51cmx9IGFsdD0nSW1hZ2Vfc2tpbGwnIGNsYXNzTmFtZT0ncHItMycvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIG1iLTMnPntpdGVtLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtbGcnPkV4cGVyaWVuY2lhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteGwgdGV4dC1ncmF5LTIwMCc+e2l0ZW0udGltZUV4cGVjfSBhbm9zPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApOihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggY29sLXNwYW4tMyB3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLTMgdy0zXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRlLXBpbmcgYWJzb2x1dGUgaW5saW5lLWZsZXggaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgYmctc2t5LTQwMCBvcGFjaXR5LTc1XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsIGgtMyB3LTMgYmctc2t5LTUwMFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ncGwtMyc+Q2FycmVnYW5kby4uLjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gbWFudGVtIG8gaHRtbCBlbSBjYWNoZSBwYXJhIHNlciB1dGlsaXphZG8gcG9zdGVyaW9ybWVudGUgZWNvbm9taXphbmRvIGFwaSBkbyBncmFwaHFsXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgY2xpZW50LnF1ZXJ5KFNraWxsc0RvY3VtZW50LCB7fSkudG9Qcm9taXNlKCk7XHJcblxyXG4gIHJldHVybntcclxuICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgdXJxbFN0YXRlOiBzc3JDYWNoZS5leHRyYWN0RGF0YSgpXHJcbiAgICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiU2tpbGxzRG9jdW1lbnQiLCJ1c2VTa2lsbHNRdWVyeSIsImNsaWVudCIsInNzckNhY2hlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJTa2lsbHMiLCJkYXRhIiwic2tpbGxzIiwiY2hhbmdlTmF2YmFyQ29sb3IiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaGVhZGVyQ3NzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwic2tpbGxDc3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkZXIiLCJzcGFuIiwiaDEiLCJtYXAiLCJpdGVtIiwia2V5IiwiaW1nIiwic3JjIiwicGljdHVyZVNraWxsIiwidXJsIiwiYWx0IiwibmFtZSIsInRpbWVFeHBlYyIsImdldFN0YXRpY1Byb3BzIiwicXVlcnkiLCJ0b1Byb21pc2UiLCJwcm9wcyIsInVycWxTdGF0ZSIsImV4dHJhY3REYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Skills.tsx\n"));

/***/ })

});