//generate random number
let random_variable=(Math.floor (Math.random()*100));
console.log(random_variable);
//sqr_root
let sqr_root =(Math.sqrt(25));
console.log(sqr_root);
//power 
let power=(Math.pow(5,3));
console.log(power);
//number guessing helper
let guessgame=Number(prompt("enter a number between 1 and 10"));
let randomnumber=(Math.floor (Math.random()*10));
while(guessgame!=randomnumber){
     guessgame=Number(prompt("enter a number between 1 and 10"));
}
console.log("YOU WIN");