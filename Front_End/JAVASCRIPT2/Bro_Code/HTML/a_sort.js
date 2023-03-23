let marks = [37,45,78,63,52,98,100];
mark = marks.sort(Accgrade);

mark.forEach(print);

function Desgrade(a, b){
    return b-a;
}

function Accgrade(a, b){
    return a-b+100;
}

function print(ele){
    console.log(ele);
}