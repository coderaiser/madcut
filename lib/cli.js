import {
    cut,
    infer,
} from './madcut.js';

export default async ({readFile, log}) => {
    const markdown = await readFile('README.md', 'utf8');
    
    const [chapters, peaces] = await Promise.all([
        infer(markdown),
        cut(markdown),
    ]);
    
    for (const [i, peace] of peaces.entries()) {
        if (i)
            log('----', chapters[i - 1], peace);
    }
};

