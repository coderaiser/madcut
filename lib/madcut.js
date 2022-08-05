import plugin, {CUT} from './plugin.js';
import {fix, find} from '@putout/processor-markdown';

const getMessage = (a) => a.message;

export const cut = async (source) => {
    const result = await fix(source, {
        plugins: [
            plugin,
        ]
    });
    
    return result.split(`${CUT}\n\n`);
}

export const infer = async (source) => {
    const result = await find(source, {
        plugins: [
            plugin,
        ]
    });
    
    return result.map(getMessage);
}

