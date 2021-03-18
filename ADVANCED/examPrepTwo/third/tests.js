const describe = require('mocha').describe
const expect = require('chai').expect
const dealership = require('./solution')
const assert = require('chai').assert

describe("Tests …", function() {
    describe("newCarCost", function() {
        it("reduce price", function() {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000)
        });
        it("stay same price", function() {
            expect(dealership.newCarCost('a', 1)).to.equal(1)
        });
    });
    describe("carEquipment", function() {
        it(".", function() {
            assert.deepEqual(dealership.carEquipment(['a'], [0]), ['a'])
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c'], [0, 2]), ['a', 'c'])
        });
    });
    describe("euroCategory", function() {
        it("no discount", function() {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        });
        it("with discount", function() {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
            expect(dealership.euroCategory(6)).to.equal('We have added 5% discount to the final price: 14250.')
        });
    });
});