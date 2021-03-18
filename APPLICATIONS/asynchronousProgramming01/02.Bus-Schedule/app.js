function solve() {
    let arriveBtn = document.getElementById('arrive');
    let departBtn = document.getElementById('depart');
    let info = document.getElementById('info')
    let currentStop = ''

    let url = 'http://localhost:3030/jsonstore/bus/schedule/0361'
    function depart() {
        arriveBtn.disabled = false
        departBtn.disabled = true
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                currentStop = data.name
                // if (currentStop === 'Depot') {
                //     throw new Error()
                // }
                info.innerText = `Next stop ${currentStop}`
                url = `http://localhost:3030/jsonstore/bus/schedule/${data.next}`
            })
            .catch((error) => {
                arriveBtn.disabled = true
                departBtn.disabled = true
                info.innerText = 'Error'
            })

    }

    function arrive() {
        arriveBtn.disabled = true
        departBtn.disabled = false
        info.innerText = `Arriving at ${currentStop}`

    }

    return {
        depart,
        arrive
    };
}

let result = solve();