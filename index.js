

//Ques1 Write a program to print number from 10 to 1 in reverse order .


for(let intex=10; intex>=1;intex--){
console.log(intex)
}

//Ques2 Write a program to calculate the factorial using loop.


let container=1


for(let i=5;i>=1;i--){
container=container*i
console.log(container)    
}


//Ques3 Write a program to calculate the sum of even number and odd number separately in the range of 1 to 20

let int=1
container2=0
for(int;int<=20;int++){ 
if(int%2==0)
container2+=int
console.log(container2)  
}

let no=1
container3=0
for(no;no<=20;no++){
if(no%2==1)
container3=container3+no
console.log(container3)
}

//Ques3 Write a program to find all divisors of a number using a loop.


let inn=1
    number=20
for(inn;inn<=number;inn++){
if(number%inn==0)
   console.log(inn)     
}



//Ques3 Write a program to print the following pattern.

a=1
b=10
c=""

for(a;a<=b;a++){
if(a<b)  
  c=c+"*"     
console.log(c)
}


// let abb=100
//     bbb=120
//     bcc=20


//     if(abb>bbb && abb>bcc){
//      console.log(abb+"abb")
//     }

//     else if(bbb>abb && bbb>bcc){
//       console.log(bbb+"bbb")
//      }

//      else if(bcc>abb && bcc>bbb){
//       console.log(bcc+"bcc")
//      }

//      else{
//      console.log("muneeb") 
//      }


// num6=prompt()

// ab=3
// bb=5


// if(num6%ab==0 && num6%bb==0){
// console.log("the number is divisible by both 3 and 5")  
// }


// else if(num6%ab==0){
// console.log("the number is only divisible by 3")  
// }


// else if(num6%bb==0){
// console.log("the number is only divisible by 5")  
// }

// else{
// console.log("please type correct number")  
// }


// ab="1"
// bb= 1


// if(ab===bb){
// console.log("both stings are equal")  
// }

// else if(ab!==bb){
// console.log("both stings are not equal")  
// }
  

// let incometax=500000


// if(incometax<=50000){
// console.log("0% tax")  
// }

// else if(incometax>=50001 && incometax<=100000){
// console.log("10% tax")  
// }
  
// else if(incometax>100000){
// console.log("so you need to pay 20% tax")  
// }


// num6=20


// if(num6<0 && num6%7==0){
// console.log("negative number and divisible by 7")  
// }


// if(num6<0){
// console.log("negative number")  
// }


// else if(num6>0 && num6%7==0 ){
// console.log("Positive number and divisible by 7")  
// }
  


// else if(num6>0){
// console.log("Positive number")  
// }
  

// else if(num6==0){
// console.log("zero")  
// }
 

// else{
// console.log("type a valid number")  
// }

// let user1=prompt("user1")
// let user2=prompt("user2")

// let ab
// let bc

// if(user1<user2){
// (ab=user1 , bc=user2)
// }

// else if(user1>user2){
// (ab=user2 , bc=user1)
// }




// for(ab;ab<=bc;ab++){
//   console.log(ab)
// }


let bajaj="open"

if(bajaj=="open"){
let rs200="sold out"
let dominar="sold out"
let ns="sold out"
let f220="sold out"

if(rs200=="sold in")
console.log("rs200 le aao")

else if(dominar=="sold in")
console.log("dominar le aao")

else if(ns=="sold in")
console.log("ns le aao")
  
else if(f220=="sold in")
console.log("f220 le aao")

else
console.log("pulsor walo se bolo kahin aur se le lenge")  



}
else{
console.log("kuch mat lao")  
}



// let num1=1
// let num2=prompt("num2")
// let container4=1
// let count=0
// let container5=300000000

// for(num1;num1<=num2;num1++){
// container4*=num1 
// container5=container5/2
// if(num2%num1==0){ 
// count=count+1
// console.log(num1)
// }   
// else{
// console.log(num1+"this number is not divisible by this number")} 
// }                             



// let num1=1




// for(num1;num1<=4;num1++){

//  let ab=1
 
//  console.log(num1)
//  for(ab;ab<=5;ab++){
   
//    let f=1
//    for(f;f<=6;f++){
//      console.log(ab)
//     } 
//     console.log(f)
    

// }

// }



let d=1
let no1=5
let no2=4
let plus=""

for(d;d<=no1;d++){


  let e=1

  ster=""
  plus=""
  for(e;e<=no2;e++){
   
  plus=plus+" "  
  ster=ster+"*"
  
}
console.log(plus+ster) 

no2--

} 




let cd=2
let no4=4
let prim="yes"

for(cd;cd<no4;cd++){

if(no4%cd==0){
  prim="no"
  console.log(cd)
}

}


if(prim=="yes"){
console.log("prime number")  
}
else if(prim=="no"){
console.log("This is not prime number")
}






let no5=2
let S=100
let count1=0
let count2=0

for(no5;no5<=S;no5++){
  
let prime="true"
  
let ac=2

for(ac;ac<no5;ac++){

if(no5%ac==0){
  prime="false"  
  
}


}

if(prime=="true"){ 
count1++  
console.log(no5+"prime")
}
else if( prime=="false"){
count2++   
console.log()
}


}

var a=1
var no3=6
var c=6 
var spac=""

for(a;a<=no3;a++){

var b=1
star=""
spac+=" "
for(b;b<=c;b++){
star+="*"

  
}

console.log(star)
c--

}


