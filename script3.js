let arr_1 = [0,1,2,3,4];
for(let i=0;i<arr_1.length;i++){
console.log(i);}
//-ve elements 
let arr_2 =[10,-20,30,-40,50];
for(let i=0;i<arr_2.length;i++)
{
    if(arr_2[i]<0){
      console.log(arr_2[i]) ; 
    }
}
//sum of array 
let arr_3 =[1,2,3,4,5];
 let sum =0;
 for(let i=0;i<arr_3.length;i++) {
  sum =sum + arr_3[i] ; 
 }  
console.log(sum);
//copy elements
let arr_5 =["A","B","C"];
let arr_5copy =[];
for(let i=0;i<arr_5.length;i++)
{
arr_5copy[i]= arr_5[i];
}
console.log(arr_5copy);