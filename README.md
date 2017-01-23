# javascript-tutorial
Lessons for learning javascript

## Class 2 - loops functions and requires
The exercises in this class will focus on implementing some functions to solve some common problems.

### require

real world node.js applications are made of several files and there is a method called require that allows you to include code from one file to another.

for example let's say you have the following code that outputs on the console the minimum age you need to be to use this program:

my_application_folder/age.js
```javascript
console.log('You must be 14 years old to use this program');
```

now let's say you might want to change the age in the future but this age is being used in multiple places in your application.

What you can do is create a config file that will store the age and other configurations in the future:

my_application_folder/config.js
```javascript
module.exports = {
  age: 14
};
```

in the above example we have a config.js file that `exports` our configuration object. This object has a property age. Now we can use this configuration file to get the age instead of hard coding it.

Here is our age.js file refactor to use the config. Notice that we use ./ to denote current directory.

```javascript
const config = require('./config');

console.log('You must be ' + config.age + ' years old to use this program');
```

###functions

In javascript you can declare function in a few ways:

```javascript
// use an anonymus function and store it in a variable called myFunction
const myFunction = function(){
  return 'hello world';
};
const greeting = myFunction();

// use just like the previous example but with an arrow function
const myFunction = ()=>{
  return 'hello world';
};
const greeting = myFunction();

// directly declare a named function
function myFunction(){
  return 'hello world';
}
const greeting = myFunction();

// you can set an object property to a function
const myObject = {
  myFunction: function(){
    return 'hello world';
  }
}
const greeting = myObject.myFunction();

```

for now you can assume that all the different ways of creating functions are the same although later on we will see there are some differences.

### loops

there are several ways to loop through an array

```javascript
// for loop
const myArray = ['red', 'green', 'blue'];
for (var i = 0; i < myArray.length; i++) {
  var color = myArray[i];
  console.log(color);  
}

// forEach loop
const myArray = ['red', 'green', 'blue'];
myArray.forEach(function(color){
  console.log(color);
});

```

You can also loop over the properties of an object
```javascript
const myObject = {
  shirt: 'red',
  hat: 'green',
  pants: 'blue'
}
for(let prop in myObject){
  let clothingType = prop;
  let color = myObject[prop];
  
  console.log('The color of my ' + clothingType + ' is ' + color);
}
```

