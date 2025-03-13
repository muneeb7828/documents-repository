

// obj={
// Namee:"sami",
// Username:"samisheikh",
// Bio:"student",
// Password:"sami@123",
    
// }


// let username2=prompt("username2")
// let password2=prompt("password2")

// if(username2==obj.Username && password2==obj.Password){

// console.log(obj)
// }



Name="muneeb"
Last_Name="Ur Rehman"


console.log(Name.length)


console.log(Name.toUpperCase())
console.log(Name.toLowerCase())


Name2="  Muneeb ur Rehman          1"
bro="bhai"

console.log(Name2.slice(10,16))


console.log(Name2.slice(0,17).concat(bro," you beuty"))


console.log(Name.replace("muneeb","abdul"))



console.log(Name2.trim())




hello="Muneeb"

console.log(hello[0])
console.log(hello[1])
console.log(hello[2])
console.log(hello[3])
console.log(hello[4])
console.log(hello[5])





for(let a=0;a<=hello.length;a++){
console.log(a+hello[a])

}

//jo niche likha he vo he ek string method (.includes()) ye batata he true or false agar word likha he to true nahi to false

word="heloo my name is muneeb and what is your name"


console.log(word.includes("muneeb"))


//jo niche likha he vo he ek string method (.startsWith()) and (.endsWith()) ye batata he true or false startsWith batata he shuru me jo likha vo true he ki nahi aur endsWith batata he end me jo likha vo true he ki nahi

console.log(word.startsWith("heloo"));


// .search() ye batata he jo word check kar rahe ho vo word konse number se shuru ho raha he aur vo number print hoga

// .indexOf() ye .search() ki tarah hota he jo word check kar rahe ho vo word konse number se shuru ho raha he aur vo number print hoga 

// .lastIndexOf() ye bhi .search() ki tarah hota he bas ye last se dekhta he agar word shuru me bhi he aur last me bhi he to ye last wale ka number (index) dikhayga ke vo konse index se shuru ho raha he



console.log(word.indexOf("is"))
console.log(word.lastIndexOf("is"))
console.log(word.search("is"))

// .trim() ye bas aas paas ki space hata deta he

word2="        muneeb       "

console.log(word2.trim())


// .split() ye string ko array me convert kardeta he agar .split() ke andar (" ") ye kare to jaha bhi ye space he usko array me convert kardega lekin ye return karta he

console.log(word.split(" "))


// .repeat() ye bas repeat karta he value ko

console.log(word.repeat(2))



// .toString() ye sab ko string me convert kar deta he lekin ye return karta he


number=20

ab=(number.toString())

console.log(ab+10)


// Object.freeze() is function ko lagane ke baad koi bhi property add nahi kar sakte





Ob=new Object()

Ob.yahoo="yahoo"
Ob.instragram="instagram"
Ob.isgoodlehelpful=true


console.log(Ob)



obj2={
qualification:"b.com",
graduate:true,
bio:{
first_name:"Muneeb",
last_name:"ur rehman",
age:{
age:24,    
},
func:function (){
return this.first_name+" "+this.last_name
}

}
}


Object.freeze(obj2)

obj2.address="bhopal"

console.log(obj2)



abb= obj2.bio.func()


console.log(abb);




// hoisting and temporal dead zone.

// hoisting vo hoti he jo declare hone se phele console.log() kare to yani var a baad me declare kar rahe he aur console.log() phele likh rahe he to agar phele likh rahe he to isme kya hoga ke agar aapka variable var he to ye console.log() pe yeto show hoga ki variable to declare hua he lekin vo undifind show hoga bhalehi aap use assign karo ya nahi kyuki assign to aapko phele hi likhna padhega print karne se phele 
// magar function apan baadme banate he aur console.log() usse phele likhte he to ye chal jatahe function matlab only function declaration hi chalega aur koisa nahi kyuki ecma script se phele sirf global scope tha aur function scope tha aur ecma script 2015 me launch hone ke baad let aur const naam ke variable bane jo ke sirf block scope ke liye bane to isiliye var variable chal jayega aur isse apan hoisting bolenge and let aur const nahi chalega to ise temporal dead zone.
// Temporal dead zone vo hote he jo hoisting nahi hote for example let and const aur vo sabhi var aur function declaration ko chorke sabhi temporal dead zone he.   


// scope
// scope determinds the visiblity of variables and there is 3 types of scope.

// block scope
// block scope vo hote he jo sirf {} curly brackets ke andar hi chalte he bahar nahi chalte jese let aur const jo sirf apne brackets {} ke andar chalte he lekin var variable block scope me nahi ata to vo curly brackets {} ke andar bhi aur bahar bhi chal jata he.

// function scope
// function scope vo hote he jo sirf function(){} ke andar hi chalte he aur jo bhi variable function ke andar banate he to vo sare function scope banjate he.

                                                
// global scope
// global scope vo hote he jo globaly chale yani andar bhi aur bahar bhi aur saare variable global hota he agar unhe curly brackets ke bahar banay.




// function declaration
// function declaration vo hote he jinka name hota he jese function func(){} ye func iska name he aur sabhi function chalte tabhi he jab inhe invoke kare ya call kare. 


// function func(){
// Name="muneeb"
// Last_Name="ur rehman"    
// console.log("muneeb")
// return Name+" "+ Last_Name

// }

// console.log(func())



// function expression
// function expression vo hote he jinka koi name nahi hota aur jinko call karane ke liye us function ko alag se property me daalna padta he aur call karane ke liye usi function ka name use karna padta he

// func1=function(){}


// aero function
// aero function ki madad se ek line me hi code likh ke function chala sakte he aur isme return kane ki bhi zarurat nahi padti.

// a=()=>2+2


// immigiatly call function expression 
// (function(){})()


// array
// bassically array jo hota he vo kya karta he ki ek baar me bohot saare value store kar leta he jab ke apan agar normal variable banate he to usme ek hi naam ka primitive datatype store kar pate he 
// jab ke array me saare primitive datatype aur dusre variables bhi aur objects bhi ek baar me ek hi variable me store kar sakte he.


// for of loop
// for of loop value ke liye hota he jo apan variable banate he usme jo value store hoti he jese koi string ya boolean ya koi bhi data type to usko intex me convert kar deta he aur jo bhi value hoti he us ko dikha deta he.

// for of loop in array 
// array me  jab for of loop lagate he to jaha bhi , koma laga hota he us poori value ko ek intex maanta he aur jo bhi us intex pe value likhi he us value ko likha deta he aur jitne bhi value (datatype) ke baad ,koma laga hota un sabhi ko di khata he.

// for in loop
// for in loop basically object ke liye hota he usme ye object ki andar jo property hoti he usko dikhata he aur agar apan us variable ko jo apan loop me chala rahe he usko object ka name likh ke usko []square brackets ke andar likhenge to usse object ki andar jo property he uski jo value he vo bhi dikha dega.
// For in loop aur kya karta he ki agar apan variable ko for in loop me chala rahe he to jo bhi apan ne variable banaya uspe jo bhi datatype store he string ya bolean ya koi bhi to us value pe jo intex he vo intex show karta he. 

// while loop
// basically while loop bhi for loop ki tarah hota he.While loop kya karta he ki phele condition check karta he fir console.log() pe print karta he aur fir increment ya decrement karta he.
// ye he while loop ka syntax 

// let int=0

// while (int<10) {
//   console.log(int)
//   int++  
// }




// do while loop
// do while loop basically is liye hota he ki apan loop chala rahe he aur apan chate he ki ek baar to loop chal hi jaye bhalehi condition false kyu na ho.
// ye he do while loop ka syntax 

// let i=10
// do {
//  console.log(i)
//  i++   
// } while (i<10)


// continue
// continue keyword kya karta he ki jo bhi condition true hoti he usko hata deta he aur uske alava sab dikha deta he.


// break
// break keyword ye kya karta he ki jaha se condition true ho jati he vaha se nahi dikha ta usse phele ke dikhata he.



// swich case
// swich case conditional statement hota he ye if, esle if ki tarah hota he bas isme phele swich likhte he aur fir () parenthesis banate he aur uske andar variable ya key kaam likhte he uske baad curly brackets banate he aur usme case likhte he aur ke baad contition likhte he bager kisi brackets ke uske baad :colon lagate he fir uske niche console.log() fir break likhte he agar break nahi likha aur condition true hogai to uske niche jitne bhi case he vo sab print honge 
// aur last me default likhte ye esle ki tarah hota he.
// aur apan bohot saare case saath me likh sakte he ek ke niche ek. 
// agar switch case me mujhe comparison check karna he for exp a>b, b>a and more to mujhe switch ke baad () perenthisis me true likhna padega tabhi vo comparison karke sahi answer dega.




let vf="hello"


switch (vf) {
    case "hello":
        console.log("muneeb");
        break;       
        
    case "world":
        console.log("ur");
        break;
    
    case true:   
        console.log("rehman");
        break;

    case "hello world": 
        console.log("muneeb ur rehman");
        break;

    default:
        console.log("sahi dalo");
        break;
        
}


// array


nam="muneeb ur rehman"

age=24
height=5.8
address="bhopal eidgah hills"

bio=[age,height,address]


array=["hello","world","my","name","is",nam,bio]

for(g in array){
console.log(g+" "+array[g])    
}



// array methods

// tOString(),join(),pop(),push(),shift(),unshift(),concat(),flat(),splice(),slice(),find(),findIndex()
// pop() se last ki value bahar chalejati he
// puch() se last me value add kar sakte he
// shift() se shuru ki value bahar chalejati he
// unshift() se shuru me value add kar sakte he
// flat() ye ek array ke andar jitne bhi array hote he unsab ko jod ke ek hi array kar deta he magar isko dusre variable me daalna padhta he.
// concat() ye ek array ko dusre array se concat kar deta he magar isko dusre variable me daalna padhta he.
// tOString() ye pure array ko string me convert kar deta he magar isko dusre variable me daalna padhta he.
// join() ye pure array ko string me convert kar deta he
// slice() ye bhi string method ki tarah same kaam karta he array me bhi.ye kya 2 parameters pe kaam karta he phela jo aapko dekhna he word vo konse intex se shuru hua he vo intex dalna padte he phele parameters pe aur jo dusra parameter rehta he vo rehta he aapko kaha tak dikhana he vo intex dalo.
// splice() ye bohot saare parameters pe kaam karta he bas shuru ke 3 parameters main hote he 1 parameter rehta he aapko konsa word select karna he vo intex dalo aur 2 parameter rehta he vahase kitne hatana he vo intex dalo agar nahi hatana to zero dalo aur 3 parameter ya uske baad jitne bhi parameter he unsab me aap kuch bhi add kar sakte ho string ya variable kuch bhi.
// find() ye kya karta he ke aapne array bananya aur baadme aapko check karna he ki aapne jo array banaya tha usme kya ye value thi agar thi to usko dikhata he ye find() function agar nahi thi to undefined show karta he 
// aur iska syntax esa rehta he find((v)=>v=="muneeb") 
// findIndex() ye bhi find() ki tarah hota he bas ye uska intex batata he ki vo value konse intex pe he.




console.log (array.toString())

array.pop()
array.push("new value",Name2.trim().slice(0,16))

array.shift()
array.unshift("hello")


console.log(array)





aarrey=["asjs",true,[age,height,address],[obj2]]

console.log(aarrey)
contain=aarrey.flat()



contain2=array.concat(aarrey)

console.log(contain2);




let arr=["muneeb",true,,"saad",`this is my age ${age}`,true,`this is my ${height}`,"rehman"]


va= (arr.find((v)=>v=="muneeb"))






let e=1
let no2=100
let count=0

for(e;e<=no2;e++){
let prm="yes"

switch (true){
case e==1:
prm="no"        
}

let no=2    

for(no;no<e;no++){
switch (true){
case e%no==0:    
prm="no";        
}    

}

switch (true){
case prm=="no":
console.log()
break;
case prm=="yes":
count++       
console.log(`${count},this is prime number ${e}`);
break;
}

}




let ary=["chinese",false,"indian",false,"american",false,"pakistan",false,"australian",true,]


let is=["is"]


for(let e=0;e<ary.length;e++){
if(ary[e]==false){
ary[e]=true
}

}

console.log(ary)



