function solveArr(arr, direction) {
    let sortedArr = [];
    switch (direction) {
        case 'asc':
            sortedArr = arr.sort((a, b) => a - b);
            break;
        case 'desc':
            sortedArr = arr.sort((a, b) => b - a);
            break;
    }
    return sortedArr;
}

console.log(solveArr([14, 7, 17, 6, 8], 'asc'));
console.log(solveArr([14, 7, 17, 6, 8], 'desc'))