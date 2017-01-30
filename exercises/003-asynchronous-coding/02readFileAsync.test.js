'use strict';
let main = require('./02readFileAsync');
const assert = require('assert');

describe('003 - asynchronous coding', () => {

  describe('02readFileAsync.js', () => {

    it('should return the contents of text.txt asynchronously', (done) => {
      main.loadTextAsync((error, result) => {
        assert(result.trim() === 'Hello world');
        done();
      });

    });

    it('should return the contents of text.txt and text.text2 asynchronously', (done) => {
      main.loadMultipleTextAsync((error, result) => {
        assert(result[0].trim() === 'Hello world');
        assert(result[1].trim() === 'Goodbye world');
        done();
      });

    });

  });

});