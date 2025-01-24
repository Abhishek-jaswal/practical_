
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");
let ran = Math.floor(Math.random() * 50)+1 ;
let show = document.getElementById("show");
let count =0;

function guess(){
  console.log(ran)
  count++; 
  let userName = document.getElementById("name").value;
      document.querySelector("h2").innerHTML = "Hello "+userName ;
      let check = document.getElementById("number").value;
      if(check == ran){
         alert( "Congratulations! You have guessed the correct number!" + count + " guesses");
        
         step2.style.display = "none";
         step3.style.display = "block";

      }
      else if(check > ran){
           show.innerHTML = "You have guessed too high. Try again!" + count + " guesses";
      }
      else if(check < ran){
            show.innerHTML = "You have guessed too low. Try again!" + count + " guesses";
      }
      else{
            show.innerHTML = "Please enter a number!";
      } 
      
      if(count>5){
      alert("You have exceed   guesses");
       }
      }
   
    
function send(){
  step1.style.display = "none";
  step2.style.display = "block";
  step3.style.display = "none";
  let userName = document.getElementById("name").value;
  document.querySelector("h2").innerHTML = "Hello "+ userName ;
}
step1.style.display = "block";
step2.style.display = "none";
step3.style.display = "none";
step4.style.display = "none";


let result; // Declare result globally

function generateRandomNumber() {
  let inputname = document.getElementById("inputname").value;
  let input1 = parseInt(document.getElementById("starting_number").value);
  let input2 = parseInt(document.getElementById("ending_number").value);
  result = Math.floor(Math.random() * (input2 - input1 + 1)) + input1; // Generate a random number once
  console.log("Random number generated:", result); // For debugging
  step4.style.display = "block";
  step3.style.display = "none";

}

function check(inputname) { 
  let guessnum = parseInt(document.getElementById("guessnum").value);
  if (result === guessnum) {
    document.getElementById("result").innerHTML = "Congratulations completed!";
  } else {
    document.getElementById("result").innerHTML = "Not matched!";
  }
}
