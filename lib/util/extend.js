/**
 * Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

(function(){arguments[0](
    require('./is')
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
					if (!is.object(target[key])) {
						target[key] = {};
					}

					// Recursive
					extend.do(target[key], source[key]);
				}

				// Copy general properties to target.
				target[key] = source[key];
			}
		}
	};

	module.exports = extend.do;
});
