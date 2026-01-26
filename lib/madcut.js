import {fix, find} from '@putout/processor-markdown';
import * as plugin from './plugin.js';

const {CUT} = plugin;
const toKebab = (a) => a
    .toLowerCase()
    .replace(' ', '-');

const getMessage = (a) => a.message;

export const cut = async (source) => {
    const result = await fix(source, {
        plugins: [plugin],
    });
    
    return result.split(`${CUT}\n\n`);
};

export const infer = async (source) => {
    const result = await find(source, {
        plugins: [plugin],
    });
    
    return result.map(getMessage);
};

export default async function madcut(markdown) {
    const [chapters, peaces] = await Promise.all([
        infer(markdown),
        cut(markdown),
    ]);
    
    const result = {};
    
    for (const [i, peace] of peaces.entries()) {
        if (!i) {
            result.index = peace;
            continue;
        }
        
        const name = toKebab(chapters[i - 1]);
        
        result[name] = peace;
    }
    
    return result;
}
