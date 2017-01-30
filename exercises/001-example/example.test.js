'use strict';

const execFileSync = require('child_process').execFileSync;
const assert = require('assert');
const path = require('path');

describe('001 - example', ()=>{
    
    describe('example.js', ()=>{

        it('should output "hello world" in the console', ()=>{
            const result = execFileSync('node', [path.join(__dirname, '/example.js')]);
            assert(result.toString().trim() === 'hello world');
        });

    });
    
});