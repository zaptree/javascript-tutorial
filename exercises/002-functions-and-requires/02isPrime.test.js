'use strict';
let main = require('./02isPrime');
const assert = require('assert');

describe('002 - functions and requires', ()=>{
    
    describe('02isPrime.js', ()=>{

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