webpackHotUpdate("static\\development\\pages\\lottery\\show.js",{

/***/ "./pages/lottery/show.js":
/*!*******************************!*\
  !*** ./pages/lottery/show.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_lottery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ethereum/lottery */ "./ethereum/lottery.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_EntryForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/EntryForm */ "./components/EntryForm.js");
/* harmony import */ var _components_PickWinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/PickWinner */ "./components/PickWinner.js");
/* harmony import */ var _components_Withdraw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Withdraw */ "./components/Withdraw.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_15__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var LotteryShow = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LotteryShow, _Component);

  var _super = _createSuper(LotteryShow);

  function LotteryShow() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LotteryShow);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LotteryShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          numberOfPlayers = _this$props.numberOfPlayers,
          valuePremium = _this$props.valuePremium,
          restPlayers = _this$props.restPlayers,
          countPlayers = _this$props.countPlayers,
          convert = _this$props.convert;
      var items = [{
        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].utils.fromWei(convert, 'ether'),
        meta: 'Value to contribute to this raffle',
        description: 'The value of premium for winner the raffle',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].utils.fromWei(valuePremium, 'ether'),
        meta: 'Value of Premium',
        description: 'The value of premium for winner the raffle',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: restPlayers,
        meta: 'How many remain',
        description: 'Number of participants left to complete the draw',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: countPlayers,
        meta: 'Number of players',
        description: 'Number of players to carry out the draw',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: numberOfPlayers,
        meta: 'Already entered',
        description: 'Players who have already joined',
        style: {
          overflowWrap: 'break-word'
        }
      }];
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        width: 10
      }, this.renderCards()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
        width: 6
      }, __jsx(_components_EntryForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
        address: this.props.address
      }), __jsx(_components_PickWinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
        address: this.props.address
      }), __jsx(_components_Withdraw__WEBPACK_IMPORTED_MODULE_14__["default"], {
        address: this.props.address
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var lottery, players, premium, restPlayers, countPlayers, entryValue, convert, convertBin;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lottery = Object(_ethereum_lottery__WEBPACK_IMPORTED_MODULE_9__["default"])(props.query.address);
                _context.next = 3;
                return lottery.methods.getPlayers().call();

              case 3:
                players = _context.sent;
                _context.next = 6;
                return lottery.methods.getPremium().call();

              case 6:
                premium = _context.sent;
                _context.next = 9;
                return lottery.methods.getRestPlayers().call();

              case 9:
                restPlayers = _context.sent;
                _context.next = 12;
                return lottery.methods.getCountPlayers().call();

              case 12:
                countPlayers = _context.sent;
                _context.next = 15;
                return lottery.methods.entryValue().call();

              case 15:
                entryValue = _context.sent;
                convert = String(entryValue);
                convertBin = parseInt(restPlayers, 9); //console.log(premium);
                //console.log(restPlayers);
                //console.log(countPlayers);

                return _context.abrupt("return", {
                  address: props.query.address,
                  numberOfPlayers: players,
                  valuePremium: premium,
                  restPlayers: restPlayers,
                  countPlayers: countPlayers,
                  convert: convert
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return LotteryShow;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LotteryShow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb3R0ZXJ5L3Nob3cuanMiXSwibmFtZXMiOlsiTG90dGVyeVNob3ciLCJwcm9wcyIsIm51bWJlck9mUGxheWVycyIsInZhbHVlUHJlbWl1bSIsInJlc3RQbGF5ZXJzIiwiY291bnRQbGF5ZXJzIiwiY29udmVydCIsIml0ZW1zIiwiaGVhZGVyIiwid2ViMyIsInV0aWxzIiwiZnJvbVdlaSIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwibG90dGVyeSIsIkxvdHRlcnkiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRQbGF5ZXJzIiwiY2FsbCIsInBsYXllcnMiLCJnZXRQcmVtaXVtIiwicHJlbWl1bSIsImdldFJlc3RQbGF5ZXJzIiwiZ2V0Q291bnRQbGF5ZXJzIiwiZW50cnlWYWx1ZSIsIlN0cmluZyIsImNvbnZlcnRCaW4iLCJwYXJzZUludCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7OztrQ0E2Qlk7QUFBQSx3QkFPTixLQUFLQyxLQVBDO0FBQUEsVUFFTkMsZUFGTSxlQUVOQSxlQUZNO0FBQUEsVUFHTkMsWUFITSxlQUdOQSxZQUhNO0FBQUEsVUFJTkMsV0FKTSxlQUlOQSxXQUpNO0FBQUEsVUFLTkMsWUFMTSxlQUtOQSxZQUxNO0FBQUEsVUFNUEMsT0FOTyxlQU1QQSxPQU5PO0FBUVYsVUFBTUMsS0FBSyxHQUFHLENBQ1Y7QUFDSUMsY0FBTSxFQUFFQyx1REFBSSxDQUFDQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJMLE9BQW5CLEVBQTRCLE9BQTVCLENBRFo7QUFFSU0sWUFBSSxFQUFFLG9DQUZWO0FBR0lDLG1CQUFXLEVBQUUsNENBSGpCO0FBSUlDLGFB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dHRlcnlcXHNob3cuanMuZjRkYTUwNzY5OTUzZjJmNmE4NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTG90dGVyeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9sb3R0ZXJ5JztcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IEVudHJ5Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VudHJ5Rm9ybSc7XHJcbmltcG9ydCBQaWNrV2lubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGlja1dpbm5lcic7XHJcbmltcG9ydCBXaXRoZHJhdyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dpdGhkcmF3JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgTG90dGVyeVNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGxvdHRlcnkgPSBMb3R0ZXJ5KHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllcnMgPSBhd2FpdCBsb3R0ZXJ5Lm1ldGhvZHMuZ2V0UGxheWVycygpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBwcmVtaXVtID0gYXdhaXQgbG90dGVyeS5tZXRob2RzLmdldFByZW1pdW0oKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdFBsYXllcnMgPSBhd2FpdCBsb3R0ZXJ5Lm1ldGhvZHMuZ2V0UmVzdFBsYXllcnMoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgY291bnRQbGF5ZXJzID0gYXdhaXQgbG90dGVyeS5tZXRob2RzLmdldENvdW50UGxheWVycygpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBlbnRyeVZhbHVlID0gYXdhaXQgbG90dGVyeS5tZXRob2RzLmVudHJ5VmFsdWUoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnZlcnQgPSBTdHJpbmcoZW50cnlWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgY29udmVydEJpbiA9IHBhcnNlSW50KHJlc3RQbGF5ZXJzLCA5KTtcclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHByZW1pdW0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzdFBsYXllcnMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY291bnRQbGF5ZXJzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgICAgICAgbnVtYmVyT2ZQbGF5ZXJzOiBwbGF5ZXJzLFxyXG4gICAgICAgICAgICB2YWx1ZVByZW1pdW06IHByZW1pdW0sXHJcbiAgICAgICAgICAgIHJlc3RQbGF5ZXJzOiByZXN0UGxheWVycyxcclxuICAgICAgICAgICAgY291bnRQbGF5ZXJzOiBjb3VudFBsYXllcnMsXHJcbiAgICAgICAgICAgIGNvbnZlcnQ6IGNvbnZlcnRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhcmRzKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbnVtYmVyT2ZQbGF5ZXJzLFxyXG4gICAgICAgICAgICB2YWx1ZVByZW1pdW0sXHJcbiAgICAgICAgICAgIHJlc3RQbGF5ZXJzLFxyXG4gICAgICAgICAgICBjb3VudFBsYXllcnMsXHJcbiAgICAgICAgICAgY29udmVydFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShjb252ZXJ0LCAnZXRoZXInKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdWYWx1ZSB0byBjb250cmlidXRlIHRvIHRoaXMgcmFmZmxlJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHZhbHVlIG9mIHByZW1pdW0gZm9yIHdpbm5lciB0aGUgcmFmZmxlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkodmFsdWVQcmVtaXVtLCAnZXRoZXInKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdWYWx1ZSBvZiBQcmVtaXVtJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHZhbHVlIG9mIHByZW1pdW0gZm9yIHdpbm5lciB0aGUgcmFmZmxlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiByZXN0UGxheWVycyxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdIb3cgbWFueSByZW1haW4nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgcGFydGljaXBhbnRzIGxlZnQgdG8gY29tcGxldGUgdGhlIGRyYXcnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGNvdW50UGxheWVycyxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgcGxheWVycycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBwbGF5ZXJzIHRvIGNhcnJ5IG91dCB0aGUgZHJhdycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogbnVtYmVyT2ZQbGF5ZXJzLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ0FscmVhZHkgZW50ZXJlZCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BsYXllcnMgd2hvIGhhdmUgYWxyZWFkeSBqb2luZWQnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbnRyeUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGlja1dpbm5lciBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaXRoZHJhdyAgYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG90dGVyeVNob3c7Il0sInNvdXJjZVJvb3QiOiIifQ==