var nextLetter = A => {
    let charCode = A.charCodeAt(0);
    let isCapital = A == A.toUppercase();

    if (isCapital == true){
        return String.fromCharCode((charCode - 64) % 26 + 65)
    } else {
        return String.fromCharCode((charCode - 96) % 26 + 97)
    }
}

