const report = ({node}) => node.children[0].value;
const REMOVE_COUNT = 0;

export const CUT = `-- good place for cut --`;

export default {
    name: 'madcut',
    fix,
    traverse,
    report,
};

function fix({index, delta}, tree) {
    tree.children.splice(index + delta, REMOVE_COUNT, {
        type: 'paragraph',
        children: [{
            type: 'text',
            value: CUT,
        }],
    });
}

function traverse(tree, {push}) {
    let delta = -1;
    
    for (const [index, node] of tree.children.entries()) {
        if (node.type !== 'heading')
            continue;
        
        if (node.depth !== 2)
            continue;
        
        ++delta;
        
        push({
            node,
            index,
            delta,
        });
    }
}
