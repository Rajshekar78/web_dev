function nextChar(str) {
    if (str.length == 0) {
        return 'a';
    }
    var charA = str.split('');
    if (charA[charA.length - 1] === 'z') {
        return nextID(str.substring(0, charA.length - 1)) + 'a';
    } else {
        return str.substring(0, charA.length - 1) +
            String.fromCharCode(charA[charA.length - 1].charCodeAt(0) + 1);
    }
    };