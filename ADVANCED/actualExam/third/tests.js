const describe = require('mocha').describe;
const assert = require('chai').assert;
const expect = require('chai').expect;
const numberOperations = require('./solution');

describe("Tests …", function() {
    describe("powNumber", function() {
        it("…", function() {
            expect(numberOperations.powNumber(4)).to.equal(16);
        });
    });
    describe("numberChecker", function() {
        it("throw error not a number", function() {
            assert.throw(() => numberOperations.numberChecker('zdr'), Error, 'The input is not a number!')
            assert.throw(() => numberOperations.numberChecker([1, 2, 3]), Error, 'The input is not a number!')
            assert.throw(() => numberOperations.numberChecker({}), Error, 'The input is not a number!')

        });
        it("number over 100", function() {
            expect(numberOperations.numberChecker(150)).to.equal('The number is greater or equal to 100!')
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!')
        });
        it("number below 100", function() {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!')
            expect(numberOperations.numberChecker(-20)).to.equal('The number is lower than 100!')
        });
    });
    describe("sumArrays", function() {
        it("...", function() {
            assert.deepEqual(numberOperations.sumArrays([56, 34, 64], [93, 25, 46]), [149, 59, 110])
            assert.deepEqual(numberOperations.sumArrays([1, 2], [1, 2, 3]), [2, 4, 3])
            assert.deepEqual((numberOperations.sumArrays([6, 7, 8], [1, 2])), [7, 9, 8])
            assert.deepEqual(numberOperations.sumArrays([-3, -3], [3, -3]), [0, -6])
        });
    });
});



