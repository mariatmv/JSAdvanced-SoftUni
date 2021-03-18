function solve() {
    let temp1 = document.querySelector('input[type=checkbox]')
    temp1.disabled = false;
    // GENERATE LOGIC
    let generateBtn = document.querySelectorAll('button')[0].addEventListener('click', generate)
    function generate(event) {
        let arrayInputAsString = document.querySelectorAll('textarea')[0].value;
        let arrayInput = JSON.parse(arrayInputAsString)[0];

        let trElement = document.querySelector('tbody tr').cloneNode(true);
        let trElementsChildren = Array.from(trElement.querySelectorAll('td'));
        trElementsChildren[0].innerHTML = `<img src="${arrayInput['img']}">`;
        trElementsChildren[1].textContent = `${arrayInput['name']}`;
        trElementsChildren[2].textContent = `${arrayInput['price']}`;
        trElementsChildren[3].textContent = `${arrayInput['decFactor']}`;
        trElementsChildren[4].children[0].disabled = false;

        let tableElement = document.querySelector('tbody');
        tableElement.appendChild(trElement);
    }


    //BUY LOGIC
    let buyBtn = document.querySelectorAll('button')[1].addEventListener('click', buy)
    function buy(event) {
        let allElementsInTable = document.querySelector("tbody");
        let names = [];
        let totalPrice = 0;
        let allFactorsSum = 0;
        for (let element of allElementsInTable.children) {
            console.log(element)
            let checkbox = element.lastElementChild.querySelector('input');
            if (checkbox.checked) {
                names.push(element.children[1].textContent);
                totalPrice += Number(element.children[2].textContent);
                allFactorsSum += Number(element.children[3].textContent);
            }
        }
        let avgFactor = allFactorsSum / names.length;

        let resultElement = document.querySelectorAll('textarea')[1];
        let resultInfo = `Bought furniture: ${names.join(', ')}`;
        resultInfo += `\nTotal price: ${totalPrice}`;
        resultInfo += `\nAverage decoration factor: ${avgFactor}`;
        resultElement.value = resultInfo;
    }
}