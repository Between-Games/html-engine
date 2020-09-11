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

    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ║   ║ ║║ ║ ╔═══╗║ ║ ╔═══╗║ ║      ║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    //    ║ ║   ║ ║   ║ ║║ ║ ╚═╗ ║║ ║ ╚═╗ ║║ ║      ║ ╔═════╝╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    //    ║ ║   ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    //    ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#toggleClasses(element, classNames)', function () {
        describe('#toggleClasses(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.toggleClasses('element-with-1-class', 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.toggleClasses(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.toggleClasses(new String('element-with-3-classes'), ['class2'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class3']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.toggleClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.toggleClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.toggleClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.toggleClasses(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.toggleClasses(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.toggleClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.toggleClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.toggleClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.toggleClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.toggleClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.toggleClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.toggleClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.toggleClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.toggleClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.toggleClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.toggleClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.toggleClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.toggleClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.toggleClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.toggleClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.toggleClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.toggleClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.toggleClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.toggleClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.toggleClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.toggleClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.toggleClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.toggleClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#toggleClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.toggleClasses(elementWith1Class, 'class2')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.toggleClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.toggleClasses(elementWith3Classes, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.toggleClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.toggleClasses(elementWith2Classes, String('class1'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.toggleClasses(elementWith3Classes, String('class3'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.toggleClasses(elementWith1Class, ['class1', 'class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.toggleClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class3']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(HtmlEngine.toggleClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class3', 'class4']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.toggleClasses(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║╚╗ ╔══╗ ║╚╗ ╔══╗ ║         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║ ║ ║  ║ ║ ║ ║  ║ ║╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    // ║ ╔═══╗ ║ ║ ║  ║ ║ ║ ║  ║ ║╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    // ║ ║   ║ ║╔╝ ╚══╝ ║╔╝ ╚══╝ ║         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#addClasses(element, classNames)', function () {
        describe('#addClasses(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.addClasses('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.addClasses(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.addClasses(new String('element-with-3-classes'), ['className'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.addClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.addClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.addClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.addClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.addClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.addClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.addClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.addClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.addClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.addClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.addClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.addClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.addClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.addClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.addClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.addClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.addClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.addClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.addClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.addClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.addClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.addClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.addClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.addClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.addClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.addClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.addClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.addClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#addClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.addClasses(elementWith1Class, 'class2')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.addClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.addClasses(elementWith3Classes, 'class4')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.addClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.addClasses(elementWith2Classes, String('class3'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.addClasses(elementWith3Classes, String('class4'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.addClasses(elementWith1Class, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.addClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(HtmlEngine.addClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.addClasses(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗║ ║║ ║║ ║║ ║   ║ ║║ ╚╗ ╔╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝║ ║║ ║║ ║║ ║   ║ ║╚╗ ║ ║ ╔╝║ ╔═════╝╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    // ║ ║ ║ ╚═╗║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║ ║ ╚═╝ ║ ║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═╝ ╚═══╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝ ╚═════╝ ╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#removeClasses(element, classNames)', function () {
        describe('#removeClasses(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.removeClasses('element-with-1-class', 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.removeClasses(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.removeClasses(new String('element-with-3-classes'), ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.removeClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.removeClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.removeClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.removeClasses(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.removeClasses(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.removeClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.removeClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.removeClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.removeClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.removeClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.addClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.removeClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.removeClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.removeClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.removeClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.removeClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.removeClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.removeClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.removeClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.removeClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.removeClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.removeClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.removeClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.removeClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.removeClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.removeClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.removeClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.removeClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#removeClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.removeClasses(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.removeClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(HtmlEngine.removeClasses(elementWith3Classes, 'class4')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.removeClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.removeClasses(elementWith2Classes, String('class3'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(HtmlEngine.removeClasses(elementWith3Classes, String('class4'))).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.removeClasses(elementWith1Class, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(HtmlEngine.removeClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(HtmlEngine.removeClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class3']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.removeClasses(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ║   ║ ║║ ║ ╔═══╗║ ║ ╔═══╗║ ║      ║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    //    ║ ║   ║ ║   ║ ║║ ║ ╚═╗ ║║ ║ ╚═╗ ║║ ║      ║ ╔═════╝╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    //    ║ ║   ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    //    ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#toggleClass(element, className)', function () {
        describe('#toggleClass(ELEMENT, className)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
                expect(HtmlEngine.toggleClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.toggleClass('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
                expect(HtmlEngine.toggleClass('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.toggleClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
                expect(HtmlEngine.toggleClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.toggleClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
                expect(HtmlEngine.toggleClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.toggleClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.toggleClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.toggleClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.toggleClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.toggleClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.toggleClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.toggleClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.toggleClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.toggleClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.toggleClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.toggleClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.toggleClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.toggleClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.toggleClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.toggleClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.toggleClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.toggleClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.toggleClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.toggleClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.toggleClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.toggleClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.toggleClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.toggleClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.toggleClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.toggleClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.toggleClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.toggleClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.toggleClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#toggleClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.toggleClass(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
                expect(HtmlEngine.toggleClass(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.toggleClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
                expect(HtmlEngine.toggleClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.toggleClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
                expect(HtmlEngine.toggleClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
                expect(HtmlEngine.toggleClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlEngine.toggleClass(elementWith1Class, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
                expect(HtmlEngine.toggleClass(elementWith1Class, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlEngine.toggleClass(elementWith2Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
                expect(HtmlEngine.toggleClass(elementWith2Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(HtmlEngine.toggleClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
                expect(HtmlEngine.toggleClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.toggleClass(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║╚╗ ╔══╗ ║╚╗ ╔══╗ ║         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║ ║ ║  ║ ║ ║ ║  ║ ║╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    // ║ ╔═══╗ ║ ║ ║  ║ ║ ║ ║  ║ ║╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    // ║ ║   ║ ║╔╝ ╚══╝ ║╔╝ ╚══╝ ║         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    // ╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#addClass(element, className)', function () {
        describe('#addClass(ELEMENT, className)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.addClass('element-with-1-class', 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.addClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.addClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.addClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.addClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.addClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.addClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.addClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.addClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.addClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.addClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.addClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.addClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.addClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.addClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.addClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.addClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.addClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.addClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.addClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.addClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.addClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.addClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.addClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.addClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.addClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.addClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.addClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.addClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.addClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.addClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#addClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.addClass(elementWith1Class, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.addClass(elementWith2Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.addClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.addClass(elementWith3Classes, 'className')).to.equal(true);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.addClass(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗║ ║║ ║║ ║║ ║   ║ ║║ ╚╗ ╔╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝║ ║║ ║║ ║║ ║   ║ ║╚╗ ║ ║ ╔╝║ ╔═════╝╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    // ║ ║ ║ ╚═╗║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║ ║ ╚═╝ ║ ║ ╚═════╗         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    // ╚═╝ ╚═══╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝ ╚═════╝ ╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#removeClass(element, classNames)', function () {
        describe('#removeClass(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.removeClass('element-with-1-class', 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.removeClass(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.removeClass(new String('element-with-3-classes'), 'class3')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.removeClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.removeClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.removeClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.removeClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.removeClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.removeClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.removeClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.removeClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.removeClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.removeClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.removeClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.removeClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.removeClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.removeClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.removeClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.removeClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.removeClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.removeClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.removeClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.removeClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.removeClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.removeClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.removeClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.removeClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.removeClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.removeClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.removeClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.removeClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#removeClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeClass(elementWith1Class, 'class1')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.removeClass(elementWith3Classes, 'className')).to.equal(true);
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.removeClass(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#hasClasses(element, classNames)', function () {
        describe('#hasClasses(ELEMENT, classNames)', function () {
            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.hasClasses('element-with-1-class', ['class1'])).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.hasClasses(String('element-with-2-classes'), ['class2'])).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.hasClasses(new String('element-with-3-classes'), ['class3'])).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.hasClasses(elementWith1Class, ['class1'])).to.equal(true);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.hasClasses('unused-element-id', ['className'])).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.hasClasses('', ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.hasClasses(' ', ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.hasClasses(String(''), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.hasClasses(new String(''), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.hasClasses(null, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.hasClasses(NaN, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.hasClasses(undefined, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.hasClasses(false, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.hasClasses(true, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.hasClasses({}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.hasClasses([], ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.hasClasses(function () {}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.hasClasses({foo: 'bar'}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.hasClasses(1, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.hasClasses(0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.hasClasses(+0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.hasClasses(-0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.hasClasses(Number('1'), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.hasClasses(new Number('1'), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.hasClasses(Number.POSITIVE_INFINITY, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.hasClasses(Number.NEGATIVE_INFINITY, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.hasClasses([1, 2, 3], ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.hasClasses(new Map(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.hasClasses(new Date(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.hasClasses(new (class Class {})(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.hasClasses(new (class Class {}), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.hasClasses(class Class {}, ['className'])).to.equal(false);
            });
        });

        describe('#hasClasses(element, CLASSNAMES)', function () {
            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.hasClasses(elementWith1Class)).to.equal(true);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.hasClasses(elementWith1Class, undefined)).to.equal(true);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.hasClasses(elementWith1Class, [])).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWith2Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWith2Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWith3Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWith3Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWith3Classes, 'class3')).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.hasClasses(elementWith1Class, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.hasClasses(elementWith2Classes, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.hasClasses(elementWith2Classes, ['class1', 'class2'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.hasClasses(elementWith3Classes, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.hasClasses(elementWith3Classes, ['class1', 'class2'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(HtmlEngine.hasClasses(elementWith3Classes, ['class1', 'class3'])).to.equal(true);
            });


            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, 'class1')).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, ['class1'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes in element', () => {
                expect(HtmlEngine.hasClasses(elementWith1Class, ['class4'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlEngine.hasClasses(elementWith2Classes, ['class3', 'class2', 'class1'])).to.equal(false);
            });

            it('Should return false when class name parametera are classes that are not all in class', () => {
                expect(HtmlEngine.hasClasses(elementWith2Classes, ['class1', 'class2', 'class3'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlEngine.hasClasses(elementWith3Classes, ['class4', 'class5', 'class6'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(HtmlEngine.hasClasses(elementWith3Classes, ['class1', 'class2', 'class3', 'class4'])).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWith1Class, 'class2')).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWith2Classes, 'class3')).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(HtmlEngine.hasClasses(elementWith3Classes, 'class4')).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.hasClasses(elementWithNoClass, class Class {})).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#hasClass(element, className)', function () {
        describe('#hasClass(ELEMENT, className)', function () {
            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.hasClass('element-with-1-class', 'class1')).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.hasClass(String('element-with-2-classes'), 'class2')).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.hasClass(new String('element-with-3-classes'), 'class3')).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.hasClass(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.hasClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.hasClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.hasClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.hasClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.hasClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.hasClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.hasClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.hasClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.hasClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.hasClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.hasClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.hasClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.hasClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.hasClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.hasClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.hasClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.hasClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.hasClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.hasClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.hasClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.hasClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.hasClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.hasClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.hasClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.hasClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.hasClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.hasClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.hasClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#hasClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClass(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClass(elementWith2Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClass(elementWith2Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClass(elementWith3Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClass(elementWith3Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(HtmlEngine.hasClass(elementWith3Classes, 'class3')).to.equal(true);
            });


            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, 'class1')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlEngine.hasClass(elementWith1Class, 'class2')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlEngine.hasClass(elementWith2Classes, 'class3')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(HtmlEngine.hasClass(elementWith3Classes, 'class4')).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(HtmlEngine.hasClass(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(HtmlEngine.isValidClassName([1, 2, 3])).to.equal(false);
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

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#getClasses(element)', function () {
        describe('#getClasses(ELEMENT)', function () {
            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(HtmlEngine.getClasses('element-with-3-classes')).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(HtmlEngine.getClasses('element-with-2-classes')).to.deep.equal(['class1', 'class2']);
            });

            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(HtmlEngine.getClasses('element-with-1-class')).to.deep.equal(['class1',]);
            });

            it('Should return class array when element parameter is a elementID with one or more classes', () => {
                expect(HtmlEngine.getClasses('element-with-3-classes')).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return empty array when element parameter is an elementID with no class', () => {
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(HtmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(HtmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(HtmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return empty array when element parameter is an element with no class', () => {
                expect(HtmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a unused identifier', () => {
                expect(HtmlEngine.getClasses('unused-element-id')).to.deep.equal([])
            });

            it('Should return empty array when element parameter is an empty string', () => {
                expect(HtmlEngine.getClasses('')).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a whitespace', () => {
                expect(HtmlEngine.getClasses(' ')).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.getClasses(String(''))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.getClasses(new String(''))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is null', () => {
                expect(HtmlEngine.getClasses(null)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is NaN', () => {
                expect(HtmlEngine.getClasses(NaN)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is undefined', () => {
                expect(HtmlEngine.getClasses(undefined)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is false boolean', () => {
                expect(HtmlEngine.getClasses(false)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is true boolean', () => {
                expect(HtmlEngine.getClasses(true)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty object', () => {
                expect(HtmlEngine.getClasses({})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty array', () => {
                expect(HtmlEngine.getClasses([])).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a function', () => {
                expect(HtmlEngine.getClasses(function () {})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a filled object', () => {
                expect(HtmlEngine.getClasses({foo: 'bar'})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a number', () => {
                expect(HtmlEngine.getClasses(1)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a zero', () => {
                expect(HtmlEngine.getClasses(0)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a positive zero', () => {
                expect(HtmlEngine.getClasses(+0)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a negative zero', () => {
                expect(HtmlEngine.getClasses(-0)).to.deep.equal([]);
            });

            it('Should return empty array array when element parameter is a primitive number', () => {
                expect(HtmlEngine.getClasses(Number('1'))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.getClasses(new Number('1'))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is positive infinity', () => {
                expect(HtmlEngine.getClasses(Number.POSITIVE_INFINITY)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is negative infinity', () => {
                expect(HtmlEngine.getClasses(Number.NEGATIVE_INFINITY)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a filled array', () => {
                expect(HtmlEngine.getClasses([1, 2, 3])).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a map', () => {
                expect(HtmlEngine.getClasses(new Map())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a date', () => {
                expect(HtmlEngine.getClasses(new Date())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class instance', () => {
                expect(HtmlEngine.getClasses(new (class Class {})())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class instance', () => {
                expect(HtmlEngine.getClasses(new (class Class {}))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class declaration', () => {
                expect(HtmlEngine.getClasses(class Class {})).to.deep.equal([]);
            });
        });
    });
});
