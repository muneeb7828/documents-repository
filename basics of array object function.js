



let ab=1
let ab2=6
let star2=""
let ab4=6

for(ab;ab<=ab2;ab++){
    
    let ab3=1
    let space2=""
    star2+="**"
for(ab3;ab3<=ab4;ab3++){

space2+=" "

}
console.log(space2+star2)
ab4--

}








var aa=1
var no=5
var cc=5
var space=""

for(aa;aa<=no;aa++){

var bb=1    
star=""
space+=" "    
for(bb;bb<=cc;bb++){
   
star+="**"  

}
console.log(space+" "+star)
cc--

}




// function muneeb(a,b){
    
// console.log(a,b)    
// }

// muneeb("aam","panna")


let num=10
let op="+"
let num2=20


function calculator(a,b,d){

if(op=="+"){
console.log(a+b)
}
else if(op=="-"){
console.log(a-b)
}
else if(op=="*"){
console.log(a*b)
}
else if(op=="/"){
console.log(a/b)
}
else if(op=="**"){
console.log(a**b)
}
else{
console.log("arthmatic operator hi daalo")    
}

}


calculator(num,num2)


// let rs=1
// let rd=10
// let taar=""
// let disign=prompt("disign")

// for (rs;rs<=rd;rs++){  
// taar+=disign
// console.log(taar)
// }



let no1=10

function oddeven(a){
    
if(no1%2==0){
console.log(a+" even number")
}    
else if(no1%2!=0){
console.log(a+" odd number")
}        
    
}

oddeven(no1)


let ag=18


function age(a){

if(a<18 && a>=10){
console.log("you can not drive because you are below 18")
}    
else if(a<10 && a>=0){
console.log("you can not even think of driving because you are below 10")
}
else if(a>=18 && a<=60){
console.log("you can drive")
}
else if(a>60){
console.log("you are too old to drive so we can not provide license for you")
}
else{
console.log("Please type correct")
}
}

age(ag)


let numb=15

function divisible(a){

if (a%3==0 && a%5==0){
console.log("this number is divisible by both 3 and 5");    
}    
else if (a%3==0 || a%5==0){
console.log("this number is only divisible by one of them");    
}  
else{
console.log("this number is not divisible by both 3 and 5");    
}   
}

divisible(numb)


let unit=200

function electricity_bill(a){

if(unit<=100 && unit>=0){
let electricity_bill=unit*1    
console.log(electricity_bill+"$")    
}    
else if(unit>100 && unit<=300){
let electricity_bill=unit*2    
console.log(electricity_bill+"$")    
}
else if(unit>300){
let  electricity_bill=unit*3   
console.log(electricity_bill+"$")    
}
}

electricity_bill(unit)


let day=7

function days(a){

if(a==1){
console.log("Monday");
}    
else if(a==2){
console.log("Tuesday");
}
else if(a==3){
console.log("Wednesday");
}
else if(a==4){
console.log("Thusday");
}
else if(a==5){
console.log("Friday");
} 
else if(a==6){
console.log("Saturday");
}     
else if(a==7){
console.log("Sunday");
}
else{
console.log("1 se 7 ke hi number dalo tabhi days dekh paoge");
    
}
}


days(day)



let time=13
let minute=""


function convertimeto12hours(a){

if(a<24 && a>12){        
console.log(a-12+minute+"pm");
}
else if(a<12 && a>0){    
console.log(a+minute+"am");
}
else if(a==12){    
console.log(a+minute+"pm");
}
else if(a==24){    
console.log(a-24+minute+"am");
}
else{
console.log("please type 1 to 24 number to see time")        
}
}

convertimeto12hours(time)


let price=2000


function finalprice(a){
if(a>1000){
let discount=a/100*20
let finalprice=price-discount
console.log(finalprice+"$");    
}
else{
let discount=a/100*10
let finalprice=price-discount
console.log(finalprice+"$");       
}
}

finalprice(price)


let sting1="12" 
let sting2="13"

function sting(){
if(sting1===sting2){
console.log(true)    
}
else{
console.log(false)    
}
}


sting()


let income=200000


function incometax(income){
if(income<=50000){
let incometax=0
let finalincome=income-incometax
console.log(incometax);    
}
else if(income>50000 && income<=100000){
let incometax=income/100*10
let finalincome=income-incometax
console.log(incometax);
}
else if(income>100000){
let incometax=income/100*20
let finalincome=income-incometax
console.log(incometax);
}
}

incometax(income)


let balance=100000
let request_amount=50000

function ATM(bal,req){
if(req%10==0 && bal>req){
let remaining=bal-req
console.log(remaining)
}

}


ATM(balance,request_amount)


let light="Green"

function trafic(light){
if(light=="Red"){
console.log("STOP");    
}
else if(light=="Yellow"){
console.log("GET READY");    
}
else if(light=="Green"){
console.log("GO");    
}
}

trafic(light)


let username="muneeb"
let password="Welcome@123"


function login(user,pass){

if(user=="muneeb"){
if(pass=="Welcome@123"){    
console.log("you can login");
}
else if(pass!="Welcome@123"){
console.log("your password is incorrect");
}
} 
else{
console.log("your username is not matches please type correct username!")    
}   
}

login(username,password)


let  nu1=1
let  nu2=10

function loop1(num1,num2){

for(num1;num1<=num2;num1++){
console.log(num1);
    
}    

}


loop1(nu1,nu2)


let n1=10
let n2=1

function loop2(num1,num2){
for(num1;num1>=num2;num1--){
console.log(num1);

}
    
}

loop2(n1,n2)



let ba=1
let bc=6

function str(a,b){
let star=""
for(a;a<=b;a++){
star+="*"        
console.log(star)    
}    

}

str(ba,bc)



let br=1
let bd=6

function reversestar(a,b){    
let e=6
for(a;a<=b;a++){
let d=1
let star=""
for(d;d<=e;d++){
star=star+"*"

}    
console.log(star)
e--
}

}

reversestar(br,bd)


let g=1
let h=2
let i=5


function average(x,y,z,j,l){

 return (x+y)/2 
}


console.log("this is average of gh",average(g,h))
console.log("this is average of hi",average(h,i))
console.log("this is average of ig",average(i,g))



function key(a,b,c){
 
return total=a+b+c   
}

let er=10
let rt=5
let yu=12


sum=key(er,rt,yu)
console.log(sum)



total=key(er,rt,yu)
console.log(total)



let obj={
Name:"Muneeb",
Last_Name:"Ur Rehman",
Qualification:"B.Com",
Graduate:false,
funct: function fun(){    
return  "This is function in Object"+(2+2)
},
}

let vg=obj.funct()
console.log(vg)



obj.Last_Name="Rehman"
obj.Graduate=true
obj.age=24


console.log(obj)
 




ob={
mera_Firstname_he:"Muneeb",
mera_lastname_he:"ur rehman",
meri_age:24,
Qualification:"b.com",
Graduated:false,
number:4,
second_ob:{
mera_dusraname_he:"abdul",
mera_dusralastname_he:"rehman",
fuuuun:function (){
return this.mera_dusraname_he+" "+this.mera_dusralastname_he
},
},
}



console.log(typeof ob)

console.log(ob)

ob.address="idgah hills Bhopal"

delete ob.number

ob.Graduated=true

vd=ob.second_ob.fuuuun()

console.log(ob.second_ob.fuuuun())



for(g in ob){
console.log(g+"="+ob[g])

}


h=JSON.stringify(ob)

console.log(typeof h)


//jo niche likha he vo he paragarph ke andar "" ye kese dale aur ''ye kese dale \ backslash isko kisi bhi "" ya '' se pehle lagake use karenge to vo ""(doblecord) ''(singlecord) bhi dikha sakte he isko bolte he escape siquence

save="My name is muneeb and I'am student in \"mecaps\""

console.log(save)

// jaha bhi ye \n, ya \r, ya \t ho in sabhi ko escape sequence bolte he
    
// \n => Newline
// \r => carriage return
// \t => tab


save1="Hi my name is muneeb and \n what is your name?"

console.log(save1)


//jo niche likha he vo he template litrals jaha bhi ye ``(backtick) lagega usko template litrals bolte he aur isko use karke kisibhi variable ko string ke andar daal sakte he iska use karke ${} (string interpulation) aur ye sirf ``(backtick) ke andar hi aasakta he

variable_1="Muneeb"
variable_2="Ur Rehman"


console.log(`My first name is ${variable_1} and my last name is ${variable_2} and my full name is ${variable_1+" "+variable_2}`)



//jo niche likha he ye ``(backtick) is ki madad se me kisi bhi string ko browser me dusri line me likh sakta hu 

save2=`What is your name 
my name is "muneeb ur rehman"`

console.log(save2)



//function constructor matlab ek hi object ke type ko baar baar use karke naya object banana




function  Cons(b,c,d,e,f){
this.Comapany_Name=b
this.Engine=c
this.Milege=d
this.color=e
this.price=f
}



baleno=new Cons("nexa","1000cc",20,"Black",1000000)
alto=new Cons()
mercitisebens=new Cons("mercitise","1500cc", 10,"Gray",2000000)



for(g in alto){
console.log(g+"="+alto[g])
}



araau=["sd","fdh","asf","as","sded","sdsd",true,11,12,23,45,34,"muneeb","ur","rehman"]


let ah=(araau.slice(6))
console.log(ah);

let fa=(ah.join(" "))

rr=ah.splice(3,1,13,14)

ah.splice(-5,2,15,16)

ah.splice(1,0,1,2,3,4,5,6,7,8,9,10)

vv=ah.splice(-3,3)

vvtrue=ah.shift()

ah.unshift(vv)

ah.push(vvtrue)

ah=(ah.flat())

console.log(ah);





var ariye=["sd","fdh","asf","as","sded","sdsd",true,11,12,23,45,34,"muneeb","ur","rehman"]


ariye=ariye.slice(6)

gg=ariye.splice(0,1,1,2,3,4,5,6,7,8,9,10)


nam=ariye.splice(-3)

ariye.splice(0,0,nam)

ariye.push(gg)

ariye=ariye.flat()

ariye.splice(-4,3)

console.log(ariye);


sdsd="muneeb"


// foreach
// foreach ye kya karta he ki ye ek loop ki tarah hota he isme bas alag se variable nahi lena padta aur ye bhi callback function he iske andar bhi function banana padta he aur iske andar () parameter me jo phela variable banate he vo value ke liye hota he jo dusra variable banate he vo intex ke liye hota he aur 
// jo 3 variable banate he vo pura hi array dikhata he kab tak? tab tak dikhata he jab tak jitni bhi values he uske andar for exp= 4 value he to 4 baar chalega.aur ye kuch bhi return nahi karta
// jo niche likha he ye he iska syntax 



arr=["muneeb","ur","rehman","how","are","you"]

ff="fish"

gg= arr.forEach( function(ab,s,d,){ 

    
console.log(s+" "+ab+"   "+d)
});



// find()
// find() ye kya karta he agar apanne phele kabhi array banaya aur apan dekhna chate he ki jo array apanne banaya tha usme kya (value ka naam) ye value thi agar thi to ye usko dikha dega agar nahi thi to ye undefined show karega
// magar ye bas sabse phele jo true hui he ye bas usi value ko dikhayega aur return karega 
// aur ye ek callback fuction he callback function matlab jis bhi function (method) ke andar function banate he usko callback function bolte he.
// jo niche likha he ye he iska syntax 


dd=(arr.find((k)=>k=="muneeb"))

console.log(dd)


num5=[12,34,54,12,34,54,8,4,5]

console.log(num5.find((chek)=>chek>18))

// filter() ye bhi find() function ki tarah hota he isme bhi apan check karte he values ko bas ye saare hi true vale values ko dikha deta he aur ye same array ko change nahi karta isko return karna padta he 
// aur ye ek callback fuction he callback function matlab jis bhi function (method) ke andar function banate he usko callback function bolte he.
// jo niche likha he ye he iska syntax 

da=arr.filter((check)=> check=="how")

console.log(da)

num4=[12,34,54,12,34,54,8,4,5]

console.log(num4.filter(function (numcheck){

return numcheck>18
    
}))




// map ye kya karta pura hi array return karta he undefined ke saath
// aur ye ek callback fuction he callback function matlab jis bhi function (method) ke andar function banate he usko callback function bolte he.
// jo niche likha he ye he iska syntax 




let arrey=[1,2,3,4,5,6,7,8]


 rr=arrey.map(function(v,i,p){

if(v>5){
return v
}

})


console.log(rr)



let arrey2=[1,2,3,4,5,6,7,8]
let ga=[]


// memory
// memory ye hota he ki jo variable banaya he apan ne usme jo value he usko us variable ki memory bolte he agar 2 object he aur dono hi ek dusre ki reference copy he to un dono object ki same memory hogi


// reference copy 
// reference copy ye kya karta he agar ek object bana hua he aur vo object dusre variable me bhi daal diya for exp obj2=obj1 obj1 purana object he to usse kya hoga ki agar apan obj2 me change karenge to obj1 me bhi change hoga 
// isi ko reference copy bolte he



// spread operator and shallow copy
// ... ye he spread operator ye object ke liye or array ke liye hota he object ke liye {...obj} aur array ke liye [...array] esa hota he 
// agar apan ek naya object bana rahe he aur apan chahte he ki jo object bana hua he us object ke andar jo values he usko use kar sake aur apan change kare to purana object aur purana array ye change na ho to apan ise use karenge
// isse kya hoga ki ye shallow copy ban jayga shallow copy matlab jo naya object aur array banaya he usko change karenge to purane wala object aur array change nahi hoga magar parent object aur array change nahi hoga lekin jo nesting object aur nesting array he vo change ho jayga
// ye he syntax {...object},[...array]



// deep copy
// deep copy ye kya karta he agar ek object bana hua he aur vo object dusre variable me bhi daal diya for exp obj2=obj1 obj1 purana object he to usse kya hoga ki agar apan obj2 me change karenge to obj1 me change nahi hoga
// isi ko deep copy bolte he 
// structuredClone() is function ka use karke apan kisi bhi object ko deep copy bana sakte he



// JSON.stringify() ye object ko string me convert kar deta he magar ye return karta he main object ko change nahi karta

// JSON.parse() ye string ko object me convert kar deta he magar usi string ko jo phele object thi baad me string bani aur ye return karta he

// parseInt() ye string ko number me convert karta he.


gap=arrey2.map((a)=>{

return a=a+""  
    
})

console.log(gap)


dab=gap.map(function(v){

return parseInt(v)


})



console.log(dab)




let AA=[
{name:"muneeb",hobby:"cricket",age:24},    
{name:"abdullah",hobby:"instagram user",age:21},       
{name:"hamza",hobby:"labtop users",age:20},       
{name:"yaya",hobby:"football",age:19}       
]


b=AA.map((a)=>{

return a.name

})

console.log(b);


array1=[1,2,3,4,5,6,7,8]


strng=array1.map(function(v){

return v+=""
    
})


console.log(strng)



array2=[1,2,3,4,5,6,7,8]


square=array2.map((a)=>a*a)


console.log(square)




array4=[1,2,3,4,5,6,7,8]
sum=0

let sum1=array4.filter((a)=>{

return sum=sum+a

})



// reduce()
// reduce() ye basically 4 parameters me chalta he phela wala perameter bas pheli value ke liye hota he aur vo ek baar chalke khatam ho jata he agar usko baar baar chalana he to firsvalue ke phele return use karna padega usse kya hoga ki jab pheli baar chalega to show hoga aur jab dusri baar chalega to jo firstvalue thi vo wapas se return hojaygi fir dusri baar bhi aur jitne baar chalega utni baar show hoga
// aur jo 2 parameter hota he vo puri values ke liye hota he first value ko chodke
// aur jo 3 parameter hota he vo index ke liye hota he aur jo 4 parameter hota he vo pura array ke liye hota he
// aur iske andar second value se loop chalta he
// aur function ke andar tabhi chalta he jab loop chalta he agar dikhana he to return kardo to chal jayga
// iske andar callback function ke liye to 4 parameter hote hain lekin is reduce() method ke 2 parameter hote he phela callback function ke liye aur dusra first value ke liye 
// isme jo bhi return karte he vo 1 parameter pe jata he
// ye string return karta he array nahi



// ye jo jahan par bhi mene ye likha he ye 3 parameter pe work karta he aur ye 4 parameter pe work karta he ye callback function ke liye he na ke kisi method ke liye




let muneeb=["hellow","muneeb","how","are","you","i","am","fine","1","2","3","4"]
let container1=[]


first=muneeb.reduce(function (firstvalue,v,i,p){

 container1=firstvalue+p
 return firstvalue    
 
})

console.log(container1)

con=container1.split(",")

console.log(con)




let arrray=[1,2,3,4,5,6,7,8]


sum2=arrray.reduce(function(i,v,ind,p){

  console.log(i)
return i+v

})

console.log(sum2)



let fruits=["apple","banana","apple","orange","lichi","banana","apple","orange","orange"]
let count=0


totalfruit= fruits.reduce((i,v,ind,p)=>{

 if(i==v){
 count++ 

 }
return i 

},"apple")


console.log(`${count} ${totalfruit}`);





daa=fruits.filter(function(a){

return a=="banana"

})


console.log(daa)

// Object.keys() iske andar object dalte he to unke total number of keys return karta he

// eval()
// ye string ko code me convert karta he aur calculate kar deta he


// charAt()
// ye index ki value batata he aur index 1.344 to ye 1 batayga

// math.random()
// ye 0 se 1 tak random number generate karta he

// math.floor()
// ye hamesha choti value deta he agar point me likha he to ye 12.2323 to ye 12 return karega


// defaultChecked
// ye property hoti he input tag ki jo ki true or false return karti he


// window.navigator.clipboard.writeText(password)
// isse copy kar sakte he kisi bhi cheez ko



