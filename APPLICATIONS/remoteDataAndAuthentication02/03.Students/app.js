async function extractStudents() {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    let response = await fetch('http://localhost:3030/jsonstore/collections/students');
    let studentsObj = await response.json();

    for (let current in studentsObj) {
        let trElement = createElement('tr');
        let firstName = createElement('th', studentsObj[current]['firstName']);
        let lastName = createElement('th', studentsObj[current]['lastName']);
        let facultyNum = createElement('th', studentsObj[current]['facultyNumber']);
        let grade = createElement('th', studentsObj[current]['grade']);
        trElement.appendChild(firstName);
        trElement.appendChild(lastName);
        trElement.appendChild(facultyNum);
        trElement.appendChild(grade);
        tbody.appendChild(trElement);
    }
}

extractStudents()

document.getElementById('submit').addEventListener('click', addNewStudent);

async function addNewStudent() {
    let [firstNameEl, lastNameEl, facNumEL, gradeEl] = document.querySelectorAll('input');
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let facNum = facNumEL.value;
    let grade = gradeEl.value;
    firstNameEl.value = '';
    lastNameEl.value = '';
    facNumEL.value = '';
    gradeEl.value = '';

    let newStudent = {
        firstName: firstName,
        lastName: lastName,
        facultyNumber: facNum,
        grade: grade
    }

    let response = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        body: JSON.stringify(newStudent)
    })

    extractStudents();
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