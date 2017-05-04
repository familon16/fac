/**
 * Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

(function(){arguments[0](
	require('../../../lib'),
	require('../../__lib/util').log,
	require('./Mammal'),
	require('./../Super/Super')
)})

(function(fac, log, Mammal, Super){

	var Dog = Mammal.extend(Super, {
		name: 'super-dog',

		init: function(name, age, sex){
			typeof name !== 'undefined' && (this.name = name);
			typeof age !== 'undefined' && (this.age = age);
			typeof sex !== 'undefined' && (this.sex = sex);
		},

		swim: function(){
			log('Swimming...');
			return 'swim';
		}
	});

	module.exports = fac(Dog);
});
