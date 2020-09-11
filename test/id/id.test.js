// ╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝╚╗ ╔══╗ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║    ║ ║  ║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║          ║ ║  ║ ╚═════╗
//    ║ ║    ║ ║  ║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║          ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗╔╝ ╚══╝ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

const expect = chai.expect;

// ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝╚╗ ╔══╗ ║
//    ║ ║    ║ ║  ║ ║
//    ║ ║    ║ ║  ║ ║
// ╔══╝ ╚══╗╔╝ ╚══╝ ║
// ╚═══════╝╚═══════╝

describe('Id', function() {
    // ╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ╚══╗ ╔══╝╚╗ ╔══╗ ║         ╚══╗ ╔══╝╚╗ ╔══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║         ║ ║    ║ ║  ║ ║╔═══════╗   ║ ║    ║ ║  ║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║         ║ ║    ║ ║  ║ ║╚═══════╝   ║ ║    ║ ║  ║ ║
    // ╔══╝ ╚══╗╔═════╝ ║          ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗╔══╝ ╚══╗╔╝ ╚══╝ ║         ╔══╝ ╚══╗╔╝ ╚══╝ ║
    // ╚═══════╝╚═══════╝          ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝

    describe('#isValidId(value)', function () {
        describe('#isValidId(VALUE)', function () {
            it('Should return true when value parameter is a filled string', () => {
                expect(htmlEngine().isValidId('string')).to.equal(true);
            });

            it('Should return true when value parameter is a filled primitive string', () => {
                expect(htmlEngine().isValidId(String('string'))).to.equal(true);
            });

            it('Should return true when value parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine().isValidId(new String('string'))).to.equal(true);
            });


            it('Should return false when value parameter is a whitespace', () => {
                expect(htmlEngine().isValidId(' ')).to.equal(false);
            });

            it('Should return false when value parameter is an empty string', () => {
                expect(htmlEngine().isValidId('')).to.equal(false);
            });

            it('Should return false when value parameter is an empty primitive string', () => {
                expect(htmlEngine().isValidId(String(''))).to.equal(false);
            });

            it('Should return false when value parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine().isValidId(new String(''))).to.equal(false);
            });

            it('Should return false when value parameter is a whitespace', () => {
                expect(htmlEngine().isValidId(' ')).to.equal(false);
            });

            it('Should return false when value parameter is empty', () => {
                expect(htmlEngine().isValidId()).to.equal(false);
            });

            it('Should return false when value parameter is null', () => {
                expect(htmlEngine().isValidId(null)).to.equal(false);
            });

            it('Should return false when value parameter is NaN', () => {
                expect(htmlEngine().isValidId(NaN)).to.equal(false);
            });

            it('Should return false when value parameter is undefined', () => {
                expect(htmlEngine().isValidId(undefined)).to.equal(false);
            });

            it('Should return false when value parameter is false boolean', () => {
                expect(htmlEngine().isValidId(false)).to.equal(false);
            });

            it('Should return false when value parameter is true boolean', () => {
                expect(htmlEngine().isValidId(true)).to.equal(false);
            });

            it('Should return false when value parameter is an empty object', () => {
                expect(htmlEngine().isValidId({})).to.equal(false);
            });

            it('Should return false when value parameter is an empty array', () => {
                expect(htmlEngine().isValidId([])).to.equal(false);
            });

            it('Should return false when value parameter is a function', () => {
                expect(htmlEngine().isValidId(function () {})).to.equal(false);
            });

            it('Should return false when value parameter is a filled object', () => {
                expect(htmlEngine().isValidId({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value parameter is a number', () => {
                expect(htmlEngine().isValidId(1)).to.equal(false);
            });

            it('Should return false when value parameter is a zero', () => {
                expect(htmlEngine().isValidId(0)).to.equal(false);
            });

            it('Should return false when value parameter is a positive false', () => {
                expect(htmlEngine().isValidId(+0)).to.equal(false);
            });

            it('Should return false when value parameter is a negative zero', () => {
                expect(htmlEngine().isValidId(-0)).to.equal(false);
            });

            it('Should return false when value parameter is a primitive number', () => {
                expect(htmlEngine().isValidId(Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a wrapped primitive number', () => {
                expect(htmlEngine().isValidId(new Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a filled array', () => {
                expect(htmlEngine().isValidId([1, 2, 3])).to.equal(false);
            });

            it('Should return false when value parameter is a map', () => {
                expect(htmlEngine().isValidId(new Map())).to.equal(false);
            });

            it('Should return false when value parameter is a date', () => {
                expect(htmlEngine().isValidId(new Date())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(htmlEngine().isValidId(new (class Class {})())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(htmlEngine().isValidId(new (class Class {}))).to.equal(false);
            });

            it('Should return false when value parameter is a class declaration', () => {
                expect(htmlEngine().isValidId(class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔══════╗ ╔═╗   ╔═╗         ╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔══╗ ║ ║ ║   ║ ║         ╚══╗ ╔══╝╚╗ ╔══╗ ║
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚══╝ ╚╗║ ╚═══╝ ║╔═══════╗   ║ ║    ║ ║  ║ ║
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═══╗ ║╚═════╗ ║╚═══════╝   ║ ║    ║ ║  ║ ║
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ╚═══╝ ║╔═════╝ ║         ╔══╝ ╚══╗╔╝ ╚══╝ ║
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝

    describe('#getById(id)', function () {
        let element;

        before(function () {
            element = document.createElement('button');
            element.setAttribute('id', 'test-id');
            element.setAttribute('value', 'value');

            document.body.appendChild(element);
        });

        after(function () {
            element.remove();
        });

        describe('#getById(ID)', function () {
            it('Should return element when element ID parameter is a used identifier', () => {
                expect(htmlEngine().getById('test-id')).to.equal(element);
            });


            it('Should return null when element ID parameter is a unused identifier', () => {
                expect(htmlEngine().getById('fake-test-id')).to.equal(null)
            });

            it('Should return null when element ID parameter is a whitespace', () => {
                expect(htmlEngine().getById(' ')).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty string', () => {
                expect(htmlEngine().getById('')).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty primitive string', () => {
                expect(htmlEngine().getById(String(''))).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine().getById(new String(''))).to.equal(null);
            });

            it('Should return null when element ID parameter is a whitespace', () => {
                expect(htmlEngine().getById(' ')).to.equal(null);
            });

            it('Should return null when element ID parameter is empty', () => {
                expect(htmlEngine().getById()).to.equal(null);
            });

            it('Should return null when element ID parameter is null', () => {
                expect(htmlEngine().getById(null)).to.equal(null);
            });

            it('Should return null when element ID parameter is NaN', () => {
                expect(htmlEngine().getById(NaN)).to.equal(null);
            });

            it('Should return null when element ID parameter is undefined', () => {
                expect(htmlEngine().getById(undefined)).to.equal(null);
            });

            it('Should return null when element ID parameter is false boolean', () => {
                expect(htmlEngine().getById(false)).to.equal(null);
            });

            it('Should return null when element ID parameter is true boolean', () => {
                expect(htmlEngine().getById(true)).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty object', () => {
                expect(htmlEngine().getById({})).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty array', () => {
                expect(htmlEngine().getById([])).to.equal(null);
            });

            it('Should return null when element ID parameter is a function', () => {
                expect(htmlEngine().getById(function () {})).to.equal(null);
            });

            it('Should return null when element ID parameter is a filled object', () => {
                expect(htmlEngine().getById({foo: 'bar'})).to.equal(null);
            });

            it('Should return null when element ID parameter is a number', () => {
                expect(htmlEngine().getById(1)).to.equal(null);
            });

            it('Should return null when element ID parameter is a zero', () => {
                expect(htmlEngine().getById(0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a positive false', () => {
                expect(htmlEngine().getById(+0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a negative zero', () => {
                expect(htmlEngine().getById(-0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a primitive number', () => {
                expect(htmlEngine().getById(Number('1'))).to.equal(null);
            });

            it('Should return null when element ID parameter is a wrapped primitive number', () => {
                expect(htmlEngine().getById(new Number('1'))).to.equal(null);
            });

            it('Should return null when element ID parameter is a filled array', () => {
                expect(htmlEngine().getById([1, 2, 3])).to.equal(null);
            });

            it('Should return null when element ID parameter is a map', () => {
                expect(htmlEngine().getById(new Map())).to.equal(null);
            });

            it('Should return null when element ID parameter is a date', () => {
                expect(htmlEngine().getById(new Date())).to.equal(null);
            });

            it('Should return null when element ID parameter is a class instance', () => {
                expect(htmlEngine().getById(new (class Class {})())).to.equal(null);
            });

            it('Should return null when element ID parameter is a class instance', () => {
                expect(htmlEngine().getById(new (class Class {}))).to.equal(null);
            });

            it('Should return null when element ID parameter is a class declaration', () => {
                expect(htmlEngine().getById(class Class {})).to.equal(null);
            });
        });
    });
});
