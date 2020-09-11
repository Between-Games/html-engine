// ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║          ║ ║  ║ ╚═════╗
// ╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║          ║ ║  ╚═════╗ ║
// ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗
// ╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝
// ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗
// ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝

describe('Style', function() {
    let elementWithNoStyle;
    let elementWith1Style;
    let elementWith2Styles;
    let elementWith3Styles;

    const styleSet1 = {display: "none"};
    const styleSet2 = {display: "block", opacity: "1.0"};
    const styleSet3 = {display: "inline", opacity: "0.0", color: "rgb(255, 0, 0)"};

    beforeEach(function () {
        elementWithNoStyle = document.createElement('button');
        elementWith1Style = document.createElement('button');
        elementWith2Styles = document.createElement('button');
        elementWith3Styles = document.createElement('button');

        elementWithNoStyle.setAttribute('id', 'element-with-no-style');
        elementWith1Style.setAttribute('id', 'element-with-1-style');
        elementWith2Styles.setAttribute('id', 'element-with-2-styles');
        elementWith3Styles.setAttribute('id', 'element-with-3-styles');

        elementWith1Style.style.display = styleSet1.display;

        elementWith2Styles.style.display = styleSet2.display;
        elementWith2Styles.style.opacity = styleSet2.opacity;

        elementWith3Styles.style.display = styleSet3.display;
        elementWith3Styles.style.opacity = styleSet3.opacity;
        elementWith3Styles.style.color = styleSet3.color;

        document.body.appendChild(elementWithNoStyle);
        document.body.appendChild(elementWith1Style);
        document.body.appendChild(elementWith2Styles);
        document.body.appendChild(elementWith3Styles);
    });

    afterEach(function () {
        elementWithNoStyle.remove();
        elementWith1Style.remove();
        elementWith2Styles.remove();
        elementWith3Styles.remove();
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝

    describe('#hasStyle(element, styleName, styleValue)', function () {
        describe('#hasStyle(ELEMENT, styleName, styleValue)', function () {
            it('Should return true when element parameter is an element', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, 'display', undefined)).to.equal(true);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(htmlEngine.hasStyle('element-with-1-style', 'display', 'none')).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(htmlEngine.hasStyle('element-with-2-styles', 'display', 'block')).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.hasStyle('element-with-3-styles', 'display', 'inline')).to.equal(true);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(htmlEngine.hasStyle('unused-element-id', 'display')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine.hasStyle('', 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine.hasStyle(' ', 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine.hasStyle(String(''), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.hasStyle(new String(''), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine.hasStyle(null, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine.hasStyle(NaN, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine.hasStyle(undefined, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine.hasStyle(false, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine.hasStyle(true, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine.hasStyle({}, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine.hasStyle([], 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine.hasStyle(function () {}, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine.hasStyle({foo: 'bar'}, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine.hasStyle(1, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine.hasStyle(0, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine.hasStyle(+0, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine.hasStyle(-0, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine.hasStyle(Number('1'), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.hasStyle(new Number('1'), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine.hasStyle(Number.POSITIVE_INFINITY, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine.hasStyle(Number.NEGATIVE_INFINITY, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine.hasStyle([1, 2, 3], 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine.hasStyle(new Map(), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine.hasStyle(new Date(), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.hasStyle(new (class Class {})(), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine.hasStyle(new (class Class {}), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine.hasStyle(class Class {}, 'display')).to.equal(false);
            });
        });

        describe('#hasStyle(element, STYLENAME, styleValue)', function () {
            it('Should return true when style name parameter is valid', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, 'margin')).to.equal(true);
            });


            it('Should return false when style name parameter is an empty string', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, '')).to.equal(false);
            });

            it('Should return false when style name parameter is an empty primitive string', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, new String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is a whitespace', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, ' ')).to.equal(false);
            });

            it('Should return false when style name parameter is empty', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle)).to.equal(false);
            });

            it('Should return false when style name parameter is null', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, null)).to.equal(false);
            });

            it('Should return false when style name parameter is NaN', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, NaN)).to.equal(false);
            });

            it('Should return false when style name parameter is undefined', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, undefined)).to.equal(false);
            });

            it('Should return false when style name parameter is false boolean', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, false)).to.equal(false);
            });

            it('Should return false when style name parameter is true boolean', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, true)).to.equal(false);
            });

            it('Should return false when style name parameter is an empty object', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, {})).to.equal(false);
            });

            it('Should return false when style name parameter is an empty array', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, [])).to.equal(false);
            });

            it('Should return false when style name parameter is a function', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, function () {})).to.equal(false);
            });

            it('Should return false when style name parameter is a filled object', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style name parameter is a number', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, 1)).to.equal(false);
            });

            it('Should return false when style name  name parameter is a zero', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, 0)).to.equal(false);
            });

            it('Should return false when style name parameter is a positive false', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, +0)).to.equal(false);
            });

            it('Should return false when style name parameter is a negative zero', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, -0)).to.equal(false);
            });

            it('Should return false when style name parameter is a primitive number', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a wrapped primitive number', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, new Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a filled array', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when style name parameter is a map', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, new Map())).to.equal(false);
            });

            it('Should return false when style name parameter is a date', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, new Date())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, new (class Class {})())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, new (class Class {}))).to.equal(false);
            });

            it('Should return false when style name parameter is a class declaration', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, class Class {})).to.equal(false);
            });
        });

        describe('#hasStyle(element, styleName, STYLEVALUE)', function () {
            it('Should return true when style value parameter is valid', () => {
                expect(htmlEngine.hasStyle(elementWith3Styles, 'color', 'rgb(255, 0, 0)')).to.equal(true);
            });

            it('Should return true when style value parameter is empty', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, 'color')).to.equal(true);
            });

            it('Should return true when style value parameter is undefined', () => {
                expect(htmlEngine.hasStyle(elementWithNoStyle, 'color', undefined)).to.equal(true);
            });


            it('Should return false when style value parameter is a whitespace', () => {
                expect(htmlEngine.hasStyle(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty string', () => {
                expect(htmlEngine.hasStyle('')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty primitive string', () => {
                expect(htmlEngine.hasStyle(String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.hasStyle(new String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is a whitespace', () => {
                expect(htmlEngine.hasStyle(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is null', () => {
                expect(htmlEngine.hasStyle(null)).to.equal(false);
            });

            it('Should return false when style value parameter is NaN', () => {
                expect(htmlEngine.hasStyle(NaN)).to.equal(false);
            });

            it('Should return false when style value parameter is false boolean', () => {
                expect(htmlEngine.hasStyle(false)).to.equal(false);
            });

            it('Should return false when style value parameter is true boolean', () => {
                expect(htmlEngine.hasStyle(true)).to.equal(false);
            });

            it('Should return false when style value parameter is an empty object', () => {
                expect(htmlEngine.hasStyle({})).to.equal(false);
            });

            it('Should return false when style value parameter is an empty array', () => {
                expect(htmlEngine.hasStyle([])).to.equal(false);
            });

            it('Should return false when style value parameter is a function', () => {
                expect(htmlEngine.hasStyle(function () {})).to.equal(false);
            });

            it('Should return false when style value parameter is a filled object', () => {
                expect(htmlEngine.hasStyle({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style value parameter is a number', () => {
                expect(htmlEngine.hasStyle(1)).to.equal(false);
            });

            it('Should return false when style value  name parameter is a zero', () => {
                expect(htmlEngine.hasStyle(0)).to.equal(false);
            });

            it('Should return false when style value parameter is a positive false', () => {
                expect(htmlEngine.hasStyle(+0)).to.equal(false);
            });

            it('Should return false when style value parameter is a negative zero', () => {
                expect(htmlEngine.hasStyle(-0)).to.equal(false);
            });

            it('Should return false when style value parameter is a primitive number', () => {
                expect(htmlEngine.hasStyle(Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a wrapped primitive number', () => {
                expect(htmlEngine.hasStyle(new Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a filled array', () => {
                expect(htmlEngine.hasStyle([1, 2, 3])).to.equal(false);
            });

            it('Should return false when style value parameter is a map', () => {
                expect(htmlEngine.hasStyle(new Map())).to.equal(false);
            });

            it('Should return false when style value parameter is a date', () => {
                expect(htmlEngine.hasStyle(new Date())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(htmlEngine.hasStyle(new (class Class {})())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(htmlEngine.hasStyle(new (class Class {}))).to.equal(false);
            });

            it('Should return false when style value parameter is a class declaration', () => {
                expect(htmlEngine.hasStyle(class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ╚══╗ ╔══╝╚╗ ╔══╗ ║         ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║         ║ ║    ║ ║  ║ ║╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║         ║ ║    ║ ║  ║ ║╚═══════╝╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    // ╔══╝ ╚══╗╔═════╝ ║          ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗╔══╝ ╚══╗╔╝ ╚══╝ ║         ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗          ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝          ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝          ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#isValidStyleValue(value)', function () {
        describe('#isValidStyleValue(VALUE)', function () {
            it('Should return true when style value parameter is valid', () => {
                expect(htmlEngine.isValidStyleValue('rgb(255, 0, 0)')).to.equal(true);
            });


            it('Should return false when style value parameter is empty', () => {
                expect(htmlEngine.isValidStyleValue()).to.equal(false);
            });

            it('Should return false when style value parameter is a whitespace', () => {
                expect(htmlEngine.isValidStyleValue(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty string', () => {
                expect(htmlEngine.isValidStyleValue('')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty primitive string', () => {
                expect(htmlEngine.isValidStyleValue(String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.isValidStyleValue(new String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is a whitespace', () => {
                expect(htmlEngine.isValidStyleValue(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is null', () => {
                expect(htmlEngine.isValidStyleValue(null)).to.equal(false);
            });

            it('Should return false when style value parameter is NaN', () => {
                expect(htmlEngine.isValidStyleValue(NaN)).to.equal(false);
            });

            it('Should return false when style value parameter is undefined', () => {
                expect(htmlEngine.isValidStyleValue(undefined)).to.equal(false);
            });

            it('Should return false when style value parameter is false boolean', () => {
                expect(htmlEngine.isValidStyleValue(false)).to.equal(false);
            });

            it('Should return false when style value parameter is true boolean', () => {
                expect(htmlEngine.isValidStyleValue(true)).to.equal(false);
            });

            it('Should return false when style value parameter is an empty object', () => {
                expect(htmlEngine.isValidStyleValue({})).to.equal(false);
            });

            it('Should return false when style value parameter is an empty array', () => {
                expect(htmlEngine.isValidStyleValue([])).to.equal(false);
            });

            it('Should return false when style value parameter is a function', () => {
                expect(htmlEngine.isValidStyleValue(function () {})).to.equal(false);
            });

            it('Should return false when style value parameter is a filled object', () => {
                expect(htmlEngine.isValidStyleValue({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style value parameter is a number', () => {
                expect(htmlEngine.isValidStyleValue(1)).to.equal(false);
            });

            it('Should return false when style value  name parameter is a zero', () => {
                expect(htmlEngine.isValidStyleValue(0)).to.equal(false);
            });

            it('Should return false when style value parameter is a positive false', () => {
                expect(htmlEngine.isValidStyleValue(+0)).to.equal(false);
            });

            it('Should return false when style value parameter is a negative zero', () => {
                expect(htmlEngine.isValidStyleValue(-0)).to.equal(false);
            });

            it('Should return false when style value parameter is a primitive number', () => {
                expect(htmlEngine.isValidStyleValue(Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a wrapped primitive number', () => {
                expect(htmlEngine.isValidStyleValue(new Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a filled array', () => {
                expect(htmlEngine.isValidStyleValue([1, 2, 3])).to.equal(false);
            });

            it('Should return false when style value parameter is a map', () => {
                expect(htmlEngine.isValidStyleValue(new Map())).to.equal(false);
            });

            it('Should return false when style value parameter is a date', () => {
                expect(htmlEngine.isValidStyleValue(new Date())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(htmlEngine.isValidStyleValue(new (class Class {})())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(htmlEngine.isValidStyleValue(new (class Class {}))).to.equal(false);
            });

            it('Should return false when style value parameter is a class declaration', () => {
                expect(htmlEngine.isValidStyleValue(class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗         ╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ╚══╗ ╔══╝╚╗ ╔══╗ ║         ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝         ║ ╔╗ ║║ ║║ ╔═══╗ ║║ ╔╗ ╔╗ ║║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║         ║ ║    ║ ║  ║ ║╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║         ║ ║    ║ ║  ║ ║╚═══════╝╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝╚═══════╝║ ║║ ║║ ║║ ╔═══╗ ║║ ║║ ║║ ║║ ╔═════╝
    // ╔══╝ ╚══╗╔═════╝ ║          ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗╔══╝ ╚══╗╔╝ ╚══╝ ║         ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗         ║ ║║ ╚╝ ║║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝          ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝         ╚═╝╚════╝╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═══════╝

    describe('#isValidStyleName(value)', function () {
        describe('#isValidStyleName(VALUE)', function () {
            it('Should return true when style name parameter is valid', () => {
                expect(htmlEngine.isValidStyleName('margin')).to.equal(true);
            });


            it('Should return false when style name parameter is a whitespace', () => {
                expect(htmlEngine.isValidStyleName(' ')).to.equal(false);
            });

            it('Should return false when style name parameter is an empty string', () => {
                expect(htmlEngine.isValidStyleName('')).to.equal(false);
            });

            it('Should return false when style name parameter is an empty primitive string', () => {
                expect(htmlEngine.isValidStyleName(String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.isValidStyleName(new String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is a whitespace', () => {
                expect(htmlEngine.isValidStyleName(' ')).to.equal(false);
            });

            it('Should return false when style name parameter is empty', () => {
                expect(htmlEngine.isValidStyleName()).to.equal(false);
            });

            it('Should return false when style name parameter is null', () => {
                expect(htmlEngine.isValidStyleName(null)).to.equal(false);
            });

            it('Should return false when style name parameter is NaN', () => {
                expect(htmlEngine.isValidStyleName(NaN)).to.equal(false);
            });

            it('Should return false when style name parameter is undefined', () => {
                expect(htmlEngine.isValidStyleName(undefined)).to.equal(false);
            });

            it('Should return false when style name parameter is false boolean', () => {
                expect(htmlEngine.isValidStyleName(false)).to.equal(false);
            });

            it('Should return false when style name parameter is true boolean', () => {
                expect(htmlEngine.isValidStyleName(true)).to.equal(false);
            });

            it('Should return false when style name parameter is an empty object', () => {
                expect(htmlEngine.isValidStyleName({})).to.equal(false);
            });

            it('Should return false when style name parameter is an empty array', () => {
                expect(htmlEngine.isValidStyleName([])).to.equal(false);
            });

            it('Should return false when style name parameter is a function', () => {
                expect(htmlEngine.isValidStyleName(function () {})).to.equal(false);
            });

            it('Should return false when style name parameter is a filled object', () => {
                expect(htmlEngine.isValidStyleName({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style name parameter is a number', () => {
                expect(htmlEngine.isValidStyleName(1)).to.equal(false);
            });

            it('Should return false when style name  name parameter is a zero', () => {
                expect(htmlEngine.isValidStyleName(0)).to.equal(false);
            });

            it('Should return false when style name parameter is a positive false', () => {
                expect(htmlEngine.isValidStyleName(+0)).to.equal(false);
            });

            it('Should return false when style name parameter is a negative zero', () => {
                expect(htmlEngine.isValidStyleName(-0)).to.equal(false);
            });

            it('Should return false when style name parameter is a primitive number', () => {
                expect(htmlEngine.isValidStyleName(Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a wrapped primitive number', () => {
                expect(htmlEngine.isValidStyleName(new Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a filled array', () => {
                expect(htmlEngine.isValidStyleName([1, 2, 3])).to.equal(false);
            });

            it('Should return false when style name parameter is a map', () => {
                expect(htmlEngine.isValidStyleName(new Map())).to.equal(false);
            });

            it('Should return false when style name parameter is a date', () => {
                expect(htmlEngine.isValidStyleName(new Date())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(htmlEngine.isValidStyleName(new (class Class {})())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(htmlEngine.isValidStyleName(new (class Class {}))).to.equal(false);
            });

            it('Should return false when style name parameter is a class declaration', () => {
                expect(htmlEngine.isValidStyleName(class Class {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═════╝
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝╚═════╗ ║
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗╔═════╝ ║
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#getStyles(element)', function () {
        describe('#getStyles(ELEMENT)', function () {
            it('Should return style when element parameter is an element', () => {
                expect(htmlEngine.getStyles(elementWithNoStyle)['display']).to.equal(undefined);
                expect(htmlEngine.getStyles(elementWithNoStyle)['opacity']).to.equal(undefined);
                expect(htmlEngine.getStyles(elementWithNoStyle)['color']).to.equal(undefined);
                expect(htmlEngine.getStyles(elementWithNoStyle)['undefined']).to.equal(undefined);
            });


            it('Should return style when element parameter is a filled string', () => {
                expect(htmlEngine.getStyles(elementWith1Style)['display']).to.equal('none');
                expect(htmlEngine.getStyles(elementWith1Style)['opacity']).to.equal(undefined);
                expect(htmlEngine.getStyles(elementWith1Style)['color']).to.equal(undefined);
                expect(htmlEngine.getStyles(elementWith1Style)['undefined']).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled primitive string', () => {
                expect(htmlEngine.getStyles(elementWith2Styles)['display']).to.equal('block');
                expect(htmlEngine.getStyles(elementWith2Styles)['opacity']).to.equal('1');
                expect(htmlEngine.getStyles(elementWith2Styles)['color']).to.equal(undefined);
                expect(htmlEngine.getStyles(elementWith2Styles)['undefined']).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.getStyles(elementWith3Styles)['display']).to.equal('inline');
                expect(htmlEngine.getStyles(elementWith3Styles)['opacity']).to.equal('0');
                expect(htmlEngine.getStyles(elementWith3Styles)['color']).to.equal('rgb(255, 0, 0)');
                expect(htmlEngine.getStyles(elementWith3Styles)['undefined']).to.equal(undefined);
            });


            it('Should return null when element parameter is an unused element ID', () => {
                expect(htmlEngine.getStyles('unused-element-id')).to.deep.equal({})
            });

            it('Should return null when element parameter is an empty string', () => {
                expect(htmlEngine.getStyles('')).to.deep.equal({});
            });

            it('Should return null when element parameter is a whitespace', () => {
                expect(htmlEngine.getStyles(' ')).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty primitive string', () => {
                expect(htmlEngine.getStyles(String(''))).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.getStyles(new String(''))).to.deep.equal({});
            });

            it('Should return null when element parameter is null', () => {
                expect(htmlEngine.getStyles(null)).to.deep.equal({});
            });

            it('Should return null when element parameter is NaN', () => {
                expect(htmlEngine.getStyles(NaN)).to.deep.equal({});
            });

            it('Should return null when element parameter is undefined', () => {
                expect(htmlEngine.getStyles(undefined)).to.deep.equal({});
            });

            it('Should return null when element parameter is false boolean', () => {
                expect(htmlEngine.getStyles(false)).to.deep.equal({});
            });

            it('Should return null when element parameter is true boolean', () => {
                expect(htmlEngine.getStyles(true)).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty object', () => {
                expect(htmlEngine.getStyles({})).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty array', () => {
                expect(htmlEngine.getStyles([])).to.deep.equal({});
            });

            it('Should return null when element parameter is a function', () => {
                expect(htmlEngine.getStyles(function () {})).to.deep.equal({});
            });

            it('Should return null when element parameter is a filled object', () => {
                expect(htmlEngine.getStyles({foo: 'bar'})).to.deep.equal({});
            });

            it('Should return null when element parameter is a number', () => {
                expect(htmlEngine.getStyles(1)).to.deep.equal({});
            });

            it('Should return null when element parameter is a zero', () => {
                expect(htmlEngine.getStyles(0)).to.deep.equal({});
            });

            it('Should return null when element parameter is a positive zero', () => {
                expect(htmlEngine.getStyles(+0)).to.deep.equal({});
            });

            it('Should return null when element parameter is a negative zero', () => {
                expect(htmlEngine.getStyles(-0)).to.deep.equal({});
            });

            it('Should return null when element parameter is a primitive number', () => {
                expect(htmlEngine.getStyles(Number('1'))).to.deep.equal({});
            });

            it('Should return null when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.getStyles(new Number('1'))).to.deep.equal({});
            });

            it('Should return null when element parameter is positive infinity', () => {
                expect(htmlEngine.getStyles(Number.POSITIVE_INFINITY)).to.deep.equal({});
            });

            it('Should return null when element parameter is negative infinity', () => {
                expect(htmlEngine.getStyles(Number.NEGATIVE_INFINITY)).to.deep.equal({});
            });

            it('Should return null when element parameter is a filled array', () => {
                expect(htmlEngine.getStyles([1, 2, 3])).to.deep.equal({});
            });

            it('Should return null when element parameter is a map', () => {
                expect(htmlEngine.getStyles(new Map())).to.deep.equal({});
            });

            it('Should return null when element parameter is a date', () => {
                expect(htmlEngine.getStyles(new Date())).to.deep.equal({});
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(htmlEngine.getStyles(new (class Class {})())).to.deep.equal({});
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(htmlEngine.getStyles(new (class Class {}))).to.deep.equal({});
            });

            it('Should return null when element parameter is a class declaration', () => {
                expect(htmlEngine.getStyles(class Class {})).to.deep.equal({});
            });
        });
    });
    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝

    describe('#getStyle(element, styleName)', function () {
        describe('#getStyle(ELEMENT, styleName)', function () {
            it('Should return style when element parameter is an element', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, 'display')).to.equal(undefined);
                expect(htmlEngine.getStyle(elementWithNoStyle, 'opacity')).to.equal(undefined);
                expect(htmlEngine.getStyle(elementWithNoStyle, 'color')).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled string', () => {
                expect(htmlEngine.getStyle('element-with-1-style', 'display')).to.equal('none');
                expect(htmlEngine.getStyle('element-with-1-style', 'opacity')).to.equal(undefined);
                expect(htmlEngine.getStyle('element-with-1-style', 'color')).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled primitive string', () => {
                expect(htmlEngine.getStyle('element-with-2-styles', 'display')).to.equal('block');
                expect(htmlEngine.getStyle('element-with-2-styles', 'opacity')).to.equal('1');
                expect(htmlEngine.getStyle('element-with-2-styles', 'color')).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled wrapped primitive string', () => {
                expect(htmlEngine.getStyle('element-with-3-styles', 'display')).to.equal('inline');
                expect(htmlEngine.getStyle('element-with-3-styles', 'opacity')).to.equal('0');
                expect(htmlEngine.getStyle('element-with-3-styles', 'color')).to.equal('rgb(255, 0, 0)');
            });


            it('Should return null when element parameter is an unused element ID', () => {
                expect(htmlEngine.getStyle('unused-element-id', 'display')).to.equal(undefined)
            });

            it('Should return null when element parameter is an empty string', () => {
                expect(htmlEngine.getStyle('', 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a whitespace', () => {
                expect(htmlEngine.getStyle(' ', 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty primitive string', () => {
                expect(htmlEngine.getStyle(String(''), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.getStyle(new String(''), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is null', () => {
                expect(htmlEngine.getStyle(null, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is NaN', () => {
                expect(htmlEngine.getStyle(NaN, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is undefined', () => {
                expect(htmlEngine.getStyle(undefined, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is false boolean', () => {
                expect(htmlEngine.getStyle(false, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is true boolean', () => {
                expect(htmlEngine.getStyle(true, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty object', () => {
                expect(htmlEngine.getStyle({}, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty array', () => {
                expect(htmlEngine.getStyle([], 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a function', () => {
                expect(htmlEngine.getStyle(function () {}, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a filled object', () => {
                expect(htmlEngine.getStyle({foo: 'bar'}, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a number', () => {
                expect(htmlEngine.getStyle(1, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a zero', () => {
                expect(htmlEngine.getStyle(0, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a positive zero', () => {
                expect(htmlEngine.getStyle(+0, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a negative zero', () => {
                expect(htmlEngine.getStyle(-0, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a primitive number', () => {
                expect(htmlEngine.getStyle(Number('1'), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine.getStyle(new Number('1'), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is positive infinity', () => {
                expect(htmlEngine.getStyle(Number.POSITIVE_INFINITY, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is negative infinity', () => {
                expect(htmlEngine.getStyle(Number.NEGATIVE_INFINITY, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a filled array', () => {
                expect(htmlEngine.getStyle([1, 2, 3], 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a map', () => {
                expect(htmlEngine.getStyle(new Map(), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a date', () => {
                expect(htmlEngine.getStyle(new Date(), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(htmlEngine.getStyle(new (class Class {})(), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(htmlEngine.getStyle(new (class Class {}), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a class declaration', () => {
                expect(htmlEngine.getStyle(class Class {}, 'display')).to.equal(undefined);
            });
        });

        describe('#getStyle(element, STYLENAME)', function () {
            it('Should return empty string when style name parameter is style with undefined value', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, 'display')).to.equal(undefined);
            });

            it('Should return undefined when style name parameter is a undefined style name', () => {
                expect(htmlEngine.getStyle(elementWith1Style, 'unusedStyleName')).to.equal(undefined);
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(htmlEngine.getStyle(elementWith1Style, 'display')).to.equal('none');
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(htmlEngine.getStyle(elementWith2Styles, 'display')).to.equal('block');
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(htmlEngine.getStyle(elementWith3Styles, 'display')).to.equal('inline');
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(htmlEngine.getStyle(elementWith3Styles, 'color')).to.equal('rgb(255, 0, 0)');
            });


            it('Should return null when style name parameter is a whitespace', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, ' ')).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty string', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, '')).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty primitive string', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, String(''))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, new String(''))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a whitespace', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, ' ')).to.equal(undefined);
            });

            it('Should return null when style name  parameter is empty', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, )).to.equal(undefined);
            });

            it('Should return null when style name  parameter is null', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, null)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is NaN', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, NaN)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is undefined', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, undefined)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is false boolean', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, false)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is true boolean', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, true)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty object', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, {})).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty array', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, [])).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a function', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, function () {})).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a filled object', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, {foo: 'bar'})).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a number', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, 1)).to.equal(undefined);
            });

            it('Should return null when style name  name  parameter is a zero', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, 0)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a positive false', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, +0)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a negative zero', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, -0)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a primitive number', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, Number('1'))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a wrapped primitive number', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, new Number('1'))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a filled array', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, [1, 2, 3])).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a map', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, new Map())).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a date', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, new Date())).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a class instance', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, new (class Class {})())).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a class instance', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, new (class Class {}))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a class declaration', () => {
                expect(htmlEngine.getStyle(elementWithNoStyle, class Class {})).to.equal(undefined);
            });
        });
    });
});
