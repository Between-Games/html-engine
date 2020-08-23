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
                expect(HtmlElementEngine.isValidId('string')).to.equal(true);
            });

            it('Should return true when value parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.isValidId(String('string'))).to.equal(true);
            });

            it('Should return true when value parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.isValidId(new String('string'))).to.equal(true);
            });


            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidId(' ')).to.equal(false);
            });

            it('Should return false when value parameter is an empty string', () => {
                expect(HtmlElementEngine.isValidId('')).to.equal(false);
            });

            it('Should return false when value parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.isValidId(String(''))).to.equal(false);
            });

            it('Should return false when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.isValidId(new String(''))).to.equal(false);
            });

            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidId(' ')).to.equal(false);
            });

            it('Should return false when value parameter is empty', () => {
                expect(HtmlElementEngine.isValidId()).to.equal(false);
            });

            it('Should return false when value parameter is null', () => {
                expect(HtmlElementEngine.isValidId(null)).to.equal(false);
            });

            it('Should return false when value parameter is NaN', () => {
                expect(HtmlElementEngine.isValidId(NaN)).to.equal(false);
            });

            it('Should return false when value parameter is undefined', () => {
                expect(HtmlElementEngine.isValidId(undefined)).to.equal(false);
            });

            it('Should return false when value parameter is false boolean', () => {
                expect(HtmlElementEngine.isValidId(false)).to.equal(false);
            });

            it('Should return false when value parameter is true boolean', () => {
                expect(HtmlElementEngine.isValidId(true)).to.equal(false);
            });

            it('Should return false when value parameter is an empty object', () => {
                expect(HtmlElementEngine.isValidId({})).to.equal(false);
            });

            it('Should return false when value parameter is an empty array', () => {
                expect(HtmlElementEngine.isValidId([])).to.equal(false);
            });

            it('Should return false when value parameter is a function', () => {
                expect(HtmlElementEngine.isValidId(function () {})).to.equal(false);
            });

            it('Should return false when value parameter is a filled object', () => {
                expect(HtmlElementEngine.isValidId({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value parameter is a number', () => {
                expect(HtmlElementEngine.isValidId(1)).to.equal(false);
            });

            it('Should return false when value parameter is a zero', () => {
                expect(HtmlElementEngine.isValidId(0)).to.equal(false);
            });

            it('Should return false when value parameter is a positive false', () => {
                expect(HtmlElementEngine.isValidId(+0)).to.equal(false);
            });

            it('Should return false when value parameter is a negative zero', () => {
                expect(HtmlElementEngine.isValidId(-0)).to.equal(false);
            });

            it('Should return false when value parameter is a primitive number', () => {
                expect(HtmlElementEngine.isValidId(Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.isValidId(new Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a filled array', () => {
                expect(HtmlElementEngine.isValidId([1, 2, 3])).to.equal(false);
            });

            it('Should return false when value parameter is a map', () => {
                expect(HtmlElementEngine.isValidId(new Map())).to.equal(false);
            });

            it('Should return false when value parameter is a date', () => {
                expect(HtmlElementEngine.isValidId(new Date())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidId(new (class Class {})())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidId(new (class Class {}))).to.equal(false);
            });

            it('Should return false when value parameter is a class declaration', () => {
                expect(HtmlElementEngine.isValidId(class Class {})).to.equal(false);
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
                expect(HtmlElementEngine.getById('test-id')).to.equal(element);
            });


            it('Should return null when element ID parameter is a unused identifier', () => {
                expect(HtmlElementEngine.getById('fake-test-id')).to.equal(null)
            });

            it('Should return null when element ID parameter is a whitespace', () => {
                expect(HtmlElementEngine.getById(' ')).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty string', () => {
                expect(HtmlElementEngine.getById('')).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.getById(String(''))).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.getById(new String(''))).to.equal(null);
            });

            it('Should return null when element ID parameter is a whitespace', () => {
                expect(HtmlElementEngine.getById(' ')).to.equal(null);
            });

            it('Should return null when element ID parameter is empty', () => {
                expect(HtmlElementEngine.getById()).to.equal(null);
            });

            it('Should return null when element ID parameter is null', () => {
                expect(HtmlElementEngine.getById(null)).to.equal(null);
            });

            it('Should return null when element ID parameter is NaN', () => {
                expect(HtmlElementEngine.getById(NaN)).to.equal(null);
            });

            it('Should return null when element ID parameter is undefined', () => {
                expect(HtmlElementEngine.getById(undefined)).to.equal(null);
            });

            it('Should return null when element ID parameter is false boolean', () => {
                expect(HtmlElementEngine.getById(false)).to.equal(null);
            });

            it('Should return null when element ID parameter is true boolean', () => {
                expect(HtmlElementEngine.getById(true)).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty object', () => {
                expect(HtmlElementEngine.getById({})).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty array', () => {
                expect(HtmlElementEngine.getById([])).to.equal(null);
            });

            it('Should return null when element ID parameter is a function', () => {
                expect(HtmlElementEngine.getById(function () {})).to.equal(null);
            });

            it('Should return null when element ID parameter is a filled object', () => {
                expect(HtmlElementEngine.getById({foo: 'bar'})).to.equal(null);
            });

            it('Should return null when element ID parameter is a number', () => {
                expect(HtmlElementEngine.getById(1)).to.equal(null);
            });

            it('Should return null when element ID parameter is a zero', () => {
                expect(HtmlElementEngine.getById(0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a positive false', () => {
                expect(HtmlElementEngine.getById(+0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a negative zero', () => {
                expect(HtmlElementEngine.getById(-0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a primitive number', () => {
                expect(HtmlElementEngine.getById(Number('1'))).to.equal(null);
            });

            it('Should return null when element ID parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.getById(new Number('1'))).to.equal(null);
            });

            it('Should return null when element ID parameter is a filled array', () => {
                expect(HtmlElementEngine.getById([1, 2, 3])).to.equal(null);
            });

            it('Should return null when element ID parameter is a map', () => {
                expect(HtmlElementEngine.getById(new Map())).to.equal(null);
            });

            it('Should return null when element ID parameter is a date', () => {
                expect(HtmlElementEngine.getById(new Date())).to.equal(null);
            });

            it('Should return null when element ID parameter is a class instance', () => {
                expect(HtmlElementEngine.getById(new (class Class {})())).to.equal(null);
            });

            it('Should return null when element ID parameter is a class instance', () => {
                expect(HtmlElementEngine.getById(new (class Class {}))).to.equal(null);
            });

            it('Should return null when element ID parameter is a class declaration', () => {
                expect(HtmlElementEngine.getById(class Class {})).to.equal(null);
            });
        });
    });
});