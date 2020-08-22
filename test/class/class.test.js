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
    let elementWith1Class;
    let elementWith2Classes;
    let elementWith3Classes;
    let elementWithNoClass;

    beforeEach(function () {
        elementWith1Class = document.createElement('button');
        elementWith2Classes = document.createElement('button');
        elementWith3Classes = document.createElement('button');
        elementWithNoClass = document.createElement('button');

        elementWith1Class.setAttribute('id', 'element-with-1-class');
        elementWith2Classes.setAttribute('id', 'element-with-2-classes');
        elementWith3Classes.setAttribute('id', 'element-with-3-classes');
        elementWithNoClass.setAttribute('id', 'element-with-no-class');

        elementWith1Class.classList.add('class1');

        elementWith2Classes.classList.add('class1');
        elementWith2Classes.classList.add('class2');

        elementWith3Classes.classList.add('class1');
        elementWith3Classes.classList.add('class2');
        elementWith3Classes.classList.add('class3');

        document.body.appendChild(elementWith1Class);
        document.body.appendChild(elementWith2Classes);
        document.body.appendChild(elementWith3Classes);
        document.body.appendChild(elementWithNoClass);
    });

    afterEach(function () {
        elementWith1Class.remove();
        elementWith2Classes.remove();
        elementWith3Classes.remove();
        elementWithNoClass.remove();
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#isElementClass(element, className)', function () {
        describe('#isElementClass(ELEMENT, className)', function () {
            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.isElementClass('element-with-1-class', 'class1')).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.isElementClass(String('element-with-2-classes'), 'class2')).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.isElementClass(new String('element-with-3-classes'), 'class3')).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.isElementClass(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.isElementClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.isElementClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.isElementClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.isElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.isElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.isElementClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.isElementClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.isElementClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.isElementClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.isElementClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.isElementClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.isElementClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.isElementClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.isElementClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.isElementClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.isElementClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.isElementClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.isElementClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.isElementClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.isElementClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.isElementClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.isElementClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.isElementClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.isElementClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.isElementClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.isElementClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.isElementClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.isElementClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#isElementClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.isElementClass(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.isElementClass(elementWith2Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.isElementClass(elementWith2Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.isElementClass(elementWith3Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.isElementClass(elementWith3Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.isElementClass(elementWith3Classes, 'class3')).to.equal(true);
            });


            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, 'class1')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlEngine.isElementClass(elementWith1Class, 'class2')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlEngine.isElementClass(elementWith2Classes, 'class3')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlEngine.isElementClass(elementWith3Classes, 'class4')).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.isElementClass(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
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
            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(HtmlEngine.getElementClasses('element-with-3-classes')).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(HtmlEngine.getElementClasses('element-with-2-classes')).to.deep.equal(['class1', 'class2']);
            });

            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(HtmlEngine.getElementClasses('element-with-1-class')).to.deep.equal(['class1',]);
            });

            it('Should return class array when element parameter is a elementID with one or more classes', () => {
                expect(HtmlEngine.getElementClasses('element-with-3-classes')).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return empty array when element parameter is an elementID with no class', () => {
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return empty array when element parameter is an element with no class', () => {
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a unused identifier', () => {
                expect(HtmlEngine.getElementClasses('unused-element-id')).to.deep.equal([])
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

            it('Should return empty array array when element parameter is a primitive number', () => {
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