webpackHotUpdate(1,{

/***/ "./src/login.tsx":
/*!***********************!*\
  !*** ./src/login.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacebookLogin; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/home/alex/projects/now-face/src/login.tsx";


var options = {
  appId: '398277270719379',
  cookie: true,
  xfbml: true,
  version: 'v3.2'
};

var WithSubscription =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WithSubscription, _Component);

  function WithSubscription() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WithSubscription);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSubscription).apply(this, arguments));
  }

  return WithSubscription;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var FacebookLogin =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FacebookLogin, _Component2);

  function FacebookLogin(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FacebookLogin);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(FacebookLogin).call(this, props)); // this.loadFacebookScript = this.loadFacebookScript.bind(this);
    // this.checkFacebookSDK = this.checkFacebookSDK.bind(this);
    // this.load = this.load.bind(this);
    // this.init = this.init.bind(this);

    _this.state = {
      loaded: false,
      authorized: false,
      user: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FacebookLogin, [{
    key: "checkFacebookSDK",
    value: function checkFacebookSDK() {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
        var script = document.getElementById('fb-root');

        if (script) {
          resolve(true);
        }
      });
    } // protected loadFacebookSDK() {
    //     return (
    //         <script src='https://satana.dg02.ru/public/facebook-sdk-js.js' />
    //     )
    // }

  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
        _this2.checkFacebookSDK().then(function () {
          console.log('facebook sdk loaded');
          resolve();
        });
      });
    }
  }, {
    key: "withSubscription",
    value: function withSubscription(WrappedComponent) {
      console.log(WrappedComponent);
      return WithSubscription;
    }
  }, {
    key: "getDisplayName",
    value: function getDisplayName(WrappedComponent) {
      return WrappedComponent || WrappedComponent || 'Component';
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init().then(function () {
        console.log('inited');
        FB.init(options);
        FB.getLoginStatus(function (_ref) {
          var status = _ref.status,
              authResponse = _ref.authResponse;
          console.log(status, 'status');
          console.log(authResponse, 'authResponse');

          if (status === 'connected') {
            console.log('connected');
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      });
    }
  }]);

  return FacebookLogin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=1.d7ddc4a83bc2ccd64183.hot-update.js.map