import {test} from 'supertape';
import montag from 'montag';

import {fix, find} from '@putout/processor-markdown';
import plugin from './plugin.js';

test('madcut: plugin: fix', async (t) => {
    const source = montag`
        # Hello
        ## World
    `;
    
    const result = await fix(source, {
        plugins: [
            plugin,
        ],
    });
    
    const expected = montag`
        # Hello
        
        -- good place for cut --
        
        ## World
    
    `;
    
    t.equal(result, expected);
    t.end();
});

test('madcut: plugin: find', async (t) => {
    const source = montag`
        # Hello
        ## World
    `;
    
    const result = await find(source, {
        plugins: [
            plugin,
        ],
    });
    
    const expected = [{
        message: 'World',
        position: {
            column: 1,
            line: 1,
        },
        rule: 'madcut (remark-lint)',
    }];
    
    t.deepEqual(result, expected);
    t.end();
});

