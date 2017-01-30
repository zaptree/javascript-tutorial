'use strict';
let main = require('./01isEvenlyDivisible');
const assert = require('assert');

describe('002 - functions and requires', ()=>{
    
    describe('01isEvenlyDivisible.js', ()=>{

        it('return value should be true for an input of 4/2', ()=>{
            const result = main.isEvenlyDivisible(4,2);
            assert(result === true);
        });

        it('return value should be false for an input of 10/3', ()=>{
            const result = main.isEvenlyDivisible(10,3);
            assert(result === false);
        });

    });
    
});