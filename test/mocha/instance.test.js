/**
 * Test of Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

var expect = require('chai').expect;
var Dog = require('../__res/Animal/Dog');
var dog = Dog();

describe('Instance and Prototype', function(){
	it('should be true', function(){
		expect(dog.isInstanceof(Dog)).to.be.equal(true);
	});

	it('should be 2', function(){
		Dog.__proto__.age = 2;
		expect(dog.age).to.be.equal(2);
	});

	it('should be 3', function(){
		dog.age = 3;
		Dog.__proto__.age = 2;
		expect(dog.age).to.be.equal(3);
	});

	it('should be 2', function(){
		dog.age = 3;
		Dog.__proto__.age = 2;
		expect(dog.__proto__.age).to.be.equal(2);
	});
});
