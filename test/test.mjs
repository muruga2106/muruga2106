import assert from 'assert'
import {canVote, EdhachuOruFunction} from '../files/index.js';
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.should();

const expect = chai.expect;










/* describe("Array", ()=>{
    describe("#index of", ()=>{
        it('Should return -1 when the element is not found in the array..', ()=>{
            assert.equal([1,2,3,4].indexOf(5), -1);
            [1,2,3,4].indexOf(5).should.equal(-1);
        })
    })
}) */

/* describe("Testing a async functions", ()=>{
    describe("Callback", function (){
        it("can vote..", function (done) {
            canVote(18, (err, result)=>{
                try{
                    assert.strictEqual(err, null);
                    assert.strictEqual(result, 18);
                    done();
                }
                catch(err){
                    done(err);
                }
            })
        });
        it("cant vote..", function (done){
            canVote(16, (err, result)=>{
                try{
                    assert.strictEqual(err?.message, 'Cant vote');
                    assert.strictEqual(result, null);
                    done();
                }
                catch(err){
                    done(err);
                }
            })
        })
    });

    describe("async await", ()=>{
        it('passing an expected value', async ()=>{
            try{
                const result = await EdhachuOruFunction(2026);
                assert.strictEqual(result, 2026);
            }
            catch(err){
                assert.fail("unexpected error")
            }
        }),
        it('passing an expected value with chai', ()=>{
            try{
                EdhachuOruFunction(2026).should.eventually.equal(2026);
            }
            catch(err){
                assert.fail("unexpected error")
            }
        })
        it('passing an unexpected value', async ()=>{
            try{
                const result = await EdhachuOruFunction(2025);
                assert.fail("unexpected it must throw an error")
            }
            catch(err){
                assert.strictEqual(err.message, 'Edho oru error..');
            }
        })
        it('passing an unexpected value with should be rejectedWith', ()=>{
            EdhachuOruFunction(2025).should.be.rejectedWith('Edho oru error..');
        })
    })

    describe("checking promises", ()=>{
        it("checking for expected properties", ()=>{
            chai.expect({ foo: "bar" }).to.have.property("foo");
            chai.expect(Promise.resolve({ foo: "bar" })).to.eventually.have.property("foo");
        })
    })

}) */

/* describe("just learning", function () {
    beforeEach(function () {
        this.timeout(100);
    })
    it("my test", function (done) {
        this.timeout(1500);
        console.log(this);
        EdhachuOruFunction(2026).should.eventually.equal(2026).notify(done);
    });
}) */

/* describe("User login", function () {
    let user;

    beforeEach(function () {
        user = { name: "Muruga", loggedIn: false };
    });

    it("should be logged out by default", function () {
        assert.strictEqual(user.loggedIn, false);
    });

    it("can be logged in manually", function () {
        user.loggedIn = true;
        assert.strictEqual(user.loggedIn, true);
    });
}); */