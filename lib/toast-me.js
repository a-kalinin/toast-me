(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("toast-me", [], factory);
	else if(typeof exports === 'object')
		exports["toast-me"] = factory();
	else
		root["toast-me"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/index.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/index.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".index__container___1eyTh{position:fixed;top:0;width:100%;color:#fff}.index__container___1eyTh .index__toast___233-Y{height:48px;width:40%;min-width:270px;padding:0 15px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:stretch;justify-content:stretch;background-color:rgba(0,0,0,.9);border-radius:4px;position:absolute;top:12px;left:50%;-webkit-animation:index__toast-in___HT-va .3s ease-out forwards;animation:index__toast-in___HT-va .3s ease-out forwards}@-webkit-keyframes index__toast-in___HT-va{0%{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0}to{-webkit-transform:translate(-50%);transform:translate(-50%);opacity:1}}@keyframes index__toast-in___HT-va{0%{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0}to{-webkit-transform:translate(-50%);transform:translate(-50%);opacity:1}}@-webkit-keyframes index__toast-out___1NqCu{0%{opacity:1}to{opacity:0}}@keyframes index__toast-out___1NqCu{0%{opacity:1}to{opacity:0}}.index__container___1eyTh .index__toast___233-Y .index__message___2bel9{-ms-flex:1 1;flex:1 1;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.index__container___1eyTh .index__toast___233-Y button{outline:none;border:none;border-radius:4px;background-color:transparent;position:relative;margin-left:10px;cursor:pointer;color:#fff;-webkit-transition:background-color .2s;-o-transition:background-color .2s;transition:background-color .2s}.index__container___1eyTh .index__toast___233-Y button:hover{background-color:hsla(0,0%,100%,.1)}.index__container___1eyTh .index__toast___233-Y button:active{background-color:hsla(0,0%,100%,.2)}.index__container___1eyTh .index__toast___233-Y .index__action___2faCa{-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;padding:0 8px;line-height:24px;color:#0b8aff}.index__container___1eyTh .index__toast___233-Y .index__close___2o6CK{-ms-flex:0 0 24px;flex:0 0 24px;width:24px;height:24px}.index__container___1eyTh .index__toast___233-Y .index__close___2o6CK:after,.index__container___1eyTh .index__toast___233-Y .index__close___2o6CK:before{content:\"\";display:block;position:absolute;width:20px;height:2px;top:calc(50% - 1px);left:50%;background-color:#fff}.index__container___1eyTh .index__toast___233-Y .index__close___2o6CK:before{-webkit-transform:translateX(-50%) rotate(45deg);-ms-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg)}.index__container___1eyTh .index__toast___233-Y .index__close___2o6CK:after{-webkit-transform:translateX(-50%) rotate(135deg);-ms-transform:translateX(-50%) rotate(135deg);transform:translateX(-50%) rotate(135deg)}.index__container___1eyTh .index__toast___233-Y .index__close___2o6CK.index__hidden___Ov2Dy{display:none}.index__container___1eyTh .index__toast___233-Y.index__remove___nvwuo{-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);-webkit-animation:index__toast-out___1NqCu .2s forwards;animation:index__toast-out___1NqCu .2s forwards}.index__container___1eyTh .index__toast___233-Y.index__error___38eWT{background-color:#d40d00}", ""]);

// Exports
exports.locals = {
	"container": "index__container___1eyTh",
	"toast": "index__toast___233-Y",
	"toast-in": "index__toast-in___HT-va",
	"message": "index__message___2bel9",
	"action": "index__action___2faCa",
	"close": "index__close___2o6CK",
	"hidden": "index__hidden___Ov2Dy",
	"remove": "index__remove___nvwuo",
	"toast-out": "index__toast-out___1NqCu",
	"error": "index__error___38eWT"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: setClass, DEFAULT_TIMEOUT_BEFORE_REMOVE, DEFAULT_SHOW_DURATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClass", function() { return setClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT_BEFORE_REMOVE", function() { return DEFAULT_TIMEOUT_BEFORE_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SHOW_DURATION", function() { return DEFAULT_SHOW_DURATION; });
function setClass(node, classes) {
  var arr = classes.split(' ');
  arr.forEach(function (cls) {
    return node.classList.add(cls);
  });
}
var DEFAULT_TIMEOUT_BEFORE_REMOVE = 1000;
var DEFAULT_SHOW_DURATION = 5000;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _toastMe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastMe */ "./src/toastMe.js");
/* harmony import */ var _optionsLib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionsLib */ "./src/optionsLib.js");


// export {
//   getOptions,
/* harmony default export */ __webpack_exports__["default"] = (function (content) {
  var receivedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'notify';
  var action = arguments.length > 2 ? arguments[2] : undefined;
  return new _toastMe__WEBPACK_IMPORTED_MODULE_0__["default"](content, receivedOptions, action);
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/optionsLib.js":
/*!***************************!*\
  !*** ./src/optionsLib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var ToastOptions = {
  error: {
    toastClass: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.error,
    timeoutOnRemove: _helper__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_TIMEOUT_BEFORE_REMOVE"],
    showDuration: _helper__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_SHOW_DURATION"]
  },
  notify: {
    timeoutOnRemove: _helper__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_TIMEOUT_BEFORE_REMOVE"],
    showDuration: _helper__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_SHOW_DURATION"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return ToastOptions;
});
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/toastMe.js":
/*!************************!*\
  !*** ./src/toastMe.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToastMe; });
/* harmony import */ var _optionsLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optionsLib */ "./src/optionsLib.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ToastMe =
/*#__PURE__*/
function () {
  /**
   * @param content {String} - text to show
   * @param receivedOptions {Object} - options object
   * @param action {Object} - actions object
   */
  function ToastMe(content) {
    var receivedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'notify';
    var action = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, ToastMe);

    ToastMe.removeAll();
    var options = typeof receivedOptions === 'string' ? Object(_optionsLib__WEBPACK_IMPORTED_MODULE_0__["default"])()[receivedOptions] : receivedOptions;
    this.options = options || {};
    this.content = content;
    this.container = ToastMe.getContainer();
    this.domNode = this.createToastNode(action);
    this.container.appendChild(this.domNode);
    this.startTimer();
  }

  _createClass(ToastMe, [{
    key: "createToastNode",
    value: function createToastNode(action) {
      var _this = this;

      var node = document.createElement('div');
      Object(_helper__WEBPACK_IMPORTED_MODULE_1__["setClass"])(node, _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.toast);
      var messageNode = document.createElement('div');
      Object(_helper__WEBPACK_IMPORTED_MODULE_1__["setClass"])(messageNode, _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message);
      messageNode.textContent = this.content;
      node.appendChild(messageNode);
      node.title = this.content;

      if (this.options && this.options.toastClass) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_1__["setClass"])(node, this.options.toastClass);
      }

      if (action) {
        var actionNode = document.createElement('button');
        Object(_helper__WEBPACK_IMPORTED_MODULE_1__["setClass"])(actionNode, _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.action);

        if (action.class) {
          Object(_helper__WEBPACK_IMPORTED_MODULE_1__["setClass"])(actionNode, action.class);
        }

        actionNode.textContent = action.name;
        actionNode.addEventListener('click', function () {
          action.action();

          _this.close();
        });
        actionNode.title = action.name;
        node.appendChild(actionNode);
      }

      var closeNode = document.createElement('button');
      Object(_helper__WEBPACK_IMPORTED_MODULE_1__["setClass"])(closeNode, _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.close);

      if (this.options && this.options.closeable) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_1__["setClass"])(closeNode, _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hidden);
      }

      closeNode.title = 'Close';
      closeNode.addEventListener('click', function () {
        return _this.close();
      });
      node.appendChild(closeNode);
      node.addEventListener('mouseenter', function () {
        return _this.stopTimer();
      });
      node.addEventListener('mouseleave', function () {
        return _this.startTimer();
      });
      return node;
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      this.stopTimer();
      if (!this.domNode) return;
      Object(_helper__WEBPACK_IMPORTED_MODULE_1__["setClass"])(this.domNode, _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.remove);

      if (this.options.removedToastClass) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_1__["setClass"])(this.domNode, this.options.removedToastClass);
      }

      setTimeout(function () {
        _this2.domNode.remove();
      }, this.options.timeoutOnRemove || _helper__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_TIMEOUT_BEFORE_REMOVE"]);
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this3 = this;

      this.timerShow = setTimeout(function () {
        return _this3.close();
      }, this.options.showDuration || _helper__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_SHOW_DURATION"]);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearTimeout(this.timerShow);
    }
  }], [{
    key: "getContainer",
    value: function getContainer() {
      // eslint-disable-next-line prefer-template
      var node = document.querySelector('.' + _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container);

      if (!node) {
        node = document.createElement('div');
        node.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container);
        document.body.appendChild(node);
      }

      return node;
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      var node = ToastMe.getContainer(); // eslint-disable-next-line prefer-template

      var closeButtons = node.querySelectorAll('.' + _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.close);

      for (var i = 0, l = closeButtons.length; i < l; i += 1) {
        closeButtons[i].click();
      }
    }
  }]);

  return ToastMe;
}();


module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
});
//# sourceMappingURL=toast-me.js.map