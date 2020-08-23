// ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗
// ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║          ║ ║  ║ ╚═════╗
// ╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║          ║ ║  ╚═════╗ ║
//  ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗╔═══╝ ║  ╔═════╝ ║
//  ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

const expect = chai.expect;

// ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗
// ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
// ║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗
// ╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
//  ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
//  ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

describe('Value', function() {
    let element;

    beforeEach(function () {
        element = document.createElement('button');
        element.setAttribute('id', 'test-value');
        element.setAttribute('value', 'value');

        document.body.appendChild(element);
    });

    afterEach(function () {
        element.remove();
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    // ║ ╚═════╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗
    // ╚═════╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    // ╔═════╝ ║║ ╚═════╗   ║ ║            ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║             ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝             ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#setElementValue(element, value)', function () {
        describe('#setElementValue(ELEMENT, value)', function () {
            it('Should return true when element parameter is a used identifier', () => {
                expect(HtmlElementEngine.setElementValue('test-value', 'new-value')).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.setElementValue(element, 'new-value')).to.equal(true);
            });


            it('Should return false when element parameter is a unused identifier', () => {
                expect(HtmlElementEngine.setElementValue('unused-test-value', 'new-value')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.setElementValue('', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.setElementValue(' ', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.setElementValue(String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.setElementValue(new String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.setElementValue(null, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.setElementValue(NaN, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.setElementValue(undefined, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.setElementValue(false, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.setElementValue(true), 'new-value').to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.setElementValue({}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.setElementValue([], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.setElementValue(function () {}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.setElementValue({foo: 'bar'}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.setElementValue(1, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.setElementValue(0)).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.setElementValue(+0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.setElementValue(-0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.setElementValue(Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.setElementValue(new Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.setElementValue(Number.POSITIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.setElementValue(Number.NEGATIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.setElementValue([1, 2, 3], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.setElementValue(new Map(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.setElementValue(new Date(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.setElementValue(new (class Class {})(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.setElementValue(new (class Class {}), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.setElementValue(class Class {}), 'new-value').to.equal(false);
            });
        });

        describe('#setElementValue(element, VALUE)', function () {
            it('Should return true when value parameter is an empty', () => {
                expect(HtmlElementEngine.setElementValue(element)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal('');
            });

            it('Should return true when value parameter is a filled string', () => {
                expect(HtmlElementEngine.setElementValue(element, 'string')).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal('string');
            });

            it('Should return true when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.setElementValue(element, ' ')).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(' ');
            });

            it('Should return true when value parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.setElementValue(element, String(''))).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal('');
            });

            it('Should return true when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.setElementValue(element, new String(''))).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal('');
            });

            it('Should return true when value parameter is null', () => {
                expect(HtmlElementEngine.setElementValue(element, null)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${null}`);
            });

            it('Should return true when value parameter is NaN', () => {
                expect(HtmlElementEngine.setElementValue(element, NaN)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${NaN}`);
            });

            it('Should return true when value parameter is undefined', () => {
                expect(HtmlElementEngine.setElementValue(element, undefined)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal('');
            });

            it('Should return true when value parameter is false boolean', () => {
                expect(HtmlElementEngine.setElementValue(element, false)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${false}`);
            });

            it('Should return true when value parameter is true boolean', () => {
                expect(HtmlElementEngine.setElementValue(element, true)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${true}`);
            });

            it('Should return true when value parameter is an empty object', () => {
                expect(HtmlElementEngine.setElementValue(element, {})).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${{}}`);
            });

            it('Should return true when value parameter is an empty array', () => {
                expect(HtmlElementEngine.setElementValue(element, [])).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${[]}`);
            });

            it('Should return true when value parameter is a function', () => {
                expect(HtmlElementEngine.setElementValue(element, function () {})).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${function () {}}`);
            });

            it('Should return true when value parameter is a filled object', () => {
                expect(HtmlElementEngine.setElementValue(element, {foo: 'bar'})).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${{foo: 'bar'}}`);
            });

            it('Should return true when value parameter is a number', () => {
                expect(HtmlElementEngine.setElementValue(element, 1)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${1}`);
            });

            it('Should return true when value parameter is a zero', () => {
                expect(HtmlElementEngine.setElementValue(element, 0)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${0}`);
            });

            it('Should return true when value parameter is a positive zero', () => {
                expect(HtmlElementEngine.setElementValue(element, +0)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${+0}`);
            });

            it('Should return true when value parameter is a negative zero', () => {
                expect(HtmlElementEngine.setElementValue(element, -0)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${-0}`);
            });

            it('Should return true when value parameter is a primitive number', () => {
                expect(HtmlElementEngine.setElementValue(element, Number('1'))).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${Number('1')}`);
            });

            it('Should return true when value parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.setElementValue(element, new Number('1'))).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${new Number('1')}`);
            });

            it('Should return true when value parameter is positive infinity', () => {
                expect(HtmlElementEngine.setElementValue(element, Number.POSITIVE_INFINITY)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${Number.POSITIVE_INFINITY}`);
            });

            it('Should return true when value parameter is negative infinity', () => {
                expect(HtmlElementEngine.setElementValue(element, Number.NEGATIVE_INFINITY)).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${Number.NEGATIVE_INFINITY}`);
            });

            it('Should return true when value parameter is a filled array', () => {
                expect(HtmlElementEngine.setElementValue(element, [1, 2, 3])).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${[1, 2, 3]}`);
            });

            it('Should return true when value parameter is a map', () => {
                expect(HtmlElementEngine.setElementValue(element, new Map())).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${new Map()}`);
            });

            it('Should return true when value parameter is a date', () => {
                expect(HtmlElementEngine.setElementValue(element, new Date())).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${new Date()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(HtmlElementEngine.setElementValue(element, new (class Class {})())).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${new (class Class {})()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(HtmlElementEngine.setElementValue(element, new (class Class {}))).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${new (class Class {})}`);
            });

            it('Should return true when value parameter is a class declaration', () => {
                expect(HtmlElementEngine.setElementValue(element, class Class {})).to.equal(true);
                expect(HtmlElementEngine.getElementValue(element)).to.equal(`${class Class {}}`);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║   ╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║   ╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║             ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝             ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#getElementValue(element)', function () {
        describe('#getElementValue(ELEMENT)', function () {
            it('Should return element value when element parameter is a used identifier', () => {
                expect(HtmlElementEngine.getElementValue('test-value')).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });

            it('Should return element value when element parameter is an element', () => {
                expect(HtmlElementEngine.getElementValue(element)).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });


            it('Should return null when element parameter is a unused identifier', () => {
                expect(HtmlElementEngine.getElementValue('unused-test-value')).to.equal(null)
            });

            it('Should return null when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.getElementValue(' ')).to.equal(null);
            });

            it('Should return null when value parameter is an empty string', () => {
                expect(HtmlElementEngine.getElementValue('')).to.equal(null);
            });

            it('Should return null when value parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.getElementValue(String(''))).to.equal(null);
            });

            it('Should return null when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.getElementValue(new String(''))).to.equal(null);
            });

            it('Should return null when value parameter is empty', () => {
                expect(HtmlElementEngine.getElementValue()).to.equal(null);
            });

            it('Should return null when value parameter is null', () => {
                expect(HtmlElementEngine.getElementValue(null)).to.equal(null);
            });

            it('Should return null when value parameter is NaN', () => {
                expect(HtmlElementEngine.getElementValue(NaN)).to.equal(null);
            });

            it('Should return null when value parameter is undefined', () => {
                expect(HtmlElementEngine.getElementValue(undefined)).to.equal(null);
            });

            it('Should return null when value parameter is false boolean', () => {
                expect(HtmlElementEngine.getElementValue(false)).to.equal(null);
            });

            it('Should return null when value parameter is true boolean', () => {
                expect(HtmlElementEngine.getElementValue(true)).to.equal(null);
            });

            it('Should return null when value parameter is an empty object', () => {
                expect(HtmlElementEngine.getElementValue({})).to.equal(null);
            });

            it('Should return null when value parameter is an empty array', () => {
                expect(HtmlElementEngine.getElementValue([])).to.equal(null);
            });

            it('Should return null when value parameter is a function', () => {
                expect(HtmlElementEngine.getElementValue(function () {})).to.equal(null);
            });

            it('Should return null when value parameter is a filled object', () => {
                expect(HtmlElementEngine.getElementValue({foo: 'bar'})).to.equal(null);
            });

            it('Should return null when value parameter is a number', () => {
                expect(HtmlElementEngine.getElementValue(1)).to.equal(null);
            });

            it('Should return null when value parameter is a zero', () => {
                expect(HtmlElementEngine.getElementValue(0)).to.equal(null);
            });

            it('Should return null when value parameter is a positive false', () => {
                expect(HtmlElementEngine.getElementValue(+0)).to.equal(null);
            });

            it('Should return null when value parameter is a negative zero', () => {
                expect(HtmlElementEngine.getElementValue(-0)).to.equal(null);
            });

            it('Should return null when value parameter is a primitive number', () => {
                expect(HtmlElementEngine.getElementValue(Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.getElementValue(new Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is positive infinity', () => {
                expect(HtmlElementEngine.getElementValue(Number.POSITIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is negative infinity', () => {
                expect(HtmlElementEngine.getElementValue(Number.NEGATIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is a filled array', () => {
                expect(HtmlElementEngine.getElementValue([1, 2, 3])).to.equal(null);
            });

            it('Should return null when value parameter is a map', () => {
                expect(HtmlElementEngine.getElementValue(new Map())).to.equal(null);
            });

            it('Should return null when value parameter is a date', () => {
                expect(HtmlElementEngine.getElementValue(new Date())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(HtmlElementEngine.getElementValue(new (class Class {})())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(HtmlElementEngine.getElementValue(new (class Class {}))).to.equal(null);
            });

            it('Should return null when value parameter is a class declaration', () => {
                expect(HtmlElementEngine.getElementValue(class Class {})).to.equal(null);
            });
        });
    });
});