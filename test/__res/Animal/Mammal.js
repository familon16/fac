/**
 * Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

(function(){arguments[0](
	require('../../../lib'),
	require('../../__lib/util').log,
	require('./Animal')
)})

(function(fac, log, Animal){

	var Mammal = Animal.extend({
		name: 'mammal',

		run: function(){
			log('Running...');
			return 'run';
		}
	});

	module.exports = fac(Mammal);
});
