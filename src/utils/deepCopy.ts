export function deepCopy(obj: any, cache: any[] = []) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const hit = cache.filter(c => c.original === obj)[0];
    if (hit) {
        return hit.copy;
    }
    const copy = Array.isArray(obj) ? <any>[] : {};
    cache.push({
        original: obj,
        copy
    })
    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache);
    })
    return copy;
}