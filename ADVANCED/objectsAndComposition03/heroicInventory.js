function heroicInventory(data) {
    let register = [];
    for (hero of data) {
        let tokens = hero.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ');
        let currentHero = {'name' : name, 'level': level, 'items': items};
        register.push(currentHero)
    }
    return JSON.stringify(register)
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']))