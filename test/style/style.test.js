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
                expect(HtmlEngine.hasStyle(elementWithNoStyle, 'display', undefined)).to.equal(true);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlEngine.hasStyle('element-with-1-style', 'display', 'none')).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.hasStyle('element-with-2-styles', 'display', 'block')).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.hasStyle('element-with-3-styles', 'display', 'inline')).to.equal(true);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlEngine.hasStyle('unused-element-id', 'display')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.hasStyle('', 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.hasStyle(' ', 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.hasStyle(String(''), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.hasStyle(new String(''), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.hasStyle(null, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.hasStyle(NaN, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.hasStyle(undefined, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.hasStyle(false, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.hasStyle(true, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.hasStyle({}, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.hasStyle([], 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.hasStyle(function () {}, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.hasStyle({foo: 'bar'}, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.hasStyle(1, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.hasStyle(0, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.hasStyle(+0, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.hasStyle(-0, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.hasStyle(Number('1'), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.hasStyle(new Number('1'), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.hasStyle(Number.POSITIVE_INFINITY, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.hasStyle(Number.NEGATIVE_INFINITY, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.hasStyle([1, 2, 3], 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.hasStyle(new Map(), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.hasStyle(new Date(), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.hasStyle(new (class Class {})(), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.hasStyle(new (class Class {}), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.hasStyle(class Class {}, 'display')).to.equal(false);
            });
        });

        describe('#hasStyle(element, STYLENAME, styleValue)', function () {
            it('Should return true when style name parameter is valid', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, 'margin')).to.equal(true);
            });


            it('Should return false when style name parameter is an empty string', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, '')).to.equal(false);
            });

            it('Should return false when style name parameter is an empty primitive string', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, new String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is a whitespace', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, ' ')).to.equal(false);
            });

            it('Should return false when style name parameter is empty', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle)).to.equal(false);
            });

            it('Should return false when style name parameter is null', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, null)).to.equal(false);
            });

            it('Should return false when style name parameter is NaN', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, NaN)).to.equal(false);
            });

            it('Should return false when style name parameter is undefined', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, undefined)).to.equal(false);
            });

            it('Should return false when style name parameter is false boolean', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, false)).to.equal(false);
            });

            it('Should return false when style name parameter is true boolean', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, true)).to.equal(false);
            });

            it('Should return false when style name parameter is an empty object', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, {})).to.equal(false);
            });

            it('Should return false when style name parameter is an empty array', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, [])).to.equal(false);
            });

            it('Should return false when style name parameter is a function', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, function () {})).to.equal(false);
            });

            it('Should return false when style name parameter is a filled object', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style name parameter is a number', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, 1)).to.equal(false);
            });

            it('Should return false when style name  name parameter is a zero', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, 0)).to.equal(false);
            });

            it('Should return false when style name parameter is a positive false', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, +0)).to.equal(false);
            });

            it('Should return false when style name parameter is a negative zero', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, -0)).to.equal(false);
            });

            it('Should return false when style name parameter is a primitive number', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, new Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a filled array', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when style name parameter is a map', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, new Map())).to.equal(false);
            });

            it('Should return false when style name parameter is a date', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, new Date())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, new (class Class {})())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, new (class Class {}))).to.equal(false);
            });

            it('Should return false when style name parameter is a class declaration', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, class Class {})).to.equal(false);
            });
        });

        describe('#hasStyle(element, styleName, STYLEVALUE)', function () {
            it('Should return true when style value parameter is valid', () => {
                expect(HtmlEngine.hasStyle(elementWith3Styles, 'color', 'rgb(255, 0, 0)')).to.equal(true);
            });

            it('Should return true when style value parameter is empty', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, 'color')).to.equal(true);
            });

            it('Should return true when style value parameter is undefined', () => {
                expect(HtmlEngine.hasStyle(elementWithNoStyle, 'color', undefined)).to.equal(true);
            });


            it('Should return false when style value parameter is a whitespace', () => {
                expect(HtmlEngine.hasStyle(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty string', () => {
                expect(HtmlEngine.hasStyle('')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty primitive string', () => {
                expect(HtmlEngine.hasStyle(String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.hasStyle(new String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is a whitespace', () => {
                expect(HtmlEngine.hasStyle(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is null', () => {
                expect(HtmlEngine.hasStyle(null)).to.equal(false);
            });

            it('Should return false when style value parameter is NaN', () => {
                expect(HtmlEngine.hasStyle(NaN)).to.equal(false);
            });

            it('Should return false when style value parameter is false boolean', () => {
                expect(HtmlEngine.hasStyle(false)).to.equal(false);
            });

            it('Should return false when style value parameter is true boolean', () => {
                expect(HtmlEngine.hasStyle(true)).to.equal(false);
            });

            it('Should return false when style value parameter is an empty object', () => {
                expect(HtmlEngine.hasStyle({})).to.equal(false);
            });

            it('Should return false when style value parameter is an empty array', () => {
                expect(HtmlEngine.hasStyle([])).to.equal(false);
            });

            it('Should return false when style value parameter is a function', () => {
                expect(HtmlEngine.hasStyle(function () {})).to.equal(false);
            });

            it('Should return false when style value parameter is a filled object', () => {
                expect(HtmlEngine.hasStyle({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style value parameter is a number', () => {
                expect(HtmlEngine.hasStyle(1)).to.equal(false);
            });

            it('Should return false when style value  name parameter is a zero', () => {
                expect(HtmlEngine.hasStyle(0)).to.equal(false);
            });

            it('Should return false when style value parameter is a positive false', () => {
                expect(HtmlEngine.hasStyle(+0)).to.equal(false);
            });

            it('Should return false when style value parameter is a negative zero', () => {
                expect(HtmlEngine.hasStyle(-0)).to.equal(false);
            });

            it('Should return false when style value parameter is a primitive number', () => {
                expect(HtmlEngine.hasStyle(Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.hasStyle(new Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a filled array', () => {
                expect(HtmlEngine.hasStyle([1, 2, 3])).to.equal(false);
            });

            it('Should return false when style value parameter is a map', () => {
                expect(HtmlEngine.hasStyle(new Map())).to.equal(false);
            });

            it('Should return false when style value parameter is a date', () => {
                expect(HtmlEngine.hasStyle(new Date())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(HtmlEngine.hasStyle(new (class Class {})())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(HtmlEngine.hasStyle(new (class Class {}))).to.equal(false);
            });

            it('Should return false when style value parameter is a class declaration', () => {
                expect(HtmlEngine.hasStyle(class Class {})).to.equal(false);
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
                expect(HtmlEngine.isValidStyleValue('rgb(255, 0, 0)')).to.equal(true);
            });


            it('Should return false when style value parameter is empty', () => {
                expect(HtmlEngine.isValidStyleValue()).to.equal(false);
            });

            it('Should return false when style value parameter is a whitespace', () => {
                expect(HtmlEngine.isValidStyleValue(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty string', () => {
                expect(HtmlEngine.isValidStyleValue('')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty primitive string', () => {
                expect(HtmlEngine.isValidStyleValue(String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.isValidStyleValue(new String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is a whitespace', () => {
                expect(HtmlEngine.isValidStyleValue(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is null', () => {
                expect(HtmlEngine.isValidStyleValue(null)).to.equal(false);
            });

            it('Should return false when style value parameter is NaN', () => {
                expect(HtmlEngine.isValidStyleValue(NaN)).to.equal(false);
            });

            it('Should return false when style value parameter is undefined', () => {
                expect(HtmlEngine.isValidStyleValue(undefined)).to.equal(false);
            });

            it('Should return false when style value parameter is false boolean', () => {
                expect(HtmlEngine.isValidStyleValue(false)).to.equal(false);
            });

            it('Should return false when style value parameter is true boolean', () => {
                expect(HtmlEngine.isValidStyleValue(true)).to.equal(false);
            });

            it('Should return false when style value parameter is an empty object', () => {
                expect(HtmlEngine.isValidStyleValue({})).to.equal(false);
            });

            it('Should return false when style value parameter is an empty array', () => {
                expect(HtmlEngine.isValidStyleValue([])).to.equal(false);
            });

            it('Should return false when style value parameter is a function', () => {
                expect(HtmlEngine.isValidStyleValue(function () {})).to.equal(false);
            });

            it('Should return false when style value parameter is a filled object', () => {
                expect(HtmlEngine.isValidStyleValue({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style value parameter is a number', () => {
                expect(HtmlEngine.isValidStyleValue(1)).to.equal(false);
            });

            it('Should return false when style value  name parameter is a zero', () => {
                expect(HtmlEngine.isValidStyleValue(0)).to.equal(false);
            });

            it('Should return false when style value parameter is a positive false', () => {
                expect(HtmlEngine.isValidStyleValue(+0)).to.equal(false);
            });

            it('Should return false when style value parameter is a negative zero', () => {
                expect(HtmlEngine.isValidStyleValue(-0)).to.equal(false);
            });

            it('Should return false when style value parameter is a primitive number', () => {
                expect(HtmlEngine.isValidStyleValue(Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.isValidStyleValue(new Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a filled array', () => {
                expect(HtmlEngine.isValidStyleValue([1, 2, 3])).to.equal(false);
            });

            it('Should return false when style value parameter is a map', () => {
                expect(HtmlEngine.isValidStyleValue(new Map())).to.equal(false);
            });

            it('Should return false when style value parameter is a date', () => {
                expect(HtmlEngine.isValidStyleValue(new Date())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(HtmlEngine.isValidStyleValue(new (class Class {})())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(HtmlEngine.isValidStyleValue(new (class Class {}))).to.equal(false);
            });

            it('Should return false when style value parameter is a class declaration', () => {
                expect(HtmlEngine.isValidStyleValue(class Class {})).to.equal(false);
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
                expect(HtmlEngine.isValidStyleName('margin')).to.equal(true);
            });


            it('Should return false when style name parameter is a whitespace', () => {
                expect(HtmlEngine.isValidStyleName(' ')).to.equal(false);
            });

            it('Should return false when style name parameter is an empty string', () => {
                expect(HtmlEngine.isValidStyleName('')).to.equal(false);
            });

            it('Should return false when style name parameter is an empty primitive string', () => {
                expect(HtmlEngine.isValidStyleName(String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.isValidStyleName(new String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is a whitespace', () => {
                expect(HtmlEngine.isValidStyleName(' ')).to.equal(false);
            });

            it('Should return false when style name parameter is empty', () => {
                expect(HtmlEngine.isValidStyleName()).to.equal(false);
            });

            it('Should return false when style name parameter is null', () => {
                expect(HtmlEngine.isValidStyleName(null)).to.equal(false);
            });

            it('Should return false when style name parameter is NaN', () => {
                expect(HtmlEngine.isValidStyleName(NaN)).to.equal(false);
            });

            it('Should return false when style name parameter is undefined', () => {
                expect(HtmlEngine.isValidStyleName(undefined)).to.equal(false);
            });

            it('Should return false when style name parameter is false boolean', () => {
                expect(HtmlEngine.isValidStyleName(false)).to.equal(false);
            });

            it('Should return false when style name parameter is true boolean', () => {
                expect(HtmlEngine.isValidStyleName(true)).to.equal(false);
            });

            it('Should return false when style name parameter is an empty object', () => {
                expect(HtmlEngine.isValidStyleName({})).to.equal(false);
            });

            it('Should return false when style name parameter is an empty array', () => {
                expect(HtmlEngine.isValidStyleName([])).to.equal(false);
            });

            it('Should return false when style name parameter is a function', () => {
                expect(HtmlEngine.isValidStyleName(function () {})).to.equal(false);
            });

            it('Should return false when style name parameter is a filled object', () => {
                expect(HtmlEngine.isValidStyleName({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style name parameter is a number', () => {
                expect(HtmlEngine.isValidStyleName(1)).to.equal(false);
            });

            it('Should return false when style name  name parameter is a zero', () => {
                expect(HtmlEngine.isValidStyleName(0)).to.equal(false);
            });

            it('Should return false when style name parameter is a positive false', () => {
                expect(HtmlEngine.isValidStyleName(+0)).to.equal(false);
            });

            it('Should return false when style name parameter is a negative zero', () => {
                expect(HtmlEngine.isValidStyleName(-0)).to.equal(false);
            });

            it('Should return false when style name parameter is a primitive number', () => {
                expect(HtmlEngine.isValidStyleName(Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.isValidStyleName(new Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a filled array', () => {
                expect(HtmlEngine.isValidStyleName([1, 2, 3])).to.equal(false);
            });

            it('Should return false when style name parameter is a map', () => {
                expect(HtmlEngine.isValidStyleName(new Map())).to.equal(false);
            });

            it('Should return false when style name parameter is a date', () => {
                expect(HtmlEngine.isValidStyleName(new Date())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(HtmlEngine.isValidStyleName(new (class Class {})())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(HtmlEngine.isValidStyleName(new (class Class {}))).to.equal(false);
            });

            it('Should return false when style name parameter is a class declaration', () => {
                expect(HtmlEngine.isValidStyleName(class Class {})).to.equal(false);
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
                expect(HtmlEngine.getStyles(elementWithNoStyle)['display']).to.equal(undefined);
                expect(HtmlEngine.getStyles(elementWithNoStyle)['opacity']).to.equal(undefined);
                expect(HtmlEngine.getStyles(elementWithNoStyle)['color']).to.equal(undefined);
                expect(HtmlEngine.getStyles(elementWithNoStyle)['undefined']).to.equal(undefined);
            });


            it('Should return style when element parameter is a filled string', () => {
                expect(HtmlEngine.getStyles(elementWith1Style)['display']).to.equal('none');
                expect(HtmlEngine.getStyles(elementWith1Style)['opacity']).to.equal(undefined);
                expect(HtmlEngine.getStyles(elementWith1Style)['color']).to.equal(undefined);
                expect(HtmlEngine.getStyles(elementWith1Style)['undefined']).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.getStyles(elementWith2Styles)['display']).to.equal('block');
                expect(HtmlEngine.getStyles(elementWith2Styles)['opacity']).to.equal('1');
                expect(HtmlEngine.getStyles(elementWith2Styles)['color']).to.equal(undefined);
                expect(HtmlEngine.getStyles(elementWith2Styles)['undefined']).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.getStyles(elementWith3Styles)['display']).to.equal('inline');
                expect(HtmlEngine.getStyles(elementWith3Styles)['opacity']).to.equal('0');
                expect(HtmlEngine.getStyles(elementWith3Styles)['color']).to.equal('rgb(255, 0, 0)');
                expect(HtmlEngine.getStyles(elementWith3Styles)['undefined']).to.equal(undefined);
            });


            it('Should return null when element parameter is an unused element ID', () => {
                expect(HtmlEngine.getStyles('unused-element-id')).to.deep.equal({})
            });

            it('Should return null when element parameter is an empty string', () => {
                expect(HtmlEngine.getStyles('')).to.deep.equal({});
            });

            it('Should return null when element parameter is a whitespace', () => {
                expect(HtmlEngine.getStyles(' ')).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.getStyles(String(''))).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.getStyles(new String(''))).to.deep.equal({});
            });

            it('Should return null when element parameter is null', () => {
                expect(HtmlEngine.getStyles(null)).to.deep.equal({});
            });

            it('Should return null when element parameter is NaN', () => {
                expect(HtmlEngine.getStyles(NaN)).to.deep.equal({});
            });

            it('Should return null when element parameter is undefined', () => {
                expect(HtmlEngine.getStyles(undefined)).to.deep.equal({});
            });

            it('Should return null when element parameter is false boolean', () => {
                expect(HtmlEngine.getStyles(false)).to.deep.equal({});
            });

            it('Should return null when element parameter is true boolean', () => {
                expect(HtmlEngine.getStyles(true)).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty object', () => {
                expect(HtmlEngine.getStyles({})).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty array', () => {
                expect(HtmlEngine.getStyles([])).to.deep.equal({});
            });

            it('Should return null when element parameter is a function', () => {
                expect(HtmlEngine.getStyles(function () {})).to.deep.equal({});
            });

            it('Should return null when element parameter is a filled object', () => {
                expect(HtmlEngine.getStyles({foo: 'bar'})).to.deep.equal({});
            });

            it('Should return null when element parameter is a number', () => {
                expect(HtmlEngine.getStyles(1)).to.deep.equal({});
            });

            it('Should return null when element parameter is a zero', () => {
                expect(HtmlEngine.getStyles(0)).to.deep.equal({});
            });

            it('Should return null when element parameter is a positive zero', () => {
                expect(HtmlEngine.getStyles(+0)).to.deep.equal({});
            });

            it('Should return null when element parameter is a negative zero', () => {
                expect(HtmlEngine.getStyles(-0)).to.deep.equal({});
            });

            it('Should return null when element parameter is a primitive number', () => {
                expect(HtmlEngine.getStyles(Number('1'))).to.deep.equal({});
            });

            it('Should return null when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.getStyles(new Number('1'))).to.deep.equal({});
            });

            it('Should return null when element parameter is positive infinity', () => {
                expect(HtmlEngine.getStyles(Number.POSITIVE_INFINITY)).to.deep.equal({});
            });

            it('Should return null when element parameter is negative infinity', () => {
                expect(HtmlEngine.getStyles(Number.NEGATIVE_INFINITY)).to.deep.equal({});
            });

            it('Should return null when element parameter is a filled array', () => {
                expect(HtmlEngine.getStyles([1, 2, 3])).to.deep.equal({});
            });

            it('Should return null when element parameter is a map', () => {
                expect(HtmlEngine.getStyles(new Map())).to.deep.equal({});
            });

            it('Should return null when element parameter is a date', () => {
                expect(HtmlEngine.getStyles(new Date())).to.deep.equal({});
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(HtmlEngine.getStyles(new (class Class {})())).to.deep.equal({});
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(HtmlEngine.getStyles(new (class Class {}))).to.deep.equal({});
            });

            it('Should return null when element parameter is a class declaration', () => {
                expect(HtmlEngine.getStyles(class Class {})).to.deep.equal({});
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
                expect(HtmlEngine.getStyle(elementWithNoStyle, 'display')).to.equal(undefined);
                expect(HtmlEngine.getStyle(elementWithNoStyle, 'opacity')).to.equal(undefined);
                expect(HtmlEngine.getStyle(elementWithNoStyle, 'color')).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled string', () => {
                expect(HtmlEngine.getStyle('element-with-1-style', 'display')).to.equal('none');
                expect(HtmlEngine.getStyle('element-with-1-style', 'opacity')).to.equal(undefined);
                expect(HtmlEngine.getStyle('element-with-1-style', 'color')).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled primitive string', () => {
                expect(HtmlEngine.getStyle('element-with-2-styles', 'display')).to.equal('block');
                expect(HtmlEngine.getStyle('element-with-2-styles', 'opacity')).to.equal('1');
                expect(HtmlEngine.getStyle('element-with-2-styles', 'color')).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlEngine.getStyle('element-with-3-styles', 'display')).to.equal('inline');
                expect(HtmlEngine.getStyle('element-with-3-styles', 'opacity')).to.equal('0');
                expect(HtmlEngine.getStyle('element-with-3-styles', 'color')).to.equal('rgb(255, 0, 0)');
            });


            it('Should return null when element parameter is an unused element ID', () => {
                expect(HtmlEngine.getStyle('unused-element-id', 'display')).to.equal(undefined)
            });

            it('Should return null when element parameter is an empty string', () => {
                expect(HtmlEngine.getStyle('', 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a whitespace', () => {
                expect(HtmlEngine.getStyle(' ', 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.getStyle(String(''), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.getStyle(new String(''), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is null', () => {
                expect(HtmlEngine.getStyle(null, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is NaN', () => {
                expect(HtmlEngine.getStyle(NaN, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is undefined', () => {
                expect(HtmlEngine.getStyle(undefined, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is false boolean', () => {
                expect(HtmlEngine.getStyle(false, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is true boolean', () => {
                expect(HtmlEngine.getStyle(true, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty object', () => {
                expect(HtmlEngine.getStyle({}, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty array', () => {
                expect(HtmlEngine.getStyle([], 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a function', () => {
                expect(HtmlEngine.getStyle(function () {}, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a filled object', () => {
                expect(HtmlEngine.getStyle({foo: 'bar'}, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a number', () => {
                expect(HtmlEngine.getStyle(1, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a zero', () => {
                expect(HtmlEngine.getStyle(0, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a positive zero', () => {
                expect(HtmlEngine.getStyle(+0, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a negative zero', () => {
                expect(HtmlEngine.getStyle(-0, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a primitive number', () => {
                expect(HtmlEngine.getStyle(Number('1'), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.getStyle(new Number('1'), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is positive infinity', () => {
                expect(HtmlEngine.getStyle(Number.POSITIVE_INFINITY, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is negative infinity', () => {
                expect(HtmlEngine.getStyle(Number.NEGATIVE_INFINITY, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a filled array', () => {
                expect(HtmlEngine.getStyle([1, 2, 3], 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a map', () => {
                expect(HtmlEngine.getStyle(new Map(), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a date', () => {
                expect(HtmlEngine.getStyle(new Date(), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(HtmlEngine.getStyle(new (class Class {})(), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(HtmlEngine.getStyle(new (class Class {}), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a class declaration', () => {
                expect(HtmlEngine.getStyle(class Class {}, 'display')).to.equal(undefined);
            });
        });

        describe('#getStyle(element, STYLENAME)', function () {
            it('Should return empty string when style name parameter is style with undefined value', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, 'display')).to.equal(undefined);
            });

            it('Should return undefined when style name parameter is a undefined style name', () => {
                expect(HtmlEngine.getStyle(elementWith1Style, 'unusedStyleName')).to.equal(undefined);
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(HtmlEngine.getStyle(elementWith1Style, 'display')).to.equal('none');
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(HtmlEngine.getStyle(elementWith2Styles, 'display')).to.equal('block');
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(HtmlEngine.getStyle(elementWith3Styles, 'display')).to.equal('inline');
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(HtmlEngine.getStyle(elementWith3Styles, 'color')).to.equal('rgb(255, 0, 0)');
            });


            it('Should return null when style name parameter is a whitespace', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, ' ')).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty string', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, '')).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty primitive string', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, String(''))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, new String(''))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a whitespace', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, ' ')).to.equal(undefined);
            });

            it('Should return null when style name  parameter is empty', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, )).to.equal(undefined);
            });

            it('Should return null when style name  parameter is null', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, null)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is NaN', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, NaN)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is undefined', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, undefined)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is false boolean', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, false)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is true boolean', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, true)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty object', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, {})).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty array', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, [])).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a function', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, function () {})).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a filled object', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, {foo: 'bar'})).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a number', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, 1)).to.equal(undefined);
            });

            it('Should return null when style name  name  parameter is a zero', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, 0)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a positive false', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, +0)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a negative zero', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, -0)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a primitive number', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, Number('1'))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, new Number('1'))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a filled array', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, [1, 2, 3])).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a map', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, new Map())).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a date', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, new Date())).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a class instance', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, new (class Class {})())).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a class instance', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, new (class Class {}))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a class declaration', () => {
                expect(HtmlEngine.getStyle(elementWithNoStyle, class Class {})).to.equal(undefined);
            });
        });
    });
});
