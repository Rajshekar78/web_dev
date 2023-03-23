
    
    
    // Return the 2nd largest element in the array without using  in-built function
    // 	const input = [1,5,7,6,5,3]
    // 	const output = 6
    
    function findSecondLargeArray(arr){
        let first=-1, second=-1;
        for(let i=0; i<arr.length;i++){
            if(arr[i] > first){
                second = first;
                first = arr[i];
            }else if(arr[i] > second && arr[i] !== first){
                second = arr[i]
            }
        }
        return second;
    }
    console.log(findSecondLargeArray([11,12,31,12,4,5,11]))