function generateReport(colNames) {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    let checked = [];
    for (let box of checkboxes) {
        if (box.checked) {
            checked.push(box)
        }
    }
    let table = document.querySelectorAll("tbody tr");
    let result = [];
    let register = {
        "employee": 0,
        "deparment": 1,
        "status": 2,
        "dateHired": 3,
        "benefits": 4,
        "salary": 5,
        "rating": 6
    }

    for (let row of table) {
        let currentObject = {};
        for (let box of checked) {
            let index = register[box.name];
            let element = row.children[index];
            currentObject[box.name] = element.textContent;
        }
        result.push(currentObject)
    }

    let resultInJSON = JSON.stringify(result);
    let outputElement = document.getElementById("output");
    outputElement.innerHTML += resultInJSON;
}