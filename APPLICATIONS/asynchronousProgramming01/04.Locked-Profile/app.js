function lockedProfile() {
    let mainSection = document.getElementById('main')
    fetch('http://localhost:3030/jsonstore/advanced/profiles').then(response => response.json())
        .then(usersObj => {
            for (let user in usersObj) {
                let currentUserObj = usersObj[user]
                let mainDiv = createEl('div', undefined, 'profile')
                mainDiv.innerHTML += '<img src="./iconProfile2.png" class="userIcon" />' +
                    '<label>Lock</label>' +
                    '<input type="radio" name="user1Locked" value="lock" checked>' +
                    '<label>Unlock</label>' +
                    '<input type="radio" name="user1Locked" value="unlock">' +
                    '<br>' +
                    '<hr>' +
                    '<label>Username</label>'

                mainDiv += `<input type="email" name="user1Age" value="${currentUserObj.username}" disabled readonly />`

                mainSection.innerHTML += mainDiv

            }
        })

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