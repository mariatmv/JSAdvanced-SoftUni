function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', validateEmail);

    function validateEmail(ev) {
        let email = inputElement.value;
        let regex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]+");
        let styleElement = document.querySelector('.error');


        if (!regex.test(email)) {
            inputElement.classList.add('error')
        } else {
            inputElement.removeAttribute('class')
        }
    }
}