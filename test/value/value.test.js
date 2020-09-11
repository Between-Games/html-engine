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
                expect(HtmlEngine.setValue('test-value', 'new-value')).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(HtmlEngine.setValue(element, 'new-value')).to.equal(true);
            });


            it('Should return false when element parameter is a unused identifier', () => {
                expect(HtmlEngine.setValue('unused-test-value', 'new-value')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(HtmlEngine.setValue('', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(HtmlEngine.setValue(' ', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(HtmlEngine.setValue(String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.setValue(new String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(HtmlEngine.setValue(null, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(HtmlEngine.setValue(NaN, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(HtmlEngine.setValue(undefined, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(HtmlEngine.setValue(false, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(HtmlEngine.setValue(true), 'new-value').to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(HtmlEngine.setValue({}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(HtmlEngine.setValue([], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(HtmlEngine.setValue(function () {}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(HtmlEngine.setValue({foo: 'bar'}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(HtmlEngine.setValue(1, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(HtmlEngine.setValue(0)).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(HtmlEngine.setValue(+0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(HtmlEngine.setValue(-0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(HtmlEngine.setValue(Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.setValue(new Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(HtmlEngine.setValue(Number.POSITIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(HtmlEngine.setValue(Number.NEGATIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(HtmlEngine.setValue([1, 2, 3], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(HtmlEngine.setValue(new Map(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(HtmlEngine.setValue(new Date(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.setValue(new (class Class {})(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(HtmlEngine.setValue(new (class Class {}), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(HtmlEngine.setValue(class Class {}), 'new-value').to.equal(false);
            });
        });

        describe('#setValue(element, VALUE)', function () {
            it('Should return true when value parameter is an empty', () => {
                expect(HtmlEngine.setValue(element)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is a filled string', () => {
                expect(HtmlEngine.setValue(element, 'string')).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal('string');
            });

            it('Should return true when value parameter is a whitespace', () => {
                expect(HtmlEngine.setValue(element, ' ')).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(' ');
            });

            it('Should return true when value parameter is an empty primitive string', () => {
                expect(HtmlEngine.setValue(element, String(''))).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.setValue(element, new String(''))).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is null', () => {
                expect(HtmlEngine.setValue(element, null)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${null}`);
            });

            it('Should return true when value parameter is NaN', () => {
                expect(HtmlEngine.setValue(element, NaN)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${NaN}`);
            });

            it('Should return true when value parameter is undefined', () => {
                expect(HtmlEngine.setValue(element, undefined)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is false boolean', () => {
                expect(HtmlEngine.setValue(element, false)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${false}`);
            });

            it('Should return true when value parameter is true boolean', () => {
                expect(HtmlEngine.setValue(element, true)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${true}`);
            });

            it('Should return true when value parameter is an empty object', () => {
                expect(HtmlEngine.setValue(element, {})).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${{}}`);
            });

            it('Should return true when value parameter is an empty array', () => {
                expect(HtmlEngine.setValue(element, [])).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${[]}`);
            });

            it('Should return true when value parameter is a function', () => {
                expect(HtmlEngine.setValue(element, function () {})).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${function () {}}`);
            });

            it('Should return true when value parameter is a filled object', () => {
                expect(HtmlEngine.setValue(element, {foo: 'bar'})).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${{foo: 'bar'}}`);
            });

            it('Should return true when value parameter is a number', () => {
                expect(HtmlEngine.setValue(element, 1)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${1}`);
            });

            it('Should return true when value parameter is a zero', () => {
                expect(HtmlEngine.setValue(element, 0)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${0}`);
            });

            it('Should return true when value parameter is a positive zero', () => {
                expect(HtmlEngine.setValue(element, +0)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${+0}`);
            });

            it('Should return true when value parameter is a negative zero', () => {
                expect(HtmlEngine.setValue(element, -0)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${-0}`);
            });

            it('Should return true when value parameter is a primitive number', () => {
                expect(HtmlEngine.setValue(element, Number('1'))).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${Number('1')}`);
            });

            it('Should return true when value parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.setValue(element, new Number('1'))).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${new Number('1')}`);
            });

            it('Should return true when value parameter is positive infinity', () => {
                expect(HtmlEngine.setValue(element, Number.POSITIVE_INFINITY)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${Number.POSITIVE_INFINITY}`);
            });

            it('Should return true when value parameter is negative infinity', () => {
                expect(HtmlEngine.setValue(element, Number.NEGATIVE_INFINITY)).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${Number.NEGATIVE_INFINITY}`);
            });

            it('Should return true when value parameter is a filled array', () => {
                expect(HtmlEngine.setValue(element, [1, 2, 3])).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${[1, 2, 3]}`);
            });

            it('Should return true when value parameter is a map', () => {
                expect(HtmlEngine.setValue(element, new Map())).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${new Map()}`);
            });

            it('Should return true when value parameter is a date', () => {
                expect(HtmlEngine.setValue(element, new Date())).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${new Date()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(HtmlEngine.setValue(element, new (class Class {})())).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${new (class Class {})()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(HtmlEngine.setValue(element, new (class Class {}))).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${new (class Class {})}`);
            });

            it('Should return true when value parameter is a class declaration', () => {
                expect(HtmlEngine.setValue(element, class Class {})).to.equal(true);
                expect(HtmlEngine.getValue(element)).to.equal(`${class Class {}}`);
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
                expect(HtmlEngine.getValue('test-value')).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });

            it('Should return element value when element parameter is an element', () => {
                expect(HtmlEngine.getValue(element)).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });


            it('Should return null when element parameter is a unused identifier', () => {
                expect(HtmlEngine.getValue('unused-test-value')).to.equal(null)
            });

            it('Should return null when value parameter is a whitespace', () => {
                expect(HtmlEngine.getValue(' ')).to.equal(null);
            });

            it('Should return null when value parameter is an empty string', () => {
                expect(HtmlEngine.getValue('')).to.equal(null);
            });

            it('Should return null when value parameter is an empty primitive string', () => {
                expect(HtmlEngine.getValue(String(''))).to.equal(null);
            });

            it('Should return null when value parameter is an empty wrapped primitive string', () => {
                expect(HtmlEngine.getValue(new String(''))).to.equal(null);
            });

            it('Should return null when value parameter is empty', () => {
                expect(HtmlEngine.getValue()).to.equal(null);
            });

            it('Should return null when value parameter is null', () => {
                expect(HtmlEngine.getValue(null)).to.equal(null);
            });

            it('Should return null when value parameter is NaN', () => {
                expect(HtmlEngine.getValue(NaN)).to.equal(null);
            });

            it('Should return null when value parameter is undefined', () => {
                expect(HtmlEngine.getValue(undefined)).to.equal(null);
            });

            it('Should return null when value parameter is false boolean', () => {
                expect(HtmlEngine.getValue(false)).to.equal(null);
            });

            it('Should return null when value parameter is true boolean', () => {
                expect(HtmlEngine.getValue(true)).to.equal(null);
            });

            it('Should return null when value parameter is an empty object', () => {
                expect(HtmlEngine.getValue({})).to.equal(null);
            });

            it('Should return null when value parameter is an empty array', () => {
                expect(HtmlEngine.getValue([])).to.equal(null);
            });

            it('Should return null when value parameter is a function', () => {
                expect(HtmlEngine.getValue(function () {})).to.equal(null);
            });

            it('Should return null when value parameter is a filled object', () => {
                expect(HtmlEngine.getValue({foo: 'bar'})).to.equal(null);
            });

            it('Should return null when value parameter is a number', () => {
                expect(HtmlEngine.getValue(1)).to.equal(null);
            });

            it('Should return null when value parameter is a zero', () => {
                expect(HtmlEngine.getValue(0)).to.equal(null);
            });

            it('Should return null when value parameter is a positive false', () => {
                expect(HtmlEngine.getValue(+0)).to.equal(null);
            });

            it('Should return null when value parameter is a negative zero', () => {
                expect(HtmlEngine.getValue(-0)).to.equal(null);
            });

            it('Should return null when value parameter is a primitive number', () => {
                expect(HtmlEngine.getValue(Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.getValue(new Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is positive infinity', () => {
                expect(HtmlEngine.getValue(Number.POSITIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is negative infinity', () => {
                expect(HtmlEngine.getValue(Number.NEGATIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is a filled array', () => {
                expect(HtmlEngine.getValue([1, 2, 3])).to.equal(null);
            });

            it('Should return null when value parameter is a map', () => {
                expect(HtmlEngine.getValue(new Map())).to.equal(null);
            });

            it('Should return null when value parameter is a date', () => {
                expect(HtmlEngine.getValue(new Date())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(HtmlEngine.getValue(new (class Class {})())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(HtmlEngine.getValue(new (class Class {}))).to.equal(null);
            });

            it('Should return null when value parameter is a class declaration', () => {
                expect(HtmlEngine.getValue(class Class {})).to.equal(null);
            });
        });
    });
});
