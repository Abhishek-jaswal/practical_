let ran = Math.floor(Math.random() * 50);
 console.log(ran)
let guess=document.getElementById("number").value;
function num(){

   

    if(guess==ran){
        alert("winner",ran)

    }
    else if(guess>ran){
        alert("gussed to high")

    }
    else{
        alert("to lowwer")
    }
    

}
