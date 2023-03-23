let obj={};
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
 
console.log(isEmptyObject({})); // output: true
 
var bar = {"foo": "1"};
console.log(Object.keys(bar).length); // output: 1
console.log(isEmptyObject(bar)); // output: false