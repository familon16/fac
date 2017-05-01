/**
 * Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/hiowenluke/fac
 * Released under the MIT License.
 */

(function(){arguments[0](
	require('../../../lib'),
	require('../../__lib/util').log,
	require('./Base'),
	require('./Fly'),
	require('./Dance')
)})

(function(fac, log, Base, Fly, Dance){

	var Super = Base.extend(Fly, Dance, {
		fight: function(){
			log('Fighting...');
			return 'fight';
		}
	});

	module.exports = fac(Super);
});
