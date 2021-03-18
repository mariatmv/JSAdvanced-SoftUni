function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let current = arr.pop();
        arr.unshift(current)
    }
    return arr.join(' ')
}


console.log(solve(['1',
        '2',
        '3',
        '4'],
    2))