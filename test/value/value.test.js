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
                expect(htmlEngine().setValue('test-value', 'new-value')).to.equal(true);
            });

            it('Should return true when element parameter is an element', () => {
                expect(htmlEngine().setValue(element, 'new-value')).to.equal(true);
            });


            it('Should return false when element parameter is a unused identifier', () => {
                expect(htmlEngine().setValue('unused-test-value', 'new-value')).to.equal(false)
            });

            it('Should return false when element parameter is an empty string', () => {
                expect(htmlEngine().setValue('', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a whitespace', () => {
                expect(htmlEngine().setValue(' ', 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty primitive string', () => {
                expect(htmlEngine().setValue(String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine().setValue(new String(''), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is null', () => {
                expect(htmlEngine().setValue(null, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is NaN', () => {
                expect(htmlEngine().setValue(NaN, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is undefined', () => {
                expect(htmlEngine().setValue(undefined, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is false boolean', () => {
                expect(htmlEngine().setValue(false, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is true boolean', () => {
                expect(htmlEngine().setValue(true), 'new-value').to.equal(false);
            });

            it('Should return false when element parameter is an empty object', () => {
                expect(htmlEngine().setValue({}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is an empty array', () => {
                expect(htmlEngine().setValue([], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a function', () => {
                expect(htmlEngine().setValue(function () {}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled object', () => {
                expect(htmlEngine().setValue({foo: 'bar'}, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a number', () => {
                expect(htmlEngine().setValue(1, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a zero', () => {
                expect(htmlEngine().setValue(0)).to.equal(false);
            });

            it('Should return false when element parameter is a positive zero', () => {
                expect(htmlEngine().setValue(+0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a negative zero', () => {
                expect(htmlEngine().setValue(-0, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a primitive number', () => {
                expect(htmlEngine().setValue(Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a wrapped primitive number', () => {
                expect(htmlEngine().setValue(new Number('1'), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is positive infinity', () => {
                expect(htmlEngine().setValue(Number.POSITIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is negative infinity', () => {
                expect(htmlEngine().setValue(Number.NEGATIVE_INFINITY, 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a filled array', () => {
                expect(htmlEngine().setValue([1, 2, 3], 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a map', () => {
                expect(htmlEngine().setValue(new Map(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a date', () => {
                expect(htmlEngine().setValue(new Date(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine().setValue(new (class Class {})(), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class instance', () => {
                expect(htmlEngine().setValue(new (class Class {}), 'new-value')).to.equal(false);
            });

            it('Should return false when element parameter is a class declaration', () => {
                expect(htmlEngine().setValue(class Class {}), 'new-value').to.equal(false);
            });
        });

        describe('#setValue(element, VALUE)', function () {
            it('Should return true when value parameter is an empty', () => {
                expect(htmlEngine().setValue(element)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is a filled string', () => {
                expect(htmlEngine().setValue(element, 'string')).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal('string');
            });

            it('Should return true when value parameter is a whitespace', () => {
                expect(htmlEngine().setValue(element, ' ')).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(' ');
            });

            it('Should return true when value parameter is an empty primitive string', () => {
                expect(htmlEngine().setValue(element, String(''))).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine().setValue(element, new String(''))).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is null', () => {
                expect(htmlEngine().setValue(element, null)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${null}`);
            });

            it('Should return true when value parameter is NaN', () => {
                expect(htmlEngine().setValue(element, NaN)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${NaN}`);
            });

            it('Should return true when value parameter is undefined', () => {
                expect(htmlEngine().setValue(element, undefined)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal('');
            });

            it('Should return true when value parameter is false boolean', () => {
                expect(htmlEngine().setValue(element, false)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${false}`);
            });

            it('Should return true when value parameter is true boolean', () => {
                expect(htmlEngine().setValue(element, true)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${true}`);
            });

            it('Should return true when value parameter is an empty object', () => {
                expect(htmlEngine().setValue(element, {})).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${{}}`);
            });

            it('Should return true when value parameter is an empty array', () => {
                expect(htmlEngine().setValue(element, [])).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${[]}`);
            });

            it('Should return true when value parameter is a function', () => {
                expect(htmlEngine().setValue(element, function () {})).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${function () {}}`);
            });

            it('Should return true when value parameter is a filled object', () => {
                expect(htmlEngine().setValue(element, {foo: 'bar'})).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${{foo: 'bar'}}`);
            });

            it('Should return true when value parameter is a number', () => {
                expect(htmlEngine().setValue(element, 1)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${1}`);
            });

            it('Should return true when value parameter is a zero', () => {
                expect(htmlEngine().setValue(element, 0)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${0}`);
            });

            it('Should return true when value parameter is a positive zero', () => {
                expect(htmlEngine().setValue(element, +0)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${+0}`);
            });

            it('Should return true when value parameter is a negative zero', () => {
                expect(htmlEngine().setValue(element, -0)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${-0}`);
            });

            it('Should return true when value parameter is a primitive number', () => {
                expect(htmlEngine().setValue(element, Number('1'))).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${Number('1')}`);
            });

            it('Should return true when value parameter is a wrapped primitive number', () => {
                expect(htmlEngine().setValue(element, new Number('1'))).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${new Number('1')}`);
            });

            it('Should return true when value parameter is positive infinity', () => {
                expect(htmlEngine().setValue(element, Number.POSITIVE_INFINITY)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${Number.POSITIVE_INFINITY}`);
            });

            it('Should return true when value parameter is negative infinity', () => {
                expect(htmlEngine().setValue(element, Number.NEGATIVE_INFINITY)).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${Number.NEGATIVE_INFINITY}`);
            });

            it('Should return true when value parameter is a filled array', () => {
                expect(htmlEngine().setValue(element, [1, 2, 3])).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${[1, 2, 3]}`);
            });

            it('Should return true when value parameter is a map', () => {
                expect(htmlEngine().setValue(element, new Map())).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${new Map()}`);
            });

            it('Should return true when value parameter is a date', () => {
                expect(htmlEngine().setValue(element, new Date())).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${new Date()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(htmlEngine().setValue(element, new (class Class {})())).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${new (class Class {})()}`);
            });

            it('Should return true when value parameter is a class instance', () => {
                expect(htmlEngine().setValue(element, new (class Class {}))).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${new (class Class {})}`);
            });

            it('Should return true when value parameter is a class declaration', () => {
                expect(htmlEngine().setValue(element, class Class {})).to.equal(true);
                expect(htmlEngine().getValue(element)).to.equal(`${class Class {}}`);
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
                expect(htmlEngine().getValue('test-value')).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });

            it('Should return element value when element parameter is an element', () => {
                expect(htmlEngine().getValue(element)).to.satisfy((value) => {
                    return document.getElementById('test-value').value === value;
                });
            });


            it('Should return null when element parameter is a unused identifier', () => {
                expect(htmlEngine().getValue('unused-test-value')).to.equal(null)
            });

            it('Should return null when value parameter is a whitespace', () => {
                expect(htmlEngine().getValue(' ')).to.equal(null);
            });

            it('Should return null when value parameter is an empty string', () => {
                expect(htmlEngine().getValue('')).to.equal(null);
            });

            it('Should return null when value parameter is an empty primitive string', () => {
                expect(htmlEngine().getValue(String(''))).to.equal(null);
            });

            it('Should return null when value parameter is an empty wrapped primitive string', () => {
                expect(htmlEngine().getValue(new String(''))).to.equal(null);
            });

            it('Should return null when value parameter is empty', () => {
                expect(htmlEngine().getValue()).to.equal(null);
            });

            it('Should return null when value parameter is null', () => {
                expect(htmlEngine().getValue(null)).to.equal(null);
            });

            it('Should return null when value parameter is NaN', () => {
                expect(htmlEngine().getValue(NaN)).to.equal(null);
            });

            it('Should return null when value parameter is undefined', () => {
                expect(htmlEngine().getValue(undefined)).to.equal(null);
            });

            it('Should return null when value parameter is false boolean', () => {
                expect(htmlEngine().getValue(false)).to.equal(null);
            });

            it('Should return null when value parameter is true boolean', () => {
                expect(htmlEngine().getValue(true)).to.equal(null);
            });

            it('Should return null when value parameter is an empty object', () => {
                expect(htmlEngine().getValue({})).to.equal(null);
            });

            it('Should return null when value parameter is an empty array', () => {
                expect(htmlEngine().getValue([])).to.equal(null);
            });

            it('Should return null when value parameter is a function', () => {
                expect(htmlEngine().getValue(function () {})).to.equal(null);
            });

            it('Should return null when value parameter is a filled object', () => {
                expect(htmlEngine().getValue({foo: 'bar'})).to.equal(null);
            });

            it('Should return null when value parameter is a number', () => {
                expect(htmlEngine().getValue(1)).to.equal(null);
            });

            it('Should return null when value parameter is a zero', () => {
                expect(htmlEngine().getValue(0)).to.equal(null);
            });

            it('Should return null when value parameter is a positive false', () => {
                expect(htmlEngine().getValue(+0)).to.equal(null);
            });

            it('Should return null when value parameter is a negative zero', () => {
                expect(htmlEngine().getValue(-0)).to.equal(null);
            });

            it('Should return null when value parameter is a primitive number', () => {
                expect(htmlEngine().getValue(Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is a wrapped primitive number', () => {
                expect(htmlEngine().getValue(new Number('1'))).to.equal(null);
            });

            it('Should return null when value parameter is positive infinity', () => {
                expect(htmlEngine().getValue(Number.POSITIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is negative infinity', () => {
                expect(htmlEngine().getValue(Number.NEGATIVE_INFINITY)).to.equal(null);
            });

            it('Should return null when value parameter is a filled array', () => {
                expect(htmlEngine().getValue([1, 2, 3])).to.equal(null);
            });

            it('Should return null when value parameter is a map', () => {
                expect(htmlEngine().getValue(new Map())).to.equal(null);
            });

            it('Should return null when value parameter is a date', () => {
                expect(htmlEngine().getValue(new Date())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(htmlEngine().getValue(new (class Class {})())).to.equal(null);
            });

            it('Should return null when value parameter is a class instance', () => {
                expect(htmlEngine().getValue(new (class Class {}))).to.equal(null);
            });

            it('Should return null when value parameter is a class declaration', () => {
                expect(htmlEngine().getValue(class Class {})).to.equal(null);
            });
        });
    });
});
