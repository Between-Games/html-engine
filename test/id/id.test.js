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
    // ╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ╚══╗ ╔══╝╚╗ ╔══╗ ║         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ╚══╗ ╔══╝╚╗ ╔══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║         ║ ║    ║ ║  ║ ║╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗   ║ ║    ║ ║  ║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║         ║ ║    ║ ║  ║ ║╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝   ║ ║    ║ ║  ║ ║
    // ╔══╝ ╚══╗╔═════╝ ║          ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗╔══╝ ╚══╗╔╝ ╚══╝ ║         ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ╔══╝ ╚══╗╔╝ ╚══╝ ║
    // ╚═══════╝╚═══════╝          ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝

    describe('#isValidElementId(value)', function () {
        describe('#isValidElementId(VALUE)', function () {
            it('Should return true when value parameter is a filled string', () => {
                expect(HtmlElementEngine.isValidElementId('string')).to.equal(true);
            });

            it('Should return true when value parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.isValidElementId(String('string'))).to.equal(true);
            });

            it('Should return true when value parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.isValidElementId(new String('string'))).to.equal(true);
            });


            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidElementId(' ')).to.equal(false);
            });

            it('Should return false when value parameter is an empty string', () => {
                expect(HtmlElementEngine.isValidElementId('')).to.equal(false);
            });

            it('Should return false when value parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.isValidElementId(String(''))).to.equal(false);
            });

            it('Should return false when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.isValidElementId(new String(''))).to.equal(false);
            });

            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidElementId(' ')).to.equal(false);
            });

            it('Should return false when value parameter is empty', () => {
                expect(HtmlElementEngine.isValidElementId()).to.equal(false);
            });

            it('Should return false when value parameter is null', () => {
                expect(HtmlElementEngine.isValidElementId(null)).to.equal(false);
            });

            it('Should return false when value parameter is NaN', () => {
                expect(HtmlElementEngine.isValidElementId(NaN)).to.equal(false);
            });

            it('Should return false when value parameter is undefined', () => {
                expect(HtmlElementEngine.isValidElementId(undefined)).to.equal(false);
            });

            it('Should return false when value parameter is false boolean', () => {
                expect(HtmlElementEngine.isValidElementId(false)).to.equal(false);
            });

            it('Should return false when value parameter is true boolean', () => {
                expect(HtmlElementEngine.isValidElementId(true)).to.equal(false);
            });

            it('Should return false when value parameter is an empty object', () => {
                expect(HtmlElementEngine.isValidElementId({})).to.equal(false);
            });

            it('Should return false when value parameter is an empty array', () => {
                expect(HtmlElementEngine.isValidElementId([])).to.equal(false);
            });

            it('Should return false when value parameter is a function', () => {
                expect(HtmlElementEngine.isValidElementId(function () {})).to.equal(false);
            });

            it('Should return false when value parameter is a filled object', () => {
                expect(HtmlElementEngine.isValidElementId({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value parameter is a number', () => {
                expect(HtmlElementEngine.isValidElementId(1)).to.equal(false);
            });

            it('Should return false when value parameter is a zero', () => {
                expect(HtmlElementEngine.isValidElementId(0)).to.equal(false);
            });

            it('Should return false when value parameter is a positive false', () => {
                expect(HtmlElementEngine.isValidElementId(+0)).to.equal(false);
            });

            it('Should return false when value parameter is a negative zero', () => {
                expect(HtmlElementEngine.isValidElementId(-0)).to.equal(false);
            });

            it('Should return false when value parameter is a primitive number', () => {
                expect(HtmlElementEngine.isValidElementId(Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.isValidElementId(new Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a filled array', () => {
                expect(HtmlElementEngine.isValidElementId([1, 2, 3])).to.equal(false);
            });

            it('Should return false when value parameter is a map', () => {
                expect(HtmlElementEngine.isValidElementId(new Map())).to.equal(false);
            });

            it('Should return false when value parameter is a date', () => {
                expect(HtmlElementEngine.isValidElementId(new Date())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidElementId(new (class Class {})())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidElementId(new (class Class {}))).to.equal(false);
            });

            it('Should return false when value parameter is a class declaration', () => {
                expect(HtmlElementEngine.isValidElementId(class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔══════╗ ╔═╗   ╔═╗         ╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔══╗ ║ ║ ║   ║ ║         ╚══╗ ╔══╝╚╗ ╔══╗ ║
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ╚══╝ ╚╗║ ╚═══╝ ║╔═══════╗   ║ ║    ║ ║  ║ ║
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ╔═══╗ ║╚═════╗ ║╚═══════╝   ║ ║    ║ ║  ║ ║
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═══╝ ║╔═════╝ ║         ╔══╝ ╚══╗╔╝ ╚══╝ ║
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝

    describe('#getElementById(id)', function () {
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

        describe('#getElementById(ID)', function () {
            it('Should return element when element ID parameter is a used identifier', () => {
                expect(HtmlElementEngine.getElementById('test-id')).to.equal(element);
            });


            it('Should return null when element ID parameter is a unused identifier', () => {
                expect(HtmlElementEngine.getElementById('fake-test-id')).to.equal(null)
            });

            it('Should return null when element ID parameter is a whitespace', () => {
                expect(HtmlElementEngine.getElementById(' ')).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty string', () => {
                expect(HtmlElementEngine.getElementById('')).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.getElementById(String(''))).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.getElementById(new String(''))).to.equal(null);
            });

            it('Should return null when element ID parameter is a whitespace', () => {
                expect(HtmlElementEngine.getElementById(' ')).to.equal(null);
            });

            it('Should return null when element ID parameter is empty', () => {
                expect(HtmlElementEngine.getElementById()).to.equal(null);
            });

            it('Should return null when element ID parameter is null', () => {
                expect(HtmlElementEngine.getElementById(null)).to.equal(null);
            });

            it('Should return null when element ID parameter is NaN', () => {
                expect(HtmlElementEngine.getElementById(NaN)).to.equal(null);
            });

            it('Should return null when element ID parameter is undefined', () => {
                expect(HtmlElementEngine.getElementById(undefined)).to.equal(null);
            });

            it('Should return null when element ID parameter is false boolean', () => {
                expect(HtmlElementEngine.getElementById(false)).to.equal(null);
            });

            it('Should return null when element ID parameter is true boolean', () => {
                expect(HtmlElementEngine.getElementById(true)).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty object', () => {
                expect(HtmlElementEngine.getElementById({})).to.equal(null);
            });

            it('Should return null when element ID parameter is an empty array', () => {
                expect(HtmlElementEngine.getElementById([])).to.equal(null);
            });

            it('Should return null when element ID parameter is a function', () => {
                expect(HtmlElementEngine.getElementById(function () {})).to.equal(null);
            });

            it('Should return null when element ID parameter is a filled object', () => {
                expect(HtmlElementEngine.getElementById({foo: 'bar'})).to.equal(null);
            });

            it('Should return null when element ID parameter is a number', () => {
                expect(HtmlElementEngine.getElementById(1)).to.equal(null);
            });

            it('Should return null when element ID parameter is a zero', () => {
                expect(HtmlElementEngine.getElementById(0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a positive false', () => {
                expect(HtmlElementEngine.getElementById(+0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a negative zero', () => {
                expect(HtmlElementEngine.getElementById(-0)).to.equal(null);
            });

            it('Should return null when element ID parameter is a primitive number', () => {
                expect(HtmlElementEngine.getElementById(Number('1'))).to.equal(null);
            });

            it('Should return null when element ID parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.getElementById(new Number('1'))).to.equal(null);
            });

            it('Should return null when element ID parameter is a filled array', () => {
                expect(HtmlElementEngine.getElementById([1, 2, 3])).to.equal(null);
            });

            it('Should return null when element ID parameter is a map', () => {
                expect(HtmlElementEngine.getElementById(new Map())).to.equal(null);
            });

            it('Should return null when element ID parameter is a date', () => {
                expect(HtmlElementEngine.getElementById(new Date())).to.equal(null);
            });

            it('Should return null when element ID parameter is a class instance', () => {
                expect(HtmlElementEngine.getElementById(new (class Class {})())).to.equal(null);
            });

            it('Should return null when element ID parameter is a class instance', () => {
                expect(HtmlElementEngine.getElementById(new (class Class {}))).to.equal(null);
            });

            it('Should return null when element ID parameter is a class declaration', () => {
                expect(HtmlElementEngine.getElementById(class Class {})).to.equal(null);
            });
        });
    });
});