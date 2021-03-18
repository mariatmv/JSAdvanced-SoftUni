function solve() {
    let textInput = document.getElementById("text").value;
    let wantedCase = document.getElementById("naming-convention").value;
    let result;
    if (wantedCase === 'Camel Case') {
        result = toCamelCase(textInput);
    } else if (wantedCase === 'Pascal Case') {
        result = toPascalCase(textInput);
        result = result.replace('/ /g', '');
    } else {
        result = 'Error!';
    }


    let resultElement = document.getElementById("result");
    resultElement.innerHTML += result;


    function toCamelCase(str) {
        let result = str[0];
        let replaced = str.replace(/\w\S*/g, m => m[0].toUpperCase() + m.substr(1).toLowerCase());
        replaced = replaced.replace(/\s+/g, "");
        result += replaced.slice(1);
        return result
    }

    function toPascalCase(string) {
        let replaced = string.replace(/\w\S*/g, m => m[0].toUpperCase() + m.substr(1).toLowerCase());
        replaced = replaced.replace(/\s+/g, "");
        return replaced
    }
}
