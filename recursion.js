//recursion example

function countdown(num){
    if(num === 0)return;
    countdown(num-1);
    console.log(num)
}
countdown(10);

let makeTree = () => {
    let node = {}
 categories
 .filter(c => c.parent === parent)
 .forEach(c => node[c.id]= makeTree(categories, c.id))
 return node
}
let categories = [
    {id: 'animals', 'parent': null},
    {id: 'animals', 'parent':'animals'},
    {id: 'animals', 'parent':'mammals'},
    {id: 'animals', 'parent':'mammals'},
    {id: 'animals', 'parent':'dogs'},
    {id: 'animals', 'parent':'dogs'},
    {id: 'animals', 'parent':'cats'},
    {id: 'animals', 'parent':'cats'} 
]

console.log(
    JSON.stringify(
        makeTree(categories, null)
        , null, 2)
    )
 