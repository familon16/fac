/**
 * Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/hiowenluke/fac
 * Released under the MIT License.
 */

(function(){arguments[0](
	require('../../../lib'),
	require('../../__lib/util').log
)})

(function(fac, log){

	var Animal = {
		name: 'animal',

		sayHi: function(){
			log('Hi from ' + this.name);
			return 'sayHi';
		}
	};

	module.exports = fac(Animal);
});
