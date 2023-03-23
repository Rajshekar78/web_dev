let count = 0;

document.getElementById("decresebtn").onclick = function(){
    count-=1;
    document.getElementById("numbercount").innerHTML= count;
}
document.getElementById("resetbtn").onclick = function(){
    count=0;
    document.getElementById("numbercount").innerHTML= count;
}
document.getElementById("incresebtn").onclick = function(){
    count+=1;
    document.getElementById("numbercount").innerHTML= count;
}