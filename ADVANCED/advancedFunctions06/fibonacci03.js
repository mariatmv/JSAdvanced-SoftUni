function getFibonator() {
    let num = 0;
    let output = 0;
    if (num <= 1) {
        output = 1
    } else {
        output = getFibonator(num - 1) + getFibonator(num - 2);
    }
    num += 1;
    return output;
}

let fib = getFibonator();
console.log(getFibonator()); // 1
console.log(getFibonator()); // 1
console.log(getFibonator()); // 2
console.log(getFibonator()); // 3
console.log(getFibonator()); // 5
console.log(getFibonator()); // 8
console.log(getFibonator());