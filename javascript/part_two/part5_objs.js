// typical js objs are hash-tables
// typically in the form: { key1 : "value", key2 : "value", ...}

// ** resources

// they are mixed data types
// there is no order to objects
// even though they are declared in this order, if you iterate
// there is no garuantee how the object will be interated through
var carInfo = {make:"Mazda", year:2010, model:"Mazda6"}
carInfo["make"]
carInfo["year"] = 2011
carInfo["year"] -= 1

for(key in carInfo){
  console.log(key); //grabs the keys
  console.log(carInfo[key]); // grabs value at key
}

carInfo["carAlert"] = function(){alert("We've got a car here!")} // added a function

carInfo.carAlert //shows the function

carInfo.carAlert() //executes function

// objects in javascript are really flexible with what they can take in
var myNewO = {a: "hello", b:[1,2,3], c:{inside:['a','b']}}
myNewO

myNewO['a']
myNewO['b'][1]
myNewO['c']['inside'][1]

// Show use of the "this" keyword
var myObj = {name : "Jose",
  greet : function(){
    console.log("Hello " + this.name)
  }
};

myObj.greet()
