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
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, 'display', undefined)).to.equal(true);
            });

            it('Should return true when element parameter is a filled string', () => {
                expect(HtmlElementEngine.hasStyle('element-with-1-style', 'display', 'none')).to.equal(true);
            });

            it('Should return true when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.hasStyle('element-with-2-styles', 'display', 'block')).to.equal(true);
            });

            it('Should return true when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.hasStyle('element-with-3-styles', 'display', 'inline')).to.equal(true);
            });


            it('Should return false when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.hasStyle('unused-element-id', 'display')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.hasStyle('', 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.hasStyle(' ', 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.hasStyle(String(''), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.hasStyle(new String(''), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.hasStyle(null, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.hasStyle(NaN, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.hasStyle(undefined, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.hasStyle(false, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.hasStyle(true, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.hasStyle({}, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.hasStyle([], 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.hasStyle(function () {}, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.hasStyle({foo: 'bar'}, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.hasStyle(1, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.hasStyle(0, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.hasStyle(+0, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.hasStyle(-0, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.hasStyle(Number('1'), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.hasStyle(new Number('1'), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.hasStyle(Number.POSITIVE_INFINITY, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.hasStyle(Number.NEGATIVE_INFINITY, 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.hasStyle([1, 2, 3], 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.hasStyle(new Map(), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.hasStyle(new Date(), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.hasStyle(new (class Class {})(), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.hasStyle(new (class Class {}), 'display')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.hasStyle(class Class {}, 'display')).to.equal(false);
            });
        });

        describe('#hasStyle(element, STYLENAME, styleValue)', function () {
            it('Should return true when style name parameter is valid', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, 'margin')).to.equal(true);
            });


            it('Should return false when style name parameter is an empty string', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, '')).to.equal(false);
            });

            it('Should return false when style name parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, new String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is a whitespace', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, ' ')).to.equal(false);
            });

            it('Should return false when style name parameter is empty', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle)).to.equal(false);
            });

            it('Should return false when style name parameter is null', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, null)).to.equal(false);
            });

            it('Should return false when style name parameter is NaN', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, NaN)).to.equal(false);
            });

            it('Should return false when style name parameter is undefined', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, undefined)).to.equal(false);
            });

            it('Should return false when style name parameter is false boolean', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, false)).to.equal(false);
            });

            it('Should return false when style name parameter is true boolean', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, true)).to.equal(false);
            });

            it('Should return false when style name parameter is an empty object', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, {})).to.equal(false);
            });

            it('Should return false when style name parameter is an empty array', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, [])).to.equal(false);
            });

            it('Should return false when style name parameter is a function', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, function () {})).to.equal(false);
            });

            it('Should return false when style name parameter is a filled object', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style name parameter is a number', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, 1)).to.equal(false);
            });

            it('Should return false when style name  name parameter is a zero', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, 0)).to.equal(false);
            });

            it('Should return false when style name parameter is a positive false', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, +0)).to.equal(false);
            });

            it('Should return false when style name parameter is a negative zero', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, -0)).to.equal(false);
            });

            it('Should return false when style name parameter is a primitive number', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, new Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a filled array', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, [1, 2, 3])).to.equal(false);
            });

            it('Should return false when style name parameter is a map', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, new Map())).to.equal(false);
            });

            it('Should return false when style name parameter is a date', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, new Date())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, new (class Class {})())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, new (class Class {}))).to.equal(false);
            });

            it('Should return false when style name parameter is a class declaration', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, class Class {})).to.equal(false);
            });
        });

        describe('#hasStyle(element, styleName, STYLEVALUE)', function () {
            it('Should return true when style value parameter is valid', () => {
                expect(HtmlElementEngine.hasStyle(elementWith3Styles, 'color', 'rgb(255, 0, 0)')).to.equal(true);
            });

            it('Should return true when style value parameter is empty', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, 'color')).to.equal(true);
            });

            it('Should return true when style value parameter is undefined', () => {
                expect(HtmlElementEngine.hasStyle(elementWithNoStyle, 'color', undefined)).to.equal(true);
            });


            it('Should return false when style value parameter is a whitespace', () => {
                expect(HtmlElementEngine.hasStyle(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty string', () => {
                expect(HtmlElementEngine.hasStyle('')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.hasStyle(String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.hasStyle(new String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is a whitespace', () => {
                expect(HtmlElementEngine.hasStyle(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is null', () => {
                expect(HtmlElementEngine.hasStyle(null)).to.equal(false);
            });

            it('Should return false when style value parameter is NaN', () => {
                expect(HtmlElementEngine.hasStyle(NaN)).to.equal(false);
            });

            it('Should return false when style value parameter is false boolean', () => {
                expect(HtmlElementEngine.hasStyle(false)).to.equal(false);
            });

            it('Should return false when style value parameter is true boolean', () => {
                expect(HtmlElementEngine.hasStyle(true)).to.equal(false);
            });

            it('Should return false when style value parameter is an empty object', () => {
                expect(HtmlElementEngine.hasStyle({})).to.equal(false);
            });

            it('Should return false when style value parameter is an empty array', () => {
                expect(HtmlElementEngine.hasStyle([])).to.equal(false);
            });

            it('Should return false when style value parameter is a function', () => {
                expect(HtmlElementEngine.hasStyle(function () {})).to.equal(false);
            });

            it('Should return false when style value parameter is a filled object', () => {
                expect(HtmlElementEngine.hasStyle({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style value parameter is a number', () => {
                expect(HtmlElementEngine.hasStyle(1)).to.equal(false);
            });

            it('Should return false when style value  name parameter is a zero', () => {
                expect(HtmlElementEngine.hasStyle(0)).to.equal(false);
            });

            it('Should return false when style value parameter is a positive false', () => {
                expect(HtmlElementEngine.hasStyle(+0)).to.equal(false);
            });

            it('Should return false when style value parameter is a negative zero', () => {
                expect(HtmlElementEngine.hasStyle(-0)).to.equal(false);
            });

            it('Should return false when style value parameter is a primitive number', () => {
                expect(HtmlElementEngine.hasStyle(Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.hasStyle(new Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a filled array', () => {
                expect(HtmlElementEngine.hasStyle([1, 2, 3])).to.equal(false);
            });

            it('Should return false when style value parameter is a map', () => {
                expect(HtmlElementEngine.hasStyle(new Map())).to.equal(false);
            });

            it('Should return false when style value parameter is a date', () => {
                expect(HtmlElementEngine.hasStyle(new Date())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(HtmlElementEngine.hasStyle(new (class Class {})())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(HtmlElementEngine.hasStyle(new (class Class {}))).to.equal(false);
            });

            it('Should return false when style value parameter is a class declaration', () => {
                expect(HtmlElementEngine.hasStyle(class Class {})).to.equal(false);
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
                expect(HtmlElementEngine.isValidStyleValue('rgb(255, 0, 0)')).to.equal(true);
            });


            it('Should return false when style value parameter is empty', () => {
                expect(HtmlElementEngine.isValidStyleValue()).to.equal(false);
            });

            it('Should return false when style value parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidStyleValue(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty string', () => {
                expect(HtmlElementEngine.isValidStyleValue('')).to.equal(false);
            });

            it('Should return false when style value parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.isValidStyleValue(String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.isValidStyleValue(new String(''))).to.equal(false);
            });

            it('Should return false when style value parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidStyleValue(' ')).to.equal(false);
            });

            it('Should return false when style value parameter is null', () => {
                expect(HtmlElementEngine.isValidStyleValue(null)).to.equal(false);
            });

            it('Should return false when style value parameter is NaN', () => {
                expect(HtmlElementEngine.isValidStyleValue(NaN)).to.equal(false);
            });

            it('Should return false when style value parameter is undefined', () => {
                expect(HtmlElementEngine.isValidStyleValue(undefined)).to.equal(false);
            });

            it('Should return false when style value parameter is false boolean', () => {
                expect(HtmlElementEngine.isValidStyleValue(false)).to.equal(false);
            });

            it('Should return false when style value parameter is true boolean', () => {
                expect(HtmlElementEngine.isValidStyleValue(true)).to.equal(false);
            });

            it('Should return false when style value parameter is an empty object', () => {
                expect(HtmlElementEngine.isValidStyleValue({})).to.equal(false);
            });

            it('Should return false when style value parameter is an empty array', () => {
                expect(HtmlElementEngine.isValidStyleValue([])).to.equal(false);
            });

            it('Should return false when style value parameter is a function', () => {
                expect(HtmlElementEngine.isValidStyleValue(function () {})).to.equal(false);
            });

            it('Should return false when style value parameter is a filled object', () => {
                expect(HtmlElementEngine.isValidStyleValue({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style value parameter is a number', () => {
                expect(HtmlElementEngine.isValidStyleValue(1)).to.equal(false);
            });

            it('Should return false when style value  name parameter is a zero', () => {
                expect(HtmlElementEngine.isValidStyleValue(0)).to.equal(false);
            });

            it('Should return false when style value parameter is a positive false', () => {
                expect(HtmlElementEngine.isValidStyleValue(+0)).to.equal(false);
            });

            it('Should return false when style value parameter is a negative zero', () => {
                expect(HtmlElementEngine.isValidStyleValue(-0)).to.equal(false);
            });

            it('Should return false when style value parameter is a primitive number', () => {
                expect(HtmlElementEngine.isValidStyleValue(Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.isValidStyleValue(new Number('1'))).to.equal(false);
            });

            it('Should return false when style value parameter is a filled array', () => {
                expect(HtmlElementEngine.isValidStyleValue([1, 2, 3])).to.equal(false);
            });

            it('Should return false when style value parameter is a map', () => {
                expect(HtmlElementEngine.isValidStyleValue(new Map())).to.equal(false);
            });

            it('Should return false when style value parameter is a date', () => {
                expect(HtmlElementEngine.isValidStyleValue(new Date())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidStyleValue(new (class Class {})())).to.equal(false);
            });

            it('Should return false when style value parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidStyleValue(new (class Class {}))).to.equal(false);
            });

            it('Should return false when style value parameter is a class declaration', () => {
                expect(HtmlElementEngine.isValidStyleValue(class Class {})).to.equal(false);
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
                expect(HtmlElementEngine.isValidStyleName('margin')).to.equal(true);
            });


            it('Should return false when style name parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidStyleName(' ')).to.equal(false);
            });

            it('Should return false when style name parameter is an empty string', () => {
                expect(HtmlElementEngine.isValidStyleName('')).to.equal(false);
            });

            it('Should return false when style name parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.isValidStyleName(String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.isValidStyleName(new String(''))).to.equal(false);
            });

            it('Should return false when style name parameter is a whitespace', () => {
                expect(HtmlElementEngine.isValidStyleName(' ')).to.equal(false);
            });

            it('Should return false when style name parameter is empty', () => {
                expect(HtmlElementEngine.isValidStyleName()).to.equal(false);
            });

            it('Should return false when style name parameter is null', () => {
                expect(HtmlElementEngine.isValidStyleName(null)).to.equal(false);
            });

            it('Should return false when style name parameter is NaN', () => {
                expect(HtmlElementEngine.isValidStyleName(NaN)).to.equal(false);
            });

            it('Should return false when style name parameter is undefined', () => {
                expect(HtmlElementEngine.isValidStyleName(undefined)).to.equal(false);
            });

            it('Should return false when style name parameter is false boolean', () => {
                expect(HtmlElementEngine.isValidStyleName(false)).to.equal(false);
            });

            it('Should return false when style name parameter is true boolean', () => {
                expect(HtmlElementEngine.isValidStyleName(true)).to.equal(false);
            });

            it('Should return false when style name parameter is an empty object', () => {
                expect(HtmlElementEngine.isValidStyleName({})).to.equal(false);
            });

            it('Should return false when style name parameter is an empty array', () => {
                expect(HtmlElementEngine.isValidStyleName([])).to.equal(false);
            });

            it('Should return false when style name parameter is a function', () => {
                expect(HtmlElementEngine.isValidStyleName(function () {})).to.equal(false);
            });

            it('Should return false when style name parameter is a filled object', () => {
                expect(HtmlElementEngine.isValidStyleName({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when style name parameter is a number', () => {
                expect(HtmlElementEngine.isValidStyleName(1)).to.equal(false);
            });

            it('Should return false when style name  name parameter is a zero', () => {
                expect(HtmlElementEngine.isValidStyleName(0)).to.equal(false);
            });

            it('Should return false when style name parameter is a positive false', () => {
                expect(HtmlElementEngine.isValidStyleName(+0)).to.equal(false);
            });

            it('Should return false when style name parameter is a negative zero', () => {
                expect(HtmlElementEngine.isValidStyleName(-0)).to.equal(false);
            });

            it('Should return false when style name parameter is a primitive number', () => {
                expect(HtmlElementEngine.isValidStyleName(Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.isValidStyleName(new Number('1'))).to.equal(false);
            });

            it('Should return false when style name parameter is a filled array', () => {
                expect(HtmlElementEngine.isValidStyleName([1, 2, 3])).to.equal(false);
            });

            it('Should return false when style name parameter is a map', () => {
                expect(HtmlElementEngine.isValidStyleName(new Map())).to.equal(false);
            });

            it('Should return false when style name parameter is a date', () => {
                expect(HtmlElementEngine.isValidStyleName(new Date())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidStyleName(new (class Class {})())).to.equal(false);
            });

            it('Should return false when style name parameter is a class instance', () => {
                expect(HtmlElementEngine.isValidStyleName(new (class Class {}))).to.equal(false);
            });

            it('Should return false when style name parameter is a class declaration', () => {
                expect(HtmlElementEngine.isValidStyleName(class Class {})).to.equal(false);
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
                expect(HtmlElementEngine.getStyles(elementWithNoStyle)['display']).to.equal(undefined);
                expect(HtmlElementEngine.getStyles(elementWithNoStyle)['opacity']).to.equal(undefined);
                expect(HtmlElementEngine.getStyles(elementWithNoStyle)['color']).to.equal(undefined);
                expect(HtmlElementEngine.getStyles(elementWithNoStyle)['undefined']).to.equal(undefined);
            });


            it('Should return style when element parameter is a filled string', () => {
                expect(HtmlElementEngine.getStyles(elementWith1Style)['display']).to.equal('none');
                expect(HtmlElementEngine.getStyles(elementWith1Style)['opacity']).to.equal(undefined);
                expect(HtmlElementEngine.getStyles(elementWith1Style)['color']).to.equal(undefined);
                expect(HtmlElementEngine.getStyles(elementWith1Style)['undefined']).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.getStyles(elementWith2Styles)['display']).to.equal('block');
                expect(HtmlElementEngine.getStyles(elementWith2Styles)['opacity']).to.equal('1');
                expect(HtmlElementEngine.getStyles(elementWith2Styles)['color']).to.equal(undefined);
                expect(HtmlElementEngine.getStyles(elementWith2Styles)['undefined']).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.getStyles(elementWith3Styles)['display']).to.equal('inline');
                expect(HtmlElementEngine.getStyles(elementWith3Styles)['opacity']).to.equal('0');
                expect(HtmlElementEngine.getStyles(elementWith3Styles)['color']).to.equal('rgb(255, 0, 0)');
                expect(HtmlElementEngine.getStyles(elementWith3Styles)['undefined']).to.equal(undefined);
            });


            it('Should return null when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.getStyles('unused-element-id')).to.deep.equal({})
            });

            it('Should return null when element parameter is an empty string', () => {
                expect(HtmlElementEngine.getStyles('')).to.deep.equal({});
            });

            it('Should return null when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.getStyles(' ')).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.getStyles(String(''))).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.getStyles(new String(''))).to.deep.equal({});
            });

            it('Should return null when element parameter is null', () => {
                expect(HtmlElementEngine.getStyles(null)).to.deep.equal({});
            });

            it('Should return null when element parameter is NaN', () => {
                expect(HtmlElementEngine.getStyles(NaN)).to.deep.equal({});
            });

            it('Should return null when element parameter is undefined', () => {
                expect(HtmlElementEngine.getStyles(undefined)).to.deep.equal({});
            });

            it('Should return null when element parameter is false boolean', () => {
                expect(HtmlElementEngine.getStyles(false)).to.deep.equal({});
            });

            it('Should return null when element parameter is true boolean', () => {
                expect(HtmlElementEngine.getStyles(true)).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty object', () => {
                expect(HtmlElementEngine.getStyles({})).to.deep.equal({});
            });

            it('Should return null when element parameter is an empty array', () => {
                expect(HtmlElementEngine.getStyles([])).to.deep.equal({});
            });

            it('Should return null when element parameter is a function', () => {
                expect(HtmlElementEngine.getStyles(function () {})).to.deep.equal({});
            });

            it('Should return null when element parameter is a filled object', () => {
                expect(HtmlElementEngine.getStyles({foo: 'bar'})).to.deep.equal({});
            });

            it('Should return null when element parameter is a number', () => {
                expect(HtmlElementEngine.getStyles(1)).to.deep.equal({});
            });

            it('Should return null when element parameter is a zero', () => {
                expect(HtmlElementEngine.getStyles(0)).to.deep.equal({});
            });

            it('Should return null when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.getStyles(+0)).to.deep.equal({});
            });

            it('Should return null when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.getStyles(-0)).to.deep.equal({});
            });

            it('Should return null when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.getStyles(Number('1'))).to.deep.equal({});
            });

            it('Should return null when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.getStyles(new Number('1'))).to.deep.equal({});
            });

            it('Should return null when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.getStyles(Number.POSITIVE_INFINITY)).to.deep.equal({});
            });

            it('Should return null when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.getStyles(Number.NEGATIVE_INFINITY)).to.deep.equal({});
            });

            it('Should return null when element parameter is a filled array', () => {
                expect(HtmlElementEngine.getStyles([1, 2, 3])).to.deep.equal({});
            });

            it('Should return null when element parameter is a map', () => {
                expect(HtmlElementEngine.getStyles(new Map())).to.deep.equal({});
            });

            it('Should return null when element parameter is a date', () => {
                expect(HtmlElementEngine.getStyles(new Date())).to.deep.equal({});
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(HtmlElementEngine.getStyles(new (class Class {})())).to.deep.equal({});
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(HtmlElementEngine.getStyles(new (class Class {}))).to.deep.equal({});
            });

            it('Should return null when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.getStyles(class Class {})).to.deep.equal({});
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
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, 'display')).to.equal(undefined);
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, 'opacity')).to.equal(undefined);
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, 'color')).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled string', () => {
                expect(HtmlElementEngine.getStyle('element-with-1-style', 'display')).to.equal('none');
                expect(HtmlElementEngine.getStyle('element-with-1-style', 'opacity')).to.equal(undefined);
                expect(HtmlElementEngine.getStyle('element-with-1-style', 'color')).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled primitive string', () => {
                expect(HtmlElementEngine.getStyle('element-with-2-styles', 'display')).to.equal('block');
                expect(HtmlElementEngine.getStyle('element-with-2-styles', 'opacity')).to.equal('1');
                expect(HtmlElementEngine.getStyle('element-with-2-styles', 'color')).to.equal(undefined);
            });

            it('Should return style when element parameter is a filled wrapped primitive string', () => {
                expect(HtmlElementEngine.getStyle('element-with-3-styles', 'display')).to.equal('inline');
                expect(HtmlElementEngine.getStyle('element-with-3-styles', 'opacity')).to.equal('0');
                expect(HtmlElementEngine.getStyle('element-with-3-styles', 'color')).to.equal('rgb(255, 0, 0)');
            });


            it('Should return null when element parameter is an unused element ID', () => {
                expect(HtmlElementEngine.getStyle('unused-element-id', 'display')).to.equal(undefined)
            });

            it('Should return null when element parameter is an empty string', () => {
                expect(HtmlElementEngine.getStyle('', 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.getStyle(' ', 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.getStyle(String(''), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.getStyle(new String(''), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is null', () => {
                expect(HtmlElementEngine.getStyle(null, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is NaN', () => {
                expect(HtmlElementEngine.getStyle(NaN, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is undefined', () => {
                expect(HtmlElementEngine.getStyle(undefined, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is false boolean', () => {
                expect(HtmlElementEngine.getStyle(false, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is true boolean', () => {
                expect(HtmlElementEngine.getStyle(true, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty object', () => {
                expect(HtmlElementEngine.getStyle({}, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is an empty array', () => {
                expect(HtmlElementEngine.getStyle([], 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a function', () => {
                expect(HtmlElementEngine.getStyle(function () {}, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a filled object', () => {
                expect(HtmlElementEngine.getStyle({foo: 'bar'}, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a number', () => {
                expect(HtmlElementEngine.getStyle(1, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a zero', () => {
                expect(HtmlElementEngine.getStyle(0, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.getStyle(+0, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.getStyle(-0, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.getStyle(Number('1'), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.getStyle(new Number('1'), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.getStyle(Number.POSITIVE_INFINITY, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.getStyle(Number.NEGATIVE_INFINITY, 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a filled array', () => {
                expect(HtmlElementEngine.getStyle([1, 2, 3], 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a map', () => {
                expect(HtmlElementEngine.getStyle(new Map(), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a date', () => {
                expect(HtmlElementEngine.getStyle(new Date(), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(HtmlElementEngine.getStyle(new (class Class {})(), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a class instance', () => {
                expect(HtmlElementEngine.getStyle(new (class Class {}), 'display')).to.equal(undefined);
            });

            it('Should return null when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.getStyle(class Class {}, 'display')).to.equal(undefined);
            });
        });

        describe('#getStyle(element, STYLENAME)', function () {
            it('Should return empty string when style name parameter is style with undefined value', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, 'display')).to.equal(undefined);
            });

            it('Should return undefined when style name parameter is a undefined style name', () => {
                expect(HtmlElementEngine.getStyle(elementWith1Style, 'unusedStyleName')).to.equal(undefined);
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(HtmlElementEngine.getStyle(elementWith1Style, 'display')).to.equal('none');
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(HtmlElementEngine.getStyle(elementWith2Styles, 'display')).to.equal('block');
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(HtmlElementEngine.getStyle(elementWith3Styles, 'display')).to.equal('inline');
            });

            it('Should return style value when style name parameter is a valid style name', () => {
                expect(HtmlElementEngine.getStyle(elementWith3Styles, 'color')).to.equal('rgb(255, 0, 0)');
            });


            it('Should return null when style name parameter is a whitespace', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, ' ')).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty string', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, '')).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, String(''))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, new String(''))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a whitespace', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, ' ')).to.equal(undefined);
            });

            it('Should return null when style name  parameter is empty', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, )).to.equal(undefined);
            });

            it('Should return null when style name  parameter is null', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, null)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is NaN', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, NaN)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is undefined', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, undefined)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is false boolean', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, false)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is true boolean', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, true)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty object', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, {})).to.equal(undefined);
            });

            it('Should return null when style name  parameter is an empty array', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, [])).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a function', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, function () {})).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a filled object', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, {foo: 'bar'})).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a number', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, 1)).to.equal(undefined);
            });

            it('Should return null when style name  name  parameter is a zero', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, 0)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a positive false', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, +0)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a negative zero', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, -0)).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a primitive number', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, Number('1'))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, new Number('1'))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a filled array', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, [1, 2, 3])).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a map', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, new Map())).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a date', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, new Date())).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a class instance', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, new (class Class {})())).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a class instance', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, new (class Class {}))).to.equal(undefined);
            });

            it('Should return null when style name  parameter is a class declaration', () => {
                expect(HtmlElementEngine.getStyle(elementWithNoStyle, class Class {})).to.equal(undefined);
            });
        });
    });
});
