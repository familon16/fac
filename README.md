## Fac.js

Fac simplifies JavaScript programming. With Fac, we no longer need to simulate C++, Java or any other languages, no longer need to simulate classes and inheritance, just use **object** and **extending**.

Let us forget about object-oriented programming, forget to simulate object-oriented programming in JavaScript, and forget the following concepts: classes, inheritance (multiple inheritance, combined inheritance, parasitic inheritance, parasitic combination inheritance) and mixins. 

Again, we just need object and extending. JavaScript programming should have been so simple. With Fac, all this is so natural. Fac is only 1KB gzipped, with no dependency, and can be used in [Node.js](https://nodejs.org) and in browsers. Fac is the abbreviation of "factory". 



## Install

In Node.js
```bash
$ npm install fac --save
```

Test:
```bash
$ npm test
```

　

In Web / RequireJS:

Download [fac.js](https://raw.githubusercontent.com/tasjs/fac/master/dist/fac.js) or [fac.min.js](https://raw.githubusercontent.com/tasjs/fac/master/dist/fac.min.js).

　

## Example

Animal.js (base object)
```js
var fac = require('fac');

var Animal = {
    name: 'animal',
    sayHi: function(){
        console.log('Hi from ' + this.name);
    }
};

// Use fac() to pack the Object Animal, important.
// Append the methods new(), create(), extend() to the object Animal.
module.exports = fac(Animal);
```

Mammal.js (extended from Animal)
```js
var fac = require('fac');
var Animal = require('./Animal');

// Animal extended to Mammal
var Mammal = Animal.extend({
    name: 'mammal', // Cover the name
    run: function(){ // New method of Mammal
        console.log('Running...');
    }
});

module.exports = fac(Mammal);
```

Dog.js (extended from Mammal)
```js
var fac = require('fac');
var Mammal = require('./Mammal');

// Mammal extended to Dog
var Dog = Mammal.extend({
    name: 'dog',
    
    // For Initializing the instance of Dog.
    // If the Dog has init(), the name must be "init". 
    // Or, the Dog has no init().
    init: function(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    },
  
    swim: function(){
        console.log('Swimming...');
    }
});

module.exports = fac(Dog);
```

**dog.js (instance of Dog)**
```js
var Dog = require('./Dog');
var dog = Dog('Tobe', 2, 'boy');  // Create an instance of Dog.
//var dog = Dog.new('Lucky', 2, 'boy');  // or .new(), as you will.
//var dog = Dog.create('Lucky', 2, 'boy');  // or .create().

dog.sayHi(); // Hi from Tobe
dog.run(); // Running...
dog.swim(); // Swimming...

console.log(dog.name); // Tobe
console.log(dog.age); // 2
console.log(dog.sex); // boy
```

　

## Example of Multiple Extending

SuperBase.js (base object)
```js
var SuperBase = {
    sing: function(){
        console.log('Singing...');
    }
};
module.exports = fac(SuperBase);
```

SuperDance.js (base object)
```js
var SuperDance = {
    dance: function(){
        console.log('Dancing...');
    }
};
module.exports = fac(SuperDance);
```

SuperFly.js (base object)
```js
var SuperFly = {
    fly: function(){
        console.log('Flying...');
    }
};
module.exports = fac(SuperFly);
```

Super.js (extended from SuperBase, SuperFly, SuperDance)
```js
var Base = require('./SuperBase');
var Fly = require('./SuperFly');
var Dance = require('./SuperDance');

var Super = Base.extend(Fly, Dance, {
    fight: function(){
        console.log('Fighting...');
    }
});

module.exports = fac(Super);
```

SuperDog.js (extend from Mamml and Super)
```js
var Mammal = require('./Mammal');
var Super = require('./Super');

var Dog = Mammal.extend(Super, {
    name: 'super-dog',
    init: function(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    },
    swim: function(){
        log('Swimming...');
        return 'swim';
    }
});

module.exports = fac(Dog);
```

**super-dog.js (instance of SuperDog)**
```js
var Dog = require('./SuperDog');
var dog = Dog('Super-Tobe', 2, 'boy');

dog.sayHi(); // Hi from Super-Tobe
dog.run(); // Running...
dog.swim(); // Swimming...
dog.fly(); // Flying...
dog.dance(); // Dancing...
dog.sing(); // Singing...
dog.fight(); // Fighting...

console.log(dog.name); // Super-Tobe
console.log(dog.age); // 2
console.log(dog.sex); // boy
```

　

## License

[MIT](LICENSE)

Copyright (c) 2017, Owen Luke

