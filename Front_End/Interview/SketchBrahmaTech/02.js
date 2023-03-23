// remove duplicate numbers from an array without using builting function



function removeDuplicatesArray(arr){
        const output=[];
        const obj= {};
        for(let i=0; i< arr.length; i++){
            const element = arr[i];
            if(obj[element]){
                obj[element] += 1;
            }else{
               obj[element] = 1;
             output.push(element);
        }
    }
    return output;
}
    console.log(removeDuplicatesArray([11,12,31,16,12,4,5,16,11,31]))