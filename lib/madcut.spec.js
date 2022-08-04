import {test} from 'supertape';
import montag from 'montag';

import {madcut} from './madcut.js';

test('madsplit: split', async (t) => {
    const result = await madcut(montag`
        # Hello
        
        ## World
        
        This is the world
    `);
    
    const expected = [
        montag`
            # Hello\n\n
        `,
        montag`
            ## World
            
            This is the world\n
        `
    ]
    
    t.deepEqual(result, expected);
});

