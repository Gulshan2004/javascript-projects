// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

/* WE  SHOULD ALWAYS AVOID THE BELOW CASES 
console.log(Null> 0);
console.log(NULL==0);
console.log(NULL>=0); 

console.log(undefined> 0);
console.log(undefined==0);
console.log(undefined>=0); 
*/

//NOTE:- The reason is that an eqaulity check == and cmparisons > < >= <= work diiferently 
// compariosn convert null to a nuber . treating it as 0 .
//that's why (3) null>= 0 is true and(1) null > 0 is false .

// === strictly checks the value 
console.log("2"=== 2 ); //checks data type as well therefore the output will be false