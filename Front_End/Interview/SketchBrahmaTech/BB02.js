// remove duplicate numbers from an array without using builting function?
const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

function removeDuplicate(arr) {
    const result = [];
    let idx = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            result[idx] = arr[i];
            idx++;
        } 
    }
    return result;
}

console.log(removeDuplicate(input));

const input1 = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];
const input2 = [1, 2, 3, 3, 4, 5,2, 6,3,6,7];

function removeDuplicate(arr) {
    let length = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            arr[length] = arr[i];
            length++;
        }
    }
    
    // the last element is not a duplicate
    if (!tmp[arr[arr.length-1]]) {
        length--;
    }
    arr.length = length;
    return arr;
}

console.log(removeDuplicate(input1));
console.log(removeDuplicate(input2));



//Source: https://stackoverflow.com/questions/45185673



