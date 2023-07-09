import {
    test,
    stub,
} from 'supertape';
import cli from './cli.js';

test('madcut: cli: readFile', async (t) => {
    const readFile = stub().returns('');
    const writeFile = stub();
    
    await cli({
        readFile,
        writeFile,
    });
    
    t.calledWith(readFile, ['README.md', 'utf8']);
    t.end();
});

test('madcut: cli: writeFile', async (t) => {
    const readFile = stub().returns('## hello world');
    const writeFile = stub();
    
    await cli({
        readFile,
        writeFile,
    });
    
    t.calledWith(writeFile, ['hello-world.md', '## hello world\n']);
    t.end();
});
