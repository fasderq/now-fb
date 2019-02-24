module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/dynamic */ "next-server/dynamic");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/loading */ "./src/loading.tsx");
var _jsxFileName = "/home/alex/projects/now-face/pages/index.tsx";

// import { loadFacebookScript } from '../components';


var FacebookLogin = next_server_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../src/login */ "./src/login.tsx"));
}, {
  ssr: false,
  loading: _src_loading__WEBPACK_IMPORTED_MODULE_2__["Loading"],
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../src/login */ "./src/login.tsx")];
    },
    modules: ['../src/login']
  }
}); // interface Load {
//     loaded: boolean;
//     authorized: boolean;
//     user: fb.AuthResponse | null;
// }

var options = {
  appId: '398277270719379',
  cookie: true,
  xfbml: true,
  version: 'v3.2'
};

var Login = function Login() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "SUKA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FacebookLogin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Login); // export const loadFacebookScript = async () => {
//     return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//         const script = document.getElementById('fb-root');
//         if (script) {
//             resolve(true);
//         }
//     })
// }
// export default class FacebookAuth extends Component<{}, Load> {
//     constructor(props: {}) {
//         super(props)
//         this.loadFacebookScript = this.loadFacebookScript.bind(this);
//         this.checkFacebookSDK = this.checkFacebookSDK.bind(this);
//         this.load = this.load.bind(this);
//         this.init = this.init.bind(this);
//         this.state = {
//             loaded: false,
//             authorized: false,
//             user: null
//         };
//     }
//     // public static async getInitialProps() {
//     //     const page: Document = document;
//     //     page.getElementById('fb-root');
//     //     // const loadFacebookScript = (document: Document) => {
//     //     //     return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//     //     //         const script = document.getElementById('fb-root');
//     //     //         if (script) {
//     //     //             resolve(true);
//     //     //         }
//     //     //     })
//     //     // }
//     //     // const t = await loadFacebookScript(page);
//     //     // console.log(t);
//     //     return { loaded: false }
//     // }
//     public loadFacebookScript(): Promise<boolean> {
//         return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//             const script = document.getElementById('fb-root');
//             if (script) {
//                 resolve(true);
//             }
//         })
//     }
//     public checkFacebookSDK(): Promise<boolean> {
//         return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//             if (typeof FB !== 'undefined') {
//                 resolve(true);
//             }
//         })
//     }
//     public load() {
//         return new Promise<void>((resolve) => {
//             this.loadFacebookScript().then((loaded: boolean): void => {
//                 console.log(loaded);
//                 if (loaded) {
//                     this.checkFacebookSDK().then((checked: boolean): void => {
//                         this.setState({ loaded: checked || false });
//                     });
//                 }
//             });
//             if (this.state.loaded) {
//                 resolve();
//             }
//         });
//     }
//     public init() {
//         return new Promise((resolve) => {
//             this.load().then(() => {
//                 FB.init(options);
//                 return new Promise<fb.AuthResponse | null>((resolve) => {
//                     FB.getLoginStatus(({ status, authResponse }: fb.StatusResponse) => {
//                         if (status && status === 'connected') {
//                             this.setState({ authorized: true });
//                             resolve(authResponse);
//                         } else {
//                             resolve(null);
//                         }
//                     });
//                 })
//             });
//             resolve();
//         })
//     }
//     public componentDidMount() {
//         // console.log(document);
//         // const script = document.getElementById('fb-root');
//         // console.log(script);
//         // const loadFacebookScript = () => {
//         //     return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//         //         const script = document.getElementById('fb-root');
//         //         if (script) {
//         //             resolve(true);
//         //         }
//         //     })
//         // }
//         // loadFacebookScript().then((loaded: boolean): void => {
//         //     console.log(loaded);
//         //     if (loaded) {
//         //         // this.checkFacebookSDK().then((checked: boolean): void => {
//         //             this.setState({ loaded: true });
//         //         // });
//         //     }
//         // });
//     }
//     public render() {
//         console.log(this.props);
//         return (
//             <div>EBAL REFUCK ANAL</div>
//         );
//     }
// }

/***/ }),

/***/ "./src/loading.tsx":
/*!*************************!*\
  !*** ./src/loading.tsx ***!
  \*************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alex/projects/now-face/src/loading.tsx";

var Loading = function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "\u041F\u041E\u0414\u041E\u0416\u0414\u0418 \u0421\u0423\u0427\u0410\u0420\u0410, \u041F\u041E\u0413\u0420\u0423\u0417\u0418\u041C \u0412\u0421\u042E \u0425\u0423\u0419\u041D\u042E");
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alex/projects/now-face/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dynamic":
/*!**************************************!*\
  !*** external "next-server/dynamic" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map