function attachEvents() {
    document.getElementById('submit').addEventListener('click', solve)
    let forecastDiv = document.getElementById('forecast')
    let codes = {
        Sunny: '&#x2600;',
        'Partly sunny': '&#x26C5;',
        Overcast: '&#x2601;',
        Rain: '&#x2614;',

    }
     function solve() {
            const location = document.getElementById('location').value;
            fetch('http://localhost:3030/jsonstore/forecaster/locations').then(response => response.json())
                .then(locationsObj => {
                    let neededObj = locationsObj.find(x => x.name === location);
                    if (neededObj === undefined) {
                        throw new Error()
                    }

                    fetch(`http://localhost:3030/jsonstore/forecaster/today/${neededObj.code}`).then(data => data.json())
                        .then(currentConditions => {
                            forecastDiv.style.display = 'inline';
                            // FOR CURRENT CONDITIONS
                            let divForCurrent = document.getElementById('current');
                            let symbolElement = createEl('span', codes[currentConditions.forecast.condition], 'symbol')
                            let mainSpan = createEl('span', undefined, 'condition')
                            let locationSpan = createEl('span', currentConditions.name, 'forecast-data')
                            let tempSpan = createEl('span', `${currentConditions.forecast.low}&#176/${currentConditions.forecast.high}&#176`, 'forecast-data')
                            let conditionSpan = createEl('span', currentConditions.forecast.condition, 'forecast-data')
                            mainSpan.appendChild(locationSpan)
                            mainSpan.appendChild(tempSpan)
                            mainSpan.appendChild(conditionSpan)
                            divForCurrent.appendChild(symbolElement)
                            divForCurrent.appendChild(mainSpan)

                        })

                    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${neededObj.code}`)
                        .then(data => data.json())
                        .then(info => {
                            let divUpcoming = document.getElementById('upcoming')
                            for (let day of info.forecast) {
                                let mainSpan = createEl('span', undefined, 'upcoming')
                                let symbolElement = createEl('span', codes[day.condition], 'symbol')
                                let tempSpan = createEl('span', `${day.low}&#176/${day.high}&#176`, 'forecast-data')
                                let conditionSpan = createEl('span', day.condition, 'forecast-data')
                                mainSpan.appendChild(symbolElement)
                                mainSpan.appendChild(tempSpan)
                                mainSpan.appendChild(conditionSpan)
                                divUpcoming.appendChild(mainSpan)
                            }
                        })
                }).catch((error) => {
                forecastDiv.style.display = 'inline';
                let divForCurrent = document.getElementById('current');
                divForCurrent.innerText = 'Error'
            })
    }

    function createEl(type, text, cls) {
        let el = document.createElement(type);
        if (text !== undefined) {
            el.innerHTML = text;
        }
        if (cls !== undefined) {
            el.classList.add(cls);
        }
        return el;
    }


}

attachEvents();