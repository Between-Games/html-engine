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
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.toggleElementClasses('element-with-1-class', 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(new String('element-with-3-classes'), ['class2'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class3']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.toggleElementClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.toggleElementClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.toggleElementClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.toggleElementClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.toggleElementClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.toggleElementClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.toggleElementClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.toggleElementClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.toggleElementClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.toggleElementClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.toggleElementClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.toggleElementClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.toggleElementClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.toggleElementClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.toggleElementClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.toggleElementClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.toggleElementClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.toggleElementClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.toggleElementClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.toggleElementClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.toggleElementClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.toggleElementClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.toggleElementClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.toggleElementClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.toggleElementClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.toggleElementClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#toggleElementClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWith1Class, 'class2')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWith3Classes, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWith2Classes, String('class1'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWith3Classes, String('class3'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.toggleElementClasses(elementWith1Class, ['class1', 'class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.toggleElementClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class3']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(HtmlEngine.toggleElementClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class3', 'class4']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.toggleElementClasses(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.insertElementClasses('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.insertElementClasses(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.insertElementClasses(new String('element-with-3-classes'), ['className'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.insertElementClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.insertElementClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.insertElementClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.insertElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.insertElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.insertElementClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.insertElementClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.insertElementClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.insertElementClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.insertElementClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.insertElementClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.insertElementClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.insertElementClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.insertElementClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.insertElementClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.insertElementClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.insertElementClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.insertElementClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.insertElementClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.insertElementClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.insertElementClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.insertElementClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.insertElementClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.insertElementClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.insertElementClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.insertElementClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.insertElementClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.insertElementClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#insertElementClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.insertElementClasses(elementWith1Class, 'class2')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.insertElementClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.insertElementClasses(elementWith3Classes, 'class4')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.insertElementClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.insertElementClasses(elementWith2Classes, String('class3'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.insertElementClasses(elementWith3Classes, String('class4'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.insertElementClasses(elementWith1Class, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.insertElementClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(HtmlEngine.insertElementClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.insertElementClasses(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.removeElementClasses('element-with-1-class', 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.removeElementClasses(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.removeElementClasses(new String('element-with-3-classes'), ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.removeElementClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.removeElementClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.removeElementClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.removeElementClasses(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.removeElementClasses(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.removeElementClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.removeElementClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.removeElementClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.removeElementClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.removeElementClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.insertElementClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.removeElementClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.removeElementClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.removeElementClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.removeElementClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.removeElementClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.removeElementClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.removeElementClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.removeElementClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.removeElementClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.removeElementClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.removeElementClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.removeElementClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.removeElementClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.removeElementClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.removeElementClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.removeElementClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.removeElementClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#removeElementClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.removeElementClasses(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.removeElementClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.removeElementClasses(elementWith3Classes, 'class4')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.removeElementClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.removeElementClasses(elementWith2Classes, String('class3'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.removeElementClasses(elementWith3Classes, String('class4'))).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.removeElementClasses(elementWith1Class, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.removeElementClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(HtmlEngine.removeElementClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class3']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.removeElementClasses(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.toggleElementClass('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
                expect(HtmlEngine.toggleElementClass('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.toggleElementClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
                expect(HtmlEngine.toggleElementClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.toggleElementClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
                expect(HtmlEngine.toggleElementClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.toggleElementClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.toggleElementClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.toggleElementClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.toggleElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.toggleElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.toggleElementClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.toggleElementClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.toggleElementClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.toggleElementClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.toggleElementClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.toggleElementClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.toggleElementClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.toggleElementClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.toggleElementClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.toggleElementClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.toggleElementClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.toggleElementClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.toggleElementClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.toggleElementClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.toggleElementClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.toggleElementClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.toggleElementClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.toggleElementClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.toggleElementClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.toggleElementClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.toggleElementClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.toggleElementClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.toggleElementClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#toggleElementClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.toggleElementClass(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
                expect(HtmlEngine.toggleElementClass(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.toggleElementClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
                expect(HtmlEngine.toggleElementClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.toggleElementClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
                expect(HtmlEngine.toggleElementClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlEngine.toggleElementClass(elementWith1Class, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
                expect(HtmlEngine.toggleElementClass(elementWith1Class, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlEngine.toggleElementClass(elementWith2Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
                expect(HtmlEngine.toggleElementClass(elementWith2Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlEngine.toggleElementClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
                expect(HtmlEngine.toggleElementClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.toggleElementClass(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(HtmlEngine.insertElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.insertElementClass('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.insertElementClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.insertElementClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.insertElementClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.insertElementClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.insertElementClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.insertElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.insertElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.insertElementClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.insertElementClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.insertElementClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.insertElementClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.insertElementClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.insertElementClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.insertElementClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.insertElementClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.insertElementClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.insertElementClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.insertElementClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.insertElementClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.insertElementClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.insertElementClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.insertElementClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.insertElementClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.insertElementClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.insertElementClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.insertElementClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.insertElementClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.insertElementClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.insertElementClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.insertElementClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#insertElementClass(ELEMENT, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.insertElementClass(elementWith1Class, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.insertElementClass(elementWith2Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.insertElementClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.insertElementClass(elementWith3Classes, 'className')).to.equal(true);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.insertElementClass(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(HtmlEngine.removeElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.removeElementClass('element-with-1-class', 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.removeElementClass(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.removeElementClass(new String('element-with-3-classes'), 'class3')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.removeElementClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.removeElementClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.removeElementClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.removeElementClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.removeElementClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.removeElementClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.removeElementClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.removeElementClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.removeElementClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.removeElementClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.removeElementClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.removeElementClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.removeElementClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.removeElementClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.removeElementClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.removeElementClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.removeElementClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.removeElementClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.removeElementClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.removeElementClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.removeElementClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.removeElementClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.removeElementClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.removeElementClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.removeElementClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.removeElementClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.removeElementClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.removeElementClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#removeElementClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeElementClass(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeElementClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeElementClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeElementClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getElementClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.removeElementClass(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(HtmlEngine.areElementClasses('element-with-1-class', ['class1'])).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.areElementClasses(String('element-with-2-classes'), ['class2'])).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.areElementClasses(new String('element-with-3-classes'), ['class3'])).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.areElementClasses(elementWith1Class, ['class1'])).to.equal(true);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.areElementClasses('unused-element-id', ['className'])).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.areElementClasses('', ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.areElementClasses(' ', ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.areElementClasses(String(''), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.areElementClasses(new String(''), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.areElementClasses(null, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.areElementClasses(NaN, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.areElementClasses(undefined, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.areElementClasses(false, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.areElementClasses(true, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.areElementClasses({}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.areElementClasses([], ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.areElementClasses(function () {}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.areElementClasses({foo: 'bar'}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.areElementClasses(1, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.areElementClasses(0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.areElementClasses(+0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.areElementClasses(-0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.areElementClasses(Number('1'), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.areElementClasses(new Number('1'), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.areElementClasses(Number.POSITIVE_INFINITY, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.areElementClasses(Number.NEGATIVE_INFINITY, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.areElementClasses([1, 2, 3], ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.areElementClasses(new Map(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.areElementClasses(new Date(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.areElementClasses(new (class Class {})(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.areElementClasses(new (class Class {}), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.areElementClasses(class Class {}, ['className'])).to.equal(false);
            });
        });

        describe('#areElementClasses(element, CLASSNAMES)', function () {
            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.areElementClasses(elementWith1Class)).to.equal(true);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.areElementClasses(elementWith1Class, undefined)).to.equal(true);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.areElementClasses(elementWith1Class, [])).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith2Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith2Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith3Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith3Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith3Classes, 'class3')).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith1Class, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith2Classes, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith2Classes, ['class1', 'class2'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith3Classes, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith3Classes, ['class1', 'class2'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith3Classes, ['class1', 'class3'])).to.equal(true);
            });


            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, 'class1')).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, ['class1'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith1Class, ['class4'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlEngine.areElementClasses(elementWith2Classes, ['class3', 'class2', 'class1'])).to.equal(false);
            });

            it('Should return false when class name parametera are classes that are not all in class', () => {
                expect(HtmlEngine.areElementClasses(elementWith2Classes, ['class1', 'class2', 'class3'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlEngine.areElementClasses(elementWith3Classes, ['class4', 'class5', 'class6'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlEngine.areElementClasses(elementWith3Classes, ['class1', 'class2', 'class3', 'class4'])).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith1Class, 'class2')).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith2Classes, 'class3')).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlEngine.areElementClasses(elementWith3Classes, 'class4')).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.areElementClasses(elementWithNoClass, class Class {})).to.equal(false);
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