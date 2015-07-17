/*
  ...........YOUR MISSION...........

  Make me a sandwich.
  
  1. Create a Sandwich object.
  2. Create 6 keys on the object all defaulted to a value of false
     a. pickle: false
     b. lettuce: false
     c. tomato: false
     d. ketchup: false
     e. mustard: false
     f. mayo: false
  3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  4. Create a function named "makeMeASandwich".
  5. That function should take 6 arguments - one for each condiment on the sandwich.
  6. If any of those 6 argument values are true, put that condiment on the sandwich.
  7. Write to the document something like this...
    "My sandwich has pickle, ketchup, mustard on it"
*/

var sandwich = {};

sandwich.pickle = false;
sandwich.lettuce = false;
sandwich.tomato = false;
sandwich.ketchup = false;
sandwich.mustard = false;
sandwich.mayo = false;


function changePickle() {
sandwich.pickle = true;
var pickle = "Pickle, ";
}

function changeLettuce() {
  sandwich.lettuce = true;

}

function changeTomato() {
  sandwich.tomato = true;

}
function changeKetchup(){
  sandwich.ketchup = true;
}
function changeMustard() {
  sandwich.mustard = true;

}
function changeMayo() {
  sandwich.mayo = true;
}


var a;
var b;
var c;
var d;
var e;
var f;

function makeMeASandwich(a,b,c,d,e,f){

var completedCondiments = ""; 

if (a == 1) {
a = changePickle();  
completedCondiments += 'Pickle, ';
}
if (b == 1) {
b = changeLettuce();
completedCondiments += 'Lettuce ';
}
if (c == 1){
c = changeTomato();
completedCondiments += 'Tomato ';
}
if (d == 1){
  d = changeKetchup();
  completedCondiments += 'Ketchup ';
}
if (e == 1){
  e = changeMustard();
  completedCondiments += 'Mustard ';
}
if (f == 1) {
  changeMayo();
  completedCondiments += 'Mayo ';
}


document.write("My sandwich has " + " " + completedCondiments + 'on it.');

console.log(sandwich.pickle);
console.log(sandwich.lettuce);
console.log(sandwich.tomato);
console.log(sandwich.ketchup);
console.log(sandwich.mustard);
console.log(sandwich.mayo);

}

makeMeASandwich(0,1,0,1,1,1);

