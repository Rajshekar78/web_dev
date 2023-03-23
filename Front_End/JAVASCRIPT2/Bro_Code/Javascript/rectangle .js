// a = window.prompt("Enter A");
// a = Number(a);
// b = window.prompt("Enter B");
// b = Number(b);
// c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log(c);

document.getElementById("click").onclick = function(){

    a = document.getElementById("nsgdion").value;
    a = Number(a);
    b = document.getElementById("nsddsg").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("three").innerHTML = "Answer =" + c;

}
