// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚══╗ ║║ ║   ╚╗ ╔══╗ ║   ╚══╗ ╔══╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗╔══╝ ╚╝ ║    ║ ║  ║ ║      ║ ║   ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝║ ╔╗ ╔══╝    ║ ║  ║ ║      ║ ║   ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║║ ╚══╗╔═╗╔╝ ╚══╝ ║╔═╗   ║ ║   ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝

// ╔═╗╔═╗╔═╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═╗╔═╗╔═╗
// ║ ║║ ║║ ║╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═══╗ ║║ ║║ ║║ ║
// ║ ║║ ║║ ║   ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║
// ║ ║║ ║║ ║   ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║
// ║ ╚╝ ╚╝ ║╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═══╝ ║║ ╚╝ ╚╝ ║
// ╚═══════╝╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝

export function getWindow(): object;

// ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
//  ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
//  ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
// ╔╝ ╚══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

export function getDocument(): object;

// ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝╚╗ ╔══╗ ║
//    ║ ║    ║ ║  ║ ║
//    ║ ║    ║ ║  ║ ║
// ╔══╝ ╚══╗╔╝ ╚══╝ ║
// ╚═══════╝╚═══════╝

export function setElementId(element: any, id: string): boolean;
export function isValidElementId(value: any): boolean;
export function getElementById(id: string): any;

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
// ║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
// ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

export function isElement(value: any): boolean;

// ╔═╗   ╔═╗╔═══════╗╔═╗      ╔═╗   ╔═╗╔═══════╗
// ║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
// ║ ╚╗ ╔╝ ║║ ╚═══╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗
// ╚╗ ║ ║ ╔╝║ ╔═══╗ ║║ ║      ║ ║   ║ ║║ ╔═════╝
//  ║ ╚═╝ ║ ║ ║   ║ ║║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
//  ╚═════╝ ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

export function setValue(element: any, value): boolean;
export function getValue(element: any): any;

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function insertClasses(element: any, classNames: string[]): boolean;
export function removeClasses(element: any, classNames: string[]): boolean;
export function insertClass(element: any, className: string): boolean;
export function removeClass(element: any, className: string): boolean;
export function hasClasses(element: any, classNames: string[]): boolean;
export function hasClass(element: any, className: string): boolean;
export function isClassname(value: any): boolean;

// ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
// ╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝╚═════╗ ║
// ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗╔═════╝ ║
// ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function insertStyles(element: any, styles): boolean;
export function removeStyles(element: any, styleNames): boolean;
export function insertStyle(element: any, style): boolean;
export function removeStyle(element: any, styleName): boolean;
export function hasStyleValue(element: any, styleName, styleValue): boolean;
export function hasStyle(element: any, styleName): boolean;
export function isStyleName(value: any): boolean;
export function isStyleValue(value: any): boolean;

// ╔═══════╗╔════╗╔═╗╔═══════╗╔══════╗ ╔═╗      ╔═══════╗╔═══════╗
// ║ ╔═════╝║ ╔╗ ║║ ║║ ╔═══╗ ║║ ╔══╗ ║ ║ ║      ║ ╔═════╝╚╗ ╔══╗ ║
// ║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║║ ╚══╝ ╚╗║ ║      ║ ╚═════╗ ║ ║  ║ ║
// ║ ╔═════╝║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝ ║ ║  ║ ║
// ║ ╚═════╗║ ║║ ╚╝ ║║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔╝ ╚══╝ ║
// ╚═══════╝╚═╝╚════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function enableElement(element: any): boolean;
export function disableElement(element: any): boolean;
export function isEnabledElement(element: any): boolean;
export function idDisabledElement(element: any): boolean;

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝╚╗ ╔══╗ ║
//  ║ ║  ║ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗ ║ ║  ║ ║
//  ║ ║  ║ ║   ║ ║   ╚═════╗ ║║ ╔═════╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝ ║ ║  ║ ║
// ╔╝ ╚══╝ ║╔══╝ ╚══╗╔═════╝ ║║ ║      ║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗╔╝ ╚══╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝      ╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

export function showElement(element: any): boolean;
export function hideElement(element: any): boolean;
export function isShownElement(element: any): boolean;
export function isHiddenElement(element: any): boolean;

// ╔═══════╗╔════╗╔═╗╔════╗╔═╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔╗ ║║ ║║ ╔═════╝║ ╔═══╗ ║         ║ ║   ║ ║╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ║
//    ║ ║   ║ ║║ ║║ ║║ ║║ ║║ ║║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║
//    ║ ║   ║ ║║ ║║ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ╔═══╗ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║║ ║║ ╚╝ ║║ ╚═════╗║ ║ ║ ╚═╗         ║ ║   ║ ║   ║ ║   ║ ║║ ║║ ║║ ╚═════╗
// ╚═══════╝╚═╝╚════╝╚═╝╚════╝╚═══════╝╚═╝ ╚═══╝         ╚═╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚═╝╚═══════╝

export function clearInnerHtml(element: any): boolean;
export function appendInnerHtml(element: any, innerHTML): boolean;
export function setInnerHtml(element: any, innerHTML): boolean;
export function getInnerHtml(element: any, innerHTML): any;

// ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═╗
// ║ ╔═══╗ ║║ ║   ║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ║   ║ ║╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ║
// ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ╔═══╗ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║   ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ║   ║ ║   ║ ║   ║ ║║ ║║ ║║ ╚═════╗
// ╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚═╝╚═══════╝

export function getOuterHtml(element: any): any;

// ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗
// ║ ╔╗ ╔╗ ║║ ╔═══╗ ║╚╗ ╔══╗ ║║ ║   ║ ║║ ║      ║ ╔═════╝
// ║ ║║ ║║ ║║ ║   ║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ╚═════╗
// ║ ║║ ║║ ║║ ║   ║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ╔═════╝
// ║ ║║ ║║ ║║ ╚═══╝ ║╔╝ ╚══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
// ╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

declare module 'HtmlEngine' {
    export function getWindow(): object;

    export function getDocument(): object;

    export function setElementId(element: any, id: string): boolean;
    export function isValidElementId(value: any): boolean;
    export function getElementById(id: string): any;

    export function isElement(value: any): boolean;

    export function setValue(element: any, value): boolean;
    export function getValue(element: any): any;

    export function insertClasses(element: any, classNames: string[]): boolean;
    export function removeClasses(element: any, classNames: string[]): boolean;
    export function insertClass(element: any, className: string): boolean;
    export function removeClass(element: any, className: string): boolean;
    export function hasClasses(element: any, classNames: string[]): boolean;
    export function hasClass(element: any, className: string): boolean;
    export function isClassname(value: any): boolean;

    export function insertStyles(element: any, styles): boolean;
    export function removeStyles(element: any, styleNames): boolean;
    export function insertStyle(element: any, style): boolean;
    export function removeStyle(element: any, styleName): boolean;
    export function hasStyleValue(element: any, styleName, styleValue): boolean;
    export function hasStyle(element: any, styleName): boolean;
    export function isStyleName(value: any): boolean;
    export function isStyleValue(value: any): boolean;

    export function enableElement(element: any): boolean;
    export function disableElement(element: any): boolean;
    export function isEnabledElement(element: any): boolean;
    export function idDisabledElement(element: any): boolean;

    export function showElement(element: any): boolean;
    export function hideElement(element: any): boolean;
    export function isShownElement(element: any): boolean;
    export function isHiddenElement(element: any): boolean;

    export function clearInnerHtml(element: any): boolean;
    export function appendInnerHtml(element: any, innerHTML): boolean;
    export function setInnerHtml(element: any, innerHTML): boolean;
    export function getInnerHtml(element: any, innerHTML): any;

    export function getOuterHtml(element: any): any;
}
