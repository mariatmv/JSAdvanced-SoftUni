const pizzUni = require('./solution');
const describe = require('mocha').describe;
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("Tests …", function() {
    describe("makeAnOrder", function() {
        it("throw error without the pizza", function() {
            assert.throw(() => pizzUni.makeAnOrder({
                orderedDrink: 'Coca Cola'
            }), Error, 'You must order at least 1 Pizza to finish the order.')
        });
        it("order just a pizza", function() {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Caprichoza'})).to.equal('You just ordered Caprichoza')
        });
        it("order a pizza and a drink", function() {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Caprichoza', orderedDrink: 'Coca Cola'})).to.equal('You just ordered Caprichoza and Coca Cola.')
        });
    });
    describe("getRemainingWork", function() {
        it("all orders are ready should return a proper message", function() {
            let actual = pizzUni.getRemainingWork([{pizzaName: 'a', status: 'ready'}, {pizzaName: 'b', status: 'ready'}]);
            expect(actual).to.equal('All orders are complete!');
        });
        it("should return pizzas that are still preparing", function() {
            let actual = pizzUni.getRemainingWork([{pizzaName: 'a', status: 'preparing'}, {pizzaName: 'b', status: 'preparing'}]);
            expect(actual).to.equal('The following pizzas are still preparing: a, b.');
        });
    });
    describe("orderType", function() {
        it("with discount", function() {
            let actual = pizzUni.orderType(100, 'Carry Out');
            expect(actual).to.equal(90);
        });
        it("without discount", function() {
            let actual = pizzUni.orderType(100, 'Delivery');
            expect(actual).to.equal(100);
        });
    });
});