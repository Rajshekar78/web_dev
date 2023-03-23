// let arr="ABDEF"
// let a=arr.charCodeAt(0)
// let b=arr.charCodeAt(1)
// let c=arr.charCodeAt(2)
// let d=arr.charCodeAt(3)
// let e=arr.charCodeAt(4)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log("logic adding +1")
// let char=[64,66,68,69,70]
//  char.forEach(x=>
//     console.log(x+1)
// )
// console.log("converting to characters and reversing")
// let text = String.fromCharCode(66, 72, 69, 70, 71);
// let original=text.split("").reverse().join("")
// console.log(original);

	
// // console.log(String.fromCharCode(65));

function printAlphabets(option){
	
	//set the default value of i & j to print A to Z
	var i = 65;
	var j = 91;
 
	//if the option is small set the value of i,j to print a to z
	if(option == 'small'){
		i = 97;
		j = 123; 
	}
 
	//loop through the values from i to j
	for(k = i; k < j; k++){
		//convert the char code to string (Alphabets)
		var str =String.fromCharCode(k);
		//print the result in console
                console.log(str);
	}
 
}