/**
 * Test of Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/hiowenluke/fac
 * Released under the MIT License.
 */

var expect = require('chai').expect;
var Dog = require('../__res/Animal/Dog-Super');
var dog = Dog('Super-Tobe', 2, 'boy');

describe('Object Dog-Super', function(){
	it('should be Super-Tobe', function(){
		expect(dog.name).to.be.equal('Super-Tobe');
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

	it('should be fly', function(){
		expect(dog.fly()).to.be.equal('fly');
	});

	it('should be dance', function(){
		expect(dog.dance()).to.be.equal('dance');
	});

	it('should be sing', function(){
		expect(dog.sing()).to.be.equal('sing');
	});

	it('should be fight', function(){
		expect(dog.fight()).to.be.equal('fight');
	});

	it('should be true', function(){
		expect(dog.bod instanceof Date).to.be.equal(true);
	});

	it('should be true', function(){
		expect(dog.reg instanceof RegExp).to.be.equal(true);
	});
});
