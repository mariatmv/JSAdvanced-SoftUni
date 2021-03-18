const describe = require('mocha').describe
const assert = require('chai').assert


function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('check isOddOrEven', () => {
    it('Message', () => {
        let result = isOddOrEven(1)
        assert.equal(result, undefined, 'Message 1==undefined')
    })
})


describe('check isOddOrEven', () => {
    it('Message', () => {
        let result = isOddOrEven('zdr')
        assert.equal(result, 'odd', 'Message zdr==odd')
    })
})

describe('check isOddOrEven', () => {
    it('Message', () => {
        let result = isOddOrEven('kp')
        assert.equal(result, 'even', 'Message kp==even')
    })
})