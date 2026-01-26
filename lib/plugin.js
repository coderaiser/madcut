const REMOVE_COUNT = 0;

export const name = 'madcut';
export const CUT = `-- good place for cut --`;

export const report = ({node}) => node.children[0].value;

export const fix = ({index, delta}, tree) => {
    tree.children.splice(index + delta, REMOVE_COUNT, {
        type: 'paragraph',
        children: [{
            type: 'text',
            value: CUT,
        }],
    });
};

export const traverse = (tree, {push}) => {
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
};
