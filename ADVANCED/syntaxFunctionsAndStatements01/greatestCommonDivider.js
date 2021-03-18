function solve(a, b) {
    let num1 = Number(a);
    let num2 = Number(b);

    let bigger_num = undefined;
    if(a >= b) {
        bigger_num = a;
    } else {
        bigger_num = b;
    }

    let dividers = [];

    for (i = 1; i <= bigger_num; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            dividers.push(i)
        }
    }
    console.log(dividers.pop())
}

solve(15, 5)