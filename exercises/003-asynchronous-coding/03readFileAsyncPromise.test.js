'use strict';
let main = require('./03readFileAsyncPromise');
const assert = require('assert');

describe('003 - asynchronous coding', () => {

  describe('03readFileAsyncPromise.js', () => {

    it('should return the contents of text.txt asynchronously', () => {
      return main.loadTextPromise()
        .then(result => {
          assert(result.trim() === 'Hello world');
        });
    });

    it('should return the contents of text.txt and text.text2 asynchronously', () => {
     return  main.loadMultipleTextPromise()
        .then(result => {
          assert(result[0].trim() === 'Hello world');
          assert(result[1].trim() === 'Goodbye world');
        });

    });

  });

});