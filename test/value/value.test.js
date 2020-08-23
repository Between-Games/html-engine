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

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    // ║ ╚═════╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗
    // ╚═════╗ ║║ ╔═════╝   ║ ║   ╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    // ╔═════╝ ║║ ╚═════╗   ║ ║             ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝   ╚═╝             ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#setValue(element, value)', function () {
        describe('#setValue(ELEMENT, value)', function () {
            it('Should return true when element parameter is a used identifier', () => {
                expect(HtmlElementEngine.setValue('test-value', 'new-value')).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlElementEngine.setValue(element, 'new-value')).to.equal(true);
            });


            it('Should return false when element parameter is a unused identifier', () => {
                expect(HtmlElementEngine.setValue('unused-test-value', 'new-value')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlElementEngine.setValue('', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlElementEngine.setValue(' ', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.setValue(String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.setValue(new String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlElementEngine.setValue(null, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlElementEngine.setValue(NaN, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlElementEngine.setValue(undefined, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlElementEngine.setValue(false, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlElementEngine.setValue(true), 'new-value').to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlElementEngine.setValue({}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlElementEngine.setValue([], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlElementEngine.setValue(function () {}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlElementEngine.setValue({foo: 'bar'}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlElementEngine.setValue(1, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlElementEngine.setValue(0)).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlElementEngine.setValue(+0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlElementEngine.setValue(-0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlElementEngine.setValue(Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.setValue(new Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlElementEngine.setValue(Number.POSITIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlElementEngine.setValue(Number.NEGATIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlElementEngine.setValue([1, 2, 3], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlElementEngine.setValue(new Map(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlElementEngine.setValue(new Date(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.setValue(new (class Class {})(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlElementEngine.setValue(new (class Class {}), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlElementEngine.setValue(class Class {}), 'new-value').to.equal(false);
            });
        });

        describe('#setValue(element, VALUE)', function () {
            it('Should return true when value parameter is an empty', () => {
                expect(HtmlElementEngine.setValue(element)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is a filled string', () => {
                expect(HtmlElementEngine.setValue(element, 'string')).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal('string');
            });

            it('Should return true when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.setValue(element, ' ')).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(' ');
            });

            it('Should return true when value parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.setValue(element, String(''))).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.setValue(element, new String(''))).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is null', () => {
                expect(HtmlElementEngine.setValue(element, null)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${null}`);
            });

            it('Should return true when value parameter is NaN', () => {
                expect(HtmlElementEngine.setValue(element, NaN)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${NaN}`);
            });

            it('Should return true when value parameter is undefined', () => {
                expect(HtmlElementEngine.setValue(element, undefined)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is false boolean', () => {
                expect(HtmlElementEngine.setValue(element, false)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${false}`);
            });

            it('Should return true when value parameter is true boolean', () => {
                expect(HtmlElementEngine.setValue(element, true)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${true}`);
            });

            it('Should return true when value parameter is an empty object', () => {
                expect(HtmlElementEngine.setValue(element, {})).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${{}}`);
            });

            it('Should return true when value parameter is an empty array', () => {
                expect(HtmlElementEngine.setValue(element, [])).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${[]}`);
            });

            it('Should return true when value parameter is a function', () => {
                expect(HtmlElementEngine.setValue(element, function () {})).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${function () {}}`);
            });

            it('Should return true when value parameter is a filled object', () => {
                expect(HtmlElementEngine.setValue(element, {foo: 'bar'})).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${{foo: 'bar'}}`);
            });

            it('Should return true when value parameter is a number', () => {
                expect(HtmlElementEngine.setValue(element, 1)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${1}`);
            });

            it('Should return true when value parameter is a zero', () => {
                expect(HtmlElementEngine.setValue(element, 0)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${0}`);
            });

            it('Should return true when value parameter is a positive zero', () => {
                expect(HtmlElementEngine.setValue(element, +0)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${+0}`);
            });

            it('Should return true when value parameter is a negative zero', () => {
                expect(HtmlElementEngine.setValue(element, -0)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${-0}`);
            });

            it('Should return true when value parameter is a primitive number', () => {
                expect(HtmlElementEngine.setValue(element, Number('1'))).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${Number('1')}`);
            });

            it('Should return true when value parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.setValue(element, new Number('1'))).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${new Number('1')}`);
            });

            it('Should return true when value parameter is positive infinity', () => {
                expect(HtmlElementEngine.setValue(element, Number.POSITIVE_INFINITY)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${Number.POSITIVE_INFINITY}`);
            });

            it('Should return true when value parameter is negative infinity', () => {
                expect(HtmlElementEngine.setValue(element, Number.NEGATIVE_INFINITY)).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${Number.NEGATIVE_INFINITY}`);
            });

            it('Should return true when value parameter is a filled array', () => {
                expect(HtmlElementEngine.setValue(element, [1, 2, 3])).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${[1, 2, 3]}`);
            });

            it('Should return true when value parameter is a map', () => {
                expect(HtmlElementEngine.setValue(element, new Map())).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${new Map()}`);
            });

            it('Should return true when value parameter is a date', () => {
                expect(HtmlElementEngine.setValue(element, new Date())).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${new Date()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(HtmlElementEngine.setValue(element, new (class Class {})())).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${new (class Class {})()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(HtmlElementEngine.setValue(element, new (class Class {}))).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${new (class Class {})}`);
            });

            it('Should return true when value parameter is a class declaration', () => {
                expect(HtmlElementEngine.setValue(element, class Class {})).to.equal(true);
                expect(HtmlElementEngine.getValue(element)).to.equal(`${class Class {}}`);
            });
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║             ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝   ╚═╝             ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#getValue(element)', function () {
        describe('#getValue(ELEMENT)', function () {
            it('Should return element value when element parameter is a used identifier', () => {
                expect(HtmlElementEngine.getValue('test-value')).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });

            it('Should return element value when element parameter is an element', () => {
                expect(HtmlElementEngine.getValue(element)).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });


            it('Should return null when element parameter is a unused identifier', () => {
                expect(HtmlElementEngine.getValue('unused-test-value')).to.equal(null)
            });

            it('Should return null when value parameter is a whitespace', () => {
                expect(HtmlElementEngine.getValue(' ')).to.equal(null);
            });

            it('Should return null when value parameter is an empty string', () => {
                expect(HtmlElementEngine.getValue('')).to.equal(null);
            });

            it('Should return null when value parameter is an empty primitive string', () => {
                expect(HtmlElementEngine.getValue(String(''))).to.equal(null);
            });

            it('Should return null when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlElementEngine.getValue(new String(''))).to.equal(null);
            });

            it('Should return null when value parameter is empty', () => {
                expect(HtmlElementEngine.getValue()).to.equal(null);
            });

            it('Should return null when value parameter is null', () => {
                expect(HtmlElementEngine.getValue(null)).to.equal(null);
            });

            it('Should return null when value parameter is NaN', () => {
                expect(HtmlElementEngine.getValue(NaN)).to.equal(null);
            });

            it('Should return null when value parameter is undefined', () => {
                expect(HtmlElementEngine.getValue(undefined)).to.equal(null);
            });

            it('Should return null when value parameter is false boolean', () => {
                expect(HtmlElementEngine.getValue(false)).to.equal(null);
            });

            it('Should return null when value parameter is true boolean', () => {
                expect(HtmlElementEngine.getValue(true)).to.equal(null);
            });

            it('Should return null when value parameter is an empty object', () => {
                expect(HtmlElementEngine.getValue({})).to.equal(null);
            });

            it('Should return null when value parameter is an empty array', () => {
                expect(HtmlElementEngine.getValue([])).to.equal(null);
            });

            it('Should return null when value parameter is a function', () => {
                expect(HtmlElementEngine.getValue(function () {})).to.equal(null);
            });

            it('Should return null when value parameter is a filled object', () => {
                expect(HtmlElementEngine.getValue({foo: 'bar'})).to.equal(null);
            });

            it('Should return null when value parameter is a number', () => {
                expect(HtmlElementEngine.getValue(1)).to.equal(null);
            });

            it('Should return null when value parameter is a zero', () => {
                expect(HtmlElementEngine.getValue(0)).to.equal(null);
            });

            it('Should return null when value parameter is a positive false', () => {
                expect(HtmlElementEngine.getValue(+0)).to.equal(null);
            });

            it('Should return null when value parameter is a negative zero', () => {
                expect(HtmlElementEngine.getValue(-0)).to.equal(null);
            });

            it('Should return null when value parameter is a primitive number', () => {
                expect(HtmlElementEngine.getValue(Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is a wrapped primitive number', () => {
                expect(HtmlElementEngine.getValue(new Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is positive infinity', () => {
                expect(HtmlElementEngine.getValue(Number.POSITIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is negative infinity', () => {
                expect(HtmlElementEngine.getValue(Number.NEGATIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is a filled array', () => {
                expect(HtmlElementEngine.getValue([1, 2, 3])).to.equal(null);
            });

            it('Should return null when value parameter is a map', () => {
                expect(HtmlElementEngine.getValue(new Map())).to.equal(null);
            });

            it('Should return null when value parameter is a date', () => {
                expect(HtmlElementEngine.getValue(new Date())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(HtmlElementEngine.getValue(new (class Class {})())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(HtmlElementEngine.getValue(new (class Class {}))).to.equal(null);
            });

            it('Should return null when value parameter is a class declaration', () => {
                expect(HtmlElementEngine.getValue(class Class {})).to.equal(null);
            });
        });
    });
});