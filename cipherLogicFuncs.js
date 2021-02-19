//check if key is valid
var checkValidKey = (key) => {
    //future feature
};

//generate the keys for the number part of key
var genNumKeyMult = () => {
    return Math.floor(Math.random() * (83 - 1) + 1);
};

var genNumKeyAdd = () => {
    return Math.floor(Math.random() * (999 - 1) + 1);
};

//gen the key to switch letters around
var genLetterKey = (arrChars) => {
    var res = '';
    var map = new Map();
    while (res.length < 20) {
        var temp = Math.floor(Math.random() * (82 - 1) + 1);
        if (!map.has(temp)) {
            res += arrChars[temp];
            map.set(temp, temp);
        };
    };
    return res;
};

//create string with all keys to use for future
var createKeyString = (letterKey, multKey, addKey) => {
    return String(letterKey) + '|' + String(multKey) + '|' + String(addKey)
};

//get the key and then create a new set of chars with switched letters
var useLetterKey = (arrChars, key) => {
    let tempArr = [...arrChars];
    for (let i=0;i<key.length;i+=2) {
        tempArr[arrChars.indexOf(key[i])] = key[i+1];
        tempArr[arrChars.indexOf(key[i+1])] = key[i];
    };
    return tempArr;
};

var parseKey = (string) => {
    let res = [];
    let temp = '';
    for (let i=0;i<string.length;i++) {
        if (string[i] != '|') {
            temp += string[i];
        } else {
            res.push(temp);
            temp = '';
        };
    };
    res.push(temp);
    res[1] = Number(res[1]);
    res[2] = Number(res[2]);
    return res;
};

//use the numMult key to multiple array
//arrChars[Array<string>] multKey
var useMultKey = (arrChars, multKey) => {
    return arrChars.map(x => arrChars[arrChars.indexOf(x) * multKey % chars.length]);
};

//usee numAdd to rotate array
var useAddKey = (arrChars, addKey) => {
    return arrChars.map(x => arrChars[(arrChars.indexOf(x) + addKey) % chars.length]);
};

//encipher or decipher text
var cipherDecipher = (input, plainChars, cipherChars, direction) => {
    let res = '';
    if (direction == 'cipher') {
        for (const char of input) {
            res += cipherChars[plainChars.indexOf(char)];
        };
    } else if (direction == 'decipher') {
        for (const char of input) {
            res += plainChars[cipherChars.indexOf(char)];
        };
    } else {
        res += "Error: Check Cipher Decipher"
    };
    return res;
};
