 var num = 7;
 if(num >= 0){
    console.log("positive");
 }
 else{
    console.log("negative");
 }
   //EVEN-ODD
 var num1 = 20;
 if(num1 % 2 ==0){
    console.log("even");
 }
 else{
    console.log("odd");
 }
   //VOTE
 var age = 26;
 if(age >= 18){
    console.log("you are eligible");
 }
 else{
    console.log("you are not eligible");
 }
    //GRADE
var score = 79; 
if( score < 0 || score>100){
  console.log("Invalid score");  
}
else if( score>=90){
    console.log("Grade A");
}
else if(score>=80){
    console.log("Grade B");
}
else if(score>=70){
    console.log("Grade C");
}
else if(score>=60){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}
   //CALCULATOR
  var num2 = 10;
  var num3 = 20;
  var operation = "++";
  if(operation == "+"){
    console.log( num2 + num3);
  }
  else if(operation == "*"){
    console.log( num2 * num3);
  }
  else if(operation == "-"){
    console.log( num2 - num3);
  }
  else if(operation == "/"){
    if( num3 !==0){
   console.logz(num2 / num3);
    }
   else{
    console.log("cannot divided by zero");
   }
  }
  else if(operation == "%"){
    console.log( num2 % num3);
  }
  else{
    console.log("invalid operation");
  }
  