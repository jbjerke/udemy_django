var spy = false;

var fname = prompt("Hello and welcome. Please enter your First Name:");

var lname = prompt("Please enter your Last Name:");

if(fname[0] === lname[0]){
  spy = true;
}

var age = prompt("How old are you?");

if(age <= 20 && age >= 30){
  spy = false;
}

var h = prompt("How tall are you in centimeters?");

if(h < 170){
  spy = false;
}

var pet = prompt("What is your pet's name?");

if (pet[pet.length-1] != "y"){
  spy = false;
}

if(spy === true){
  console.log(fname + " " + lname);
  console.log(age + " years old");
  console.log(h + " cm tall");
  console.log("Pet name is \"" + pet + "\"");
}
