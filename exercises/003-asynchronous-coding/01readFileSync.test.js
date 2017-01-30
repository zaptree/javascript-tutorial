'use strict';
let main = require('./01readFileSync');
const assert = require('assert');

describe('003 - asynchronous coding', () => {

  describe('01readFileSync.js', () => {

    it('should return the contents of text.txt synchronously', () => {
      const result = main.loadTextSync();
      assert(result.trim() === 'Hello world');
    });

    it('should return the contents of text.txt and text2.txt synchronously', () => {
      const result = main.loadMultipleTextSync();
      assert(result[0].trim() === 'Hello world');
      assert(result[1].trim() === 'Goodbye world');
    });

  });

});