function solve(arrayInput) {
    let register = new Set();
    let products = new Set();
    let resultArray = {};

    for (line of arrayInput) {
        let [town, product, price] = line.split(' | ');
        price = Number(price)
        register.add({town: town, product: product, price: price});
        products.add(product);
    }

    for (product of products) {
        resultArray[product] = [22734732748234823734, " "];
        for (x of register) {
            if (x.product === product && x.price < resultArray[product][0]) {
                resultArray[product][0] = x.price;
                resultArray[product][1] = x.town;
            }
        }
    }

    for (item in resultArray) {
        console.log(`${item} -> ${resultArray[item][0]} (${resultArray[item][1]})`)
    }

}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'

])