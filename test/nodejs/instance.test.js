/**
 * Test of Fac.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/fac
 * Released under the MIT License.
 */

var Dog = require('../__res/Animal/Dog');
var dog = Dog();

console.log(dog.isInstanceof(Dog)); // true

Dog.__proto__.age = 3;
console.log(Dog.age); // 3
console.log(dog.age); // 3


var Tobe = Dog('Tobe', 2, 'boy');
var Lucy = Dog('Lucy', 1, 'girl');
console.log(Tobe.age); // 2
console.log(Lucy.age); // 1

console.log(Tobe.__proto__.age); // 3
console.log(Lucy.__proto__.age); // 3
