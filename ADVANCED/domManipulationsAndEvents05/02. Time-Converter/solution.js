function attachEventsListeners() {
    // let buttons = Array.from(document.querySelectorAll('input[type=button]'));
    // for (let button of buttons) {
    //     button.addEventListener('click', onClick);
    // }
    //
    //
    // function onClick(event) {
    //     let elementId = event.target.id;
    //     let allElements = Array.from(document.querySelectorAll('input[type=text]'));
    //     let days
    //     let hours
    //     let minutes
    //     let seconds
    //     switch (elementId){
    //         case 'daysBtn':
    //             let daysValue = document.getElementById('days').value;
    //              hours = daysValue * 24;
    //              minutes = hours * 60;
    //              seconds = minutes * 60;
    //
    //             document.getElementById('hours').value = hours;
    //             document.getElementById('minutes').value = minutes;
    //             document.getElementById('seconds').value = seconds;
    //
    //             break;
    //
    //         case 'hoursBtn':
    //             let hoursValue = document.getElementById('hours').value;
    //              days = hoursValue / 24;
    //              minutes = hoursValue * 60;
    //              seconds = minutes * 60;
    //
    //             document.getElementById('days').value = days;
    //             document.getElementById('minutes').value = minutes;
    //             document.getElementById('seconds').value = seconds;
    //
    //             break;
    //
    //         case 'minutesBtn':
    //             let minutesValue = document.getElementById('minutes').value;
    //             hours = minutesValue / 60;
    //             seconds = minutesValue * 60;
    //             days = hours / 24
    //
    //             document.getElementById('days').value = days;
    //             document.getElementById('hours').value = hours;
    //             document.getElementById('seconds').value = seconds;
    //
    //             break;
    //
    //         case 'secondsBtn':
    //             let secondsValue = document.getElementById('seconds').value;
    //             minutes = secondsValue / 60;
    //             hours = minutes / 60;
    //             days = hours / 24;
    //
    //             document.getElementById('days').value = days;
    //             document.getElementById('hours').value = hours;
    //             document.getElementById('minutes').value = minutes;
    //             break;
    //     }

    // }


    document.getElementById('daysBtn').addEventListener('click', getByDays)
    document.getElementById('hoursBtn').addEventListener('click', getByHours)
    document.getElementById('minutesBtn').addEventListener('click', getByMins)
    document.getElementById('secondsBtn').addEventListener('click', getBySecs)



    function getByDays(event) {
        let daysValue = document.getElementById('days').value;
                     let hours = daysValue * 24;
                     let minutes = hours * 60;
                     let seconds = minutes * 60;

                    document.getElementById('hours').value = hours;
                    document.getElementById('minutes').value = minutes;
                    document.getElementById('seconds').value = seconds;
    }
    function getByHours(event) {
        let hoursValue = document.getElementById('hours').value;
                    let days = hoursValue / 24;
                     let minutes = hoursValue * 60;
                     let seconds = minutes * 60;

                    document.getElementById('days').value = days;
                    document.getElementById('minutes').value = minutes;
                    document.getElementById('seconds').value = seconds;
    }
    function getByMins(event) {
        let minutesValue = document.getElementById('minutes').value;
                    let hours = minutesValue / 60;
                    let seconds = minutesValue * 60;
                    let days = hours / 24

                    document.getElementById('days').value = days;
                    document.getElementById('hours').value = hours;
                    document.getElementById('seconds').value = seconds;
    }
    function getBySecs(event) {
        let secondsValue = document.getElementById('seconds').value;
                    let minutes = secondsValue / 60;
                    let hours = minutes / 60;
                    let days = hours / 24;

                    document.getElementById('days').value = days;
                    document.getElementById('hours').value = hours;
                    document.getElementById('minutes').value = minutes;
    }
}