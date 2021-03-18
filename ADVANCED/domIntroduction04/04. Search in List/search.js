function search() {
    let searchedInput = document.getElementById("searchText").value;
    let towns = document.querySelectorAll("ul#towns li")
    let matches = 0;
    for (let town of towns) {
        if (town.textContent.includes(searchedInput)) {
            town.style.textDecoration = "underline";
            town.style.fontWeight = "bold";
            matches += 1;
        }
    }
    let resultElement = document.getElementById("result");
    resultElement.innerHTML += `${matches} matches found`
}
