function storeCatalogue(arrayInput) {
    let register = [];
    for (line of arrayInput) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        register.push([product, price]);
    }
    register.sort(compare);
    let result = {};
    let letters = new Set();
    for (line in register) {
        letters.add(register[line][0][0]);
    }

    for (letter of letters) {
        result[letter] = [];
        for (x in register) {
            if (register[x][0][0] === letter) {
                result[letter].push(register[x]);
            }
        }
    }

    for (letter in result) {
        console.log(letter)
        for (item of result[letter]) {
            let index = 0;
            console.log(`  ${item[0]}: ${item[1]}`)
            index += 1;
        }
    }

    function compare(a, b) {
        let comparison = 0;
        if (a[0] > b[0]) {
            comparison = 1;
        } else if (a[0] < b[0]) {
            comparison = -1;
        }
        return comparison;
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);