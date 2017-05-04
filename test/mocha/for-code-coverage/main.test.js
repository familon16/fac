/**
 * Test of Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

var expect = require('chai').expect;
var fac = require('../../../lib');

describe('for code coverage', function(){
	it('should be true', function(){
		var str = fac("this is a string");
		expect(typeof str === 'string').to.be.equal(true);
	});
});
