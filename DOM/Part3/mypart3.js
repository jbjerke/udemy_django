var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree = document.querySelector("#three")

// ensure connection
// console.log("connected");

headOne.addEventListener("mouseover", function(){
  headOne.textContent = "Mouse currently over";
  headOne.style.color = 'green';
})

headOne.addEventListener("mouseout", function(){
  headOne.textContent = "Hover Over Me!"
  headOne.style.color = 'black';
})

headTwo.addEventListener("click", function(){
  headTwo.textContent = 'Clicked On';
  headTwo.style.color = 'blue';
})

headThree.addEventListener("dblclick", function(){
  headThree.textContent = "I was double clicked";
  headThree.style.color = "red";
})
