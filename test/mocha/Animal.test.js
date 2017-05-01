/**
 * Test of Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/hiowenluke/fac
 * Released under the MIT License.
 */

var expect = require('chai').expect;
var Animal = require('../__res/Animal/Animal');
var animal = Animal();

describe('Object Animal', function(){
	it('should be animal', function(){
		expect(animal.name).to.be.equal('animal');
	});

	it('should be sayHi', function(){
		expect(animal.sayHi()).to.be.equal('sayHi');
	});
});
