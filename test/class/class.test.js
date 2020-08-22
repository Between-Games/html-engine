// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚═══╗ ╔═╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║          ║ ║  ║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║          ║ ║  ╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

const expect = chai.expect;

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

describe('Class', function() {
    let classElement;
    let classlessElement;

    beforeEach(function () {
        classElement = document.createElement('button');
        classElement.setAttribute('id', 'test-class');

        classlessElement = document.createElement('button');
        classlessElement.setAttribute('id', 'test-no-class');

        classElement.classList.add('class1')
        classElement.classList.add('class2')
        classElement.classList.add('class3')

        document.body.appendChild(classElement);
        document.body.appendChild(classlessElement);
    });

    afterEach(function () {
        classElement.remove();
        classlessElement.remove();
    });

    // ╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗         ╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ╚══╗ ╔══╝╚╗ ╔══╗ ║         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ╔╗ ║║ ║║ ╔═══╗ ║║ ╔╗ ╔╗ ║║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║         ║ ║    ║ ║  ║ ║╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║         ║ ║    ║ ║  ║ ║╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ╔═══╗ ║║ ║║ ║║ ║║ ╔═════╝
    // ╔══╝ ╚══╗╔═════╝ ║          ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗╔══╝ ╚══╗╔╝ ╚══╝ ║         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║         ║ ║║ ╚╝ ║║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝          ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═╝╚════╝╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═══════╝

    describe('#isValidClassName(value)', function () {
        describe('#isValidClassName(VALUE)', function () {
            it('Should return true when value parameter is a filled string', () => {
                expect(HtmlEngine.isValidClassName('string')).to.equal(true);
            });

            it('Should return true when value parameter is a filled primitive string', () => {
                expect(HtmlEngine.isValidClassName(String('string'))).to.equal(true);
            });

            it('Should return true when value parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.isValidClassName(new String('string'))).to.equal(true);
            });


            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlEngine.isValidClassName(' ')).to.equal(false);
            });

            it('Should return false when value parameter is an empty string', () => {
                expect(HtmlEngine.isValidClassName('')).to.equal(false);
            });

            it('Should return false when value parameter is an empty primitive string', () => {
                expect(HtmlEngine.isValidClassName(String(''))).to.equal(false);
            });

            it('Should return false when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.isValidClassName(new String(''))).to.equal(false);
            });

            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlEngine.isValidClassName(' ')).to.equal(false);
            });

            it('Should return false when value parameter is empty', () => {
                expect(HtmlEngine.isValidClassName()).to.equal(false);
            });

            it('Should return false when value parameter is null', () => {
                expect(HtmlEngine.isValidClassName(null)).to.equal(false);
            });

            it('Should return false when value parameter is NaN', () => {
                expect(HtmlEngine.isValidClassName(NaN)).to.equal(false);
            });

            it('Should return false when value parameter is undefined', () => {
                expect(HtmlEngine.isValidClassName(undefined)).to.equal(false);
            });

            it('Should return false when value parameter is false boolean', () => {
                expect(HtmlEngine.isValidClassName(false)).to.equal(false);
            });

            it('Should return false when value parameter is true boolean', () => {
                expect(HtmlEngine.isValidClassName(true)).to.equal(false);
            });

            it('Should return false when value parameter is an empty object', () => {
                expect(HtmlEngine.isValidClassName({})).to.equal(false);
            });

            it('Should return false when value parameter is an empty array', () => {
                expect(HtmlEngine.isValidClassName([])).to.equal(false);
            });

            it('Should return false when value parameter is a function', () => {
                expect(HtmlEngine.isValidClassName(function () {})).to.equal(false);
            });

            it('Should return false when value parameter is a filled object', () => {
                expect(HtmlEngine.isValidClassName({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value parameter is a number', () => {
                expect(HtmlEngine.isValidClassName(1)).to.equal(false);
            });

            it('Should return false when value parameter is a zero', () => {
                expect(HtmlEngine.isValidClassName(0)).to.equal(false);
            });

            it('Should return false when value parameter is a positive false', () => {
                expect(HtmlEngine.isValidClassName(+0)).to.equal(false);
            });

            it('Should return false when value parameter is a negative zero', () => {
                expect(HtmlEngine.isValidClassName(-0)).to.equal(false);
            });

            it('Should return false when value parameter is a primitive number', () => {
                expect(HtmlEngine.isValidClassName(Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.isValidClassName(new Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a filled array', () => {
                expect(HtmlEngine.isValidElementId([1, 2, 3])).to.equal(false);
            });

            it('Should return false when value parameter is a map', () => {
                expect(HtmlEngine.isValidClassName(new Map())).to.equal(false);
            });

            it('Should return false when value parameter is a date', () => {
                expect(HtmlEngine.isValidClassName(new Date())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlEngine.isValidClassName(new (class Class {})())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlEngine.isValidClassName(new (class Class {}))).to.equal(false);
            });

            it('Should return false when value parameter is a class declaration', () => {
                expect(HtmlEngine.isValidClassName(class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#getElementClasses(element)', function () {
        describe('#getElementClasses(ELEMENT)', function () {
            it('Should return class array when element parameter is a used identifier', () => {
                expect(HtmlEngine.getElementClasses('test-class')).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return class array when element parameter is an element', () => {
                expect(HtmlEngine.getElementClasses(classElement)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return empty array when element parameter is a classless element', () => {
                expect(HtmlEngine.getElementClasses(classlessElement)).to.deep.equal([]);
            });


            it('Should return empty array when element parameter is a unused identifier', () => {
                expect(HtmlEngine.getElementClasses('unused-test-class')).to.deep.equal([])
            });

            it('Should return empty array when element parameter is an empty string', () => {
                expect(HtmlEngine.getElementClasses('')).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a whitespace', () => {
                expect(HtmlEngine.getElementClasses(' ')).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.getElementClasses(String(''))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.getElementClasses(new String(''))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is null', () => {
                expect(HtmlEngine.getElementClasses(null)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is NaN', () => {
                expect(HtmlEngine.getElementClasses(NaN)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is undefined', () => {
                expect(HtmlEngine.getElementClasses(undefined)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is false boolean', () => {
                expect(HtmlEngine.getElementClasses(false)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is true boolean', () => {
                expect(HtmlEngine.getElementClasses(true)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty object', () => {
                expect(HtmlEngine.getElementClasses({})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty array', () => {
                expect(HtmlEngine.getElementClasses([])).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a function', () => {
                expect(HtmlEngine.getElementClasses(function () {})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a filled object', () => {
                expect(HtmlEngine.getElementClasses({foo: 'bar'})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a number', () => {
                expect(HtmlEngine.getElementClasses(1)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a zero', () => {
                expect(HtmlEngine.getElementClasses(0)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a positive zero', () => {
                expect(HtmlEngine.getElementClasses(+0)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a negative zero', () => {
                expect(HtmlEngine.getElementClasses(-0)).to.deep.equal([]);
            });

            it('Should return empty array arrayse when element parameter is a primitive number', () => {
                expect(HtmlEngine.getElementClasses(Number('1'))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.getElementClasses(new Number('1'))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is positive infinity', () => {
                expect(HtmlEngine.getElementClasses(Number.POSITIVE_INFINITY)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is negative infinity', () => {
                expect(HtmlEngine.getElementClasses(Number.NEGATIVE_INFINITY)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a filled array', () => {
                expect(HtmlEngine.getElementClasses([1, 2, 3])).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a map', () => {
                expect(HtmlEngine.getElementClasses(new Map())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a date', () => {
                expect(HtmlEngine.getElementClasses(new Date())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class instance', () => {
                expect(HtmlEngine.getElementClasses(new (class Class {})())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class instance', () => {
                expect(HtmlEngine.getElementClasses(new (class Class {}))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class declaration', () => {
                expect(HtmlEngine.getElementClasses(class Class {})).to.deep.equal([]);
            });
        });
    });
});