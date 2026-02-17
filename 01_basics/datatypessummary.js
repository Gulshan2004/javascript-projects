// primitive Datatypes (call by value based )
// 7 types: string , Number , Boolean , null , undefined , symbol
//bigint

const score=100
const scoreValue=100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;


const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456787654345n


//reference (Non Primitive)
// Array , Objects , functions

const heros =["shaktiman", "naagraj", "doga"];
let myobj={
    name: "hitesh",
    age: 22
}

const myfunction=function(){
    console.log("hello world");
}

console.log(typeof heros)

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory Types: stack memory ( primitive ) , heap memory ( Non- primitve)

let myYoutubename = "Gulshan Kumar"

let anothername = myYoutubename
anothername ="chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne ={
    email :"user@gmail.com",
    upi:"user@sbi"

}
let userTwo =userOne

userTwo.email = "gulshan@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)