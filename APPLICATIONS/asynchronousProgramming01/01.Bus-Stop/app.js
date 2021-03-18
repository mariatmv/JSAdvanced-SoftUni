function getInfo() {
    const neededStop = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${neededStop}`
    let divForStopName = document.getElementById('stopName');
    let ulElement = document.getElementById('buses');

    fetch(url).then(response => response.json()).then(stopData => {
        console.log(stopData)
        if (url.statusCode === '404') {
            throw new Error('Error');
        }
        divForStopName.innerText = stopData.name;
        for (let bus in stopData.buses) {
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${stopData.buses[bus]}`
            ulElement.appendChild(liElement)
        }
    }).catch((error) => {
        divForStopName.innerText = 'Error'
    })
}