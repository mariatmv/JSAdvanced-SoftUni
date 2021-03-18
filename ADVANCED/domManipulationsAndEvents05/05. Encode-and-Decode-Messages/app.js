function encodeAndDecodeMessages() {
    let [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    encodeBtn.addEventListener('click', encodeAndSend);
    decodeBtn.addEventListener('click', decodeAndRead);

    function encodeAndSend(event) {
        let textareaElement = document.querySelectorAll('textarea')[0];
        let textMessageToEncode = textareaElement.value;
        let encodedMsg = '';
        for (let i = 0; i < textMessageToEncode.length; i++){
            encodedMsg += String.fromCharCode(textMessageToEncode[i].charCodeAt() + 1);
        }

        let receiverTextarea = document.querySelectorAll('textarea')[1];
        receiverTextarea.value = encodedMsg;
        document.querySelectorAll('textarea')[0].value = '';
    }
    
    function decodeAndRead(event) {
        let textareaElement = document.querySelectorAll('textarea')[1];
        let textMessageToDecode = textareaElement.value;
        let decodedMsg = '';
        for (let i = 0; i < textMessageToDecode.length; i++){
            decodedMsg += String.fromCharCode(textMessageToDecode[i].charCodeAt() - 1);
        }

        textareaElement.value = decodedMsg;
    }
}