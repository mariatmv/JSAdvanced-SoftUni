const HolidayPackage = require('./solution');
const describe = require('mocha').describe;
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("tests", function() {
    describe("initialization", function() {
        it("initialize", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            expect(holiday.destination).to.equal('Rome');
            expect(holiday.season).to.equal('Summer');
            assert.deepEqual(holiday.vacationers, []);
            expect(holiday.insuranceIncluded).to.equal(false);
        });
        it("changeInsuranceProperty", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            holiday.insuranceIncluded = true;
            expect(holiday.insuranceIncluded).to.equal(true);
        });
        it("breakInsuranceProperty", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            assert.throws(() => holiday.insuranceIncluded = 'zdr', Error, 'Insurance status must be a boolean')
        });
    });
    describe("addVacationer", function() {
        it("adds vacationer", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            holiday.addVacationer('zdr kp');
            assert.deepEqual(holiday.vacationers, ['zdr kp']);
        });
        it("throws errors whem vacationer", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            assert.throws(() => holiday.addVacationer(' '), Error, "Vacationer name must be a non-empty string");
            assert.throws(() => holiday.addVacationer(5), Error, "Vacationer name must be a non-empty string");
            assert.throws(() => holiday.addVacationer('zdr'), Error, "Name must consist of first name and last name");

        });
    });
    describe("showVacationers", function() {
        it("show names", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            holiday.addVacationer('zdr kp');
            expect(holiday.showVacationers()).to.equal("Vacationers:\n" + 'zdr kp');
            holiday.addVacationer('chao chao');
            expect(holiday.showVacationers()).to.equal("Vacationers:\n" + 'zdr kp\n' + 'chao chao');
        });
        it("no names", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            expect(holiday.showVacationers()).to.equal('No vacationers are added yet');
        });
    });
    describe("generateHolidayPackage", function() {
        it("throw error", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            assert.throws(() => holiday.generateHolidayPackage(), Error, 'There must be at least 1 vacationer added')
        });
        it("generate", function() {
            let holiday = new HolidayPackage('Rome', 'Spring');
            holiday.addVacationer('zdr kp');
            holiday.addVacationer('chao chao');
            let expected = 'Holiday Package Generated\n' +
                'Destination: Rome\n' +
                'Vacationers:\n' +
                'zdr kp\n' +
                'chao chao\n' +
                'Price: 800'
            expect(holiday.generateHolidayPackage()).to.equal(expected)
        });
        it("generate1", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            holiday.addVacationer('zdr kp');
            holiday.addVacationer('chao chao');
            let expected = 'Holiday Package Generated\n' +
                'Destination: Rome\n' +
                'Vacationers:\n' +
                'zdr kp\n' +
                'chao chao\n' +
                'Price: 1000'
            expect(holiday.generateHolidayPackage()).to.equal(expected)
        });
        it("generate2", function() {
            let holiday = new HolidayPackage('Rome', 'Summer');
            holiday.addVacationer('zdr kp');
            holiday.addVacationer('chao chao');
            holiday.insuranceIncluded = true;
            let expected = 'Holiday Package Generated\n' +
                'Destination: Rome\n' +
                'Vacationers:\n' +
                'zdr kp\n' +
                'chao chao\n' +
                'Price: 1100'
            expect(holiday.generateHolidayPackage()).to.equal(expected)
        });
    });
});