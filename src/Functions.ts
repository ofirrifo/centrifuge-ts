export const isFunction = (value: any): boolean => {
    return typeof value === 'function';
};

export const isString = (value: any): boolean => {
    return typeof value === 'string';
};

export const log = (level: string, ...args: any[]): void => {
    if (console) {
        const logger = console[level];
        if (isFunction(logger)) {
            logger.apply(logger, args);
        }
    }
};

export const stripSlash = (value: string): string => {
    return value.replace(/\/$/, '');
};

export const startsWith = (value: string, prefix: string): boolean => {
    return value.lastIndexOf(prefix, 0) === 0;
};

export const endsWith = (value: string, suffix: string): boolean => {
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
};

export const errorExists = (data: any): boolean => {
    return 'error' in data && data.error !== null && data.error !== '';
};

export const objectToQuery = (object: any): string => {
    let p = [];
    for (const i in object) {
        if (object.hasOwnProperty(i)) {
            p.push(encodeURIComponent(i) + (object[i] ? '=' + encodeURIComponent(object[i]) : ''));
        }
    }
    return p.join('&');
};

export const anyToUint8Array = (data: any): Uint8Array => {
    data = JSON.stringify(data);
    const buffer = new Uint8Array(data.length);
    Array.prototype.forEach.call(data, (c, i) => buffer[i] = c.charCodeAt(0));
    return buffer;
};
