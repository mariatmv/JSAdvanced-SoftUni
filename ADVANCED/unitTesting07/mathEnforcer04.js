const describe = require('mocha').describe
const assert = require('chai').assert

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('testAddFiveShouldReturnUndefined', () => {
    it('Message', () => {
        assert.equal(mathEnforcer.addFive("zdr"), undefined)
        assert.equal(mathEnforcer.addFive("5"), undefined)

    })
})

describe('testAddFiveShouldWork', () => {
    it('Message', () => {
        assert.equal(mathEnforcer.addFive(5), 10)
        assert.equal(mathEnforcer.addFive(-2), 3)
        assert.closeTo(mathEnforcer.addFive(2.5), 7.5, 0.01)


    })
})

describe('testSubstractTenShouldReturnUndefined', () => {
    it('Message', () => {
        assert.equal(mathEnforcer.subtractTen("zdr"), undefined)
    })
})

describe('testSubstractTenShouldReturnUndefined', () => {
    it('Message', () => {
        assert.equal(mathEnforcer.subtractTen(20), 10)
        assert.equal(mathEnforcer.subtractTen(5), -5)
        assert.closeTo(mathEnforcer.subtractTen(10.5), 0.5, 0.01)


    })
})

describe('testSumShouldReturnUndefined', () => {
    it('Message', () => {
        assert.equal(mathEnforcer.sum("zdr", 5), undefined)
        assert.equal(mathEnforcer.sum("zdr", 'zdr'), undefined)
        assert.equal(mathEnforcer.sum(5, 'zdr'), undefined)
    })
})

describe('testSumShouldWork', () => {
    it('Message', () => {
        assert.equal(mathEnforcer.sum(5, 5), 10)
        assert.equal(mathEnforcer.sum(-2, -2), -4)
        assert.closeTo(mathEnforcer.sum(2.5, 2.5), 5, 0.01)
    })
})