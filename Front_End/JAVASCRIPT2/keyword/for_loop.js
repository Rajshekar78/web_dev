
// // write a program to check if a number is multiple by 3 or not?
// function multipleSum(n){
//   var sum = 0;
//   for(var i = 1; i<n; i++){
//     if(i % 3 == 0 || i % 5 ==0){ // gives reminder of 0, divisible by either 3 or 5
//       sum += i; // add in sum if that's the case.
//     }
//   }
//   return sum
// }
// console.log(multipleSum(1000))

function multipleSum(n){
  var sum = 0;
  for(var i = 1; i<n; i++){
    var m3 = i * 3;
    var m5 = i * 5;
    if(m3 > n) break; // breaks early!!
    if(m3 < n) sum += m3
    if(m5 < n && m5 % 3 != 0) sum += m5; // make sure number is not divisible by 3, say m5 = 15, it will be captured as multiple of 3 anyway, we don't want duplicates.
  }
  return sum
}

// console.log(multipleSum(1000))

// how to print alphabets to number in javascript?
s.charCodeAt(0) - 97


String.fromCharCode(97 + n)






