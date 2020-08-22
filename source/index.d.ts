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

export function setElementValue(element: any, value): boolean;
export function getElementValue(element: any): any;

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function insertElementClasses(element: any, classNames: string[]): boolean;
export function removeElementClasses(element: any, classNames: string[]): boolean;
export function toggleElementClasses(element: any, classNames: string[]): boolean;
export function insertElementClass(element: any, className: string): boolean;
export function removeElementClass(element: any, className: string): boolean;
export function toggleElementClass(element: any, className: string): boolean;
export function isElementClasses(element: any, classNames: string[]): boolean;
export function isElementClass(element: any, className: string): boolean;
export function isValidClassName(value: any): boolean;
export function getElementClasses(element: any): string[];

// ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
// ╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝╚═════╗ ║
// ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗╔═════╝ ║
// ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function insertElementStyles(element: any, styles: object[]): boolean;
export function removeElementStyles(element: any, styleNames: string[]): boolean;
export function insertElementStyle(element: any, styleName:string, styleValue: string): boolean;
export function removeElementStyle(element: any, styleName: string): boolean;
export function isElementStyleValue(element: any, styleName:string, styleValue: string): boolean;
export function isValidStyleValue(value: any): boolean;
export function isValidStyleName(value: any): boolean;
export function getElementStyleValue(element: any): string;
export function getElementStyles(element: any): object[];

// ╔═══════╗╔════╗╔═╗╔═══════╗╔══════╗ ╔═╗      ╔═══════╗╔═══════╗
// ║ ╔═════╝║ ╔╗ ║║ ║║ ╔═══╗ ║║ ╔══╗ ║ ║ ║      ║ ╔═════╝╚╗ ╔══╗ ║
// ║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║║ ╚══╝ ╚╗║ ║      ║ ╚═════╗ ║ ║  ║ ║
// ║ ╔═════╝║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝ ║ ║  ║ ║
// ║ ╚═════╗║ ║║ ╚╝ ║║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔╝ ╚══╝ ║
// ╚═══════╝╚═╝╚════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

export function enableElement(element: any): boolean;
export function disableElement(element: any): boolean;
export function isEnabledElement(element: any): boolean;
export function isDisabledElement(element: any): boolean;

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

export function clearElementInnerHtml(element: any): boolean;
export function appendElementInnerHtml(element: any, innerHTML): boolean;
export function setElementInnerHtml(element: any, innerHTML): boolean;
export function getElementInnerHtml(element: any, innerHTML): any;

// ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═╗
// ║ ╔═══╗ ║║ ║   ║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ║   ║ ║╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ║
// ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ╔═══╗ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║   ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ║   ║ ║   ║ ║   ║ ║║ ║║ ║║ ╚═════╗
// ╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚═╝╚═══════╝

export function getElementOuterHtml(element: any): any;

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

    export function setElementValue(element: any, value): boolean;
    export function getElementValue(element: any): any;

    export function insertElementClasses(element: any, classNames: string[]): boolean;
    export function removeElementClasses(element: any, classNames: string[]): boolean;
    export function toggleElementClasses(element: any, classNames: string[]): boolean;
    export function insertElementClass(element: any, className: string): boolean;
    export function removeElementClass(element: any, className: string): boolean;
    export function toggleElementClass(element: any, className: string): boolean;
    export function isElementClasses(element: any, classNames: string[]): boolean;
    export function isElementClass(element: any, className: string): boolean;
    export function isValidClassName(value: any): boolean;

    export function insertElementStyles(element: any, styles: object[]): boolean;
    export function removeElementStyles(element: any, styleNames: string[]): boolean;
    export function insertElementStyle(element: any, styleName:string, styleValue: string): boolean;
    export function removeElementStyle(element: any, styleName: string): boolean;
    export function isElementStyleValue(element: any, styleName:string, styleValue: string): boolean;
    export function isValidStyleValue(value: any): boolean;
    export function isValidStyleName(value: any): boolean;
    export function getElementStyleValue(element: any): string;
    export function getElementStyles(element: any): object[];

    export function enableElement(element: any): boolean;
    export function disableElement(element: any): boolean;
    export function isEnabledElement(element: any): boolean;
    export function isDisabledElement(element: any): boolean;

    export function showElement(element: any): boolean;
    export function hideElement(element: any): boolean;
    export function isShownElement(element: any): boolean;
    export function isHiddenElement(element: any): boolean;

    export function clearElementInnerHtml(element: any): boolean;
    export function appendElementInnerHtml(element: any, innerHTML): boolean;
    export function setElementInnerHtml(element: any, innerHTML): boolean;
    export function getElementInnerHtml(element: any, innerHTML): any;

    export function getElementOuterHtml(element: any): any;
}
