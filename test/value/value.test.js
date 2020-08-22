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
                expect(HtmlEngine.setElementValue('test-value', 'new-value')).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.setElementValue(element, 'new-value')).to.equal(true);
            });


            it('Should return false when element parameter is a unused identifier', () => {
                expect(HtmlEngine.setElementValue('unused-test-value', 'new-value')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.setElementValue('', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.setElementValue(' ', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.setElementValue(String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.setElementValue(new String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.setElementValue(null, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.setElementValue(NaN, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.setElementValue(undefined, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.setElementValue(false, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.setElementValue(true), 'new-value').to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.setElementValue({}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.setElementValue([], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.setElementValue(function () {}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.setElementValue({foo: 'bar'}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.setElementValue(1, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.setElementValue(0)).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.setElementValue(+0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.setElementValue(-0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.setElementValue(Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.setElementValue(new Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.setElementValue(Number.POSITIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.setElementValue(Number.NEGATIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.setElementValue([1, 2, 3], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.setElementValue(new Map(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.setElementValue(new Date(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.setElementValue(new (class Class {})(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.setElementValue(new (class Class {}), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.setElementValue(class Class {}), 'new-value').to.equal(false);
            });
        });

        describe('#setElementValue(element, VALUE)', function () {
            it('Should return true when value parameter is an empty', () => {
                expect(HtmlEngine.setElementValue(element)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal('');
            });

            it('Should return true when value parameter is a filled string', () => {
                expect(HtmlEngine.setElementValue(element, 'string')).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal('string');
            });

            it('Should return true when value parameter is a whitespace', () => {
                expect(HtmlEngine.setElementValue(element, ' ')).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(' ');
            });

            it('Should return true when value parameter is an empty primitive string', () => {
                expect(HtmlEngine.setElementValue(element, String(''))).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal('');
            });

            it('Should return true when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.setElementValue(element, new String(''))).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal('');
            });

            it('Should return true when value parameter is null', () => {
                expect(HtmlEngine.setElementValue(element, null)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${null}`);
            });

            it('Should return true when value parameter is NaN', () => {
                expect(HtmlEngine.setElementValue(element, NaN)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${NaN}`);
            });

            it('Should return true when value parameter is undefined', () => {
                expect(HtmlEngine.setElementValue(element, undefined)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal('');
            });

            it('Should return true when value parameter is false boolean', () => {
                expect(HtmlEngine.setElementValue(element, false)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${false}`);
            });

            it('Should return true when value parameter is true boolean', () => {
                expect(HtmlEngine.setElementValue(element, true)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${true}`);
            });

            it('Should return true when value parameter is an empty object', () => {
                expect(HtmlEngine.setElementValue(element, {})).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${{}}`);
            });

            it('Should return true when value parameter is an empty array', () => {
                expect(HtmlEngine.setElementValue(element, [])).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${[]}`);
            });

            it('Should return true when value parameter is a function', () => {
                expect(HtmlEngine.setElementValue(element, function () {})).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${function () {}}`);
            });

            it('Should return true when value parameter is a filled object', () => {
                expect(HtmlEngine.setElementValue(element, {foo: 'bar'})).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${{foo: 'bar'}}`);
            });

            it('Should return true when value parameter is a number', () => {
                expect(HtmlEngine.setElementValue(element, 1)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${1}`);
            });

            it('Should return true when value parameter is a zero', () => {
                expect(HtmlEngine.setElementValue(element, 0)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${0}`);
            });

            it('Should return true when value parameter is a positive zero', () => {
                expect(HtmlEngine.setElementValue(element, +0)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${+0}`);
            });

            it('Should return true when value parameter is a negative zero', () => {
                expect(HtmlEngine.setElementValue(element, -0)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${-0}`);
            });

            it('Should return true when value parameter is a primitive number', () => {
                expect(HtmlEngine.setElementValue(element, Number('1'))).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${Number('1')}`);
            });

            it('Should return true when value parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.setElementValue(element, new Number('1'))).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${new Number('1')}`);
            });

            it('Should return true when value parameter is positive infinity', () => {
                expect(HtmlEngine.setElementValue(element, Number.POSITIVE_INFINITY)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${Number.POSITIVE_INFINITY}`);
            });

            it('Should return true when value parameter is negative infinity', () => {
                expect(HtmlEngine.setElementValue(element, Number.NEGATIVE_INFINITY)).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${Number.NEGATIVE_INFINITY}`);
            });

            it('Should return true when value parameter is a filled array', () => {
                expect(HtmlEngine.setElementValue(element, [1, 2, 3])).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${[1, 2, 3]}`);
            });

            it('Should return true when value parameter is a map', () => {
                expect(HtmlEngine.setElementValue(element, new Map())).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${new Map()}`);
            });

            it('Should return true when value parameter is a date', () => {
                expect(HtmlEngine.setElementValue(element, new Date())).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${new Date()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(HtmlEngine.setElementValue(element, new (class Class {})())).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${new (class Class {})()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(HtmlEngine.setElementValue(element, new (class Class {}))).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${new (class Class {})}`);
            });

            it('Should return true when value parameter is a class declaration', () => {
                expect(HtmlEngine.setElementValue(element, class Class {})).to.equal(true);
                expect(HtmlEngine.getElementValue(element)).to.equal(`${class Class {}}`);
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
                expect(HtmlEngine.getElementValue('test-value')).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });

            it('Should return element value when element parameter is an element', () => {
                expect(HtmlEngine.getElementValue(element)).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });


            it('Should return null when element parameter is a unused identifier', () => {
                expect(HtmlEngine.getElementValue('unused-test-value')).to.equal(null)
            });

            it('Should return null when value parameter is a whitespace', () => {
                expect(HtmlEngine.getElementValue(' ')).to.equal(null);
            });

            it('Should return null when value parameter is an empty string', () => {
                expect(HtmlEngine.getElementValue('')).to.equal(null);
            });

            it('Should return null when value parameter is an empty primitive string', () => {
                expect(HtmlEngine.getElementValue(String(''))).to.equal(null);
            });

            it('Should return null when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.getElementValue(new String(''))).to.equal(null);
            });

            it('Should return null when value parameter is empty', () => {
                expect(HtmlEngine.getElementValue()).to.equal(null);
            });

            it('Should return null when value parameter is null', () => {
                expect(HtmlEngine.getElementValue(null)).to.equal(null);
            });

            it('Should return null when value parameter is NaN', () => {
                expect(HtmlEngine.getElementValue(NaN)).to.equal(null);
            });

            it('Should return null when value parameter is undefined', () => {
                expect(HtmlEngine.getElementValue(undefined)).to.equal(null);
            });

            it('Should return null when value parameter is false boolean', () => {
                expect(HtmlEngine.getElementValue(false)).to.equal(null);
            });

            it('Should return null when value parameter is true boolean', () => {
                expect(HtmlEngine.getElementValue(true)).to.equal(null);
            });

            it('Should return null when value parameter is an empty object', () => {
                expect(HtmlEngine.getElementValue({})).to.equal(null);
            });

            it('Should return null when value parameter is an empty array', () => {
                expect(HtmlEngine.getElementValue([])).to.equal(null);
            });

            it('Should return null when value parameter is a function', () => {
                expect(HtmlEngine.getElementValue(function () {})).to.equal(null);
            });

            it('Should return null when value parameter is a filled object', () => {
                expect(HtmlEngine.getElementValue({foo: 'bar'})).to.equal(null);
            });

            it('Should return null when value parameter is a number', () => {
                expect(HtmlEngine.getElementValue(1)).to.equal(null);
            });

            it('Should return null when value parameter is a zero', () => {
                expect(HtmlEngine.getElementValue(0)).to.equal(null);
            });

            it('Should return null when value parameter is a positive false', () => {
                expect(HtmlEngine.getElementValue(+0)).to.equal(null);
            });

            it('Should return null when value parameter is a negative zero', () => {
                expect(HtmlEngine.getElementValue(-0)).to.equal(null);
            });

            it('Should return null when value parameter is a primitive number', () => {
                expect(HtmlEngine.getElementValue(Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.getElementValue(new Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is positive infinity', () => {
                expect(HtmlEngine.getElementValue(Number.POSITIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is negative infinity', () => {
                expect(HtmlEngine.getElementValue(Number.NEGATIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is a filled array', () => {
                expect(HtmlEngine.getElementValue([1, 2, 3])).to.equal(null);
            });

            it('Should return null when value parameter is a map', () => {
                expect(HtmlEngine.getElementValue(new Map())).to.equal(null);
            });

            it('Should return null when value parameter is a date', () => {
                expect(HtmlEngine.getElementValue(new Date())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(HtmlEngine.getElementValue(new (class Class {})())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(HtmlEngine.getElementValue(new (class Class {}))).to.equal(null);
            });

            it('Should return null when value parameter is a class declaration', () => {
                expect(HtmlEngine.getElementValue(class Class {})).to.equal(null);
            });
        });
    });
});