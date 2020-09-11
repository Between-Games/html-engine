// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚══╗ ║║ ║   ╚╗ ╔══╗ ║   ╚══╗ ╔══╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗╔══╝ ╚╝ ║    ║ ║  ║ ║      ║ ║   ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝║ ╔╗ ╔══╝    ║ ║  ║ ║      ║ ║   ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║║ ╚══╗╔═╗╔╝ ╚══╝ ║╔═╗   ║ ║   ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝

// ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗
// ║ ╔╗ ╔╗ ║║ ╔═══╗ ║╚╗ ╔══╗ ║║ ║   ║ ║║ ║      ║ ╔═════╝
// ║ ║║ ║║ ║║ ║   ║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ╚═════╗
// ║ ║║ ║║ ║║ ║   ║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ╔═════╝
// ║ ║║ ║║ ║║ ╚═══╝ ║╔╝ ╚══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
// ╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

declare module 'htmlEngine' {
    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗
    // ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║      ╚══╗ ╔══╝
    //  ║ ║  ║ ║║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ║   ║ ║║ ║         ║ ║
    //  ║ ║  ║ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ║         ║ ║
    // ╔╝ ╚══╝ ║║ ╚═════╗║ ║      ║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗   ║ ║
    // ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝   ╚═╝

    export default function(querySelector: string): any;

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

    export function setId(element: object, id: string): boolean;
    export function isValidId(value: any): boolean;
    export function getById(id: string): any;

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

    export function setValue(element: object, value: string);

    export function getValue(element: object): string;

    // ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═════╝
    // ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ╚═════╗
    // ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║║ ╔═════╝╚═════╗ ║
    // ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║║ ╚═════╗╔═════╝ ║
    // ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    export function addClasses(element: object, classNames: string[]): boolean;
    export function removeClasses(element: object, classNames: string[]): boolean;
    export function toggleClasses(element: object, classNames: string[]): boolean;

    export function addClass(element: object, classNames: string): boolean;
    export function removeClass(element: object, classNames: string): boolean;
    export function toggleClass(element: object, classNames: string): boolean;

    export function hasClasses(element: object, classNames: string[]): boolean;
    export function hasClass(element: object, classNames: string): boolean;

    export function isValidClassName(value: any): string;

    export function getClasses(element: object): string[];
    export function getByClasses(classNames: string[]): any[];
    export function getByClass(className: string): any;

    // ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═╗      ╔═══════╗╔═══════╗
    // ║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═════╝
    // ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
    // ╚═════╗ ║   ║ ║   ╚═════╗ ║║ ║      ║ ╔═════╝╚═════╗ ║
    // ╔═════╝ ║   ║ ║   ╔═════╝ ║║ ╚═════╗║ ╚═════╗╔═════╝ ║
    // ╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    export function addStyles(element: object, styles: object[]): boolean;
    export function removeStyles(element: object, styleNames: string[]): boolean;

    export function addStyle(element: object, style: object): boolean;
    export function removeStyle(element: object, styleName: string): boolean;

    export function hasStyleValue(element: object, styleName: string, styleValue: string): boolean;
    export function hasStyle(element: string, styleName: string): boolean;

    export function isValidStyleValue(value: any): boolean;
    export function isValidStyleName(value: any): boolean;

    export function getStyleValue(element: object): string;
    export function getStyles(element: object): object;

    // ╔═══════╗╔════╗╔═╗╔═══════╗╔══════╗ ╔═╗      ╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ╔╗ ║║ ║║ ╔═══╗ ║║ ╔══╗ ║ ║ ║      ║ ╔═════╝╚╗ ╔══╗ ║
    // ║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║║ ╚══╝ ╚╗║ ║      ║ ╚═════╗ ║ ║  ║ ║
    // ║ ╔═════╝║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝ ║ ║  ║ ║
    // ║ ╚═════╗║ ║║ ╚╝ ║║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔╝ ╚══╝ ║
    // ╚═══════╝╚═╝╚════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝

    export function enable(element: object): boolean;
    export function disable(element: object): boolean;

    export function isEnabled(element: object): boolean;
    export function isDisabled(element: object): boolean;

    // ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗
    // ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝╚╗ ╔══╗ ║
    //  ║ ║  ║ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗ ║ ║  ║ ║
    //  ║ ║  ║ ║   ║ ║   ╚═════╗ ║║ ╔═════╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝ ║ ║  ║ ║
    // ╔╝ ╚══╝ ║╔══╝ ╚══╗╔═════╝ ║║ ║      ║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗╔╝ ╚══╝ ║
    // ╚═══════╝╚═══════╝╚═══════╝╚═╝      ╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    export function show(element: object): boolean;
    export function hide(element: object): boolean;
    export function isShown(element: object): boolean;
    export function isHidden(element: object): boolean;

    // ╔═══════╗╔════╗╔═╗╔════╗╔═╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═╗
    // ╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔╗ ║║ ║║ ╔═════╝║ ╔═══╗ ║         ║ ║   ║ ║╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ║
    //    ║ ║   ║ ║║ ║║ ║║ ║║ ║║ ║║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║
    //    ║ ║   ║ ║║ ║║ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ╔═══╗ ║   ║ ║   ║ ║║ ║║ ║║ ║
    // ╔══╝ ╚══╗║ ║║ ╚╝ ║║ ║║ ╚╝ ║║ ╚═════╗║ ║ ║ ╚═╗         ║ ║   ║ ║   ║ ║   ║ ║║ ║║ ║║ ╚═════╗
    // ╚═══════╝╚═╝╚════╝╚═╝╚════╝╚═══════╝╚═╝ ╚═══╝         ╚═╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚═╝╚═══════╝

    export function clearInnerHtml(element: object): boolean;
    export function appendInnerHtml(element: object, innerHTML: string): boolean;
    export function setInnerHtml(element: object, innerHTML: string): boolean;
    export function getInnerHtml(element: object): boolean;

    // ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═╗
    // ║ ╔═══╗ ║║ ║   ║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ║   ║ ║╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ║
    // ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║
    // ║ ║   ║ ║║ ║   ║ ║   ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ╔═══╗ ║   ║ ║   ║ ║║ ║║ ║║ ║
    // ║ ╚═══╝ ║║ ╚═══╝ ║   ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ║   ║ ║   ║ ║   ║ ║║ ║║ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚═╝╚═══════╝

    export function getOuterHtml(element: object): boolean;
}

