const describe = require('mocha').describe
const assert = require('chai').assert


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe('firstTest', () => {
    it('Message', () => {
        assert.equal(lookupChar(2, 2), undefined)
    })
})

describe('secondTest', () => {
    it('Message', () => {
        assert.equal(lookupChar('zdr', 'kpr'), undefined)
    })
})

describe('thirdTest', () => {
    it('Message', () => {
        assert.equal(lookupChar('zdr', -1), "Incorrect index")
    })
})

describe('forthTest', () => {
    it('Message', () => {
        assert.equal(lookupChar('zdr', 6), "Incorrect index")
    })
})

describe('fifthTest', () => {
    it('Message', () => {
        assert.equal(lookupChar('zdr', 2), "r")
    })
})

describe('sixthTest', () => {
    it('Message', () => {
        assert.equal(lookupChar(2, 'zdr'), undefined)
    })
})