export function evalInSandbox(code: string, env: any) {
    code = 'with (env) {' + code + '}';
    // eslint-disable-next-line no-new-func
    const fn = new Function('env', code);

    const proxy = new Proxy(env, {
        has(target, key) {
            return true;
        },
        get(target, key, receiver) {
            if (key === Symbol.unscopables) {
                return undefined;
            }
            return Reflect.get(target, key, receiver);
        }
    });
    return fn(proxy);
}

export function variableToConsoleText(v: unknown) {
    if (typeof v === 'object') {
        return JSON.stringify(v);
    }
    return String(v);
}