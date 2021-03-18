function solve(arr) {
    let current = arr[0];
    let newArr = [current];
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > current) {
            current = arr[i];
            newArr.push(current)
        }
        // } else {
        //     break;
        // }
    }
    return newArr
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))