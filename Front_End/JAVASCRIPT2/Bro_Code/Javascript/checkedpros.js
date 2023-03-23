
document.getElementById("myButton").onclick = function(){
    const myCheckbox = document.getElementById("myCheckbox");
    const VisaBtn = document.getElementById("VisaBtn");
    const MastercardBtn= document.getElementById("MastercardBtn");
    const CreditBtn = document.getElementById("CreditBtn");

    if(myCheckbox.checked){
        console.log("You are subscribed");
    }
    else{
        console.log("You are NOT subscribed");
    }

    if(VisaBtn.checked){
        console.log("You are paying with VISA");
    }
    else if(MastercardBtn.checked){
        console.log("You are paying with MASTERCARD");
    }
    else if(CreditBtn.checked){
        console.log("You are paying with CREDIT are paying with CREDIT");
    }
    else{
        console.log("Please pay");
    }

}