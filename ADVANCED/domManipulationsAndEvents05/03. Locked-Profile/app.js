function lockedProfile() {
    let showMoreBtns = document.querySelectorAll('button');

    for (let btn of showMoreBtns) {
        btn.addEventListener('click', onClick)
    }

    function onClick(event) {
        let divElement = event.path[1];
        let unlockCheck = divElement.querySelectorAll('input[type=radio]')[1];
        if (unlockCheck.checked) {
            let hiddenDiv = divElement.querySelector('div');
            if (event.target.textContent === 'Show more') {
                hiddenDiv.style.display = 'block';
                event.target.textContent = "Hide it"
            } else {
                hiddenDiv.style.display = 'none';
                event.target.textContent = "Show more"
            }

        }
    }
}