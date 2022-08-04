import plugin, {CUT} from './plugin.js';
import {fix} from '@putout/processor-markdown';

export const madcut = async (source) => {
    const result = await fix(source, {
        plugins: [
            plugin,
        ]
    });
    
    return result.split(`${CUT}\n\n`);
}

