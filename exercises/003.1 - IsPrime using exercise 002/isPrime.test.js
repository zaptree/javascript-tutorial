'use strict';
let main = require("./isPrime.js");
const assert = require('assert');

describe('0003.1 - isPrime using previous function export', ()=>{
    
    describe('example.js', ()=>{

        it('return value should be true for an input of 3', ()=>{
            const result = main.isPrime(3);
            assert(result === true);
        });

        it('return value should be false for an input of 10', ()=>{
            const result = main.isPrime(10);
            assert(result === false);
        });

    });
    
});