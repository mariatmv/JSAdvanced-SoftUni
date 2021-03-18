function solution() {
    let inputField = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);
    let [listOfGifts, sent, discarded] = document.querySelectorAll('section ul');

    function addGift(event) {
        let gift = inputField.value;
        inputField.value = '';

        let liElement = createEl('li', gift, 'gift');
        let sentBtn = createEl('button', 'Send', 'sendButton');
        let deleteBtn = createEl('button', 'Discard', 'discardButton');
        liElement.appendChild(sentBtn);
        liElement.appendChild(deleteBtn);
        sentBtn.addEventListener('click', () => sendGift(liElement, gift));
        deleteBtn.addEventListener('click', () => discard(liElement, gift));
        listOfGifts.appendChild(liElement);

        Array.from(listOfGifts.childNodes)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => listOfGifts.appendChild(li));

    }

    function createEl(type, text, cls) {
        let el = document.createElement(type);
        el.textContent = text;
        if (cls !== undefined) {
            el.classList.add(cls);
        }
        return el;
    }

    function sendGift(elementToRemove, name) {
        listOfGifts.removeChild(elementToRemove);
        let newElement = createEl('li', name, 'gift');
        sent.appendChild(newElement)
    }

    function discard(elementToRemove, name) {
        listOfGifts.removeChild(elementToRemove);
        let newElement = createEl('li', name, 'gift');
        discarded.appendChild(newElement)
    }
}