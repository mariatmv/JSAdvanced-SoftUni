function solve() {
    let addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addNew)

    function addNew(event) {
        console.log('zdr')
        let [lectureElement, dateElement] = document.querySelectorAll('div.form-control input');
        let moduleElement = document.querySelector('div.form-control select')
        let lectureName = lectureElement.value;
        let dateName = dateElement.value;
        let moduleName = moduleElement.value;
        let trainingsSection = document.querySelector('div.modules')
        if (lectureName !== '' && dateName !== '' && moduleName !== 'Select module') {
            let tryToFindIfModuleAlreadyExist = document.getElementById(moduleName);
            if (!tryToFindIfModuleAlreadyExist) {
                let divElement = createEl('div', undefined, 'module');
                divElement.setAttribute('id', moduleName);
                let h3Element = createEl('h3', moduleName.toUpperCase() + '-MODULE');
                let ulElement = createEl('ul');
                let liElement = createEl('li', undefined, 'flex');
                let [date, time] = dateName.split('T')
                date = date.replace('-', '/').replace('-', '/').replace('-', '/')
                let h4Element = createEl('h4', `${lectureName} - ${date} - ${time}`);
                let buttonElement = createEl('button', 'Del', 'red');
                buttonElement.addEventListener('click', () => deleteCurrentLi(ulElement, liElement));
                liElement.appendChild(h4Element);
                liElement.appendChild(buttonElement);
                ulElement.appendChild(liElement);
                divElement.appendChild(h3Element);
                divElement.appendChild(ulElement);
                trainingsSection.appendChild(divElement);
            } else {
                let ul = tryToFindIfModuleAlreadyExist.children[1];
                let liElement = createEl('li', undefined, 'flex');
                let [date, time] = dateName.split('T')
                date = date.replace('-', '/').replace('-', '/').replace('-', '/')
                let h4Element = createEl('h4', `${lectureName} - ${date} - ${time}`);
                let buttonElement = createEl('button', 'Del', 'red');
                buttonElement.addEventListener('click', () => deleteCurrentLi(ul, liElement));
                liElement.appendChild(h4Element);
                liElement.appendChild(buttonElement);
                ul.appendChild(liElement);
                Array.from(ul.childNodes)
                    .sort((a, b) => a.firstChild.textContent.slice(6, 16).localeCompare(b.firstChild.textContent.slice(6, 16)))
                    .forEach(li => ul.appendChild(li));
            }
        }

        event.preventDefault()
    }

    function deleteCurrentLi(ul, liElement) {
        ul.removeChild(liElement);
        if (ul.children.length === 0) {
            let currentDiv = ul.parentNode
            let higherDiv = currentDiv.parentNode
            higherDiv.removeChild(currentDiv)
        }
    }

    function createEl(type, text, cls) {
        let el = document.createElement(type);
        if (text !== undefined) {
            el.textContent = text;
        }
        if (cls !== undefined) {
            el.classList.add(cls);
        }
        return el;
    }
}