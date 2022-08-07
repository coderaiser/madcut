import madcut from './madcut.js';

const {entries} = Object;

export default async ({readFile, writeFile}) => {
    const markdown = await readFile('README.md', 'utf8');
    const result = await madcut(markdown);
    
    for (const [name, data] of entries(result)) {
        writeFile(`${name}.md`, data);
    }
};

