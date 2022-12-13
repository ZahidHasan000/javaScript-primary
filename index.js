// 1. ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is a document");

// 2. JavaScript console API(Application programming interface)
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is a warning");
// console.error("this is a error");

// 3.JavaScript variables
// What are variables? -containers to store Data Value.
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4.Data types in JavaScript [Numbers, String, Booleans, Objects(key value players)]

// Numbers 
var num1 = 455;
var num2 = 56.76;
// console.log(num1);
// console.log(num2);

// String 
var str1 = "This is a satring";
var str2 = "This is also a string";
// console.log(str1);
// console.log(str2);

// Objects 
var marks = {
    ovi: 34,
    nur: 78,
    pavel: 99.977
}
// console.log(marks);

// Booleans 
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
// console.log(undefined);
var und;
console.log(und);

var n = null;
// console.log(n);

// Array 
var arr = [1, 2, "zahid", 4, 5];
// console.log(arr);

// Operators in JavaScript
var a = 100;
var b = 10;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);

// Assignment Operator
var c = b;
// c += 2;     /* c= c+2 */
// c -= 2;  /* c= c-2 */
// c *= 2;  /* c= c*2 */
// c /= 2;  /* c= c/2 */
// console.log(c);

// comparison operators
/* var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y); */

// Logical Operators

// AND operator
/*console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false); */

// OR operators
/*console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);  */

// Logical NoT operators
/*console.log(!false);
console.log(!true); */

// Function in javaScript
/*function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2); */

// Conditionals in JavaScript
// Single if statement 
/*var age = 34;
if (age >8){
    console.log('You are not a kid');
}
if-else statement 
var age = 42;
if (age >8){
    console.log('You are not a kid');
}
else{
    console.log('You are a kid');
} */

// if-else Ladder 
// var age = 42;
/*var age = 31;
if (age >32){
    console.log('You are not a kid');
}
else if(age >26){
    console.log('kids are not allowed');
}
else if(age >22){
    console.log('Yes kids are not allowed');
}
else if(age >18){
    console.log('18 kids are not allowed');
}
else{
    console.log('kids are allow');
}
console.log('End of ladder'); */

// Loop(Array)[For loop]
/*var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i =0; i<arr.length; i++){
    console.log(arr[i]);
} */

// ForEach loop
/*var arr = [1,2,3,4,5,6,7];
arr.forEach(function(element){
    console.log(element)
}) */

// While Loop 
/*var arr = [1,2,3,4,5,6,7];
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
} */

// do-while Loop 
/*var arr = [1, 2, 3, 4, 5, 6, 7];
let j = 0;
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length); */

// Break loop
/* var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i =0; i<arr.length; i++){
    if(i==2){
        break;
    }
    console.log(arr[i]);
} */

// Continue loop
/* var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i =0; i<arr.length; i++){
    if(i==2){
        continue;
    }
    console.log(arr[i]);
} */

// Array methods
/* let myArr = ["Fan", "Camera", 34, null, true];
console.log(myArr.length); */

/* let myArr = ["Fan", "Camera", 34, null, true];
myArr.pop();
console.log(myArr); */

/* let myArr = ["Fan", "Camera", 34, null, true];
myArr.push('Zahid');
console.log(myArr); */

/* let myArr = ["Fan", "Camera", 34, null, true];
myArr.shift();
console.log(myArr); */

// console.log(myArr.unshift('Zahid'));
/* const newLen = myArr.unshift("Zahid");
console.log(newLen); 
console.log(myArr); */

// myArr.toString();

/* let d = [1,4,6,43,23,32324];
d.sort();
console.log(d); */

// String Methods in JavaScript
/* let myLovelyString = "Zahid is a bad boy";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("boy")); */

/* let myLovelyString = "Zahid is a bad boy bad boy";
console.log(myLovelyString.lastIndexOf("boy")); */

/* let myLovelyString = "Zahid is a bad boy";
console.log(myLovelyString.slice(2,8)); */

/* let myLovelyString = "Zahid is a bad boy";
d = myLovelyString.replace("Zahid", "Hasan");
d = d.replace("bad", "good");
console.log(d, myLovelyString); */
    
//    Dates in JavaScript
/* let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours()); */

// DOM Manipulation
/* let elem = document.getElementById('click'); 
console.log(elem); */

/* let elemClass = document.getElementsByClassName("container"); 
console.log(elemClass); */
// elemClass[0].style.background = "blue";
/* elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success"); */
/* console.log(elem.innerHTML);
console.log(elem.innerText);

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerHTML); */

/* tn = document.getElementsByTagName('button');
console.log(tn);

tn = document.getElementsByTagName('div');
console.log(tn); */

/* createdElement = document.createElement('p');
createdElement.innerText = "This is a created pera";
tn[0].appendChild(createdElement); */

/*createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created pera";
tn[0].replaceChild(createdElement2, createdElement); */

// Selecting using Query 
/* sel = document.querySelector(".container");
console.log(sel); */

/* sel = document.querySelectorAll(".container");
console.log(sel); */

// Events in JavaScript
/* function clicked(){
    console.log("The button was click")
} */

/* window.onload = function(){
    console.log("The document was loaded")
} */

 /* firstContainer.addEventListener('click', function(){
    console.log("Click done")
}) */

/* firstContainer.addEventListener('mouseover', function(){
    console.log("Click done")
}) */

/* firstContainer.addEventListener('mouseout', function(){
    console.log("Mouse out of container");
}) */

/* firstContainer.addEventListener('mouseup', function(){
    console.log("Mouse up when click on container");
}) */

/* firstContainer.addEventListener('mousedown', function(){
    console.log("Mouse down when click on container");
}) */

/* firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked </b>"
    console.log("Click done")
}) */

/* let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when click on container");
}) 

 firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked </b>"
    console.log("Mouse down when click on container");
})  */

// Arrow Function  
/* function summ(a, b){
    return a+b;
} */
 /* summ = (a,b)=>{
    return a+b;
} */


// setTimeout and setInterval 
/* logKaro = ()=>{
    console.log("I am your log")
}
setTimeout(logKaro, 2000); */

 /* logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired </b>"
    console.log("I am your log")
}
setTimeout(logKaro, 2000); */
 
 /* logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired </b>"
    console.log("I am your log")
}
setInterval(logKaro, 2000); */

// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
/* clr = setTimeout(logKaro, 2000);
clr = setInterval(logKaro, 2000); */

// localStorage in JavaScript
/* localStorage.setItem('name', 'Zahid');
localStorage.getItem('name');
localStorage.remove('mame');
localStorage.clear(); */

// JSON in javaScript
/* obj = {name: "Zahid",length: 1}
jso = JSON.stringify(obj);
console.log(typeof jso); */

/* obj = {name: "Zahid",length: 1, a: {this: 'Tha\"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso); */

/* obj = {name: "Zahid",length: 1, a: {this: 'Tha\"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(`{"name":"Zahid","length":1,"a":{"this":"That"}}`);
console.log(parsed); */

// Template literals - Backticks
/* a = 34;
console.log(`This is my ${a}`); */