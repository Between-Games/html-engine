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
                expect(htmlEngine.toggleClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(htmlEngine.toggleClasses('element-with-1-class', 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(htmlEngine.toggleClasses(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.toggleClasses(new String('element-with-3-classes'), ['class2'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class3']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(htmlEngine.toggleClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine.toggleClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine.toggleClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine.toggleClasses(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.toggleClasses(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine.toggleClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine.toggleClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine.toggleClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine.toggleClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine.toggleClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine.toggleClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine.toggleClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine.toggleClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine.toggleClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine.toggleClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine.toggleClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine.toggleClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine.toggleClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine.toggleClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.toggleClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine.toggleClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine.toggleClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine.toggleClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine.toggleClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine.toggleClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.toggleClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.toggleClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine.toggleClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#toggleClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.toggleClasses(elementWith1Class, 'class2')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.toggleClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.toggleClasses(elementWith3Classes, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.toggleClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.toggleClasses(elementWith2Classes, String('class1'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.toggleClasses(elementWith3Classes, String('class3'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(htmlEngine.toggleClasses(elementWith1Class, ['class1', 'class2', 'class3'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(htmlEngine.toggleClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class3']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(htmlEngine.toggleClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class3', 'class4']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(htmlEngine.toggleClasses(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(htmlEngine.addClasses(elementWithNoClass, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(htmlEngine.addClasses('element-with-1-class', 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(htmlEngine.addClasses(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.addClasses(new String('element-with-3-classes'), ['className'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(htmlEngine.addClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine.addClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine.addClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine.addClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.addClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine.addClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine.addClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine.addClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine.addClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine.addClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine.addClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine.addClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine.addClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine.addClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine.addClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine.addClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine.addClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine.addClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine.addClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.addClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine.addClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine.addClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine.addClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine.addClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine.addClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.addClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.addClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine.addClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#addClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.addClasses(elementWith1Class, 'class2')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.addClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.addClasses(elementWith3Classes, 'class4')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.addClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.addClasses(elementWith2Classes, String('class3'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.addClasses(elementWith3Classes, String('class4'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(htmlEngine.addClasses(elementWith1Class, ['class2', 'class3'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(htmlEngine.addClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(htmlEngine.addClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'class4']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(htmlEngine.addClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(htmlEngine.addClasses(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(htmlEngine.removeClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(htmlEngine.removeClasses('element-with-1-class', 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(htmlEngine.removeClasses(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.removeClasses(new String('element-with-3-classes'), ['class2', 'class3'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(htmlEngine.removeClasses('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine.removeClasses('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine.removeClasses(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine.removeClasses(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.removeClasses(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine.removeClasses(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine.removeClasses(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine.removeClasses(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine.removeClasses(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine.removeClasses(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine.addClasses({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine.removeClasses([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine.removeClasses(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine.removeClasses({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine.removeClasses(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine.removeClasses(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine.removeClasses(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine.removeClasses(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine.removeClasses(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.removeClasses(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine.removeClasses(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine.removeClasses(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine.removeClasses([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine.removeClasses(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine.removeClasses(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.removeClasses(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.removeClasses(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine.removeClasses(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#removeClasses(element, CLASSNAMES)', function () {
            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.removeClasses(elementWith1Class, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.removeClasses(elementWith2Classes, 'class3')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a string', () => {
                expect(htmlEngine.removeClasses(elementWith3Classes, 'class4')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, String('class1'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.removeClasses(elementWith1Class, String('class2'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.removeClasses(elementWith2Classes, String('class3'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a primitive string', () => {
                expect(htmlEngine.removeClasses(elementWith3Classes, String('class4'))).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is an array with one string element', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, ['class1'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(htmlEngine.removeClasses(elementWith1Class, ['class2', 'class3'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with two string element', () => {
                expect(htmlEngine.removeClasses(elementWith2Classes, ['class2', 'class3'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is an array with three string element', () => {
                expect(htmlEngine.removeClasses(elementWith3Classes, ['class1', 'class2', 'class4'])).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class3']);
            });


            it('Should return false when class name  parameter is empty', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(htmlEngine.removeClasses(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(htmlEngine.toggleClass(elementWithNoClass, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
                expect(htmlEngine.toggleClass(elementWithNoClass, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(htmlEngine.toggleClass('element-with-1-class', 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
                expect(htmlEngine.toggleClass('element-with-1-class', 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(htmlEngine.toggleClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
                expect(htmlEngine.toggleClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.toggleClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
                expect(htmlEngine.toggleClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(htmlEngine.toggleClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine.toggleClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine.toggleClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine.toggleClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.toggleClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine.toggleClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine.toggleClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine.toggleClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine.toggleClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine.toggleClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine.toggleClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine.toggleClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine.toggleClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine.toggleClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine.toggleClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine.toggleClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine.toggleClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine.toggleClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine.toggleClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.toggleClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine.toggleClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine.toggleClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine.toggleClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine.toggleClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine.toggleClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.toggleClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.toggleClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine.toggleClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#toggleClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.toggleClass(elementWith1Class, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
                expect(htmlEngine.toggleClass(elementWith1Class, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.toggleClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
                expect(htmlEngine.toggleClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.toggleClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
                expect(htmlEngine.toggleClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
                expect(htmlEngine.toggleClass(elementWithNoClass, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(htmlEngine.toggleClass(elementWith1Class, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
                expect(htmlEngine.toggleClass(elementWith1Class, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(htmlEngine.toggleClass(elementWith2Classes, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
                expect(htmlEngine.toggleClass(elementWith2Classes, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is not a class in element', () => {
                expect(htmlEngine.toggleClass(elementWith3Classes, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
                expect(htmlEngine.toggleClass(elementWith3Classes, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(htmlEngine.toggleClass(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(htmlEngine.addClass(elementWithNoClass, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(htmlEngine.addClass('element-with-1-class', 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(htmlEngine.addClass(String('element-with-2-classes'), 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.addClass(new String('element-with-3-classes'), 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(htmlEngine.addClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine.addClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine.addClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine.addClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.addClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine.addClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine.addClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine.addClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine.addClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine.addClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine.addClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine.addClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine.addClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine.addClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine.addClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine.addClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine.addClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine.addClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine.addClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.addClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine.addClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine.addClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine.addClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine.addClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine.addClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.addClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.addClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine.addClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#addClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.addClass(elementWithNoClass, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal(['className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.addClass(elementWith1Class, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.addClass(elementWith2Classes, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.addClass(elementWith3Classes, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3', 'className']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.addClass(elementWith3Classes, 'className')).to.equal(true);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(htmlEngine.addClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(htmlEngine.addClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(htmlEngine.addClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.addClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(htmlEngine.addClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(htmlEngine.addClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(htmlEngine.addClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(htmlEngine.addClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(htmlEngine.addClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(htmlEngine.addClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(htmlEngine.addClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(htmlEngine.addClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(htmlEngine.addClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(htmlEngine.addClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(htmlEngine.addClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(htmlEngine.addClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(htmlEngine.addClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(htmlEngine.addClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(htmlEngine.addClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(htmlEngine.addClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(htmlEngine.addClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(htmlEngine.addClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(htmlEngine.addClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(htmlEngine.addClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.addClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.addClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(htmlEngine.addClass(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(htmlEngine.removeClass(elementWithNoClass, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(htmlEngine.removeClass('element-with-1-class', 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(htmlEngine.removeClass(String('element-with-2-classes'), 'class2')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.removeClass(new String('element-with-3-classes'), 'class3')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(htmlEngine.removeClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine.removeClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine.removeClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine.removeClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.removeClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine.removeClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine.removeClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine.removeClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine.removeClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine.removeClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine.removeClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine.removeClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine.removeClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine.removeClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine.removeClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine.removeClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine.removeClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine.removeClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine.removeClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.removeClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine.removeClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine.removeClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine.removeClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine.removeClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine.removeClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.removeClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.removeClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine.removeClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#removeClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.removeClass(elementWith1Class, 'class1')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal([]);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.removeClass(elementWith2Classes, 'class2')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.removeClass(elementWith3Classes, 'class3')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.removeClass(elementWith3Classes, 'className')).to.equal(true);
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });


            it('Should return false when class name parameter is a whitespace', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(htmlEngine.removeClass(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(htmlEngine.hasClasses('element-with-1-class', ['class1'])).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(htmlEngine.hasClasses(String('element-with-2-classes'), ['class2'])).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.hasClasses(new String('element-with-3-classes'), ['class3'])).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(htmlEngine.hasClasses(elementWith1Class, ['class1'])).to.equal(true);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(htmlEngine.hasClasses('unused-element-id', ['className'])).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine.hasClasses('', ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine.hasClasses(' ', ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine.hasClasses(String(''), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.hasClasses(new String(''), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine.hasClasses(null, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine.hasClasses(NaN, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine.hasClasses(undefined, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine.hasClasses(false, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine.hasClasses(true, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine.hasClasses({}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine.hasClasses([], ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine.hasClasses(function () {}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine.hasClasses({foo: 'bar'}, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine.hasClasses(1, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine.hasClasses(0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine.hasClasses(+0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine.hasClasses(-0, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine.hasClasses(Number('1'), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.hasClasses(new Number('1'), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine.hasClasses(Number.POSITIVE_INFINITY, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine.hasClasses(Number.NEGATIVE_INFINITY, ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine.hasClasses([1, 2, 3], ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine.hasClasses(new Map(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine.hasClasses(new Date(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.hasClasses(new (class Class {})(), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.hasClasses(new (class Class {}), ['className'])).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine.hasClasses(class Class {}, ['className'])).to.equal(false);
            });
        });

        describe('#hasClasses(element, CLASSNAMES)', function () {
            it('Should return false when class name  parameter is empty', () => {
                expect(htmlEngine.hasClasses(elementWith1Class)).to.equal(true);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(htmlEngine.hasClasses(elementWith1Class, undefined)).to.equal(true);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(htmlEngine.hasClasses(elementWith1Class, [])).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClasses(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClasses(elementWith2Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClasses(elementWith2Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClasses(elementWith3Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClasses(elementWith3Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClasses(elementWith3Classes, 'class3')).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(htmlEngine.hasClasses(elementWith1Class, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(htmlEngine.hasClasses(elementWith2Classes, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(htmlEngine.hasClasses(elementWith2Classes, ['class1', 'class2'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(htmlEngine.hasClasses(elementWith3Classes, ['class1'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(htmlEngine.hasClasses(elementWith3Classes, ['class1', 'class2'])).to.equal(true);
            });

            it('Should return true when class name parameter are classes in element', () => {
                expect(htmlEngine.hasClasses(elementWith3Classes, ['class1', 'class3'])).to.equal(true);
            });


            it('Should return false when class name parameter is not a class in element', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, 'class1')).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, ['class1'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes in element', () => {
                expect(htmlEngine.hasClasses(elementWith1Class, ['class4'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(htmlEngine.hasClasses(elementWith2Classes, ['class3', 'class2', 'class1'])).to.equal(false);
            });

            it('Should return false when class name parametera are classes that are not all in class', () => {
                expect(htmlEngine.hasClasses(elementWith2Classes, ['class1', 'class2', 'class3'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(htmlEngine.hasClasses(elementWith3Classes, ['class4', 'class5', 'class6'])).to.equal(false);
            });

            it('Should return false when class name parameter are classes that are not all in class', () => {
                expect(htmlEngine.hasClasses(elementWith3Classes, ['class1', 'class2', 'class3', 'class4'])).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(htmlEngine.hasClasses(elementWith1Class, 'class2')).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(htmlEngine.hasClasses(elementWith2Classes, 'class3')).to.equal(false);
            });

            it('Should return false when class name parameter is not a class in element', () => {
                expect(htmlEngine.hasClasses(elementWith3Classes, 'class4')).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(htmlEngine.hasClasses(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(htmlEngine.hasClass('element-with-1-class', 'class1')).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(htmlEngine.hasClass(String('element-with-2-classes'), 'class2')).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.hasClass(new String('element-with-3-classes'), 'class3')).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(htmlEngine.hasClass(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return false when element parameter is an unused element ID', () => {
                expect(htmlEngine.hasClass('unused-element-id', 'className')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine.hasClass('', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine.hasClass(' ', 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine.hasClass(String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.hasClass(new String(''), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine.hasClass(null, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine.hasClass(NaN, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine.hasClass(undefined, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine.hasClass(false, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine.hasClass(true, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine.hasClass({}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine.hasClass([], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine.hasClass(function () {}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine.hasClass({foo: 'bar'}, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine.hasClass(1, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine.hasClass(0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine.hasClass(+0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine.hasClass(-0, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine.hasClass(Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.hasClass(new Number('1'), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine.hasClass(Number.POSITIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine.hasClass(Number.NEGATIVE_INFINITY, 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine.hasClass([1, 2, 3], 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine.hasClass(new Map(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine.hasClass(new Date(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.hasClass(new (class Class {})(), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.hasClass(new (class Class {}), 'className')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine.hasClass(class Class {}, 'className')).to.equal(false);
            });
        });

        describe('#hasClass(element, CLASSNAME)', function () {
            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClass(elementWith1Class, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClass(elementWith2Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClass(elementWith2Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClass(elementWith3Classes, 'class1')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClass(elementWith3Classes, 'class2')).to.equal(true);
            });

            it('Should return true when class name parameter is a class in element', () => {
                expect(htmlEngine.hasClass(elementWith3Classes, 'class3')).to.equal(true);
            });


            it('Should return false when class name parameter is a not class in element', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, 'class1')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(htmlEngine.hasClass(elementWith1Class, 'class2')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(htmlEngine.hasClass(elementWith2Classes, 'class3')).to.equal(false);
            });

            it('Should return false when class name parameter is a not class in element', () => {
                expect(htmlEngine.hasClass(elementWith3Classes, 'class4')).to.equal(false);
            });

            it('Should return false when class name parameter is a whitespace', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty string', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, '')).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty primitive string', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, new String(''))).to.equal(false);
            });

            it('Should return false when class name  parameter is a whitespace', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, ' ')).to.equal(false);
            });

            it('Should return false when class name  parameter is empty', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, )).to.equal(false);
            });

            it('Should return false when class name  parameter is null', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, null)).to.equal(false);
            });

            it('Should return false when class name  parameter is NaN', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, NaN)).to.equal(false);
            });

            it('Should return false when class name  parameter is undefined', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, undefined)).to.equal(false);
            });

            it('Should return false when class name  parameter is false boolean', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, false)).to.equal(false);
            });

            it('Should return false when class name  parameter is true boolean', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, true)).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty object', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, {})).to.equal(false);
            });

            it('Should return false when class name  parameter is an empty array', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, [])).to.equal(false);
            });

            it('Should return false when class name  parameter is a function', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, function () {})).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled object', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when class name  parameter is a number', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, 1)).to.equal(false);
            });

            it('Should return false when class name  name  parameter is a zero', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, 0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a positive false', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, +0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a negative zero', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, -0)).to.equal(false);
            });

            it('Should return false when class name  parameter is a primitive number', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a wrapped primitive number', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, new Number('1'))).to.equal(false);
            });

            it('Should return false when class name  parameter is a filled array', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when class name  parameter is a map', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, new Map())).to.equal(false);
            });

            it('Should return false when class name  parameter is a date', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, new Date())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, new (class Class {})())).to.equal(false);
            });

            it('Should return false when class name  parameter is a class instance', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, new (class Class {}))).to.equal(false);
            });

            it('Should return false when class name  parameter is a class declaration', () => {
                expect(htmlEngine.hasClass(elementWithNoClass, class Class {})).to.equal(false);
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
                expect(htmlEngine.isValidClassName('string')).to.equal(true);
            });

            it('Should return true when value parameter is a filled primitive string', () => {
                expect(htmlEngine.isValidClassName(String('string'))).to.equal(true);
            });

            it('Should return true when value parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.isValidClassName(new String('string'))).to.equal(true);
            });


            it('Should return false when value parameter is a whitespace', () => {
                expect(htmlEngine.isValidClassName(' ')).to.equal(false);
            });

            it('Should return false when value parameter is an empty string', () => {
                expect(htmlEngine.isValidClassName('')).to.equal(false);
            });

            it('Should return false when value parameter is an empty primitive string', () => {
                expect(htmlEngine.isValidClassName(String(''))).to.equal(false);
            });

            it('Should return false when value parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.isValidClassName(new String(''))).to.equal(false);
            });

            it('Should return false when value parameter is a whitespace', () => {
                expect(htmlEngine.isValidClassName(' ')).to.equal(false);
            });

            it('Should return false when value parameter is empty', () => {
                expect(htmlEngine.isValidClassName()).to.equal(false);
            });

            it('Should return false when value parameter is null', () => {
                expect(htmlEngine.isValidClassName(null)).to.equal(false);
            });

            it('Should return false when value parameter is NaN', () => {
                expect(htmlEngine.isValidClassName(NaN)).to.equal(false);
            });

            it('Should return false when value parameter is undefined', () => {
                expect(htmlEngine.isValidClassName(undefined)).to.equal(false);
            });

            it('Should return false when value parameter is false boolean', () => {
                expect(htmlEngine.isValidClassName(false)).to.equal(false);
            });

            it('Should return false when value parameter is true boolean', () => {
                expect(htmlEngine.isValidClassName(true)).to.equal(false);
            });

            it('Should return false when value parameter is an empty object', () => {
                expect(htmlEngine.isValidClassName({})).to.equal(false);
            });

            it('Should return false when value parameter is an empty array', () => {
                expect(htmlEngine.isValidClassName([])).to.equal(false);
            });

            it('Should return false when value parameter is a function', () => {
                expect(htmlEngine.isValidClassName(function () {})).to.equal(false);
            });

            it('Should return false when value parameter is a filled object', () => {
                expect(htmlEngine.isValidClassName({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value parameter is a number', () => {
                expect(htmlEngine.isValidClassName(1)).to.equal(false);
            });

            it('Should return false when value parameter is a zero', () => {
                expect(htmlEngine.isValidClassName(0)).to.equal(false);
            });

            it('Should return false when value parameter is a positive false', () => {
                expect(htmlEngine.isValidClassName(+0)).to.equal(false);
            });

            it('Should return false when value parameter is a negative zero', () => {
                expect(htmlEngine.isValidClassName(-0)).to.equal(false);
            });

            it('Should return false when value parameter is a primitive number', () => {
                expect(htmlEngine.isValidClassName(Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a wrapped primitive number', () => {
                expect(htmlEngine.isValidClassName(new Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a filled array', () => {
                expect(htmlEngine.isValidClassName([1, 2, 3])).to.equal(false);
            });

            it('Should return false when value parameter is a map', () => {
                expect(htmlEngine.isValidClassName(new Map())).to.equal(false);
            });

            it('Should return false when value parameter is a date', () => {
                expect(htmlEngine.isValidClassName(new Date())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(htmlEngine.isValidClassName(new (class Class {})())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(htmlEngine.isValidClassName(new (class Class {}))).to.equal(false);
            });

            it('Should return false when value parameter is a class declaration', () => {
                expect(htmlEngine.isValidClassName(class Class {})).to.equal(false);
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
                expect(htmlEngine.getClasses('element-with-3-classes')).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(htmlEngine.getClasses('element-with-2-classes')).to.deep.equal(['class1', 'class2']);
            });

            it('Should return class array when element parameter is an elementID with one or more classes', () => {
                expect(htmlEngine.getClasses('element-with-1-class')).to.deep.equal(['class1',]);
            });

            it('Should return class array when element parameter is a elementID with one or more classes', () => {
                expect(htmlEngine.getClasses('element-with-3-classes')).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return empty array when element parameter is an elementID with no class', () => {
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(htmlEngine.getClasses(elementWith3Classes)).to.deep.equal(['class1', 'class2', 'class3']);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(htmlEngine.getClasses(elementWith2Classes)).to.deep.equal(['class1', 'class2']);
            });

            it('Should return class array when element parameter is an element with one or more classes', () => {
                expect(htmlEngine.getClasses(elementWith1Class)).to.deep.equal(['class1']);
            });

            it('Should return empty array when element parameter is an element with no class', () => {
                expect(htmlEngine.getClasses(elementWithNoClass)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a unused identifier', () => {
                expect(htmlEngine.getClasses('unused-element-id')).to.deep.equal([])
            });

            it('Should return empty array when element parameter is an empty string', () => {
                expect(htmlEngine.getClasses('')).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a whitespace', () => {
                expect(htmlEngine.getClasses(' ')).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty primitive string', () => {
                expect(htmlEngine.getClasses(String(''))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.getClasses(new String(''))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is null', () => {
                expect(htmlEngine.getClasses(null)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is NaN', () => {
                expect(htmlEngine.getClasses(NaN)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is undefined', () => {
                expect(htmlEngine.getClasses(undefined)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is false boolean', () => {
                expect(htmlEngine.getClasses(false)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is true boolean', () => {
                expect(htmlEngine.getClasses(true)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty object', () => {
                expect(htmlEngine.getClasses({})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is an empty array', () => {
                expect(htmlEngine.getClasses([])).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a function', () => {
                expect(htmlEngine.getClasses(function () {})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a filled object', () => {
                expect(htmlEngine.getClasses({foo: 'bar'})).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a number', () => {
                expect(htmlEngine.getClasses(1)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a zero', () => {
                expect(htmlEngine.getClasses(0)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a positive zero', () => {
                expect(htmlEngine.getClasses(+0)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a negative zero', () => {
                expect(htmlEngine.getClasses(-0)).to.deep.equal([]);
            });

            it('Should return empty array array when element parameter is a primitive number', () => {
                expect(htmlEngine.getClasses(Number('1'))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.getClasses(new Number('1'))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is positive infinity', () => {
                expect(htmlEngine.getClasses(Number.POSITIVE_INFINITY)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is negative infinity', () => {
                expect(htmlEngine.getClasses(Number.NEGATIVE_INFINITY)).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a filled array', () => {
                expect(htmlEngine.getClasses([1, 2, 3])).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a map', () => {
                expect(htmlEngine.getClasses(new Map())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a date', () => {
                expect(htmlEngine.getClasses(new Date())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class instance', () => {
                expect(htmlEngine.getClasses(new (class Class {})())).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class instance', () => {
                expect(htmlEngine.getClasses(new (class Class {}))).to.deep.equal([]);
            });

            it('Should return empty array when element parameter is a class declaration', () => {
                expect(htmlEngine.getClasses(class Class {})).to.deep.equal([]);
            });
        });
    });
});
