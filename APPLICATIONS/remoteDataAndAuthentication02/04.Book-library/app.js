let tbody = document.querySelector('tbody');

async function showBooks() {
    tbody.innerHTML = ''

    let response = await fetch('http://localhost:3030/jsonstore/collections/books');
    let booksObj = await response.json();

    for (let book in booksObj) {
        let tr = createElement('tr');
        tr.setAttribute('id', book)
        let author = createElement('td', booksObj[book]['author']);
        let title = createElement('td', booksObj[book]['title']);
        let tdForBtns = createElement('td');
        let editBtn = createElement('button', 'Edit');
        editBtn.addEventListener('click', editBook)
        let deleteBtn = createElement('button', 'Delete');
        deleteBtn.addEventListener('click', () => deleteBook(book));
        tdForBtns.appendChild(editBtn);
        tdForBtns.appendChild(deleteBtn);
        tr.appendChild(title);
        tr.appendChild(author);
        tr.appendChild(tdForBtns);
        tbody.appendChild(tr)
    }
}

showBooks();


document.getElementById('submit').addEventListener('click', addNewBook);


async function addNewBook(event) {
    let url = 'http://localhost:3030/jsonstore/collections/books';
    if(event.target.textContent === 'Save') {
        document.querySelector('h3').textContent = 'FORM';
        event.target.textContent = 'Submit';
        let neededBook = event.target.parentNode.parentNode.id;
        url += neededBook;
    }
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    let newObj = {
        author: author,
        title: title
    }
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newObj)
    });

    showBooks();

}

async function editBook(event) {
    document.querySelector('h3').textContent = 'Edit FORM';
    document.getElementById('submit').textContent = 'Save';
    event.preventDefault();
}

async function deleteBook(book) {
    await fetch(`http://localhost:3030/jsonstore/collections/books/${book}`, {
        method: 'DELETE'
    });
    showBooks();
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