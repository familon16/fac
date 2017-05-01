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

	var SuperBase = {
		bod: new Date(),
		reg: /.*/,

		sing: function(){
			log('Singing...');
			return 'sing';
		}
	};

	module.exports = fac(SuperBase);
});
