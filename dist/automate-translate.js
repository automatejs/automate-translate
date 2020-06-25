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

/***/ "./src/translate-loader.js":
/*!*********************************!*\
  !*** ./src/translate-loader.js ***!
  \*********************************/
/*! exports provided: TranslateLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLoaderService", function() { return TranslateLoaderService; });
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

var TranslateLoaderService = (_dec = automate.service({
  namespace: 'automate',
  key: 'translateLoader',
  inject: {
    '$http': 'http'
  }
}), _dec(_class = /*#__PURE__*/function (_automate$Service) {
  _inherits(TranslateLoaderService, _automate$Service);

  function TranslateLoaderService() {
    var _this;

    _classCallCheck(this, TranslateLoaderService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TranslateLoaderService).call(this));
    _this.base = './i18n';
    return _this;
  }

  _createClass(TranslateLoaderService, [{
    key: "config",
    value: function config(options) {
      if (!options) {
        return;
      }

      this.base = options.base;
    }
  }, {
    key: "load",
    value: function load(langKey) {
      var url = automate.format('{0}/{1}.json', this.base, langKey);
      return this.$http.get(url);
    }
  }]);

  return TranslateLoaderService;
}(automate.Service)) || _class);

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
/* harmony import */ var _translate_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-loader */ "./src/translate-loader.js");
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
  key: 'translateService',
  inject: {
    '$loader': _translate_loader__WEBPACK_IMPORTED_MODULE_0__["TranslateLoaderService"]
  }
}), _dec(_class = /*#__PURE__*/function (_automate$Service) {
  _inherits(TranslateService, _automate$Service);

  function TranslateService() {
    var _this;

    _classCallCheck(this, TranslateService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TranslateService).call(this)); // available languages

    _this.availableLanguageKeys = []; // current language

    _this.currentLanguageKey = ''; // translation resource

    _this.translationTable = {}; // current language event

    _this.languageChanged = new automate.Message();

    _this.initialize();

    return _this;
  }

  _createClass(TranslateService, [{
    key: "initialize",
    value: function initialize() {
      var langKey = this.resolveBrowserLanguage();

      if (langKey) {
        this.availableLanguageKeys.push(langKey);
        this.setLocale(langKey);
      }
    }
  }, {
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
      var _this2 = this;

      var langKeys = this.getAvailableLanguageKeys();

      if (langKeys.indexOf(langKey) === -1) {
        throw new Error(langKey + 'is not supported');
      }

      this.currentLanguageKey = langKey;
      this.$loader.load(langKey).then(function (res) {
        _this2.registerTranslation(langKey, res.data);

        automate.events.refreshView.fire();
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZVRyYW5zbGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGVUcmFuc2xhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGVUcmFuc2xhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGVUcmFuc2xhdGUvLi9zcmMvdHJhbnNsYXRlLWZpbHRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZVRyYW5zbGF0ZS8uL3NyYy90cmFuc2xhdGUtbG9hZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlVHJhbnNsYXRlLy4vc3JjL3RyYW5zbGF0ZS1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIlRyYW5zbGF0ZUZpbHRlciIsImF1dG9tYXRlIiwiZmlsdGVyIiwibmFtZXNwYWNlIiwia2V5IiwiaW5qZWN0IiwiVHJhbnNsYXRlU2VydmljZSIsInZhbHVlIiwic2VydmljZSIsImluc3RhbnQiLCJGaWx0ZXIiLCJUcmFuc2xhdGVMb2FkZXJTZXJ2aWNlIiwiYmFzZSIsIm9wdGlvbnMiLCJsYW5nS2V5IiwidXJsIiwiZm9ybWF0IiwiJGh0dHAiLCJnZXQiLCJTZXJ2aWNlIiwiYXZhaWxhYmxlTGFuZ3VhZ2VLZXlzIiwiY3VycmVudExhbmd1YWdlS2V5IiwidHJhbnNsYXRpb25UYWJsZSIsImxhbmd1YWdlQ2hhbmdlZCIsIk1lc3NhZ2UiLCJpbml0aWFsaXplIiwicmVzb2x2ZUJyb3dzZXJMYW5ndWFnZSIsInB1c2giLCJzZXRMb2NhbGUiLCJuYXYiLCJuYXZpZ2F0b3IiLCJicm93c2VyTGFuZ3VhZ2VQcm9wZXJ0eUtleXMiLCJpIiwibGFuZ3VhZ2UiLCJpc0FycmF5IiwibGFuZ3VhZ2VzIiwibGVuZ3RoIiwibGFuZ0tleXMiLCJnZXRBdmFpbGFibGVMYW5ndWFnZUtleXMiLCJpbmRleE9mIiwiRXJyb3IiLCIkbG9hZGVyIiwibG9hZCIsInRoZW4iLCJyZXMiLCJyZWdpc3RlclRyYW5zbGF0aW9uIiwiZGF0YSIsImV2ZW50cyIsInJlZnJlc2hWaWV3IiwiZmlyZSIsImdldFRyYW5zbGF0aW9uVGFibGUiLCJvYmoiLCJ0YWJsZSIsImV4dGVuZCIsImdldEN1cnJlbnRUcmFuc2xhdGlvblRhYmxlIiwiZ2V0UHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtJQVNNQSxlLFdBUExDLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQjtBQUNiQyxXQUFTLEVBQUUsVUFERTtBQUViQyxLQUFHLEVBQUUsV0FGUTtBQUdiQyxRQUFNLEVBQUU7QUFDSixlQUFXQyxtRUFBZ0JBO0FBRHZC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QUwsQ0FBc0JSLE9BQXRCLEtBQWtDLElBQXRDLEVBQTRDO0FBQ3hDLGFBQUtRLGdCQUFMLENBQXNCUixPQUF0QixJQUFpQyxFQUFqQztBQUNIOztBQUNELGFBQU8sS0FBS1EsZ0JBQUwsQ0FBc0JSLE9BQXRCLENBQVA7QUFDSDtBQWxGTDtBQUFBO0FBQUEsaURBb0ZpQztBQUN6QixhQUFPLEtBQUtvQyxtQkFBTCxDQUF5QixLQUFLN0Isa0JBQTlCLENBQVA7QUFDSDtBQXRGTDtBQUFBO0FBQUEsd0NBd0Z3QlAsT0F4RnhCLEVBd0ZpQ3FDLEdBeEZqQyxFQXdGc0M7QUFDOUIsVUFBSUMsS0FBSyxHQUFHLEtBQUtGLG1CQUFMLENBQXlCcEMsT0FBekIsQ0FBWjtBQUNBYixjQUFRLENBQUNvRCxNQUFULENBQWdCRCxLQUFoQixFQUF1QkQsR0FBdkI7QUFDSDtBQTNGTDtBQUFBO0FBQUEsNEJBNkZZL0MsR0E3RlosRUE2RmlCO0FBQ1QsVUFBSWdELEtBQUssR0FBRyxLQUFLRSwwQkFBTCxFQUFaOztBQUVBLFVBQUlGLEtBQUosRUFBVztBQUNQLGVBQU9uRCxRQUFRLENBQUNzRCxXQUFULENBQXFCSCxLQUFyQixFQUE0QmhELEdBQTVCLENBQVA7QUFDSDs7QUFFRCxhQUFPQSxHQUFQO0FBQ0g7QUFyR0w7O0FBQUE7QUFBQSxFQUFzQ0gsUUFBUSxDQUFDa0IsT0FBL0MsYyIsImZpbGUiOiJhdXRvbWF0ZS10cmFuc2xhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhdXRvbWF0ZVRyYW5zbGF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhdXRvbWF0ZVRyYW5zbGF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RyYW5zbGF0ZS1zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi90cmFuc2xhdGUtZmlsdGVyJzsiLCJpbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUtc2VydmljZSc7XHJcblxyXG5AYXV0b21hdGUuZmlsdGVyKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3RyYW5zbGF0ZScsXHJcbiAgICBpbmplY3Q6IHtcclxuICAgICAgICAnc2VydmljZSc6IFRyYW5zbGF0ZVNlcnZpY2VcclxuICAgIH1cclxufSlcclxuY2xhc3MgVHJhbnNsYXRlRmlsdGVyIGV4dGVuZHMgYXV0b21hdGUuRmlsdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pbnN0YW50KHZhbHVlKTtcclxuICAgIH1cclxufSIsIkBhdXRvbWF0ZS5zZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3RyYW5zbGF0ZUxvYWRlcicsXHJcbiAgICBpbmplY3Q6IHtcclxuICAgICAgICAnJGh0dHAnOiAnaHR0cCdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZUxvYWRlclNlcnZpY2UgZXh0ZW5kcyBhdXRvbWF0ZS5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gJy4vaTE4bic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iYXNlID0gb3B0aW9ucy5iYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQobGFuZ0tleSkge1xyXG4gICAgICAgIHZhciB1cmwgPSBhdXRvbWF0ZS5mb3JtYXQoJ3swfS97MX0uanNvbicsIHRoaXMuYmFzZSwgbGFuZ0tleSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHVybCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUtbG9hZGVyJztcclxuXHJcbkBhdXRvbWF0ZS5zZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3RyYW5zbGF0ZVNlcnZpY2UnLFxyXG4gICAgaW5qZWN0OiB7XHJcbiAgICAgICAgJyRsb2FkZXInOiBUcmFuc2xhdGVMb2FkZXJTZXJ2aWNlXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIGV4dGVuZHMgYXV0b21hdGUuU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vIGF2YWlsYWJsZSBsYW5ndWFnZXNcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUxhbmd1YWdlS2V5cyA9IFtdO1xyXG4gICAgICAgIC8vIGN1cnJlbnQgbGFuZ3VhZ2VcclxuICAgICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUtleSA9ICcnO1xyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIHJlc291cmNlXHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvblRhYmxlID0ge307XHJcbiAgICAgICAgLy8gY3VycmVudCBsYW5ndWFnZSBldmVudFxyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VDaGFuZ2VkID0gbmV3IGF1dG9tYXRlLk1lc3NhZ2UoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHZhciBsYW5nS2V5ID0gdGhpcy5yZXNvbHZlQnJvd3Nlckxhbmd1YWdlKCk7XHJcblxyXG4gICAgICAgIGlmIChsYW5nS2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlTGFuZ3VhZ2VLZXlzLnB1c2gobGFuZ0tleSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxlKGxhbmdLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQnJvd3Nlckxhbmd1YWdlKCkge1xyXG4gICAgICAgIHZhciBuYXYgPSBuYXZpZ2F0b3IsXHJcbiAgICAgICAgICAgIGJyb3dzZXJMYW5ndWFnZVByb3BlcnR5S2V5cyA9IFsnbGFuZ3VhZ2UnLCAnYnJvd3Nlckxhbmd1YWdlJywgJ3N5c3RlbUxhbmd1YWdlJywgJ3VzZXJMYW5ndWFnZSddLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBsYW5ndWFnZTtcclxuXHJcbiAgICAgICAgLy8gc3VwcG9ydCBmb3IgSFRNTCA1LjEgXCJuYXZpZ2F0b3IubGFuZ3VhZ2VzXCJcclxuICAgICAgICBpZiAoYXV0b21hdGUuaXNBcnJheShuYXYubGFuZ3VhZ2VzKSkge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmF2Lmxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBuYXYubGFuZ3VhZ2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlICYmIGxhbmd1YWdlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3VwcG9ydCBmb3Igb3RoZXIgd2VsbCBrbm93biBwcm9wZXJ0aWVzIGluIGJyb3dzZXJzXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJyb3dzZXJMYW5ndWFnZVByb3BlcnR5S2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsYW5ndWFnZSA9IG5hdlticm93c2VyTGFuZ3VhZ2VQcm9wZXJ0eUtleXNbaV1dO1xyXG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2UgJiYgbGFuZ3VhZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2FsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGFuZ3VhZ2VLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9jYWxlKGxhbmdLZXkpIHtcclxuICAgICAgICB2YXIgbGFuZ0tleXMgPSB0aGlzLmdldEF2YWlsYWJsZUxhbmd1YWdlS2V5cygpO1xyXG5cclxuICAgICAgICBpZiAobGFuZ0tleXMuaW5kZXhPZihsYW5nS2V5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGxhbmdLZXkgKyAnaXMgbm90IHN1cHBvcnRlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2VLZXkgPSBsYW5nS2V5O1xyXG5cclxuICAgICAgICB0aGlzLiRsb2FkZXIubG9hZChsYW5nS2V5KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJUcmFuc2xhdGlvbihsYW5nS2V5LCByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGF1dG9tYXRlLmV2ZW50cy5yZWZyZXNoVmlldy5maXJlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXZhaWxhYmxlTGFuZ3VhZ2VLZXlzKGxhbmdLZXlzKSB7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVMYW5ndWFnZUtleXMgPSBsYW5nS2V5cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdmFpbGFibGVMYW5ndWFnZUtleXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXZhaWxhYmxlTGFuZ3VhZ2VLZXlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYW5zbGF0aW9uVGFibGUobGFuZ0tleSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zbGF0aW9uVGFibGVbbGFuZ0tleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9uVGFibGVbbGFuZ0tleV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25UYWJsZVtsYW5nS2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50VHJhbnNsYXRpb25UYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUcmFuc2xhdGlvblRhYmxlKHRoaXMuY3VycmVudExhbmd1YWdlS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclRyYW5zbGF0aW9uKGxhbmdLZXksIG9iaikge1xyXG4gICAgICAgIHZhciB0YWJsZSA9IHRoaXMuZ2V0VHJhbnNsYXRpb25UYWJsZShsYW5nS2V5KTtcclxuICAgICAgICBhdXRvbWF0ZS5leHRlbmQodGFibGUsIG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFudChrZXkpIHtcclxuICAgICAgICB2YXIgdGFibGUgPSB0aGlzLmdldEN1cnJlbnRUcmFuc2xhdGlvblRhYmxlKCk7XHJcblxyXG4gICAgICAgIGlmICh0YWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGUuZ2V0UHJvcGVydHkodGFibGUsIGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==