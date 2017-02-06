# javascript-tutorial
Lessons for learning javascript

## Class 1 - Getting started
We will be setting up our environment and tutorial project to start developing 

### Environment setup
- install git
- install node.js (Latest version, v7.x.x)
- update npm (after installing node) `npm install -g npm`
- install your favorite IDE such as WebStorm

### Project setup
- fork repo
- clone forked version of repo
- npm install
- npm run test1

If after running npm run test1 you should see something like this:

```
  0001 - example
    example.js
      √ should output "hello world" in the console (206ms)


  1 passing (214ms)

```

if you get an error it probably means you did not set something up correctly.

### Extra credit
In WebStorm setup a mocha run configuration to be able to run your unit tests in debug mode and add break points.

This step is not required but is highly recommended to facilitate you with developing.


## Class 2 - loops functions and requires
The exercises in this class will focus on implementing some functions to solve some common problems. 

To get the latest code do the following (make sure to commit any work you have done first)

first make sure that you have added upstream to your remotes (you only need to do this once not every time)
```
git remote add upstream https://github.com/zaptree/javascript-tutorial.git
# or if you are using ssh to authenitcate (i.e. you generated an ssh key and added that to github settings)
git remote add upstream git@github.com:zaptree/javascript-tutorial.git
```

get latest code and create a new branch to do your work on
```
git checkout master
git fetch upstream
git reset --hard upstream/master
git checkout -b class-02
```

Run the following command to run test related to this class:
```
npm run test2
```

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

## Class 3 - Asynchronous programming

To get the latest code do the following (make sure to commit any work you have done first)

first make sure that you have added upstream to your remotes (you only need to do this once not every time)
```
git remote add upstream https://github.com/zaptree/javascript-tutorial.git
# or if you are using ssh to authenitcate (i.e. you generated an ssh key and added that to github settings)
git remote add upstream git@github.com:zaptree/javascript-tutorial.git
```

get latest code and create a new branch to do your work on
```
git checkout master
git fetch upstream
git reset --hard upstream/master
git checkout -b class-03
```

When coding javascript you have to write a lot of asynchronous (async) code. Any time you do anything that involves i/o operations such as making an http request, reading something from the file system getting data from the database, you will most likely be writing async code.

Let's look at an example on getting data from a database assuming that our code was synchronous:

```javascript
const userId = 10;
// here we are synchronously getting the data for the user with id of 10. We just call our method
// and it will return the data. It's nice and simple
const data = getUserByIdFromDatabase(userId);

console.log('Hello ' + data.name);
console.log('done getting user data');
```

The above code will get the user data and then log a couple of messages. The output will look like this:
```
Hello John
done getting user data
```

Now as we mentioned before getting data from a database is i/o meaning that in javascript this code will actually be asynchronous so the above example is not realistic.

Let's take a look at how the code would actually look if it was async:

```javascript
const userId = 10;
const callback = (error, data)=>{
  if(error){
    console.error('there was an error getting your data');
  }else{
    console.log('Hello ' + data.name);
  }  
};
// this method returns nothing because the code is async so whenever it is done getting the data it will call the callback method passing in the data or an error object if something went wrong
getUserByIdFromDatabase(userId, callback);

console.log('done getting user data');

```

In the above example you will notice that we pass in a callback function into getUserByIdFromDatabase that will get called whenever the data has been fetched from the database.

Now to explain the reason for the callback there is a bug in the code above that helps demonstrate how async code behaves. The actual output of running the above code is the following:
```
done getting user data
Hello John
```

Notice that this time `Hello John` is after the `done getting user data`. The reason for that is that while data from the database is being fetched the program continues to execute thus the `console.log('done getting user data');` after getUserByIdFromDatabase runs before we have our data from the database. This is the reason we pass in a callback to getUserByIdFromDatabase so that it will run the callback at whatever time the data from the database is back.

The correct code so we get output in the correct order would be the following:
```javascript
const userId = 10;
const callback = (error, data)=>{
  if(error){
    console.error('there was an error getting your data');
  }else{
    console.log('Hello ' + data.name);
    console.log('done getting user data');
  }  
};
// this method returns nothing because the code is async so whenever it is done getting the data it will call the callback method passing in the data or an error object if something went wrong
getUserByIdFromDatabase(userId, callback);

```

A reasonable question might be why would we want async code when it makes the code more complex. The reason for that is performance, if the code was synchronous like in the first example the thread that runs the main program would be blocked waiting for data from the database to be returned and not able to do anything else. With async code though the thread does not get blocked and the main program will continue process stuff while waiting for the db to return.
