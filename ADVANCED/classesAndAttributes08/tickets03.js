function solve(arrayOfTickets, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    function compare( a, b ) {
        if ( a[sortingCriteria] < b[sortingCriteria] ){
            return -1;
        }
        if ( a[sortingCriteria] > b[sortingCriteria] ){
            return 1;
        }
        return 0;
    }

    let arrayToBeReturned = []

    for (let currentTicketData of arrayOfTickets) {
        let [destination, price, status] = currentTicketData.split('|')
        let currentTicket = new Ticket(destination, price, status)
        arrayToBeReturned.push(currentTicket)
    }

    arrayToBeReturned.sort(compare)
    return arrayToBeReturned
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'))

