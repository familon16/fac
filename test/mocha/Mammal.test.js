/**
 * Test of Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

var expect = require('chai').expect;
var Mammal = require('../__res/Animal/Mammal');
var mammal = Mammal();

describe('Object Mammal', function(){
	it('should be mammal', function(){
		expect(mammal.name).to.be.equal('mammal');
	});

	it('should be sayHi', function(){
		expect(mammal.sayHi()).to.be.equal('sayHi');
	});

	it('should be run', function(){
		expect(mammal.run()).to.be.equal('run');
	});
});
