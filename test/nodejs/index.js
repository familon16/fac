/**
 * Test of Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

(function(){

	var testFiles = [
		'./Animal.test',
		'./Dog.test',
		'./Dog-Super.test',
		'./Mammal.test'
	];

	testFiles.forEach(function(file){
		require(file);
		console.log('');
	});

})();
