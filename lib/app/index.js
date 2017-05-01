/**
 * Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

(function(){arguments[0](
	require('../util/extend')
)})

(function(extend){

	var fac = {
		obj: null,

		do: function(obj){
			this.createNew(obj);
			this.createEntry(obj);
			this.appendSet(obj);
			this.appendExtend(obj);
			this.resetProto(obj);
			return this.obj.__entry__;
		},

		createNew: function(obj){
			this.obj = {};

			this.obj.__new__ = function(){
				var o = Object.create(obj);
				o.init && o.init.apply(o, arguments);
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
			this.obj.__entry__.create = fn;

			Object.defineProperty(this.obj, '__entry__', {
				enumerable: false
			});
		},

		appendSet: function(obj){
			var entry = this.obj.__entry__;
			entry.set = function(prop, val){
				obj[prop] = val;
			};
		},

		appendExtend: function(){
			var entry = this.obj.__entry__;
			entry.extend = function(){

				var newObj = {};
				var objs = [].slice.call(arguments);

				objs.unshift(this);
				objs.forEach(function(obj){
					extend(newObj, obj);
				});

				newObj.__proto__ = this;
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
