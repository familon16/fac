(function(r,f){if(typeof define==='function'&&define.amd){define(function(){return f(r,r.document)})}else if(typeof exports==='object'){module.exports=r.document?f(r,r.document):function(w){return f(w,w.document)}}else{r.fac=f(r,r.document)}}(typeof window!=='undefined'?window:this,function(window,document){return (function(modules) { // webpackBootstrap
	// The module cache
	var installedModules = {};

	// The require function
	function __webpack_require__(moduleId) {

		// Check if module is in cache
		if(installedModules[moduleId])
			return installedModules[moduleId].exports;

		// Create a new module (and put it into the cache)
		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: false
		};

		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		// Flag the module as loaded
		module.loaded = true;

		// Return the exports of the module
		return module.exports;
	}

	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = modules;

	// expose the module cache
	__webpack_require__.c = installedModules;

	// __webpack_public_path__
	__webpack_require__.p = "";

	// Load entry module and return exports
	return __webpack_require__(0);
})

/*----------------------------------------------------------------------*/
/**
 * Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */
/*----------------------------------------------------------------------*/

([

(function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);
}),

(function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);
}),

(function(module, exports, __webpack_require__) {

	(function(){arguments[0](
		__webpack_require__(3)
	)})

	(function(extend){

		var fac = {
			obj: null,

			do: function(obj){
				this.createNew(obj);
				this.createEntry(obj);
				this.appendExtend(obj);
				this.resetProto(obj);
				return this.obj.__entry__;
			},

			createNew: function(obj){
				this.obj = {};

				this.obj.__new__ = function(){
					var o = Object.create(obj);
					o.init && o.init.apply(o, arguments);

					o.isInstanceof = function(target){
						return obj === target.__proto__;
					};

					return o;
				};

				Object.defineProperty(this.obj, '__new__', {
					enumerable: false
				});
			},

			createEntry: function(obj){
				var fn = this.obj.__new__;

				this.obj.__entry__ = fn;
				this.obj.__entry__.new = fn;

				Object.defineProperty(this.obj, '__entry__', {
					enumerable: false
				});
			},

			appendExtend: function(obj){
				var entry = this.obj.__entry__;
				entry.extend = function(){

					var newObj = {};
					var objs = [].slice.call(arguments);

					objs.unshift(this);
					objs.forEach(function(obj){
						extend(newObj, obj);
					});

					return newObj;
				};
			},

			resetProto: function(obj){
				this.obj.__new__.__proto__ = obj;
			}
		};

		var exports = {
			entry: function(obj){
				if (typeof obj !== 'object') return obj;
				return fac.do(obj);
			}
		};

		module.exports = (exports.entry);
	});
}),

(function(module, exports, __webpack_require__) {

	(function(){arguments[0](
	    __webpack_require__(4)
	)})

	(function(is){

		var extend = {
			do: function(target, source){
				var key;

				// Handle all elements, including elements in prototype.
				for (key in source) {

					// If the source is an indeed Object ( not an Array, or a Function, a Date, a RegExp, etc),
					// then recursively handle it.
					if (is.object(source[key])) {

						// If the target is not an indeed Object,
						// then set is as an Object.

						/* istanbul ignore else */
						if (!is.object(target[key])) {
							target[key] = {};
						}

						// Recursive

						/* istanbul ignore else */
						if (target[key] !== source[key]) {
							extend.do(target[key], source[key]);
						}
					}

					// Copy general properties to target.
					target[key] = source[key];
				}
			}
		};

		module.exports = extend.do;
	});
}),

(function(module, exports) {

	(function(){

		var is = {
			array: function(obj){
				return typeof obj === 'object' && obj instanceof Array;
			},

			object: function(obj){
				return typeof obj === 'object' && !is.array(obj);
			}
		};

		module.exports = (is);
	})();
})


]);}));