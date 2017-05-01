/**
 * Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

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
