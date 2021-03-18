function attachEvents() {
    document.getElementById('submit').addEventListener('click', addNewMessagesToServer)
    document.getElementById('refresh').addEventListener('click', showMessages)
    let messages = document.getElementById('messages');
    async function addNewMessagesToServer() {
        let [authorEl, messageEl] = document.querySelectorAll('input');
        let author = authorEl.value;
        let message = messageEl.value;
        authorEl.value = ''
        messageEl.value = ''
        let obj = {
            author: author,
            content: message
        }

        const response = await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            body: JSON.stringify(obj)
        });
    }

    async function showMessages() {
        messages.textContent = ''
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await response.json();
        for (let message in data) {
            let a = data[message]['author']
            let c = data[message]['content']
            messages.textContent += `${a}: ${c}\n`
        }
    }

}

attachEvents();