var nextLetter = letter => {
    let CharCode = letter.charCodeAt(0);
    let isCapital = letter == letter.toUppercase();

    if (isCapital == true){
        return String.fromCharCode((CharCode - 64) % 26 + 65)
    } else {
        return String.fromCharCode((CharCode - 96) % 26 + 97)
    }
};
   nextLetter(z)

// var nextLetter = letter => {
//     let charCode = letter.charCodeAt(0);
//     return String.fromCharCode((charCode - 96) % 26 + 97)
// }
// console.log(nextLetter(z));




