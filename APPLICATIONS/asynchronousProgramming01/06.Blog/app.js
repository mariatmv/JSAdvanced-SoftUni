function attachEvents() {
    let selectElement = document.querySelector('select#posts');
    fetch(`http://localhost:3030/jsonstore/blog/posts`)
        .then(response => response.json())
        .then(data => {
            for (let item in data) {
                let option = createElement('option', data[item]['title']);
                option.setAttribute('value', item);
                selectElement.appendChild(option)
            }
        })

    document.getElementById('btnViewPost').addEventListener('click', viewPost)

    function viewPost(event) {
        let currentOption = selectElement.childNodes[selectElement.selectedIndex];
        let currentId = currentOption.value
        fetch(`http://localhost:3030/jsonstore/blog/posts/${currentId}`)
            .then(res => res.json())
            .then(obj => {
                document.getElementById('post-title').textContent = obj.title;
                document.getElementById('post-body').textContent = obj.body;
                let ul = document.getElementById('post-comments')
                if (ul.children.length > 0) {
                    ul.innerHTML = ''
                }
                fetch('http://localhost:3030/jsonstore/blog/comments/')
                    .then(r => r.json())
                    .then(comments => {
                        for (let comment in comments) {
                            if (comments[comment]['postId'] === currentId) {
                                let li = createElement('li', comments[comment]['text'])
                                li.setAttribute('id', comments[comment]['id'])
                                ul.appendChild(li);
                            }
                        }
                    })
            })
    }
}

attachEvents();
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