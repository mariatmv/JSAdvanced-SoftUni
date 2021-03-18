function townsToJSON(arrayInput) {
    let result = [];
    let index = 0;
    for (line of arrayInput) {
        if (index > 0) {
            let tokens = line.split('|').filter(function (el) {return el !== ''})
            tokens = tokens.map(x => x.trim());
            let [town, la, lo] = tokens;
            let lat = Number(la).toFixed(2)
            let long= Number(lo).toFixed(2);
            result.push({"Town": town, "Latitude": Number(lat), "Longitude": Number(long)});
        }
        index += 1;
    }
    return JSON.stringify(result);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']))