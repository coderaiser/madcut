import {test} from 'supertape';
import montag from 'montag';
import madcut, {
    cut,
    infer,
} from './madcut.js';

test('madcut: cut', async (t) => {
    const result = await cut(montag`
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
        `,
    ];
    
    t.deepEqual(result, expected);
    t.end();
});

test('madcut: full', async (t) => {
    const result = await madcut(montag`
        # Hello
        
        ## World
        
        This is the world
    `);
    
    const expected = {
        world: montag`
            ## World
            
            This is the world\n
        `,
        index: montag`
            # Hello\n\n
        `,
    };
    
    t.deepEqual(result, expected);
    t.end();
});

test('madcut: infer', async (t) => {
    const result = await infer(montag`
        # Hello
        
        ## World
        
        This is the world
    `);
    
    const expected = ['World'];
    
    t.deepEqual(result, expected);
    t.end();
});
