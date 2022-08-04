const report = () => 'Cut markdown';

export const CUT = `-- good place for cut --`;

export default {
    name: 'madcut',
    fix,
    traverse,
    report,
};

function fix({node, index}, tree) {
    const {value} = node.children[0];
    tree.children.splice(index, 0, {
        type: 'text',
        value: CUT,
    });
}

function traverse(tree, {push}) {
    for (const [index, node] of tree.children.entries()) {
        if (node.type !== 'heading')
            continue;
            
        if (node.depth !== 2)
            continue;
        
        push({
            node,
            index,
        });
    }
}

