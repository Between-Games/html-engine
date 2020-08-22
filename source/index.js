// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚══╗ ║║ ║   ╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗╔══╝ ╚╝ ║       ║ ║  ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝║ ╔╗ ╔══╝       ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║║ ╚══╗╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import * as UtilityEngine from '@sarc-test/utility-engine';

// ╔═╗╔═╗╔═╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═╗╔═╗╔═╗
// ║ ║║ ║║ ║╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═══╗ ║║ ║║ ║║ ║
// ║ ║║ ║║ ║   ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║
// ║ ║║ ║║ ║   ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║
// ║ ╚╝ ╚╝ ║╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═══╝ ║║ ╚╝ ╚╝ ║
// ╚═══════╝╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝

export function getWindow() {   //
    return window;              //
}

// ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
//  ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
//  ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
// ╔╝ ╚══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

export function getDocument() { //
    return document;            //
}

// ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝╚╗ ╔══╗ ║
//    ║ ║    ║ ║  ║ ║
//    ║ ║    ║ ║  ║ ║
// ╔══╝ ╚══╗╔╝ ╚══╝ ║
// ╚═══════╝╚═══════╝

export function setElementId(element, id) {                                 //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isValidElementId(value) {       //
    return UtilityEngine.isFilledString(value); //
}

export function getElementById(id) {        //
    return isValidElementId(id) ?           //
        getDocument().getElementById(id) :  //
        null;                               //
}

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
// ║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
// ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

export function isElement(value) {      //
    return value instanceof Element ||  //
        value instanceof HTMLDocument;  //
}

function _getElement(value = {}) {                              //
    return isElement(value) ? value : getElementById(value);    //
}

// ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗
// ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
// ║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗
// ╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
//  ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
//  ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

export function setElementValue(element, value = '') {                          //
    if (isValidElementId(element)) element = getElementById(element);           //

    return isElement(element) && `${(element.value = value)}` === `${value}`;   //
}

export function getElementValue(element) {                              //
    if (isValidElementId(element)) element = getElementById(element);   //

    return isElement(element) ? element.value : null;                   //
}

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function insertElementClasses(element, classNames) {                 //
    throw new Error('The provided function has not yet been implemented');  //
}

export function removeElementClasses(element, classNames) {                 //
    throw new Error('The provided function has not yet been implemented');  //
}

export function toggleElementClasses(element, classNames) {                 //
    throw new Error('The provided function has not yet been implemented');  //
}

export function insertElementClass(element, className) {                    //
    throw new Error('The provided function has not yet been implemented');  //
}

export function removeElementClass(element, className) {                    //
    throw new Error('The provided function has not yet been implemented');  //
}

export function toggleElementClass(element, className) {                    //
    throw new Error('The provided function has not yet been implemented');  //
}

export function areElementClasses(element, classNames = []) {       //
    return !UtilityEngine.toArray(classNames).some((className) => { //
        return !isElementClass(element, className);                 //
    });
}

export function isElementClass(element, className) {        //
    return getElementClasses(element).includes(className);  //
}

export function isValidClassName(value) {       //
    return UtilityEngine.isFilledString(value); //
}

export function getElementClasses(element) {                            //
    if (isValidElementId(element)) element = getElementById(element);   //

    return isElement(element) ? Array.from(element.classList) : [];     //
}

// ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
// ╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝╚═════╗ ║
// ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗╔═════╝ ║
// ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function insertElementStyles(element, styles) {                      //
    throw new Error('The provided function has not yet been implemented');  //
}

export function removeElementStyles(element, styleNames) {                  //
    throw new Error('The provided function has not yet been implemented');  //
}

export function insertElementStyle(element, style) {                        //
    throw new Error('The provided function has not yet been implemented');  //
}

export function removeElementStyle(element, styleName) {                    //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isElementStyleValue(element, styleName, styleValue) {       //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isElementStyle(element, styleName) {                        //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isValidStyleValue(value) {                                  //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isValidStyleName(value) {                                   //
    throw new Error('The provided function has not yet been implemented');  //
}

export function getElementStyleValue(element) {                             //
    throw new Error('The provided function has not yet been implemented');  //
}

export function getElementStyles(element) {                                 //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔════╗╔═╗╔═══════╗╔══════╗ ╔═╗      ╔═══════╗╔═══════╗
// ║ ╔═════╝║ ╔╗ ║║ ║║ ╔═══╗ ║║ ╔══╗ ║ ║ ║      ║ ╔═════╝╚╗ ╔══╗ ║
// ║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║║ ╚══╝ ╚╗║ ║      ║ ╚═════╗ ║ ║  ║ ║
// ║ ╔═════╝║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝ ║ ║  ║ ║
// ║ ╚═════╗║ ║║ ╚╝ ║║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔╝ ╚══╝ ║
// ╚═══════╝╚═╝╚════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function enableElement(element) {                                    //
    throw new Error('The provided function has not yet been implemented');  //
}

export function disableElement(element) {                                   //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isEnabledElement(element) {                                 //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isDisabledElement(element) {                                //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝╚╗ ╔══╗ ║
//  ║ ║  ║ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗ ║ ║  ║ ║
//  ║ ║  ║ ║   ║ ║   ╚═════╗ ║║ ╔═════╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝ ║ ║  ║ ║
// ╔╝ ╚══╝ ║╔══╝ ╚══╗╔═════╝ ║║ ║      ║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗╔╝ ╚══╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝      ╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

export function showElement(element) {                                      //
    throw new Error('The provided function has not yet been implemented');  //
}

export function hideElement(element) {                                      //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isShownElement(element) {                                   //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isHiddenElement(element) {                                  //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔════╗╔═╗╔════╗╔═╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔╗ ║║ ║║ ╔═════╝║ ╔═══╗ ║         ║ ║   ║ ║╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ║
//    ║ ║   ║ ║║ ║║ ║║ ║║ ║║ ║║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║
//    ║ ║   ║ ║║ ║║ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ╔═══╗ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║║ ║║ ╚╝ ║║ ╚═════╗║ ║ ║ ╚═╗         ║ ║   ║ ║   ║ ║   ║ ║║ ║║ ║║ ╚═════╗
// ╚═══════╝╚═╝╚════╝╚═╝╚════╝╚═══════╝╚═╝ ╚═══╝         ╚═╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚═╝╚═══════╝

export function clearElementInnerHtml(element) {                            //
    throw new Error('The provided function has not yet been implemented');  //
}

export function appendElementInnerHtml(element, innerHTML) {                //
    throw new Error('The provided function has not yet been implemented');  //
}

export function setElementInnerHtml(element, innerHTML) {                   //
    throw new Error('The provided function has not yet been implemented');  //
}

export function getElementInnerHtml(element, innerHTML) {                   //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═╗
// ║ ╔═══╗ ║║ ║   ║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ║   ║ ║╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ║
// ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ╔═══╗ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║   ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ║   ║ ║   ║ ║   ║ ║║ ║║ ║║ ╚═════╗
// ╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚═╝╚═══════╝

export function getElementOuterHtml(element) {                              //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
// ║ ╚═════╗╔══╝ ╚╝ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
// ║ ╔═════╝║ ╔╗ ╔══╝║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ║ ╚═════╗║ ║║ ╚══╗║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚════╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

export default {
    getWindow,

    getDocument,

    setElementId,
    isValidElementId,
    getElementById,

    isElement,

    setElementValue,
    getElementValue,

    insertElementClasses,
    removeElementClasses,
    toggleElementClasses,
    insertElementClass,
    removeElementClass,
    toggleElementClass,
    areElementClasses,
    isElementClass,
    isValidClassName,
    getElementClasses,

    insertElementStyles,
    removeElementStyles,
    insertElementStyle,
    removeElementStyle,
    isElementStyleValue,
    isElementStyle,
    isValidStyleValue,
    isValidStyleName,
    getElementStyleValue,
    getElementStyles,

    enableElement,
    disableElement,
    isEnabledElement,
    isDisabledElement,
    showElement,
    hideElement,
    isShownElement,
    isHiddenElement,

    clearElementInnerHtml,
    appendElementInnerHtml,
    setElementInnerHtml,
    getElementInnerHtml,

    getElementOuterHtml,
}