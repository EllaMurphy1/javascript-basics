console.log("Hello World");

// Weird Scope - Don't use
// var x = 5;
// Regular old variable
let y = 6; // this is a number
y=10; // You can change the value

const z = 7; // This is a constant. Can't be changed
// z=10 // this throws and error. 

console.log (y,z);
console.log (y+z);
console.log (y-z);
console.log (y*z);
console.log (y/z);
console.log (y%z);// this does devision but returns the remainder
console.log (y**z); //exponents 

let fname="Ella" // thing is a string 
let lname="Murphy"
console.log (fname+" "+lname);

console.log (`${ fname } ${ lname }`);
console.log (`${ fname } ${ 5*9 }`);
console.log(lname + 6); 


let user = "ella"
let pass = "foo"

if (user== "ella"){
    console.log ('you are ' + user);
}

user = "ella";
if(user == "ella") {
    console.log ('you are ' + user);
} else {
    console.error("DENIED");
}

user = "ella";
if(user == "ella" && pass == "foo") {
    console.log ('you are ' + user + ' and your pass is ' + pass);
} else {
    console.error("DENIED");
}

const license = 18;
const jrop = 16;
const rental = 25;

let = 56;

function checkAge( myAge ) {
    console.log ('RUNNING ... ' +myAge);
if (myAge < license && myAge>= jrop) {
    console.log ('you can have a jrop License');
}

if (myAge >= license) {
    console.log ('you can have a regular license');
}

if(myAge >=rental) {
    console.log('you can rent a car');
}

if(myAge <jrop) {
    console.log("You're too young to drive");
}
}

checkAge(6);
checkAge(17);
checkAge(19);
checkAge(37);