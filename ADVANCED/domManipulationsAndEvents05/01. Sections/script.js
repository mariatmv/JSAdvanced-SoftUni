function create(words) {
   let contentElement = document.getElementById('content');
   for (let word of words) {
      let divElement = document.createElement('div');
      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      divElement.appendChild(paragraphElement);
      divElement.addEventListener('click', onClick);

      contentElement.appendChild(divElement);
   }

   function onClick(event) {
      let currentDiv = event.target;
      let target = currentDiv.querySelector('p');
      target.style.display = 'block'
   }
}