let cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', clearInputs);
let topicNameEl = document.getElementById('topicName');
let usernameEL = document.getElementById('username');
let postTextEl = document.getElementById('postText');
let postBtn = document.querySelector('.public');
postBtn.addEventListener('click', postNewTopic)


function clearInputs() {
    topicNameEl.value = '';
    usernameEL.value = '';
    postTextEl.value = '';
}

async function postNewTopic() {
    if (validateInputs()) {
      await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
          method: 'POST',
          body: JSON.stringify({
              topicName: topicNameEl.value,
              username: usernameEL.value,
              postText: postTextEl.value
          })
      })
    } else {
        alert('All fields are mandatory')
    }
}

function validateInputs() {
    if (usernameEL.value !== '' && topicNameEl.value !== '' && postTextEl.value !== '') {
        return true
    }
    return false
}
async function loadTopics() {
    const response = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts");
    const data = await response.json();

    const topicTitle = document.getElementsByClassName("topic-title")[0];
    topicTitle.innerHTML = "";
    for (const key in data) {
        const entry = data[key];
        const topicContainer = document.createElement("div");
        topicContainer.setAttribute("class", "topic-container");
        topicTitle.appendChild(topicContainer);

        const topicNameWrapper = document.createElement("div");
        topicNameWrapper.setAttribute("class", "topic-name-wrapper")
        topicContainer.appendChild(topicNameWrapper);

        const topicName = document.createElement("div");
        topicName.setAttribute("class", "topic-name")
        topicNameWrapper.appendChild(topicName);

        const titleURL = document.createElement("a");
        titleURL.setAttribute("href", "./topic-content.html");
        titleURL.setAttribute("class", "normal");
        titleURL.addEventListener("click", () => {
            sessionStorage.removeItem("post");
            sessionStorage.setItem("post", entry["_id"]);
        })
        topicName.appendChild(titleURL);

        const title = document.createElement("h2");
        title.textContent = entry.topicName;
        titleURL.appendChild(title);

        const columns = document.createElement("div");
        columns.setAttribute("class", "columns");
        topicName.appendChild(columns);

        const columnsDiv = document.createElement("div");
        columns.appendChild(columnsDiv);

        const p = document.createElement("p")
        p.innerHTML = `Date: <time> ${entry.time}</time>`
        columnsDiv.appendChild(p);

        const nickName = document.createElement("nick-name");
        nickName.setAttribute("class", "nick-name");
        nickName.innerHTML = `<p>Username: <span>${entry.username}</span></p>`
        columnsDiv.appendChild(nickName);

        const subscribers = document.createElement("div");
        subscribers.setAttribute("class", "subscribers");
        subscribers.innerHTML = `<p>Subscribers: <span>0</span></p>`
        columns.appendChild(subscribers);
    }
}

loadTopics();