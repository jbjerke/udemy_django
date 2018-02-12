var roster =[]

function add(name){
  var name = prompt("What name would you like to add?");
  roster.push(name);
}

function display(){
  console.log(roster);
}

function remove(){
  var name = prompt("What name would you like to remove?");
  var temp = [];
  for(var i = 0; i < roster.length; i++){
    if ( roster[i] != name ){
      temp.push(roster[i]);
    }
  }
  roster = temp;

  // var index = roster.indexOf(name)
  // roster.splice(index, 1)
}

var cont = prompt("would you like to start the roster web app? y/n");
var command;
var name;

while(cont === "y"){
  command = prompt("What command would you like to use?");
  if(command === "add"){
       add()
  } else if(command === "remove"){
    remove();
  } else if(command === "display"){
    display();
  } else if(command === "quit"){
    cont = "n";
  }
  else{
    alert("unrecognizable command, try again");
  }
}
