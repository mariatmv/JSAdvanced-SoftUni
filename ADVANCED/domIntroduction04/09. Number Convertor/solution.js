function solve() {
    let selectMenuTo = document.getElementById("selectMenuTo");
    // selectMenuTo.innerHTML += '<option selected value="binary">Binary</option>';
    // selectMenuTo.innerHTML += '<option selected value="hexadecimal">Hexadecimal</option>';
    let firstOption = document.createElement("option", { value : "binary", text: "Binary"})
    let secondOption = document.createElement("option", { value : "hexadecimal", text : "Hexadecimal"})
    selectMenuTo.appendChild(firstOption);
    selectMenuTo.appendChild(secondOption);


    document.querySelector("button").addEventListener('click', onClick);

    function onClick () {
        let number = document.getElementById("input").value;
        number = Number(number);
        let result;
        if (selectMenuTo.options.selectedIndex === 1) {
            result = number.toString(2);
        } else if (selectMenuTo.options.selectedIndex === 2) {
            result = number.toString(16);
        }

        let outputElement = document.getElementById("result");
        outputElement.value = result;
    }
}