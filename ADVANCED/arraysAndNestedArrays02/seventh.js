function solve(arr) {
    const newArr = [...arr];
    const sortedFromSmallest = newArr.sort(((a, b) => a - b));
    const sortedFromBiggest = arr.sort(((a, b) => a - b)).reverse();
    const resArr = [];
    for (let i = 0; i < arr.length / 2; i++) {
        resArr.push(sortedFromSmallest[i]);
        resArr.push(sortedFromBiggest[i]);
    }
    return resArr;
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))