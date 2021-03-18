function solve(numberStr, ...parameters) {
    let number = Number(numberStr);
    for (let i = 0; i < 5; i++) {
        switch (parameters[i]) {
            case 'chop':
                number /= 2;
                break
            case 'dice':
                number = Math.sqrt(number);
                break
            case 'spice':
                number += 1;
                break
            case 'bake':
                number *= 3;
                break
            case 'fillet':
                number -= number * 0.2;
                break
        }
        console.log(number)
    }
}


solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');