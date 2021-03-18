window.addEventListener('load', solution)

function solution() {
    console.log('zdr')
    let mainSection = document.getElementById('main');
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(response => response.json())
        .then(listOfItems => {
            for (let item of listOfItems) {
                let divAccordion = createElement('div', undefined, 'accordion');
                let divHead = createElement('div', undefined, 'head');
                let spanElement = createElement('span', item.title);
                let btn = createElement('button', 'More', 'button');
                btn.setAttribute('id', item._id);
                divHead.appendChild(spanElement);
                divHead.appendChild(btn);
                divAccordion.appendChild(divHead);
                let divExtra = createElement('div', undefined, 'extra');
                let paragraph = createElement('p');
                fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${item._id}`)
                    .then(res => res.json())
                    .then(data => {
                        paragraph.textContent = data.content;
                    })

                divExtra.appendChild(paragraph);
                divAccordion.appendChild(divExtra);
                btn.addEventListener('click', () => handleBtn(divAccordion))
                mainSection.appendChild(divAccordion);
            }
        })
        .catch((error) => {

        })
    
    function handleBtn(mainDiv) {
        let button = mainDiv.querySelector('button');
        let extraDiv = mainDiv.childNodes[1];
        if (button.textContent === 'More') {
            extraDiv.removeAttribute('class');
            button.textContent = 'Less'
        } else {
            extraDiv.setAttribute('class', 'extra');
            button.textContent = 'More'
        }
    }
    
    function createElement(type, text, cls) {
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
