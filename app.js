//randomize key
const setRandomKeyButton = document.getElementById('randomKeyButton');
const keyDisplay = document.getElementById('keyDisplay');
const keyInput = document.getElementById('keyInput');
const setKeyButton = document.getElementById('setKeyButton');

const inputText = document.getElementById('inputText');
const encipherText = document.getElementById('encipherText');
const decipherText = document.getElementById('decipherText');
const outputText = document.getElementById('outputText');
const selectOutput = document.getElementById('selectOutput');
const toInput = document.getElementById('toInput');
const selectKey = document.getElementById('selectKey');

setRandomKeyButton.addEventListener('click', () => {
    letterKey = genLetterKey(chars);
    multKey = genNumKeyMult();
    addKey = genNumKeyAdd();
    keyDisplay.innerHTML = createKeyString(letterKey, multKey, addKey);
    keyInput.value = '';
    setRandomKeyButton.blur();
});

setKeyButton.addEventListener('click', () => {
    let keyArr = parseKey(keyInput.value);
    console.log(keyArr);
    letterKey = keyArr[0];
    multKey = keyArr[1];
    addKey = keyArr[2];
    keyInput.value = '';
    setKeyButton.blur();
});

encipherText.addEventListener('click', () => {
    let input = inputText.value;
    let cipherChars = useAddKey(useMultKey(useLetterKey(chars, letterKey), multKey), addKey);
    let res = cipherDecipher(input, chars, cipherChars, 'cipher');
    outputText.value = res;
    inputText.value = '';
    encipherText.blur();
});

decipherText.addEventListener('click', () => {
    let input = inputText.value;
    let cipherChars = useAddKey(useMultKey(useLetterKey(chars, letterKey), multKey), addKey);
    let res = cipherDecipher(input, chars, cipherChars, 'decipher');
    outputText.value = res;
    inputText.value = '';
    decipherText.blur();
});

selectOutput.addEventListener('click', () => {
    outputText.select();
    selectOutput.blur();
});

toInput.addEventListener('click', () => {
    inputText.value = outputText.value;
    outputText.value = '';
});

selectKey.addEventListener('click', () => {
    keyInput.value = keyDisplay.innerHTML;
    keyInput.select();
    selectKey.blur();
});


