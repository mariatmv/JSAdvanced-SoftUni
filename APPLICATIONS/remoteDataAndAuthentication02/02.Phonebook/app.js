function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    let phonesUl = document.getElementById('phonebook');
    document.getElementById('btnCreate').addEventListener('click', createContact);


    async function loadContacts() {
        phonesUl.innerHTML = ''
        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const phonesObject = await response.json();
        for (let phone in phonesObject) {
            let currentLi = createElement('li', `${phonesObject[phone]['person']}: ${phonesObject[phone]['phone']}`);
            let deleteBtn = createElement('button', 'Delete');
            deleteBtn.addEventListener('click', () => deleteContact(currentLi, phone))
            currentLi.appendChild(deleteBtn);
            phonesUl.appendChild(currentLi);
        }
    }

    async function deleteContact(current, key) {
        let parent = current.parentNode;
        parent.removeChild(current);
        let response = await fetch(`http://localhost:3030/jsonstore/phonebook/${key}`, {
            method: 'DELETE'
        });
    }

    async function createContact() {
        let nameEl = document.getElementById('person');
        let numberEl = document.getElementById('phone');
        let name = nameEl.value;
        let number = numberEl.value;
        nameEl.value = '';
        numberEl.value = '';

        let response = await fetch('http://localhost:3030/jsonstore/phonebook/', {
            method: 'POST',
            body: JSON.stringify({
                person: name,
                phone: number
            })
        })

        loadContacts();
    }

    function createElement(type, text, cls) {
        let element = document.createElement(type);
        if (text !== undefined) {
            element.textContent = text;
        }
        if (cls !== undefined) {
            element.classList.add(cls);
        }
        return element;
    }
}

attachEvents();