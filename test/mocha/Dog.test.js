/**
 * Test of Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

var expect = require('chai').expect;
var Dog = require('../__res/Animal/Dog');
var dog = Dog('Tobe', 2, 'boy');

describe('Object Dog', function(){
	it('should be Tobe', function(){
		expect(dog.name).to.be.equal('Tobe');
	});

	it('should be 2', function(){
		expect(dog.age).to.be.equal(2);
	});

	it('should be boy', function(){
		expect(dog.sex).to.be.equal('boy');
	});

	it('should be sayHi', function(){
		expect(dog.sayHi()).to.be.equal('sayHi');
	});

	it('should be run', function(){
		expect(dog.run()).to.be.equal('run');
	});

	it('should be swim', function(){
		expect(dog.swim()).to.be.equal('swim');
	});
});
