
let numb=Math.floor(Math.random()*50)+1;
let number=document.getElementById("number").value;
function send(){
    console.log(numb)
    if(number===numb){
        alert("the number u enter is correct")
    }
    else if(number>numb){
        alert("the number you entered is high")
    }
    else if(number<numb){
    alert("the number you enter is low")}
    
    else{
        alert ("enter a valid number")
    }
}
   