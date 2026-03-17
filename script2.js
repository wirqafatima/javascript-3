var i = 1;
while(i<=10){
    console.log(i);
    i++;
}
//print even numbers
for(i=1;i<=20;i++){
    if(i % 2 ==0){
        console.log(i);
    }
}

//reverse order
var j = 10;
while(j>=1){
console.log(j);
    j--;
}
//days of week 
var num = 4;
switch(num){
 
case 1:
    console.log("Monday"); 
    break;
case 2:
    console.log("Tuesday"); 
    break;
 case 3:
    console.log("Wednesday"); 
    break;
case 4:
    console.log("Thursday"); 
    break;
 case 5:
    console.log("Friday"); 
    break;
 case 6:
    console.log("Saturday"); 
    break; 
case 7:
    console.log("Sunday"); 
    break; 
 default:
     console.log("invalid number");
     break;
}
//grade messages 
var grade = "A";
switch(grade){
case "A":
    console.log("Excellent Performance");
    break; 
case "B":
    console.log("Well done");
    break; 
case "C":
    console.log("Better");
    break; 
case "D":
    console.log("Need improvement");
    break; 
default:
    console.log("invalid grade") ;
    break;
}
//star pattern 
for(var i = 0; i <= 5 ; i++){
    var star = "" ;
    for( var j = 1; j <= i ; j++){
        star = star + "*";
    }
    console.log(star);
}