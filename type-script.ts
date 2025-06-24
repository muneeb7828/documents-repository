
// Installation and setup for ts

// Download and install node
// make project folder
// install typescript
// create typescript file
// generate js file with typescript compiler


// installation of typescript
// isme do tarike hote install karne ke locally aur globally aur locally install karenge to ts ki commands ek hi folder me hogi magar globally karenge to pure computer me hogi

// this is for locally
// npm install typescript --save-dev         

// this is for globally
// npm install -g typescript



// convert ts file to js file
// is command ko chalane se ts file se convert hui ek js file ban jati he to jo bhi changes karte he uske baad ye command chalani padti he to fir vo update hoti he
// npx tsc app.ts  (type script compiler)

// npx tsc app.ts --watch
// is command ka use karne se bas ek baar command chalani padti he 

// aur jab ts file ko convert karte he js file me to variable var se dena padta he kyuki let aur const rediclare nahi hote isiliye nahi de sakte


// What is TypeScript

// TypeScript is a better version of javascript
// aur typeScript superset of js

// superset
// superset vo hota he kisi jese kisi ek cheez saari features hote aur sath me aur feature hote he


// why use TypeScript

// ise andar data types define kar sakte he aur isko static typing bhi bolte he aur js me nahi kar sakte
// aur isse ye benifit hota he agar kisi variable ka data type string define kar diya to agar us variable ko change karenge to string hi dena padega
// aur isme multilpe data type bhi de sakte he
var data : null | string = null       // is tarike se
// aur is tarike se static typing data type define karte he
var age:number=24


// it is important to convert ts into js after then we can see the output in browser


// important TypeScript features

// Define data type
// Interfaces
// Decorators
// Genorics
// Namespaces
// type inference
// Advance Features
// Code Quality
// etc


// data type matlab jo variable he vo kis type ka he

// data types in type script

// primitive types
// number,string,boolean,null,undefined,bigint,symbol
// bigint tab use karte he jab number bohot bata hota he  
   var bignumber=92390239232323400n         // ye number he isme agar koisa number add kar rahe he to add nahi ho raha taki ek limit ke baad ye add nahi hota to iske liye bigint k a use karenge last me n lagake   
   var x=1n;
   console.log(bignumber+x)
   
// symbol ye unique address generate karta he ye he iska syntax Symbol('description')
var sym=Symbol('abc');
var sym2=Symbol('abc');
console.log(sym==sym2)     // ye false return karega
const id=Symbol('id')
const obj={
   [id]:100,                // is tarike se key likhte he to variable ki value iski key ban jati he
   name:"muneeb"
}
console.log(obj[id])        // aur isko access is tarike se karte he   

// number me ye values bhi hoti he decimal,octal,binary,hexadecimal
var oct:number=0o1000001
var hexa:number=0x00001
var binary:number=0b00001
//convert string to numeber
var stirng="100"
var num=Number(stirng)

// type inference wih number
// inference matlab andaza lagana agar variable ke sath datatype define nahi kiya to bhi ye pata laga leta he data type isi ko type inference bolte he


// Object types
// Special types
// Advanced types 
// Function types




// tsc configuration file

// how to generate config file
// tsc --init   is command se generate hote he config file

// use of coding file

// "target": "es2024",   
// tsconfig file me ek property hoti he target name se ye is liye hoti he ke aap konsa version use kar rahe echma script ka ts ko js me convert karne ke liye

// convert all ts file to js together
// tsc     is command se ek baar me hi saari files js me convert hojati he

// fix errors after config







