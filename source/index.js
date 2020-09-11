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

export function setId(element, id) {                                        //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isValidId(value) {              //
    return UtilityEngine.isFilledString(value); //
}

export function getById(id) {                                       //
    return isValidId(id) ? getDocument().getElementById(id) : null; //
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

// ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗
// ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
// ║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗
// ╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
//  ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
//  ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

export function setValue(element, value = '') {                                 //
    if (isValidId(element)) element = getById(element);                         //

    return isElement(element) && `${(element.value = value)}` === `${value}`;   //
}

export function getValue(element) {                                             //
    if (isValidId(element)) element = getById(element);                         //

    return isElement(element) ? element.value : null;                           //
}

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function addClasses(element, classNames) {       //
    if (isValidId(element)) element = getById(element); //

    classNames = UtilityEngine.toArray(classNames);     //

    return UtilityEngine.isFilledArray(classNames) &&   //
        classNames.every((className) => {               //
            return addClass(element, className);        //
        });
}

export function removeClasses(element, classNames) {    //
    if (isValidId(element)) element = getById(element); //

    classNames = UtilityEngine.toArray(classNames);     //

    return UtilityEngine.isFilledArray(classNames) &&   //
        classNames.every((className) => {               //
            return removeClass(element, className);     //
        });
}

export function toggleClasses(element, classNames) {    //
    if (isValidId(element)) element = getById(element); //

    classNames = UtilityEngine.toArray(classNames);     //

    return UtilityEngine.isFilledArray(classNames) &&   //
        classNames.every((className) => {               //
            return toggleClass(element, className);     //
        });
}

export function addClass(element, className) {                  //
    if (isValidId(element)) element = getById(element);         //

    return isElement(element) && isValidClassName(className) ?  //
        element.classList.add(className) || true :              //
        false;                                                  //
}

export function removeClass(element, className) {               //
    if (isValidId(element)) element = getById(element);         //

    return isElement(element) && isValidClassName(className) ?  //
        element.classList.remove(className) || true :           //
        false;                                                  //
}

export function toggleClass(element, className) {   //
    return hasClass(element, className) ?           //
        removeClass(element, className) :           //
        addClass(element, className);               //
}

export function hasClasses(element, classNames = []) {              //
    if (isValidId(element)) element = getById(element);             //

    return !UtilityEngine.toArray(classNames).some((className) => { //
        return !hasClass(element, className);                       //
    });
}

export function hasClass(element, className) {      //
    return getClasses(element).includes(className); //
}

export function isValidClassName(value) {       //
    return UtilityEngine.isFilledString(value); //
}

export function getClasses(element) {                               //
    if (isValidId(element)) element = getById(element);             //

    return isElement(element) ? Array.from(element.classList) : []; //
}

export function getByClasses() {                                            //
    throw new Error('The provided function has not yet been implemented');  //
}

export function getByClass() {                                              //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
// ╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝╚═════╗ ║
// ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗╔═════╝ ║
// ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function addStyles(element, styles) {                                //
    throw new Error('The provided function has not yet been implemented');  //
}

export function removeStyles(element, styleNames) {                         //
    throw new Error('The provided function has not yet been implemented');  //
}

export function addStyle(element, style) {                                  //
    throw new Error('The provided function has not yet been implemented');  //
}

export function removeStyle(element, styleName) {                           //
    throw new Error('The provided function has not yet been implemented');  //
}

export function hasStyles(element, styles) {                                //
    throw new Error('The provided function has not yet been implemented');  //
}

export function hasStyle(element, styleName, styleValue) {  //
    if (isValidId(element)) element = getById(element);     //

    return isElement(element) &&                            //
        (isValidStyleName(styleName) ?                      //
        getStyle(element, styleName) === styleValue :       //
        isValidStyleValue(getStyle(element, styleName)));   //

}

export function isValidStyleValue(value) {      //
    return UtilityEngine.isFilledString(value); //
}

export function isValidStyleName(value) {       //
    return UtilityEngine.isFilledString(value); //
}

export function getStyles(element) {                    //
    if (isValidId(element)) element = getById(element); //

    return isElement(element) ?
        Object.fromEntries(Object.entries(element.style)
            .filter(([ , value]) => isValidStyleValue(value))) : {};
}

export function getStyle(element, styleName) {          //
    if (isValidId(element)) element = getById(element); //

    return isElement(element) &&                        //
        isValidStyleName(styleName) &&                  //
        isValidStyleValue(element.style[styleName]) ?   //
        element.style[styleName] :                      //
        undefined;                                      //
}

// ╔═══════╗╔════╗╔═╗╔═══════╗╔══════╗ ╔═╗      ╔═══════╗╔═══════╗
// ║ ╔═════╝║ ╔╗ ║║ ║║ ╔═══╗ ║║ ╔══╗ ║ ║ ║      ║ ╔═════╝╚╗ ╔══╗ ║
// ║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║║ ╚══╝ ╚╗║ ║      ║ ╚═════╗ ║ ║  ║ ║
// ║ ╔═════╝║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝ ║ ║  ║ ║
// ║ ╚═════╗║ ║║ ╚╝ ║║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔╝ ╚══╝ ║
// ╚═══════╝╚═╝╚════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function enable(element) {                                           //
    throw new Error('The provided function has not yet been implemented');  //
}

export function disable(element) {                                          //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isEnabled(element) {                                        //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isDisabled(element) {                                       //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝╚╗ ╔══╗ ║
//  ║ ║  ║ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗ ║ ║  ║ ║
//  ║ ║  ║ ║   ║ ║   ╚═════╗ ║║ ╔═════╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝ ║ ║  ║ ║
// ╔╝ ╚══╝ ║╔══╝ ╚══╗╔═════╝ ║║ ║      ║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗╔╝ ╚══╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝      ╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

export function show(element) {                                             //
    throw new Error('The provided function has not yet been implemented');  //
}

export function hide(element) {                                             //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isShown(element) {                                          //
    throw new Error('The provided function has not yet been implemented');  //
}

export function isHidden(element) {                                         //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔════╗╔═╗╔════╗╔═╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔╗ ║║ ║║ ╔═════╝║ ╔═══╗ ║         ║ ║   ║ ║╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ║
//    ║ ║   ║ ║║ ║║ ║║ ║║ ║║ ║║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║
//    ║ ║   ║ ║║ ║║ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ╔═══╗ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║║ ║║ ╚╝ ║║ ╚═════╗║ ║ ║ ╚═╗         ║ ║   ║ ║   ║ ║   ║ ║║ ║║ ║║ ╚═════╗
// ╚═══════╝╚═╝╚════╝╚═╝╚════╝╚═══════╝╚═╝ ╚═══╝         ╚═╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚═╝╚═══════╝

export function clearInnerHtml(element) {                                   //
    throw new Error('The provided function has not yet been implemented');  //
}

export function appendInnerHtml(element, innerHTML) {                       //
    throw new Error('The provided function has not yet been implemented');  //
}

export function setInnerHtml(element, innerHTML) {                          //
    throw new Error('The provided function has not yet been implemented');  //
}

export function getInnerHtml(element, innerHTML) {                          //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═╗
// ║ ╔═══╗ ║║ ║   ║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ║   ║ ║╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ║
// ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ╔═══╗ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║   ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ║   ║ ║   ║ ║   ║ ║║ ║║ ║║ ╚═════╗
// ╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚═╝╚═══════╝

export function getOuterHtml(element) {                                     //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║      ╚══╗ ╔══╝
//  ║ ║  ║ ║║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ║   ║ ║║ ║         ║ ║
//  ║ ║  ║ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║         ║ ║
// ╔╝ ╚══╝ ║║ ╚═════╗║ ║      ║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗   ║ ║
// ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝   ╚═╝

export default function(querySelector) {

}
