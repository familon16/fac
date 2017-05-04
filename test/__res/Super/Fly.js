/**
 * Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

(function(){arguments[0](
	require('../../../lib'),
	require('../../__lib/util').log
)})

(function(fac, log){

	var SuperFly = {
		fly: function(){
			log('Flying...');
			return 'fly';
		}
	};

	module.exports = fac(SuperFly);
});
