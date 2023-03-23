let age = [20,78,4,13,34,56,19];
let adult = age.filter(create);

adult.forEach(print);
function create(ele){
    return ele>=18;
    
}
function print(ele){
    console.log(ele);
}
