console.log("Day 4 Assignment");

//Question ------1
var i;
for (i = 1; i <101; i++) {
    
    if(i%5 ==0 && i%3 ==0){
        console.log("fizzbuzz");
    }
    else if(i%3 ==0){
        console.log("fizz");
    }
    else if(i%5 ==0){
        console.log("buzz");
    }else{
        console.log(i);
    }
  
}

//Question ------ 2
const student={
    name: "Helsink",
    age:24,
    projects:{
        diceGame:"Two Player dice game using Javascript"
    }
}
    const {name,age,projects:{diceGame}}=student;
    console.log(name,age,diceGame);

    //Question ------ 3
let shoppingList=['potato','tomato','onion','detergent'];
console.log(shoppingList);

let shoppingBasket=[...shoppingList];
shoppingBasket.push("paneer");
shoppingBasket.push("salt");
shoppingBasket.push("sugar");
console.log(shoppingBasket);


//Question ------ 4

function addBy()
{
        num1 = document.getElementById("firstNumber").value;
         num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = parseInt( num1) + parseInt( num2);
}

function subBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
         document.getElementById("result").innerHTML = num1 - num2;
}
function MultiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

//Question ------ 7

function findPrime(){

let n = document.getElementById("primenumber").value;
console.log(n);

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log( i ); // a prime
}
}

//Question ------ 8

// function ask(question,yes,no){
//     if(confirm(question)) yes()
//     else no();
//     }

// ask(
//     "Do you Agree?",
//     function() {alert("you agreed");},
//     function() {alert ("you canceled the exceution");}
// )

console.log("changed to arrow function");
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

  //Question ------ 6
  function myFunction() {
  let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
  }


   //Question ------ 5





