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

    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ║   ║ ║║ ║ ╔═══╗║ ║ ╔═══╗║ ║      ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    //    ║ ║   ║ ║   ║ ║║ ║ ╚═╗ ║║ ║ ╚═╗ ║║ ║      ║ ╔═════╝╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    //    ║ ║   ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    //    ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#toggleElementClasses(element, classNames)', function () {
        describe('#toggleElementClasses(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlElementEngine.toggleElementClasses('element-with-1-class', 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(new String('element-with-3-classes'), ['class2'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class3']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.toggleElementClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.toggleElementClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.toggleElementClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.toggleElementClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.toggleElementClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.toggleElementClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.toggleElementClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.toggleElementClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.toggleElementClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.toggleElementClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.toggleElementClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.toggleElementClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.toggleElementClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.toggleElementClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.toggleElementClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.toggleElementClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.toggleElementClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.toggleElementClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.toggleElementClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.toggleElementClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.toggleElementClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.toggleElementClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.toggleElementClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.toggleElementClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.toggleElementClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.toggleElementClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#toggleElementClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWith1Class, 'class2')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWith3Classes, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWith2Classes, String('class1'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWith3Classes, String('class3'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWith1Class, ['class1', 'class2', 'class3'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class3']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class3', 'class4']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlElementEngine.toggleElementClasses(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ║║ ║║ ║║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║   ║ ║   ╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    //    ║ ║   ║ ║║ ║║ ║╚═════╗ ║║ ╔═════╝║ ╔═╗ ╔═╝   ║ ║   ╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    // ╔══╝ ╚══╗║ ║║ ╚╝ ║╔═════╝ ║║ ╚═════╗║ ║ ║ ╚═╗   ║ ║            ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝   ╚═╝            ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#insertElementClasses(element, classNames)', function () {
        describe('#insertElementClasses(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlElementEngine.insertElementClasses('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.insertElementClasses(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.insertElementClasses(new String('element-with-3-classes'), ['className'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.insertElementClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.insertElementClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.insertElementClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.insertElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.insertElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.insertElementClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.insertElementClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.insertElementClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.insertElementClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.insertElementClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.insertElementClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.insertElementClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.insertElementClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.insertElementClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.insertElementClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.insertElementClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.insertElementClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.insertElementClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.insertElementClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.insertElementClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.insertElementClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.insertElementClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.insertElementClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.insertElementClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.insertElementClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.insertElementClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.insertElementClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.insertElementClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#insertElementClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWith1Class, 'class2')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWith3Classes, 'class4')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWith2Classes, String('class3'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWith3Classes, String('class4'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWith1Class, ['class2', 'class3'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlElementEngine.insertElementClasses(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗║ ║║ ║║ ║║ ║   ║ ║║ ╚╗ ╔╝ ║║ ╚═════╗╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝║ ║║ ║║ ║║ ║   ║ ║╚╗ ║ ║ ╔╝║ ╔═════╝╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    // ║ ║ ║ ╚═╗║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║ ║ ╚═╝ ║ ║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═╝ ╚═══╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝ ╚═════╝ ╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#removeElementClasses(element, classNames)', function () {
        describe('#removeElementClasses(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlElementEngine.removeElementClasses('element-with-1-class', 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(new String('element-with-3-classes'), ['class2', 'class3'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.removeElementClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.removeElementClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.removeElementClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.removeElementClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.removeElementClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.removeElementClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.removeElementClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.removeElementClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.insertElementClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.removeElementClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.removeElementClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.removeElementClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.removeElementClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.removeElementClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.removeElementClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.removeElementClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.removeElementClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.removeElementClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.removeElementClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.removeElementClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.removeElementClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.removeElementClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.removeElementClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.removeElementClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.removeElementClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.removeElementClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#removeElementClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWith3Classes, 'class4')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWith2Classes, String('class3'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWith3Classes, String('class4'))).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWith1Class, ['class2', 'class3'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class3']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlElementEngine.removeElementClasses(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });
    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ║   ║ ║║ ║ ╔═══╗║ ║ ╔═══╗║ ║      ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    //    ║ ║   ║ ║   ║ ║║ ║ ╚═╗ ║║ ║ ╚═╗ ║║ ║      ║ ╔═════╝╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    //    ║ ║   ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    //    ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#toggleElementClass(element, className)', function () {
        describe('#toggleElementClass(ELEMENT, className)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlElementEngine.toggleElementClass('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
                expect(HtmlElementEngine.toggleElementClass('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.toggleElementClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
                expect(HtmlElementEngine.toggleElementClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.toggleElementClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
                expect(HtmlElementEngine.toggleElementClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.toggleElementClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.toggleElementClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.toggleElementClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.toggleElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.toggleElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.toggleElementClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.toggleElementClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.toggleElementClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.toggleElementClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.toggleElementClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.toggleElementClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.toggleElementClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.toggleElementClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.toggleElementClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.toggleElementClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.toggleElementClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.toggleElementClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.toggleElementClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.toggleElementClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.toggleElementClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.toggleElementClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.toggleElementClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.toggleElementClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.toggleElementClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.toggleElementClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.toggleElementClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.toggleElementClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.toggleElementClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#toggleElementClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
                expect(HtmlElementEngine.toggleElementClass(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
                expect(HtmlElementEngine.toggleElementClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
                expect(HtmlElementEngine.toggleElementClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWith1Class, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
                expect(HtmlElementEngine.toggleElementClass(elementWith1Class, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWith2Classes, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
                expect(HtmlElementEngine.toggleElementClass(elementWith2Classes, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
                expect(HtmlElementEngine.toggleElementClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlElementEngine.toggleElementClass(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });
    // ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ║║ ║║ ║║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║   ║ ║   ╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    //    ║ ║   ║ ║║ ║║ ║╚═════╗ ║║ ╔═════╝║ ╔═╗ ╔═╝   ║ ║   ╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    // ╔══╝ ╚══╗║ ║║ ╚╝ ║╔═════╝ ║║ ╚═════╗║ ║ ║ ╚═╗   ║ ║            ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    // ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝   ╚═╝            ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#insertElementClass(element, className)', function () {
        describe('#insertElementClass(ELEMENT, className)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlElementEngine.insertElementClass('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.insertElementClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.insertElementClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.insertElementClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.insertElementClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.insertElementClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.insertElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.insertElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.insertElementClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.insertElementClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.insertElementClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.insertElementClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.insertElementClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.insertElementClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.insertElementClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.insertElementClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.insertElementClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.insertElementClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.insertElementClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.insertElementClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.insertElementClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.insertElementClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.insertElementClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.insertElementClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.insertElementClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.insertElementClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.insertElementClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.insertElementClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.insertElementClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.insertElementClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.insertElementClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#insertElementClass(ELEMENT, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.insertElementClass(elementWith1Class, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.insertElementClass(elementWith2Classes, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.insertElementClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.insertElementClass(elementWith3Classes, 'className')).to.equal(true);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlElementEngine.insertElementClass(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗║ ║║ ║║ ║║ ║   ║ ║║ ╚╗ ╔╝ ║║ ╚═════╗╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝║ ║║ ║║ ║║ ║   ║ ║╚╗ ║ ║ ╔╝║ ╔═════╝╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    // ║ ║ ║ ╚═╗║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║ ║ ╚═╝ ║ ║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    // ╚═╝ ╚═══╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝ ╚═════╝ ╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#removeElementClass(element, classNames)', function () {
        describe('#removeElementClass(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlElementEngine.removeElementClass('element-with-1-class', 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.removeElementClass(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.removeElementClass(new String('element-with-3-classes'), 'class3')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.removeElementClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.removeElementClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.removeElementClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.removeElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.removeElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.removeElementClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.removeElementClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.removeElementClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.removeElementClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.removeElementClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.removeElementClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.removeElementClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.removeElementClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.removeElementClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.removeElementClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.removeElementClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.removeElementClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.removeElementClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.removeElementClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.removeElementClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.removeElementClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.removeElementClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.removeElementClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.removeElementClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.removeElementClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.removeElementClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.removeElementClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.removeElementClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#removeElementClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.removeElementClass(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.removeElementClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.removeElementClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.removeElementClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlElementEngine.removeElementClass(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });
    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    // ║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#areElementClasses(element, classNames)', function () {
        describe('#areElementClasses(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlElementEngine.areElementClasses('element-with-1-class', ['class1'])).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.areElementClasses(String('element-with-2-classes'), ['class2'])).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.areElementClasses(new String('element-with-3-classes'), ['class3'])).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith1Class, ['class1'])).to.equal(true);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.areElementClasses('unused-element-id', ['className'])).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.areElementClasses('', ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.areElementClasses(' ', ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.areElementClasses(String(''), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.areElementClasses(new String(''), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.areElementClasses(null, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.areElementClasses(NaN, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.areElementClasses(undefined, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.areElementClasses(false, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.areElementClasses(true, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.areElementClasses({}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.areElementClasses([], ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.areElementClasses(function () {}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.areElementClasses({foo: 'bar'}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.areElementClasses(1, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.areElementClasses(0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.areElementClasses(+0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.areElementClasses(-0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.areElementClasses(Number('1'), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.areElementClasses(new Number('1'), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.areElementClasses(Number.POSITIVE_INFINITY, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.areElementClasses(Number.NEGATIVE_INFINITY, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.areElementClasses([1, 2, 3], ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.areElementClasses(new Map(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.areElementClasses(new Date(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.areElementClasses(new (class Class {})(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.areElementClasses(new (class Class {}), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.areElementClasses(class Class {}, ['className'])).to.equal(false);
            });
        });

        describe('#areElementClasses(element, CLASSNAMES)', function () {
            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith1Class)).to.equal(true);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith1Class, undefined)).to.equal(true);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith1Class, [])).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith2Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith2Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith3Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith3Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith3Classes, 'class3')).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith1Class, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith2Classes, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith2Classes, ['class1', 'class2'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith3Classes, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith3Classes, ['class1', 'class2'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith3Classes, ['class1', 'class3'])).to.equal(true);
            });


            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, 'class1')).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, ['class1'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith1Class, ['class4'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith2Classes, ['class3', 'class2', 'class1'])).to.equal(false);
            });

            it('Should return false when class name parametera are classes that are not all in class', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith2Classes, ['class1', 'class2', 'class3'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith3Classes, ['class4', 'class5', 'class6'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith3Classes, ['class1', 'class2', 'class3', 'class4'])).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith1Class, 'class2')).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith2Classes, 'class3')).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlElementEngine.areElementClasses(elementWith3Classes, 'class4')).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlElementEngine.areElementClasses(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
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
                expect(HtmlElementEngine.isElementClass('element-with-1-class', 'class1')).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.isElementClass(String('element-with-2-classes'), 'class2')).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.isElementClass(new String('element-with-3-classes'), 'class3')).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.isElementClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.isElementClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.isElementClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.isElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.isElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.isElementClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.isElementClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.isElementClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.isElementClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.isElementClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.isElementClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.isElementClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.isElementClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.isElementClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.isElementClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.isElementClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.isElementClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.isElementClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.isElementClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.isElementClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.isElementClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.isElementClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.isElementClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.isElementClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.isElementClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.isElementClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.isElementClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.isElementClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#isElementClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith2Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith2Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith3Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith3Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith3Classes, 'class3')).to.equal(true);
            });


            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, 'class1')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith1Class, 'class2')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith2Classes, 'class3')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlElementEngine.isElementClass(elementWith3Classes, 'class4')).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlElementEngine.isElementClass(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(HtmlElementEngine.isValidClassName('string')).to.equal(true);
            });

            it('Should return true when value parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.isValidClassName(String('string'))).to.equal(true);
            });

            it('Should return true when value parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.isValidClassName(new String('string'))).to.equal(true);
            });


            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidClassName(' ')).to.equal(false);
            });

            it('Should return false when value parameter is an empty string', () => {
                expect(HtmlElementEngine.isValidClassName('')).to.equal(false);
            });

            it('Should return false when value parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.isValidClassName(String(''))).to.equal(false);
            });

            it('Should return false when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.isValidClassName(new String(''))).to.equal(false);
            });

            it('Should return false when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidClassName(' ')).to.equal(false);
            });

            it('Should return false when value parameter is empty', () => {
                expect(HtmlElementEngine.isValidClassName()).to.equal(false);
            });

            it('Should return false when value parameter is null', () => {
                expect(HtmlElementEngine.isValidClassName(null)).to.equal(false);
            });

            it('Should return false when value parameter is NaN', () => {
                expect(HtmlElementEngine.isValidClassName(NaN)).to.equal(false);
            });

            it('Should return false when value parameter is undefined', () => {
                expect(HtmlElementEngine.isValidClassName(undefined)).to.equal(false);
            });

            it('Should return false when value parameter is false boolean', () => {
                expect(HtmlElementEngine.isValidClassName(false)).to.equal(false);
            });

            it('Should return false when value parameter is true boolean', () => {
                expect(HtmlElementEngine.isValidClassName(true)).to.equal(false);
            });

            it('Should return false when value parameter is an empty object', () => {
                expect(HtmlElementEngine.isValidClassName({})).to.equal(false);
            });

            it('Should return false when value parameter is an empty array', () => {
                expect(HtmlElementEngine.isValidClassName([])).to.equal(false);
            });

            it('Should return false when value parameter is a function', () => {
                expect(HtmlElementEngine.isValidClassName(function () {})).to.equal(false);
            });

            it('Should return false when value parameter is a filled object', () => {
                expect(HtmlElementEngine.isValidClassName({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value parameter is a number', () => {
                expect(HtmlElementEngine.isValidClassName(1)).to.equal(false);
            });

            it('Should return false when value parameter is a zero', () => {
                expect(HtmlElementEngine.isValidClassName(0)).to.equal(false);
            });

            it('Should return false when value parameter is a positive false', () => {
                expect(HtmlElementEngine.isValidClassName(+0)).to.equal(false);
            });

            it('Should return false when value parameter is a negative zero', () => {
                expect(HtmlElementEngine.isValidClassName(-0)).to.equal(false);
            });

            it('Should return false when value parameter is a primitive number', () => {
                expect(HtmlElementEngine.isValidClassName(Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.isValidClassName(new Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a filled array', () => {
                expect(HtmlElementEngine.isValidElementId([1, 2, 3])).to.equal(false);
            });

            it('Should return false when value parameter is a map', () => {
                expect(HtmlElementEngine.isValidClassName(new Map())).to.equal(false);
            });

            it('Should return false when value parameter is a date', () => {
                expect(HtmlElementEngine.isValidClassName(new Date())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidClassName(new (class Class {})())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidClassName(new (class Class {}))).to.equal(false);
            });

            it('Should return false when value parameter is a class declaration', () => {
                expect(HtmlElementEngine.isValidClassName(class Class {})).to.equal(false);
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
                expect(HtmlElementEngine.getElementClasses('element-with-3-classes')).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(HtmlElementEngine.getElementClasses('element-with-2-classes')).to.deep.equal(['class1', 'class2']);
            });

            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(HtmlElementEngine.getElementClasses('element-with-1-class')).to.deep.equal(['class1',]);
            });

            it('Should return class array when element parameter is a elementID with one or more classes', () => {
                expect(HtmlElementEngine.getElementClasses('element-with-3-classes')).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return empty array when element parameter is an elementID with no class', () => {
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(HtmlElementEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(HtmlElementEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(HtmlElementEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return empty array when element parameter is an element with no class', () => {
                expect(HtmlElementEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a unused identifier', () => {
                expect(HtmlElementEngine.getElementClasses('unused-element-id')).to.deep.equal([])
            });

            it('Should return empty array when element parameter is an empty string', () => {
                expect(HtmlElementEngine.getElementClasses('')).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.getElementClasses(' ')).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.getElementClasses(String(''))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.getElementClasses(new String(''))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is null', () => {
                expect(HtmlElementEngine.getElementClasses(null)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is NaN', () => {
                expect(HtmlElementEngine.getElementClasses(NaN)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is undefined', () => {
                expect(HtmlElementEngine.getElementClasses(undefined)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is false boolean', () => {
                expect(HtmlElementEngine.getElementClasses(false)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is true boolean', () => {
                expect(HtmlElementEngine.getElementClasses(true)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty object', () => {
                expect(HtmlElementEngine.getElementClasses({})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty array', () => {
                expect(HtmlElementEngine.getElementClasses([])).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a function', () => {
                expect(HtmlElementEngine.getElementClasses(function () {})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a filled object', () => {
                expect(HtmlElementEngine.getElementClasses({foo: 'bar'})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a number', () => {
                expect(HtmlElementEngine.getElementClasses(1)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a zero', () => {
                expect(HtmlElementEngine.getElementClasses(0)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.getElementClasses(+0)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.getElementClasses(-0)).to.deep.equal([]);
            });

            it('Should return empty array array when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.getElementClasses(Number('1'))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.getElementClasses(new Number('1'))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.getElementClasses(Number.POSITIVE_INFINITY)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.getElementClasses(Number.NEGATIVE_INFINITY)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a filled array', () => {
                expect(HtmlElementEngine.getElementClasses([1, 2, 3])).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a map', () => {
                expect(HtmlElementEngine.getElementClasses(new Map())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a date', () => {
                expect(HtmlElementEngine.getElementClasses(new Date())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class instance', () => {
                expect(HtmlElementEngine.getElementClasses(new (class Class {})())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class instance', () => {
                expect(HtmlElementEngine.getElementClasses(new (class Class {}))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.getElementClasses(class Class {})).to.deep.equal([]);
            });
        });
    });
});