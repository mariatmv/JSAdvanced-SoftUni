function solve(arr) {
    let newArr = [];
    let initialNum = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            newArr.push(initialNum)
        } else {
            newArr.pop();
        }
        initialNum += 1;
    }
    return newArr.length > 0 ? newArr.join('\n') : 'Empty'
}

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']))
