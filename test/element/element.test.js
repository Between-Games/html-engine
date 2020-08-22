// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║         ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║          ║ ║  ║ ╚═════╗
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║         ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║          ║ ║  ╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║   ╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝   ╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ║      ║ ║      ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝
// ╔╝ ╚══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element

const hyperlinkElement = document.createElement('a');

const metadataElements = {
    baseElement: document.createElement('base'),
    headElement: document.createElement('head'),
    linkElement: document.createElement('link'),
    metaElement: document.createElement('meta'),
    styleElement: document.createElement('style'),
    titleElement: document.createElement('title'),
};

const contentElements = {
    addressElement: document.createElement('address'),
    articleElement: document.createElement('article'),
    asideElement: document.createElement('aside'),
    footerElement: document.createElement('footer'),
    headerElement: document.createElement('header'),
    hGroupElement: document.createElement('hGroup'),
    h1Element: document.createElement('h1'),
    h2Element: document.createElement('h2'),
    h3Element: document.createElement('h3'),
    h4Element: document.createElement('h4'),
    h5Element: document.createElement('h5'),
    h6Element: document.createElement('h6'),
    mainElement: document.createElement('main'),
    navElement: document.createElement('nav'),
    sectionElement: document.createElement('section'),
};

const inlineElements = {
    hyperlinkElement: document.createElement('a'),
    attentionElement: document.createElement('b'),
    abbreviationElement: document.createElement('abbr'),
    bidirectionalIsolateElement: document.createElement('bdi'),
    bidirectionalOverrideElement: document.createElement('bdo'),
    lineBreakElement: document.createElement('br'),
    citationElement: document.createElement('cite'),
    codeElement: document.createElement('code'),
    dataElement: document.createElement('data'),
    definitionElement: document.createElement('dfn'),
    emphasisElement: document.createElement('em'),
    idiomaticElement: document.createElement('i'),
    keyboardElement: document.createElement('kbd'),
    markedElement: document.createElement('mark'),
    quotationElement: document.createElement('q'),
    rubyBaseElement: document.createElement('rb'),
    rubyParenthesisElement: document.createElement('rp'),
    rubyContainerElement: document.createElement('rtc'),
    rubyTextElement: document.createElement('rt'),
    rubyElement: document.createElement('ruby'),
    strikethroughElement: document.createElement('s'),
    sampleElement: document.createElement('samp'),
    smallElement: document.createElement('small'),
    spanElement: document.createElement('span'),
    strongElement: document.createElement('strong'),
    subscriptElement: document.createElement('sub'),
    superscriptElement: document.createElement('sup'),
    timeElement: document.createElement('time'),
    UnarticulatedElement: document.createElement('u'),
    variableElement: document.createElement('var'),
    wordBreakOpportunityElement: document.createElement('wbr'),
};

const multimediaElements = {
    areaElement: document.createElement('area'),
    audioElement: document.createElement('audio'),
    imageElement: document.createElement('img'),
    mapElement: document.createElement('map'),
    trackElement: document.createElement('track'),
    videoElement: document.createElement('video'),
}

const embeddedContent = {
    embeddedElement: document.createElement('embed'),
    iframeElement: document.createElement('iframe'),
    objectElement: document.createElement('object'),
    paramElement: document.createElement('param'),
    pictureElement: document.createElement('picture'),
    sourceElement: document.createElement('source'),
}

const scriptingElement = {
    canvasElement: document.createElement('canvas'),
    noScriptElement: document.createElement('noscript'),
    scriptElement: document.createElement('script'),
}

const demarcationElements = {
    deletionElement: document.createElement('del'),
    insertionElement: document.createElement('ins'),
}

const tableElements = {
    tableCaptionElement: document.createElement('caption'),
    tableColumnGroupElement: document.createElement('colgroup'),
    tableColumnElement: document.createElement('col'),
    tableElement: document.createElement('t'),
    tableCellElement: document.createElement('td'),
    tableBodyElement: document.createElement('tbody'),
    tableFooterElement: document.createElement('tfoot'),
    tableHeaderElement: document.createElement('thead'),
    tableRowElement: document.createElement('tr'),
}

const formElements = {
    buttonElement: document.createElement('button'),
    datalistElement: document.createElement('datalist'),

    fieldsetElement: document.createElement('fieldset'),
    formElement: document.createElement('form'),
    inputElement: document.createElement('input'),
    labelElement: document.createElement('label'),
    legendElement: document.createElement('legend'),
    meterElement: document.createElement('meter'),
    optionGroupElement: document.createElement('optgroup'),
    optionElement: document.createElement('option'),
    outputElement: document.createElement('output'),
    progressElement: document.createElement('progress'),
    selectElement: document.createElement('select'),
    textareaElement: document.createElement('textarea'),
}

const interactiveElements = {
    detailsElement: document.createElement('details'),
    dialogElement: document.createElement('dialog'),
    menuElement: document.createElement('menu'),
    summaryElement: document.createElement('summary'),
}

const webComponentElements = {
    slotElement: document.createElement('slot'),
    templateElement: document.createElement('template'),
}

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
// ║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
// ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

describe('Element', function() {
// ╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
//    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
//    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
// ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
// ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#isElement(value)', function () {
        describe('#isElement(VALUE)', function () {
            for (const elementType in metadataElements) {
                it(`Should return true when value parameter is a metadata-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(metadataElements[elementType])).to.equal(true);
                });
            }

            for (const elementType in contentElements) {
                it(`Should return true when value parameter is a content-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(contentElements[elementType])).to.equal(true);
                });
            }

            for (const elementType in multimediaElements) {
                it(`Should return true when value parameter is a multimedia-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(multimediaElements[elementType])).to.equal(true);
                });
            }

            for (const elementType in inlineElements) {
                it(`Should return true when value parameter is a inline-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(inlineElements[elementType])).to.equal(true);
                });
            }

            for (const elementType in embeddedContent) {
                it(`Should return true when value parameter is a embedded-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(embeddedContent[elementType])).to.equal(true);
                });
            }

            for (const elementType in scriptingElement) {
                it(`Should return true when value parameter is a scripting-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(scriptingElement[elementType])).to.equal(true);
                });
            }

            for (const elementType in demarcationElements) {
                it(`Should return true when value parameter parameter is a demarcation-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(demarcationElements[elementType])).to.equal(true);
                });
            }

            for (const elementType in tableElements) {
                it(`Should return true when value parameter is a table-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(tableElements[elementType])).to.equal(true);
                });
            }

            for (const elementType in formElements) {
                it(`Should return true when value parameter is a form-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(formElements[elementType])).to.equal(true);
                });
            }

            for (const elementType in interactiveElements) {
                it(`Should return true when value parameter is a interaction-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(interactiveElements[elementType])).to.equal(true);
                });
            }

            for (const elementType in webComponentElements) {
                it(`Should return true when value parameter is a web components-related element (${elementType})`, () => {
                    expect(HtmlEngine.isElement(webComponentElements[elementType])).to.equal(true);
                });
            }

            it('Should return false when value parameter is empty', () => {
                expect(HtmlEngine.isElement()).to.equal(false);
            });

            it('Should return false when value parameter is null', () => {
                expect(HtmlEngine.isElement(null)).to.equal(false);
            });

            it('Should return false when value parameter is NaN', () => {
                expect(HtmlEngine.isElement(NaN)).to.equal(false);
            });

            it('Should return false when value parameter is undefined', () => {
                expect(HtmlEngine.isElement(undefined)).to.equal(false);
            });

            it('Should return false when value parameter is false boolean', () => {
                expect(HtmlEngine.isElement(false)).to.equal(false);
            });

            it('Should return false when value parameter is an empty string', () => {
                expect(HtmlEngine.isElement('')).to.equal(false);
            });

            it('Should return false when value parameter is true boolean', () => {
                expect(HtmlEngine.isElement(true)).to.equal(false);
            });

            it('Should return false when value parameter is an empty object', () => {
                expect(HtmlEngine.isElement({})).to.equal(false);
            });

            it('Should return false when value parameter is an empty array', () => {
                expect(HtmlEngine.isElement([])).to.equal(false);
            });

            it('Should return false when value parameter is a function', () => {
                expect(HtmlEngine.isElement(function () {})).to.equal(false);
            });

            it('Should return false when value parameter is a filled object', () => {
                expect(HtmlEngine.isElement({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value parameter is a number', () => {
                expect(HtmlEngine.isElement(1)).to.equal(false);
            });

            it('Should return false when value parameter is a zero', () => {
                expect(HtmlEngine.isElement(0)).to.equal(false);
            });

            it('Should return false when value parameter is a positive false', () => {
                expect(HtmlEngine.isElement(+0)).to.equal(false);
            });

            it('Should return false when value parameter is a negative zero', () => {
                expect(HtmlEngine.isElement(-0)).to.equal(false);
            });

            it('Should return false when value parameter is a primitive number', () => {
                expect(HtmlEngine.isElement(Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a wrapped primitive number', () => {
                expect(HtmlEngine.isElement(new Number('1'))).to.equal(false);
            });

            it('Should return false when value parameter is a filled string', () => {
                expect(HtmlEngine.isElement('string')).to.equal(false);
            });

            it('Should return false when value parameter is a primitive string', () => {
                expect(HtmlEngine.isElement(String('string'))).to.equal(false);
            });

            it('Should return false when value parameter is a wrapped primitive string', () => {
                expect(HtmlEngine.isElement(new String('string'))).to.equal(false);
            });

            it('Should return false when value parameter is a filled array', () => {
                expect(HtmlEngine.isElement([1, 2, 3])).to.equal(false);
            });

            it('Should return false when value parameter is a map', () => {
                expect(HtmlEngine.isElement(new Map())).to.equal(false);
            });

            it('Should return false when value parameter is a date', () => {
                expect(HtmlEngine.isElement(new Date())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlEngine.isElement(new (class Class {})())).to.equal(false);
            });

            it('Should return false when value parameter is a class instance', () => {
                expect(HtmlEngine.isElement(new (class Class {}))).to.equal(false);
            });

            it('Should return false when value parameter is a class declaration', () => {
                expect(HtmlEngine.isElement(class Class {})).to.equal(false);
            });
        });

    });
});