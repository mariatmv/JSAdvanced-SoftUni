function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedInput = document.getElementById("searchField").value;
      let table = document.querySelectorAll("tbody tr");

      let unselect = function () {
         let found = document.querySelectorAll(".select")
         try {
            for (let element of found) {
               element.classList.remove('select')
            }
         } catch (error) {

         }
      }

      unselect();


      for (let row of table) {
         let cols = row.children;
         console.log(cols)
         for (let i = 0; i < cols.length; i++) {
            if (cols[i].textContent.includes(searchedInput)) {
               row.classList.add("select")
            }
         }
      }
      let inputElement = document.getElementById("searchField")
      inputElement.value = ''
   }
}