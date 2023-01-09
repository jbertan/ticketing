"use strict";
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
exports.id = "pages/tickets/new";
exports.ids = ["pages/tickets/new"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst BuildClient = ({ req  })=>{\n    if (true) {\n        //We re on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuildClient);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLGNBQWMsQ0FBQyxFQUFFQyxJQUFHLEVBQUUsR0FBSztJQUMvQixJQUFJLElBQTZCLEVBQUU7UUFDakMscUJBQXFCO1FBQ3JCLE9BQU9GLG9EQUFZLENBQUM7WUFDbEJJLFNBQ0U7WUFDRkMsU0FBU0gsSUFBSUcsT0FBTztRQUN0QjtJQUNGLE9BQU8sRUFLTjtBQUNIO0FBQ0EsaUVBQWVKLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2M2ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBCdWlsZENsaWVudCA9ICh7IHJlcSB9KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy9XZSByZSBvbiB0aGUgc2VydmVyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOlxuICAgICAgICBcImh0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbFwiLFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy9XZSBtdXN0IGJlIG9uIHRoZSBicm93c2VyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOiBcIi9cIixcbiAgICB9KTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkQ2xpZW50O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQnVpbGRDbGllbnQiLCJyZXEiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/tickets/new.js":
/*!******************************!*\
  !*** ./pages/tickets/new.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/build-client */ \"./api/build-client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_1__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst NewTicket = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mt-10 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-lg text-zinc-700s\",\n                    children: \"Create Tickets\"\n                }, void 0, false, {\n                    fileName: \"/home/bertan/Desktop/reactWorkSpace/ticketing/client/pages/tickets/new.js\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/bertan/Desktop/reactWorkSpace/ticketing/client/pages/tickets/new.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                id: \"title\",\n                className: \"text-base\",\n                children: \"Title\"\n            }, void 0, false, {\n                fileName: \"/home/bertan/Desktop/reactWorkSpace/ticketing/client/pages/tickets/new.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"title\",\n                className: \"h-6 w-16 rounded-lg border-sky-200\"\n            }, void 0, false, {\n                fileName: \"/home/bertan/Desktop/reactWorkSpace/ticketing/client/pages/tickets/new.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bertan/Desktop/reactWorkSpace/ticketing/client/pages/tickets/new.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async (context)=>{\n    //BuildClient on ly gives instance we need to supply .get api properties\n    if (context.req.headers.cookie && context.req.headers.host === \"ticketing.dev\") {\n        const { data  } = await (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context).get(\"/api/users/currentuser\");\n        console.log(data);\n        return {\n            props: {\n                data\n            }\n        };\n    } else {\n        return {\n            props: {\n                data: \"Need to sign in\"\n            }\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTicket);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aWNrZXRzL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ2pELE1BQU1DLFlBQVksQ0FBQ0MsUUFBVTtJQUMzQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBeUI7Ozs7Ozs7Ozs7OzBCQUV6Qyw4REFBQ0U7Z0JBQU1DLElBQUc7Z0JBQVFILFdBQVU7MEJBQVk7Ozs7OzswQkFHeEMsOERBQUNJO2dCQUFNRCxJQUFHO2dCQUFRSCxXQUFVOzs7Ozs7Ozs7Ozs7QUFHbEM7QUFFTyxNQUFNSyxxQkFBcUIsT0FBT0MsVUFBWTtJQUNuRCx3RUFBd0U7SUFDeEUsSUFDRUEsUUFBUUMsR0FBRyxDQUFDQyxPQUFPLENBQUNDLE1BQU0sSUFDMUJILFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDRSxJQUFJLEtBQUssaUJBQzdCO1FBQ0EsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNZiw2REFBV0EsQ0FBQ1UsU0FBU00sR0FBRyxDQUFDO1FBQ2hEQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osT0FBTztZQUFFYixPQUFPO2dCQUFFYTtZQUFLO1FBQUU7SUFDM0IsT0FBTztRQUNMLE9BQU87WUFBRWIsT0FBTztnQkFBRWEsTUFBTTtZQUFrQjtRQUFFO0lBQzlDLENBQUM7QUFDSCxFQUFFO0FBQ0YsaUVBQWVkLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy90aWNrZXRzL25ldy5qcz8wZGNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWlsZENsaWVudCBmcm9tIFwiLi4vLi4vYXBpL2J1aWxkLWNsaWVudFwiO1xuY29uc3QgTmV3VGlja2V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTEwIHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LXppbmMtNzAwc1wiPkNyZWF0ZSBUaWNrZXRzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGxhYmVsIGlkPVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj5cbiAgICAgICAgVGl0bGVcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImgtNiB3LTE2IHJvdW5kZWQtbGcgYm9yZGVyLXNreS0yMDBcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIC8vQnVpbGRDbGllbnQgb24gbHkgZ2l2ZXMgaW5zdGFuY2Ugd2UgbmVlZCB0byBzdXBwbHkgLmdldCBhcGkgcHJvcGVydGllc1xuICBpZiAoXG4gICAgY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgJiZcbiAgICBjb250ZXh0LnJlcS5oZWFkZXJzLmhvc3QgPT09IFwidGlja2V0aW5nLmRldlwiXG4gICkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgQnVpbGRDbGllbnQoY29udGV4dCkuZ2V0KFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhOiBcIk5lZWQgdG8gc2lnbiBpblwiIH0gfTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5ld1RpY2tldDtcbiJdLCJuYW1lcyI6WyJCdWlsZENsaWVudCIsIk5ld1RpY2tldCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsImlkIiwiaW5wdXQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsImhvc3QiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tickets/new.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/tickets/new.js"));
module.exports = __webpack_exports__;

})();