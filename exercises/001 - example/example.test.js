'use strict';
const example = require('./example.js');
const execFileSync = require('child_process').execFileSync;
const assert = require('assert');
const path = require('path');

describe('0001 - example', ()=>{
    
    describe('example.js', ()=>{

        it('should output "hello world" in the console', ()=> {
            const result = example.HelloWorld();
            assert(result === 'Hello World');
        });


    });
    
});