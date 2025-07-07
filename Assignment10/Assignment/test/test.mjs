//Test all the assignments worked before..

import * as chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Sinon from 'sinon'
import { newAdd, newMul, myfun } from '../otherAssignments/Assignment7/assignment7.js';
import * as cp from "../otherAssignments/Assignment9/index.js"
import * as childProcess from "child_process"
import { emitter, addFunction } from '../mathEvents.js';


// import executable from ""
chai.use(chaiAsPromised);
chai.should();

const expect = chai.expect;

before(()=>{
    console.log("Test Starting..");
});

after(()=>{
    console.log("Test Ending..");
});

describe('Assignement 7', function () {
  describe('Function that takes 2 values and perform sum and multiply by 10', function () {
    it('sum: sum function.. should add two values', function () {
        return expect(newAdd(5,4)).to.eventually.equals(9);
    });
    it('mul: mul function.. should return the value multiplied by 10', function () {
        return expect(newMul(5)).to.eventually.equals(50);
    });

    it('myfun: the actual function that calls sum and multiply the value', function () {
        return expect(myfun()).to.eventually.equal(60);
    })
  });
});

describe('Assignment 9', function () {
    describe("child process" , function () {
        it('exec: checking exec ', async function () {
            const result = await cp.runCommand("pwd");
            expect(result).to.be.equal("/home/muruga.r/muruga/muruga2106/Assignment10/Assignment\n");
        })
        
        it('spawn command', async function (){
            const result = await cp.runCommandSpawn("pwd");
            expect(result).to.be.equal("/home/muruga.r/muruga/muruga2106/Assignment10/Assignment\n");
        })

        // it.only('Wrapper: pwd', async function () {
        //     const consolespy = Sinon.spy(console, "log");
        //     cp.Wrapper();
        //     console.log(consolespy.calledWith("/home/muruga.r/muruga/muruga2106/Assignment10/Assignment\n"));
        // })

    })
})


describe('EventEmitter with addFunction listener', function () {
    it('should call addFunction with 4 and 5 when "add" event is emitted', function () {
        const spy = Sinon.spy(addFunction);

        emitter.removeAllListeners('add');
        emitter.on('add', spy);

        emitter.emit('add', 4, 5);

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(4, 5)).to.be.true;
    });
});
