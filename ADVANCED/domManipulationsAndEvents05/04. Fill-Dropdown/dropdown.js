function addItem() {
    let value = document.getElementById('newItemValue').value;
    let text = document.getElementById('newItemText').value;

    let selectElement = document.getElementById('menu');

    let option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    selectElement.appendChild(option);

    document.getElementById('newItemValue').value = ''
    document.getElementById('newItemText').value = ''
}