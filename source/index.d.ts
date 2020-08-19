export function getWindow(): object;
export function getDocument(): object;

export function isElement(value: any): boolean;

declare module 'HtmlEngine' {
    export function getWindow(): object;
    export function getDocument(): object;

    export function isElement(value: any): boolean;
}