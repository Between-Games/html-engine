// ╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═════╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ╚═════╗      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║          ║ ║  ║ ╚═════╗
//    ║ ║   ╚═════╗ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║          ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗╔═════╝ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗╔═══╝ ║  ╔═════╝ ║
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

    describe('#isValidElementId(VALUE)', function () {
        it('Should return true when value is a filled string', () => {
            expect(HtmlEngine.isValidElementId('string')).to.equal(true);
        });

        it('Should return true when value is a filled primitive string', () => {
            expect(HtmlEngine.isValidElementId(String('string'))).to.equal(true);
        });

        it('Should return true when value is a filled wrapped primitive string', () => {
            expect(HtmlEngine.isValidElementId(new String('string'))).to.equal(true);
        });


        it('Should return false when value is a whitespace', () => {
            expect(HtmlEngine.isValidElementId(' ')).to.equal(false);
        });

        it('Should return false when value is an empty string', () => {
            expect(HtmlEngine.isValidElementId('')).to.equal(false);
        });

        it('Should return false when value is an empty primitive string', () => {
            expect(HtmlEngine.isValidElementId(String(''))).to.equal(false);
        });

        it('Should return false when value is an empty wrapped primitive string', () => {
            expect(HtmlEngine.isValidElementId(new String(''))).to.equal(false);
        });

        it('Should return false when value is a whitespace', () => {
            expect(HtmlEngine.isValidElementId(' ')).to.equal(false);
        });

        it('Should return false when value is empty', () => {
            expect(HtmlEngine.isValidElementId()).to.equal(false);
        });

        it('Should return false when value is null', () => {
            expect(HtmlEngine.isValidElementId(null)).to.equal(false);
        });

        it('Should return false when value is NaN', () => {
            expect(HtmlEngine.isValidElementId(NaN)).to.equal(false);
        });

        it('Should return false when value is undefined', () => {
            expect(HtmlEngine.isValidElementId(undefined)).to.equal(false);
        });

        it('Should return false when value is false boolean', () => {
            expect(HtmlEngine.isValidElementId(false)).to.equal(false);
        });

        it('Should return false when value is true boolean', () => {
            expect(HtmlEngine.isValidElementId(true)).to.equal(false);
        });

        it('Should return false when value is an empty object', () => {
            expect(HtmlEngine.isValidElementId({})).to.equal(false);
        });

        it('Should return false when value is an empty array', () => {
            expect(HtmlEngine.isValidElementId([])).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(HtmlEngine.isValidElementId(function() {})).to.equal(false);
        });

        it('Should return false when value is a filled object', () => {
            expect(HtmlEngine.isValidElementId({foo: 'bar'})).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(HtmlEngine.isValidElementId(1)).to.equal(false);
        });

        it('Should return false when value is a zero', () => {
            expect(HtmlEngine.isValidElementId(0)).to.equal(false);
        });

        it('Should return false when value is a positive false', () => {
            expect(HtmlEngine.isValidElementId(+0)).to.equal(false);
        });

        it('Should return false when value is a negative zero', () => {
            expect(HtmlEngine.isValidElementId(-0)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(HtmlEngine.isValidElementId(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(HtmlEngine.isValidElementId(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is a filled array', () => {
            expect(HtmlEngine.isValidElementId([1, 2, 3])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(HtmlEngine.isValidElementId(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(HtmlEngine.isValidElementId(new Date())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(HtmlEngine.isValidElementId(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(HtmlEngine.isValidElementId(new (class Class {}))).to.equal(false);
        });

        it('Should return false when value is a class declaration', () => {
            expect(HtmlEngine.isValidElementId(class Class {})).to.equal(false);
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔══════╗ ╔═╗   ╔═╗         ╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔══╗ ║ ║ ║   ║ ║         ╚══╗ ╔══╝╚╗ ╔══╗ ║
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ╚══╝ ╚╗║ ╚═══╝ ║╔═══════╗   ║ ║    ║ ║  ║ ║
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ╔═══╗ ║╚═════╗ ║╚═══════╝   ║ ║    ║ ║  ║ ║
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═══╝ ║╔═════╝ ║         ╔══╝ ╚══╗╔╝ ╚══╝ ║
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝

    describe('#getElementById(ID)', function () {
        it('Should return element when element ID parameter is a used identifier', () => {
            expect(HtmlEngine.getElementById('div-test-element-id')).to.satisfy((element) => {
                return HtmlEngine.isElement(element);
            });
        });


        it('Should return null when element ID parameter is a unused identifier', () => {
            expect(HtmlEngine.getElementById('div-test-unused-element-id')).to.equal(null)
        });

        it('Should return null when element ID parameter is a whitespace', () => {
            expect(HtmlEngine.getElementById(' ')).to.equal(null);
        });

        it('Should return null when element ID parameter is an empty string', () => {
            expect(HtmlEngine.getElementById('')).to.equal(null);
        });

        it('Should return null when element ID parameter is an empty primitive string', () => {
            expect(HtmlEngine.getElementById(String(''))).to.equal(null);
        });

        it('Should return null when element ID parameter is an empty wrapped primitive string', () => {
            expect(HtmlEngine.getElementById(new String(''))).to.equal(null);
        });

        it('Should return null when element ID parameter is a whitespace', () => {
            expect(HtmlEngine.getElementById(' ')).to.equal(null);
        });

        it('Should return null when element ID parameter is empty', () => {
            expect(HtmlEngine.getElementById()).to.equal(null);
        });

        it('Should return null when element ID parameter is null', () => {
            expect(HtmlEngine.getElementById(null)).to.equal(null);
        });

        it('Should return null when element ID parameter is NaN', () => {
            expect(HtmlEngine.getElementById(NaN)).to.equal(null);
        });

        it('Should return null when element ID parameter is undefined', () => {
            expect(HtmlEngine.getElementById(undefined)).to.equal(null);
        });

        it('Should return null when element ID parameter is false boolean', () => {
            expect(HtmlEngine.getElementById(false)).to.equal(null);
        });

        it('Should return null when element ID parameter is true boolean', () => {
            expect(HtmlEngine.getElementById(true)).to.equal(null);
        });

        it('Should return null when element ID parameter is an empty object', () => {
            expect(HtmlEngine.getElementById({})).to.equal(null);
        });

        it('Should return null when element ID parameter is an empty array', () => {
            expect(HtmlEngine.getElementById([])).to.equal(null);
        });

        it('Should return null when element ID parameter is a function', () => {
            expect(HtmlEngine.getElementById(function() {})).to.equal(null);
        });

        it('Should return null when element ID parameter is a filled object', () => {
            expect(HtmlEngine.getElementById({foo: 'bar'})).to.equal(null);
        });

        it('Should return null when element ID parameter is a number', () => {
            expect(HtmlEngine.getElementById(1)).to.equal(null);
        });

        it('Should return null when element ID parameter is a zero', () => {
            expect(HtmlEngine.getElementById(0)).to.equal(null);
        });

        it('Should return null when element ID parameter is a positive false', () => {
            expect(HtmlEngine.getElementById(+0)).to.equal(null);
        });

        it('Should return null when element ID parameter is a negative zero', () => {
            expect(HtmlEngine.getElementById(-0)).to.equal(null);
        });

        it('Should return null when element ID parameter is a primitive number', () => {
            expect(HtmlEngine.getElementById(Number('1'))).to.equal(null);
        });

        it('Should return null when element ID parameter is a wrapped primitive number', () => {
            expect(HtmlEngine.getElementById(new Number('1'))).to.equal(null);
        });

        it('Should return null when element ID parameter is a filled array', () => {
            expect(HtmlEngine.getElementById([1, 2, 3])).to.equal(null);
        });

        it('Should return null when element ID parameter is a map', () => {
            expect(HtmlEngine.getElementById(new Map())).to.equal(null);
        });

        it('Should return null when element ID parameter is a date', () => {
            expect(HtmlEngine.getElementById(new Date())).to.equal(null);
        });

        it('Should return null when element ID parameter is a class instance', () => {
            expect(HtmlEngine.getElementById(new (class Class {})())).to.equal(null);
        });

        it('Should return null when element ID parameter is a class instance', () => {
            expect(HtmlEngine.getElementById(new (class Class {}))).to.equal(null);
        });

        it('Should return null when element ID parameter is a class declaration', () => {
            expect(HtmlEngine.getElementById(class Class {})).to.equal(null);
        });
    });
});