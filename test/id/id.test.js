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
                expect(HtmlEngine.isValidId('string')).to.equal(true);
            });

            it('Should return true when value parameter is a filled primitive string', () => {
                expect(HtmlEngine.isValidId(String('string'))).to.equal(true);
            });

            it('Should return true when value parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.isValidId(new String('string'))).to.equal(true);
            });


            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlEngine.isValidId(' ')).to.equal(false);
            });

            it('Should return false when value parameter is an empty string', () => {
                expect(HtmlEngine.isValidId('')).to.equal(false);
            });

            it('Should return false when value parameter is an empty primitive string', () => {
                expect(HtmlEngine.isValidId(String(''))).to.equal(false);
            });

            it('Should return false when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.isValidId(new String(''))).to.equal(false);
            });

            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlEngine.isValidId(' ')).to.equal(false);
            });

            it('Should return false when value parameter is empty', () => {
                expect(HtmlEngine.isValidId()).to.equal(false);
            });

            it('Should return false when value parameter is null', () => {
                expect(HtmlEngine.isValidId(null)).to.equal(false);
            });

            it('Should return false when value parameter is NaN', () => {
                expect(HtmlEngine.isValidId(NaN)).to.equal(false);
            });

            it('Should return false when value parameter is undefined', () => {
                expect(HtmlEngine.isValidId(undefined)).to.equal(false);
            });

            it('Should return false when value parameter is false boolean', () => {
                expect(HtmlEngine.isValidId(false)).to.equal(false);
            });

            it('Should return false when value parameter is true boolean', () => {
                expect(HtmlEngine.isValidId(true)).to.equal(false);
            });

            it('Should return false when value parameter is an empty object', () => {
                expect(HtmlEngine.isValidId({})).to.equal(false);
            });

            it('Should return false when value parameter is an empty array', () => {
                expect(HtmlEngine.isValidId([])).to.equal(false);
            });

            it('Should return false when value parameter is a function', () => {
                expect(HtmlEngine.isValidId(function () {})).to.equal(false);
            });

            it('Should return false when value parameter is a filled object', () => {
                expect(HtmlEngine.isValidId({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value parameter is a number', () => {
                expect(HtmlEngine.isValidId(1)).to.equal(false);
            });

            it('Should return false when value parameter is a zero', () => {
                expect(HtmlEngine.isValidId(0)).to.equal(false);
            });

            it('Should return false when value parameter is a positive false', () => {
                expect(HtmlEngine.isValidId(+0)).to.equal(false);
            });

            it('Should return false when value parameter is a negative zero', () => {
                expect(HtmlEngine.isValidId(-0)).to.equal(false);
            });

            it('Should return false when value parameter is a primitive number', () => {
                expect(HtmlEngine.isValidId(Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.isValidId(new Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a filled array', () => {
                expect(HtmlEngine.isValidId([1, 2, 3])).to.equal(false);
            });

            it('Should return false when value parameter is a map', () => {
                expect(HtmlEngine.isValidId(new Map())).to.equal(false);
            });

            it('Should return false when value parameter is a date', () => {
                expect(HtmlEngine.isValidId(new Date())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlEngine.isValidId(new (class Class {})())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlEngine.isValidId(new (class Class {}))).to.equal(false);
            });

            it('Should return false when value parameter is a class declaration', () => {
                expect(HtmlEngine.isValidId(class Class {})).to.equal(false);
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
                expect(HtmlEngine.getById('test-id')).to.equal(element);
            });


            it('Should return null when element ID parameter is a unused identifier', () => {
                expect(HtmlEngine.getById('fake-test-id')).to.equal(null)
            });

            it('Should return null when element ID parameter is a whitespace', () => {
                expect(HtmlEngine.getById(' ')).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty string', () => {
                expect(HtmlEngine.getById('')).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty primitive string', () => {
                expect(HtmlEngine.getById(String(''))).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.getById(new String(''))).to.equal(null);
            });

            it('Should return null when element ID parameter is a whitespace', () => {
                expect(HtmlEngine.getById(' ')).to.equal(null);
            });

            it('Should return null when element ID parameter is empty', () => {
                expect(HtmlEngine.getById()).to.equal(null);
            });

            it('Should return null when element ID parameter is null', () => {
                expect(HtmlEngine.getById(null)).to.equal(null);
            });

            it('Should return null when element ID parameter is NaN', () => {
                expect(HtmlEngine.getById(NaN)).to.equal(null);
            });

            it('Should return null when element ID parameter is undefined', () => {
                expect(HtmlEngine.getById(undefined)).to.equal(null);
            });

            it('Should return null when element ID parameter is false boolean', () => {
                expect(HtmlEngine.getById(false)).to.equal(null);
            });

            it('Should return null when element ID parameter is true boolean', () => {
                expect(HtmlEngine.getById(true)).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty object', () => {
                expect(HtmlEngine.getById({})).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty array', () => {
                expect(HtmlEngine.getById([])).to.equal(null);
            });

            it('Should return null when element ID parameter is a function', () => {
                expect(HtmlEngine.getById(function () {})).to.equal(null);
            });

            it('Should return null when element ID parameter is a filled object', () => {
                expect(HtmlEngine.getById({foo: 'bar'})).to.equal(null);
            });

            it('Should return null when element ID parameter is a number', () => {
                expect(HtmlEngine.getById(1)).to.equal(null);
            });

            it('Should return null when element ID parameter is a zero', () => {
                expect(HtmlEngine.getById(0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a positive false', () => {
                expect(HtmlEngine.getById(+0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a negative zero', () => {
                expect(HtmlEngine.getById(-0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a primitive number', () => {
                expect(HtmlEngine.getById(Number('1'))).to.equal(null);
            });

            it('Should return null when element ID parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.getById(new Number('1'))).to.equal(null);
            });

            it('Should return null when element ID parameter is a filled array', () => {
                expect(HtmlEngine.getById([1, 2, 3])).to.equal(null);
            });

            it('Should return null when element ID parameter is a map', () => {
                expect(HtmlEngine.getById(new Map())).to.equal(null);
            });

            it('Should return null when element ID parameter is a date', () => {
                expect(HtmlEngine.getById(new Date())).to.equal(null);
            });

            it('Should return null when element ID parameter is a class instance', () => {
                expect(HtmlEngine.getById(new (class Class {})())).to.equal(null);
            });

            it('Should return null when element ID parameter is a class instance', () => {
                expect(HtmlEngine.getById(new (class Class {}))).to.equal(null);
            });

            it('Should return null when element ID parameter is a class declaration', () => {
                expect(HtmlEngine.getById(class Class {})).to.equal(null);
            });
        });
    });
});
