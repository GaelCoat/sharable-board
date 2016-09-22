webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone) {var app = __webpack_require__(5);
	var App = new app();
	window.App = App;

	App.on('start', function() {
	  Backbone.history.start();
	});

	App.start();

	module.exports = App;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, Marionette) {var utils = __webpack_require__(8);
	var Router = __webpack_require__(9);
	var Layout = __webpack_require__(10);

	// Main.css
	__webpack_require__(13);

	_.templateSettings = {
	  interpolate: /\{\{(.+?)\}\}/g
	};

	var app = Marionette.Application.extend({

	  router: null,
	  layout: null,

	  initialize: function() {

	    var that = this;

	    this.layout = new Layout();
	    this.router = new Router(this.layout);

	  },

	});

	module.exports = app;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(6)))

/***/ },
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {$.easing.easeOutQuart = function (x, t, b, c, d) {
	  return -c * ((t=t/d-1)*t*t*t - 1) + b;
	};

	$.fn.background = function(pictureUrl, width, callback) {

	  var that = this;

	  if (!pictureUrl) return this.css('background', 'none');
	  if (width) pictureUrl = pictureUrl+'?w='+width;

	  var img = new Image();
	  img.src = pictureUrl;
	  img.onload = function() {

	    that.css({
	      'background': 'url('+pictureUrl+') center',
	      '-moz-background-size': 'cover',
	      '-o-background-size': 'cover',
	      '-webkit-background-size': 'cover',
	      'background-size': 'cover'
	    }).addClass('loaded');

	    if (callback) callback(img);

	  }

	  return this;
	}

	String.prototype.capitalize = function() {
	  return this.charAt(0).toUpperCase() + this.slice(1);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette) {
	var Router = Marionette.AppRouter.extend({

	  initialize: function(Controller) {

	    this.controller = Controller
	  },

	  appRoutes: {
	    '':'home',
	    'board':'board',
	  },

	});


	module.exports = Router;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette) {var Polymer = __webpack_require__(11);

	module.exports = Marionette.View.extend({

	  el: 'body',

	  regions: {
	    //header: '#header',
	    content: '#layout'
	  },

	  events: {
	    'click .redirect': 'redirect',
	    'mousedown [polymer]': 'polymer'
	  },

	  polymer: function(e) { return Polymer(e) },
	  home: function() { return this.loadView('./views/home'); },
	  board: function() { return this.loadView('./views/board'); },

	  loadView: function(path, params) {

	    var subview = __webpack_require__(12)(path);
	    var view = new subview(params);
	    this.showChildView('content', view);

	    return this;
	  }
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {
	module.exports = function(e) {

	    var button = $(e.currentTarget);
	    var touch = $('<div><div/>');
	    var size = button.outerWidth() * 1.9;
	    var complete = false;

	    $(document)
	    .on('mouseup',function(){
	      var a = {
	        'opacity': '0'
	      };
	      if( complete === true ){
	        size = size * 1.2;
	        $.extend(a, {
	          'height': size + 'px',
	          'width': size + 'px',
	          'margin-top': -(size)/2 + 'px',
	          'margin-left': -(size)/2 + 'px'
	        });
	      }

	      touch
	      .animate(a, {
	        duration: 500,
	        complete: function(){touch.remove();},
	        easing: 'swing'
	      });

	      $(document).off();
	    });

	    touch
	    .addClass( 'touch' )
	    .css({
	      'position': 'absolute',
	      'top': e.pageY-button.offset().top + 'px',
	      'left': e.pageX-button.offset().left + 'px',
	      'width': '0',
	      'height': '0'
	    });

	    /* IE8 will not appendChild */
	    button.get(0).appendChild(touch.get(0));

	    touch
	    .animate({
	      'height': size + 'px',
	      'width': size + 'px',
	      'margin-top': -(size)/2 + 'px',
	      'margin-left': -(size)/2 + 'px'
	    }, {
	      queue: false,
	      duration: 500,
	      'easing': 'easeOutQuart',
	      'complete': function(){
	        complete = true
	      }
	    });


	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./app": 5,
		"./app.js": 5,
		"./directives/polymer": 11,
		"./directives/polymer.js": 11,
		"./layout": 10,
		"./layout.js": 10,
		"./libs/utility": 8,
		"./libs/utility.js": 8,
		"./main": 1,
		"./main.js": 1,
		"./router": 9,
		"./router.js": 9,
		"./sass/main.scss": 13,
		"./sass/variables.scss": 17,
		"./templates/home.pug": 19,
		"./views/board": 24,
		"./views/board.js": 24,
		"./views/home": 20,
		"./views/home.js": 20
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 12;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".reset {\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  height: auto;\n  width: auto;\n  box-shadow: none;\n  padding: 0; }\n\n.fluze {\n  background-color: white;\n  border-radius: 6px;\n  padding: 28px; }\n\n.shadow {\n  -webkit-box-shadow: 0px 15px 50px 0px rgba(142, 128, 208, 0.32);\n  box-shadow: 0px 15px 50px 0px rgba(142, 128, 208, 0.32); }\n\n.drop-shadow {\n  -webkit-box-shadow: 0px 10px 40px 0px rgba(142, 128, 208, 0.45);\n  box-shadow: 0px 10px 40px 0px rgba(142, 128, 208, 0.45); }\n\n.wait {\n  transform: translate3d(0, -50px, 0);\n  opacity: 0;\n  transition: .4s; }\n\n.init {\n  transform: translate3d(0, 0, 0);\n  opacity: 1; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  font: 100% Helvetica, sans-serif;\n  text-align: center;\n  transition: background .6s; }\n\n#layout {\n  min-height: 100%;\n  position: relative;\n  z-index: 1; }\n\n.align {\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle; }\n\n.centered {\n  display: inline-block;\n  vertical-align: middle; }\n\n.subview {\n  height: 100vh; }\n\n.subview.closing {\n  opacity: 0;\n  transition: opacity .4s; }\n\n[polymer] {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-transition: box-shadow .2s;\n  -moz-transition: box-shadow .2s;\n  -ms-transition: box-shadow .2s;\n  -o-transition: box-shadow .2s;\n  transition: box-shadow .2s;\n  cursor: pointer; }\n\n[polymer] .touch {\n  background: rgba(46, 47, 84, 0.25);\n  pointer-events: none;\n  border-radius: 100%; }\n\n[polymer=white] .touch {\n  background: rgba(255, 255, 255, 0.3); }\n\n[polymer][raised], [polymer] .raised {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); }\n\n[polymer]:focus, [polymer]:active {\n  -moz-outline-style: none; }\n\n[polymer]:active {\n  box-shadow: 0 8px 30px rgba(142, 128, 208, 0.45); }\n\n[polymer][disabled], [polymer] .disabled, [polymer] [disabled]:active, [polymer] .disabled:active {\n  background: #eee;\n  color: #aaa;\n  box-shadow: none !important; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./variables.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./variables.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".reset {\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  height: auto;\n  width: auto;\n  box-shadow: none;\n  padding: 0; }\n\n.fluze {\n  background-color: white;\n  border-radius: 6px;\n  padding: 28px; }\n\n.shadow {\n  -webkit-box-shadow: 0px 15px 50px 0px rgba(142, 128, 208, 0.32);\n  box-shadow: 0px 15px 50px 0px rgba(142, 128, 208, 0.32); }\n\n.drop-shadow {\n  -webkit-box-shadow: 0px 10px 40px 0px rgba(142, 128, 208, 0.45);\n  box-shadow: 0px 10px 40px 0px rgba(142, 128, 208, 0.45); }\n\n.wait {\n  transform: translate3d(0, -50px, 0);\n  opacity: 0;\n  transition: .4s; }\n\n.init {\n  transform: translate3d(0, 0, 0);\n  opacity: 1; }\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<h2>home</h2>";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette) {var tpl = __webpack_require__(19);
	//var style = require('!style/useable!css!sass!../sass/home.scss');
	//style.use();

	module.exports = Marionette.View.extend({

	  className: 'subview',

	  events: { },

	  initialize: function() {

	    console.log('elo ?');

	  },

	  render: function() {

	    var that = this;


	    this.$el.html(tpl);
	    return this;
	  }

	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette) {//var style = require('!style/useable!css!sass!../sass/home.scss');
	//style.use();

	module.exports = Marionette.View.extend({

	  className: 'subview',

	  events: { },

	  initialize: function() {

	    console.log('elo ?');

	  },

	  render: function() {

	    var that = this;

	    this.$el.html('<h1>board</h1>');
	    return this;
	  }

	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }
]);