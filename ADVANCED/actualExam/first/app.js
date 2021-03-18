function solve(){
  let createBtn = document.getElementsByClassName('btn create')[0];
  createBtn.addEventListener('click', addArticle)
  let mainSection = document.querySelector('main section');

  function addArticle(event) {
    let author = document.getElementById('creator').value;
    let title = document.getElementById('title').value;
    let category = document.getElementById('category').value;
    let content = document.getElementById('content').value;

    let articleElement = createEl('article');
    let h1Element = createEl('h1', title);
    articleElement.appendChild(h1Element);
    let pForCategory = createEl('p', 'Category:');
    let strongCategory = createEl('strong', category);
    pForCategory.appendChild(strongCategory);
    articleElement.appendChild(pForCategory);
    let pForCreator = createEl('p', 'Creator:');
    let strongCreator = createEl('strong', author);
    pForCreator.appendChild(strongCreator);
    articleElement.appendChild(pForCreator);
    let pElement = createEl('p', content);
    articleElement.appendChild(pElement);
    let divForBtns = createEl('div', undefined, 'buttons');
    // let delBtn = createEl('button', 'Delete', 'btn delete');
    // let archiveBtn = createEl('button', 'Archive', 'btn archive');
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete'
    delBtn.setAttribute('class', 'btn delete')
    delBtn.addEventListener('click', () => deleteArticle(articleElement));
    let archiveBtn = document.createElement('button');
    archiveBtn.textContent = 'Archive'
    archiveBtn.setAttribute('class', 'btn archive')
    archiveBtn.addEventListener('click', () => archiveArticle(articleElement, title))
    divForBtns.appendChild(delBtn);
    divForBtns.appendChild(archiveBtn);
    articleElement.appendChild(divForBtns);

    mainSection.appendChild(articleElement);

    event.preventDefault()
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
  
  function deleteArticle(article) {
    mainSection.removeChild(article);
  }

  function archiveArticle(article, title) {
    deleteArticle(article);
    let archiveSection = document.querySelector('section.archive-section ol')
    let liElement = createEl('li', title);
    archiveSection.appendChild(liElement);

    Array.from(archiveSection.childNodes)
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => archiveSection.appendChild(li));
  }

}
