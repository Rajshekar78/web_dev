function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }x

  let myArray = [1, 2, 2, 3, 4, 4, 4, 5];
  let uniqueArray = removeDuplicates(myArray);
  console.log(uniqueArray);
