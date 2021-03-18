function addDestination() {
    let [cityElement, countryElement] = document.querySelectorAll('div#input input');
    let city = cityElement.value;
    let country = countryElement.value;
    let season = document.querySelector('select').value;
    let [summer, autumn, winter, spring] = document.querySelectorAll('div#summaryBox input');
    if (country !== '' && city !== '') {
        cityElement.value = '';
        countryElement.value = '';
        if (season === 'summer') {
            let current = Number(summer.value) + 1;
            summer.value = current
        } else if (season === 'autumn') {
            let current = Number(autumn.value) + 1;
            autumn.value = current
        } else if (season === 'winter') {
            let current = Number(winter.value) + 1;
            winter.value = current
        } else if (season === 'spring') {
            let current = Number(spring.value) + 1;
            spring.value = current
        }
    }

    let table = document.querySelector('tbody#destinationsList')
    let trElement = document.createElement('tr');
    let firstTdElement = document.createElement('td');
    firstTdElement.textContent = `${city}, ${country}`;
    let secondTdElement = document.createElement('td');
    secondTdElement.textContent = season[0].toUpperCase() + season.slice(1);
    trElement.appendChild(firstTdElement);
    trElement.appendChild(secondTdElement);
    table.appendChild(trElement);
}