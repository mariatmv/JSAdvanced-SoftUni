function notify(message) {
  console.log('todo')
  let divNotificationElement = document.getElementById('notification');
  divNotificationElement.innerHTML += message;
  divNotificationElement.style.display = 'block';
  divNotificationElement.addEventListener('click', () => {
    divNotificationElement.style.display = 'none';
  })
}