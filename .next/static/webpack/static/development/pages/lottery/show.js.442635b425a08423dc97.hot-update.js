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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);







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
      }), __jsx(_components_PickWinner__WEBPACK_IMPORTED_MODULE_13__["default"], null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb3R0ZXJ5L3Nob3cuanMiXSwibmFtZXMiOlsiTG90dGVyeVNob3ciLCJwcm9wcyIsIm51bWJlck9mUGxheWVycyIsInZhbHVlUHJlbWl1bSIsInJlc3RQbGF5ZXJzIiwiY291bnRQbGF5ZXJzIiwiY29udmVydCIsIml0ZW1zIiwiaGVhZGVyIiwid2ViMyIsInV0aWxzIiwiZnJvbVdlaSIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwibG90dGVyeSIsIkxvdHRlcnkiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRQbGF5ZXJzIiwiY2FsbCIsInBsYXllcnMiLCJnZXRQcmVtaXVtIiwicHJlbWl1bSIsImdldFJlc3RQbGF5ZXJzIiwiZ2V0Q291bnRQbGF5ZXJzIiwiZW50cnlWYWx1ZSIsIlN0cmluZyIsImNvbnZlcnRCaW4iLCJwYXJzZUludCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7OztrQ0E2Qlk7QUFBQSx3QkFPTixLQUFLQyxLQVBDO0FBQUEsVUFFTkMsZUFGTSxlQUVOQSxlQUZNO0FBQUEsVUFHTkMsWUFITSxlQUdOQSxZQUhNO0FBQUEsVUFJTkMsV0FKTSxlQUlOQSxXQUpNO0FBQUEsVUFLTkMsWUFMTSxlQUtOQSxZQUxNO0FBQUEsVUFNUEMsT0FOTyxlQU1QQSxPQU5PO0FBUVYsVUFBTUMsS0FBSyxHQUFHLENBQ1Y7QUFDSUMsY0FBTSxFQUFFQyx1REFBSSxDQUFDQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJMLE9BQW5CLEVBQTRCLE9BQTVCLENBRFo7QUFFSU0sWUFBSSxFQUFFLG9DQUZWO0FBR0lDLG1CQUFXLEVBQUUsNENBSGpCO0FBSUlDLGFBQUssRUFBRTtBQUFFQyxzQkFBWSxFQUFFO0FBQWhCO0FBSlgsT0FEVSxFQU9WO0FBQ0lQLGNBQU0sRUFBRUMsdURBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CUixZQUFuQixFQUFpQyxPQUFqQyxDQURaO0FBRUlTLFlBQUksRUFBRSxrQkFGVjtBQUdJQyxtQkFBVyxFQUFFLDRDQUhqQjtBQUlJQyxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRTtBQUFoQjtBQUpYLE9BUFUsRUFhVjtBQUNJUCxjQUFNLEVBQUVKLFdBRFo7QUFFSVEsWUFBSSxFQUFFLGlCQUZWO0FBR0lDLG1CQUFXLEVBQUUsa0RBSGpCO0FBSUlDLGFBQUssRUFBRTtBQUFFQyxzQkFBWSxFQUFFO0FBQWhCO0FBSlgsT0FiVSxFQW1CVjtBQUNJUCxjQUFNLEVBQUVILFlBRFo7QUFFSU8sWUFBSSxFQUFFLG1CQUZWO0FBR0lDLG1CQUFXLEVBQUUseUNBSGpCO0FBSUlDLGFBQUssRUFBRTtBQUFFQyxzQkFBWSxFQUFFO0FBQWhCO0FBSlgsT0FuQlUsRUF5QlY7QUFDSVAsY0FBTSxFQUFFTixlQURaO0FBRUlVLFlBQUksRUFBRSxpQkFGVjtBQUdJQyxtQkFBVyxFQUFFLGlDQUhqQjtBQUlJQyxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRTtBQUFoQjtBQUpYLE9BekJVLENBQWQ7QUFnQ0EsYUFBTyxNQUFDLHVEQUFELENBQU0sS0FBTjtBQUFZLGFBQUssRUFBRVI7QUFBbkIsUUFBUDtBQUNIOzs7NkJBSVE7QUFDTCxhQUNJLE1BQUMsMERBQUQsUUFDSSxNQUFDLHVEQUFELFFBQ0ksTUFBQyx1REFBRCxDQUFNLE1BQU47QUFBYSxhQUFLLEVBQUU7QUFBcEIsU0FFSyxLQUFLUyxXQUFMLEVBRkwsQ0FESixFQUtJLE1BQUMsdURBQUQsQ0FBTSxNQUFOO0FBQWEsYUFBSyxFQUFFO0FBQXBCLFNBQ0ksTUFBQyw4REFBRDtBQUFXLGVBQU8sRUFBRSxLQUFLZixLQUFMLENBQVdnQjtBQUEvQixRQURKLEVBRUksTUFBQywrREFBRCxPQUZKLENBTEosQ0FESixDQURKO0FBZUg7Ozs7K05BekY0QmhCLEs7Ozs7OztBQUNuQmlCLHVCLEdBQVVDLGlFQUFPLENBQUNsQixLQUFLLENBQUNtQixLQUFOLENBQVlILE9BQWIsQzs7dUJBSURDLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsVUFBaEIsR0FBNkJDLElBQTdCLEU7OztBQUFoQkMsdUI7O3VCQUNnQk4sT0FBTyxDQUFDRyxPQUFSLENBQWdCSSxVQUFoQixHQUE2QkYsSUFBN0IsRTs7O0FBQWhCRyx1Qjs7dUJBQ29CUixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JNLGNBQWhCLEdBQWlDSixJQUFqQyxFOzs7QUFBcEJuQiwyQjs7dUJBQ3FCYyxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JPLGVBQWhCLEdBQWtDTCxJQUFsQyxFOzs7QUFBckJsQiw0Qjs7dUJBQ21CYSxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JRLFVBQWhCLEdBQTZCTixJQUE3QixFOzs7QUFBbkJNLDBCO0FBRUF2Qix1QixHQUFVd0IsTUFBTSxDQUFDRCxVQUFELEM7QUFDaEJFLDBCLEdBQWFDLFFBQVEsQ0FBQzVCLFdBQUQsRUFBYyxDQUFkLEMsRUFFM0I7QUFDQTtBQUNBOztpREFFTztBQUNIYSx5QkFBTyxFQUFFaEIsS0FBSyxDQUFDbUIsS0FBTixDQUFZSCxPQURsQjtBQUVIZixpQ0FBZSxFQUFFc0IsT0FGZDtBQUdIckIsOEJBQVksRUFBRXVCLE9BSFg7QUFJSHRCLDZCQUFXLEVBQUVBLFdBSlY7QUFLSEMsOEJBQVksRUFBRUEsWUFMWDtBQU1IQyx5QkFBTyxFQUFFQTtBQU5OLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkJXMkIsK0M7O0FBNkZYakMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvdHRlcnlcXHNob3cuanMuNDQyNjM1YjQyNWEwODQyM2RjOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTG90dGVyeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9sb3R0ZXJ5JztcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IEVudHJ5Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VudHJ5Rm9ybSc7XHJcbmltcG9ydCBQaWNrV2lubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGlja1dpbm5lcic7XHJcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIExvdHRlcnlTaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICBjb25zdCBsb3R0ZXJ5ID0gTG90dGVyeShwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgbG90dGVyeS5tZXRob2RzLmdldFBsYXllcnMoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgcHJlbWl1bSA9IGF3YWl0IGxvdHRlcnkubWV0aG9kcy5nZXRQcmVtaXVtKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IHJlc3RQbGF5ZXJzID0gYXdhaXQgbG90dGVyeS5tZXRob2RzLmdldFJlc3RQbGF5ZXJzKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50UGxheWVycyA9IGF3YWl0IGxvdHRlcnkubWV0aG9kcy5nZXRDb3VudFBsYXllcnMoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgZW50cnlWYWx1ZSA9IGF3YWl0IGxvdHRlcnkubWV0aG9kcy5lbnRyeVZhbHVlKCkuY2FsbCgpO1xyXG5cclxuICAgICAgICBjb25zdCBjb252ZXJ0ID0gU3RyaW5nKGVudHJ5VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnZlcnRCaW4gPSBwYXJzZUludChyZXN0UGxheWVycywgOSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcmVtaXVtKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3RQbGF5ZXJzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNvdW50UGxheWVycyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgICAgICAgIG51bWJlck9mUGxheWVyczogcGxheWVycyxcclxuICAgICAgICAgICAgdmFsdWVQcmVtaXVtOiBwcmVtaXVtLFxyXG4gICAgICAgICAgICByZXN0UGxheWVyczogcmVzdFBsYXllcnMsXHJcbiAgICAgICAgICAgIGNvdW50UGxheWVyczogY291bnRQbGF5ZXJzLFxyXG4gICAgICAgICAgICBjb252ZXJ0OiBjb252ZXJ0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcygpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG51bWJlck9mUGxheWVycyxcclxuICAgICAgICAgICAgdmFsdWVQcmVtaXVtLFxyXG4gICAgICAgICAgICByZXN0UGxheWVycyxcclxuICAgICAgICAgICAgY291bnRQbGF5ZXJzLFxyXG4gICAgICAgICAgIGNvbnZlcnRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoY29udmVydCwgJ2V0aGVyJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnVmFsdWUgdG8gY29udHJpYnV0ZSB0byB0aGlzIHJhZmZsZScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSB2YWx1ZSBvZiBwcmVtaXVtIGZvciB3aW5uZXIgdGhlIHJhZmZsZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKHZhbHVlUHJlbWl1bSwgJ2V0aGVyJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnVmFsdWUgb2YgUHJlbWl1bScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSB2YWx1ZSBvZiBwcmVtaXVtIGZvciB3aW5uZXIgdGhlIHJhZmZsZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogcmVzdFBsYXllcnMsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnSG93IG1hbnkgcmVtYWluJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBhcnRpY2lwYW50cyBsZWZ0IHRvIGNvbXBsZXRlIHRoZSBkcmF3JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBjb3VudFBsYXllcnMsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIHBsYXllcnMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgcGxheWVycyB0byBjYXJyeSBvdXQgdGhlIGRyYXcnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG51bWJlck9mUGxheWVycyxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdBbHJlYWR5IGVudGVyZWQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQbGF5ZXJzIHdobyBoYXZlIGFscmVhZHkgam9pbmVkJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RW50cnlGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY2tXaW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0ZXJ5U2hvdzsiXSwic291cmNlUm9vdCI6IiJ9