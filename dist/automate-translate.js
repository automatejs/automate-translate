(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["automateTranslate"] = factory();
	else
		root["automateTranslate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-service */ "./src/translate-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return _translate_service__WEBPACK_IMPORTED_MODULE_0__["TranslateService"]; });

/* harmony import */ var _translate_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate-filter */ "./src/translate-filter.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/translate-filter.js":
/*!*********************************!*\
  !*** ./src/translate-filter.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-service */ "./src/translate-service.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TranslateFilter = (_dec = automate.filter({
  namespace: 'automate',
  key: 'translate',
  inject: {
    'service': _translate_service__WEBPACK_IMPORTED_MODULE_0__["TranslateService"]
  }
}), _dec(_class = /*#__PURE__*/function (_automate$Filter) {
  _inherits(TranslateFilter, _automate$Filter);

  function TranslateFilter() {
    _classCallCheck(this, TranslateFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(TranslateFilter).call(this));
  }

  _createClass(TranslateFilter, [{
    key: "transform",
    value: function transform(value) {
      return this.service.instant(value);
    }
  }]);

  return TranslateFilter;
}(automate.Filter)) || _class);

/***/ }),

/***/ "./src/translate-service.js":
/*!**********************************!*\
  !*** ./src/translate-service.js ***!
  \**********************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TranslateService = (_dec = automate.service({
  namespace: 'automate',
  key: 'translateService'
}), _dec(_class = /*#__PURE__*/function (_automate$Service) {
  _inherits(TranslateService, _automate$Service);

  function TranslateService() {
    var _this;

    _classCallCheck(this, TranslateService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TranslateService).call(this)); // available languages

    _this.availableLanguageKeys = []; // current language

    _this.currentLanguageKey = _this.resolveBrowserLanguage(); // translation resource

    _this.translationTable = {}; // current language event

    _this.languageChanged = new automate.Message();
    return _this;
  }

  _createClass(TranslateService, [{
    key: "resolveBrowserLanguage",
    value: function resolveBrowserLanguage() {
      var nav = navigator,
          browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
          i,
          language; // support for HTML 5.1 "navigator.languages"

      if (automate.isArray(nav.languages)) {
        for (i = 0; i < nav.languages.length; i++) {
          language = nav.languages[i];

          if (language && language.length) {
            return language;
          }
        }
      } // support for other well known properties in browsers


      for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
        language = nav[browserLanguagePropertyKeys[i]];

        if (language && language.length) {
          return language;
        }
      }

      return null;
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.currentLanguageKey;
    }
  }, {
    key: "setLocale",
    value: function setLocale(langKey) {
      var langKeys = this.getAvailableLanguageKeys();

      if (langKeys.indexOf(langKey) === -1) {
        throw new Error(langKey + 'is not supported');
      }

      this.currentLanguageKey = langKey;
      automate.events.translateChanged.fire();
    }
  }, {
    key: "setAvailableLanguageKeys",
    value: function setAvailableLanguageKeys(langKeys) {
      this.availableLanguageKeys = langKeys;
    }
  }, {
    key: "getAvailableLanguageKeys",
    value: function getAvailableLanguageKeys() {
      return this.availableLanguageKeys;
    }
  }, {
    key: "getTranslationTable",
    value: function getTranslationTable(langKey) {
      if (this.translationTable[langKey] == null) {
        this.translationTable[langKey] = {};
      }

      return this.translationTable[langKey];
    }
  }, {
    key: "getCurrentTranslationTable",
    value: function getCurrentTranslationTable() {
      return this.getTranslationTable(this.currentLanguageKey);
    }
  }, {
    key: "registerTranslation",
    value: function registerTranslation(langKey, obj) {
      var table = this.getTranslationTable(langKey);
      automate.extend(table, obj);
    }
  }, {
    key: "instant",
    value: function instant(key) {
      var table = this.getCurrentTranslationTable();

      if (table) {
        return automate.getProperty(table, key);
      }

      return key;
    }
  }]);

  return TranslateService;
}(automate.Service)) || _class);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZVRyYW5zbGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGVUcmFuc2xhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGVUcmFuc2xhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGVUcmFuc2xhdGUvLi9zcmMvdHJhbnNsYXRlLWZpbHRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZVRyYW5zbGF0ZS8uL3NyYy90cmFuc2xhdGUtc2VydmljZS5qcyJdLCJuYW1lcyI6WyJUcmFuc2xhdGVGaWx0ZXIiLCJhdXRvbWF0ZSIsImZpbHRlciIsIm5hbWVzcGFjZSIsImtleSIsImluamVjdCIsIlRyYW5zbGF0ZVNlcnZpY2UiLCJ2YWx1ZSIsInNlcnZpY2UiLCJpbnN0YW50IiwiRmlsdGVyIiwiYXZhaWxhYmxlTGFuZ3VhZ2VLZXlzIiwiY3VycmVudExhbmd1YWdlS2V5IiwicmVzb2x2ZUJyb3dzZXJMYW5ndWFnZSIsInRyYW5zbGF0aW9uVGFibGUiLCJsYW5ndWFnZUNoYW5nZWQiLCJNZXNzYWdlIiwibmF2IiwibmF2aWdhdG9yIiwiYnJvd3Nlckxhbmd1YWdlUHJvcGVydHlLZXlzIiwiaSIsImxhbmd1YWdlIiwiaXNBcnJheSIsImxhbmd1YWdlcyIsImxlbmd0aCIsImxhbmdLZXkiLCJsYW5nS2V5cyIsImdldEF2YWlsYWJsZUxhbmd1YWdlS2V5cyIsImluZGV4T2YiLCJFcnJvciIsImV2ZW50cyIsInRyYW5zbGF0ZUNoYW5nZWQiLCJmaXJlIiwiZ2V0VHJhbnNsYXRpb25UYWJsZSIsIm9iaiIsInRhYmxlIiwiZXh0ZW5kIiwiZ2V0Q3VycmVudFRyYW5zbGF0aW9uVGFibGUiLCJnZXRQcm9wZXJ0eSIsIlNlcnZpY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtJQVNNQSxlLFdBUExDLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQjtBQUNiQyxXQUFTLEVBQUUsVUFERTtBQUViQyxLQUFHLEVBQUUsV0FGUTtBQUdiQyxRQUFNLEVBQUU7QUFDSixlQUFXQyxtRUFBZ0JBO0FBRHZCO0FBSEssQ0FBaEIsQzs7O0FBUUcsNkJBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzhCQUVTQyxLLEVBQU87QUFDYixhQUFPLEtBQUtDLE9BQUwsQ0FBYUMsT0FBYixDQUFxQkYsS0FBckIsQ0FBUDtBQUNIOzs7O0VBUHlCTixRQUFRLENBQUNTLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIaEMsSUFBTUosZ0JBQWIsV0FKQ0wsUUFBUSxDQUFDTyxPQUFULENBQWlCO0FBQ2RMLFdBQVMsRUFBRSxVQURHO0FBRWRDLEtBQUcsRUFBRTtBQUZTLENBQWpCLENBSUQ7QUFBQTs7QUFDSSw4QkFBYztBQUFBOztBQUFBOztBQUNWLDJGQURVLENBRVY7O0FBQ0EsVUFBS08scUJBQUwsR0FBNkIsRUFBN0IsQ0FIVSxDQUlWOztBQUNBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtDLHNCQUFMLEVBQTFCLENBTFUsQ0FNVjs7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixFQUF4QixDQVBVLENBUVY7O0FBQ0EsVUFBS0MsZUFBTCxHQUF1QixJQUFJZCxRQUFRLENBQUNlLE9BQWIsRUFBdkI7QUFUVTtBQVViOztBQVhMO0FBQUE7QUFBQSw2Q0FhNkI7QUFDckIsVUFBSUMsR0FBRyxHQUFHQyxTQUFWO0FBQUEsVUFDSUMsMkJBQTJCLEdBQUcsQ0FBQyxVQUFELEVBQWEsaUJBQWIsRUFBZ0MsZ0JBQWhDLEVBQWtELGNBQWxELENBRGxDO0FBQUEsVUFFSUMsQ0FGSjtBQUFBLFVBR0lDLFFBSEosQ0FEcUIsQ0FNckI7O0FBQ0EsVUFBSXBCLFFBQVEsQ0FBQ3FCLE9BQVQsQ0FBaUJMLEdBQUcsQ0FBQ00sU0FBckIsQ0FBSixFQUFxQztBQUNqQyxhQUFLSCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdILEdBQUcsQ0FBQ00sU0FBSixDQUFjQyxNQUE5QixFQUFzQ0osQ0FBQyxFQUF2QyxFQUEyQztBQUN2Q0Msa0JBQVEsR0FBR0osR0FBRyxDQUFDTSxTQUFKLENBQWNILENBQWQsQ0FBWDs7QUFDQSxjQUFJQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0csTUFBekIsRUFBaUM7QUFDN0IsbUJBQU9ILFFBQVA7QUFDSDtBQUNKO0FBQ0osT0Fkb0IsQ0FnQnJCOzs7QUFDQSxXQUFLRCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdELDJCQUEyQixDQUFDSyxNQUE1QyxFQUFvREosQ0FBQyxFQUFyRCxFQUF5RDtBQUNyREMsZ0JBQVEsR0FBR0osR0FBRyxDQUFDRSwyQkFBMkIsQ0FBQ0MsQ0FBRCxDQUE1QixDQUFkOztBQUNBLFlBQUlDLFFBQVEsSUFBSUEsUUFBUSxDQUFDRyxNQUF6QixFQUFpQztBQUM3QixpQkFBT0gsUUFBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBTyxJQUFQO0FBQ0g7QUF0Q0w7QUFBQTtBQUFBLGdDQXdDZ0I7QUFDUixhQUFPLEtBQUtULGtCQUFaO0FBQ0g7QUExQ0w7QUFBQTtBQUFBLDhCQTRDY2EsT0E1Q2QsRUE0Q3VCO0FBQ2YsVUFBSUMsUUFBUSxHQUFHLEtBQUtDLHdCQUFMLEVBQWY7O0FBRUEsVUFBSUQsUUFBUSxDQUFDRSxPQUFULENBQWlCSCxPQUFqQixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQ2xDLGNBQU0sSUFBSUksS0FBSixDQUFVSixPQUFPLEdBQUcsa0JBQXBCLENBQU47QUFDSDs7QUFFRCxXQUFLYixrQkFBTCxHQUEwQmEsT0FBMUI7QUFDQXhCLGNBQVEsQ0FBQzZCLE1BQVQsQ0FBZ0JDLGdCQUFoQixDQUFpQ0MsSUFBakM7QUFDSDtBQXJETDtBQUFBO0FBQUEsNkNBdUQ2Qk4sUUF2RDdCLEVBdUR1QztBQUMvQixXQUFLZixxQkFBTCxHQUE2QmUsUUFBN0I7QUFDSDtBQXpETDtBQUFBO0FBQUEsK0NBMkQrQjtBQUN2QixhQUFPLEtBQUtmLHFCQUFaO0FBQ0g7QUE3REw7QUFBQTtBQUFBLHdDQStEd0JjLE9BL0R4QixFQStEaUM7QUFDekIsVUFBRyxLQUFLWCxnQkFBTCxDQUFzQlcsT0FBdEIsS0FBa0MsSUFBckMsRUFBMkM7QUFDdkMsYUFBS1gsZ0JBQUwsQ0FBc0JXLE9BQXRCLElBQWlDLEVBQWpDO0FBQ0g7O0FBQ0QsYUFBTyxLQUFLWCxnQkFBTCxDQUFzQlcsT0FBdEIsQ0FBUDtBQUNIO0FBcEVMO0FBQUE7QUFBQSxpREFzRWlDO0FBQ3pCLGFBQU8sS0FBS1EsbUJBQUwsQ0FBeUIsS0FBS3JCLGtCQUE5QixDQUFQO0FBQ0g7QUF4RUw7QUFBQTtBQUFBLHdDQTBFd0JhLE9BMUV4QixFQTBFaUNTLEdBMUVqQyxFQTBFc0M7QUFDOUIsVUFBSUMsS0FBSyxHQUFHLEtBQUtGLG1CQUFMLENBQXlCUixPQUF6QixDQUFaO0FBQ0F4QixjQUFRLENBQUNtQyxNQUFULENBQWdCRCxLQUFoQixFQUF1QkQsR0FBdkI7QUFDSDtBQTdFTDtBQUFBO0FBQUEsNEJBK0VZOUIsR0EvRVosRUErRWlCO0FBQ1QsVUFBSStCLEtBQUssR0FBRyxLQUFLRSwwQkFBTCxFQUFaOztBQUVBLFVBQUlGLEtBQUosRUFBVztBQUNQLGVBQU9sQyxRQUFRLENBQUNxQyxXQUFULENBQXFCSCxLQUFyQixFQUE0Qi9CLEdBQTVCLENBQVA7QUFDSDs7QUFFRCxhQUFPQSxHQUFQO0FBQ0g7QUF2Rkw7O0FBQUE7QUFBQSxFQUFzQ0gsUUFBUSxDQUFDc0MsT0FBL0MsYyIsImZpbGUiOiJhdXRvbWF0ZS10cmFuc2xhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhdXRvbWF0ZVRyYW5zbGF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhdXRvbWF0ZVRyYW5zbGF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RyYW5zbGF0ZS1zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi90cmFuc2xhdGUtZmlsdGVyJzsiLCJpbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUtc2VydmljZSc7XHJcblxyXG5AYXV0b21hdGUuZmlsdGVyKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3RyYW5zbGF0ZScsXHJcbiAgICBpbmplY3Q6IHtcclxuICAgICAgICAnc2VydmljZSc6IFRyYW5zbGF0ZVNlcnZpY2VcclxuICAgIH1cclxufSlcclxuY2xhc3MgVHJhbnNsYXRlRmlsdGVyIGV4dGVuZHMgYXV0b21hdGUuRmlsdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pbnN0YW50KHZhbHVlKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxuQGF1dG9tYXRlLnNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAndHJhbnNsYXRlU2VydmljZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2UgZXh0ZW5kcyBhdXRvbWF0ZS5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy8gYXZhaWxhYmxlIGxhbmd1YWdlc1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlTGFuZ3VhZ2VLZXlzID0gW107XHJcbiAgICAgICAgLy8gY3VycmVudCBsYW5ndWFnZVxyXG4gICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlS2V5ID0gdGhpcy5yZXNvbHZlQnJvd3Nlckxhbmd1YWdlKCk7XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gcmVzb3VyY2VcclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uVGFibGUgPSB7fTtcclxuICAgICAgICAvLyBjdXJyZW50IGxhbmd1YWdlIGV2ZW50XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZUNoYW5nZWQgPSBuZXcgYXV0b21hdGUuTWVzc2FnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVCcm93c2VyTGFuZ3VhZ2UoKSB7XHJcbiAgICAgICAgdmFyIG5hdiA9IG5hdmlnYXRvcixcclxuICAgICAgICAgICAgYnJvd3Nlckxhbmd1YWdlUHJvcGVydHlLZXlzID0gWydsYW5ndWFnZScsICdicm93c2VyTGFuZ3VhZ2UnLCAnc3lzdGVtTGFuZ3VhZ2UnLCAndXNlckxhbmd1YWdlJ10sXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIGxhbmd1YWdlO1xyXG5cclxuICAgICAgICAvLyBzdXBwb3J0IGZvciBIVE1MIDUuMSBcIm5hdmlnYXRvci5sYW5ndWFnZXNcIlxyXG4gICAgICAgIGlmIChhdXRvbWF0ZS5pc0FycmF5KG5hdi5sYW5ndWFnZXMpKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuYXYubGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IG5hdi5sYW5ndWFnZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UgJiYgbGFuZ3VhZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdXBwb3J0IGZvciBvdGhlciB3ZWxsIGtub3duIHByb3BlcnRpZXMgaW4gYnJvd3NlcnNcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnJvd3Nlckxhbmd1YWdlUHJvcGVydHlLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlID0gbmF2W2Jyb3dzZXJMYW5ndWFnZVByb3BlcnR5S2V5c1tpXV07XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZSAmJiBsYW5ndWFnZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9jYWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMYW5ndWFnZUtleTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2NhbGUobGFuZ0tleSkge1xyXG4gICAgICAgIHZhciBsYW5nS2V5cyA9IHRoaXMuZ2V0QXZhaWxhYmxlTGFuZ3VhZ2VLZXlzKCk7XHJcblxyXG4gICAgICAgIGlmIChsYW5nS2V5cy5pbmRleE9mKGxhbmdLZXkpID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobGFuZ0tleSArICdpcyBub3Qgc3VwcG9ydGVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUtleSA9IGxhbmdLZXk7XHJcbiAgICAgICAgYXV0b21hdGUuZXZlbnRzLnRyYW5zbGF0ZUNoYW5nZWQuZmlyZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF2YWlsYWJsZUxhbmd1YWdlS2V5cyhsYW5nS2V5cykge1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlTGFuZ3VhZ2VLZXlzID0gbGFuZ0tleXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZhaWxhYmxlTGFuZ3VhZ2VLZXlzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF2YWlsYWJsZUxhbmd1YWdlS2V5cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFuc2xhdGlvblRhYmxlKGxhbmdLZXkpIHtcclxuICAgICAgICBpZih0aGlzLnRyYW5zbGF0aW9uVGFibGVbbGFuZ0tleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9uVGFibGVbbGFuZ0tleV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25UYWJsZVtsYW5nS2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50VHJhbnNsYXRpb25UYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUcmFuc2xhdGlvblRhYmxlKHRoaXMuY3VycmVudExhbmd1YWdlS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclRyYW5zbGF0aW9uKGxhbmdLZXksIG9iaikge1xyXG4gICAgICAgIHZhciB0YWJsZSA9IHRoaXMuZ2V0VHJhbnNsYXRpb25UYWJsZShsYW5nS2V5KTtcclxuICAgICAgICBhdXRvbWF0ZS5leHRlbmQodGFibGUsIG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFudChrZXkpIHtcclxuICAgICAgICB2YXIgdGFibGUgPSB0aGlzLmdldEN1cnJlbnRUcmFuc2xhdGlvblRhYmxlKCk7XHJcblxyXG4gICAgICAgIGlmICh0YWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGUuZ2V0UHJvcGVydHkodGFibGUsIGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==