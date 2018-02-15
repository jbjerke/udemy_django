// Create variables
var re = document.querySelector("#restartme");

var boxes = document.querySelectorAll("td");

// Define the functions
function clearBoard(){
  for(var n = 0; n < boxes.length; n++){
    boxes[n].textContent = "";
  }
}

function markBox(){
  if(this.textContent === ""){
    this.textContent = "X";
  }
  else if (this.textContent === "X") {
    this.textContent = "O"
  }
  else{
    this.textContent = "";
  }
}

// Add eventlisteners
// re.addEventListener("click",clearBoard());
// Using () caused the function to be called once without the event occuring

re.addEventListener('click', clearBoard);

// for(var j = 0; j < boxes.length; j++){
//   boxes[j].addEventListener("click", markBox(j));
// }
for(var j = 0; j < boxes.length; j++){
  boxes[j].addEventListener("click", markBox);
}
