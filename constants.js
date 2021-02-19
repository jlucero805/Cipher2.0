const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*", "?", '.', ',', '_', ' ', '~', '`', '-', '+', "'", '"', ';', ':'];
var letterKey = '';
var multKey = 0;
var addKey = 0;

//HTML DOM vars
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