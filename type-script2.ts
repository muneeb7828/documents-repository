
// interface in class
// aur class me isko use karne ke liye implements keyword ka use karte he


interface DepartmentDatatype{
      Deparmentname:string
      DeparmentId:number
      DeparmentZone:string  
      Departmentdetails():void
}


class Department implements DepartmentDatatype{
       Deparmentname
        DeparmentId
        DeparmentZone
  constructor(name:string,deptId:number,DeptZone:string){
        this.Deparmentname=name
        this.DeparmentId=deptId
        this.DeparmentZone=DeptZone
  }  
  Departmentdetails(){
    console.log(`This is details of ${this.Deparmentname} departmentId = ${this.DeparmentId} departmentZone = ${this.DeparmentZone} `);
  }

}

var deparment1= new Department("HR",100,"bhopal")
var deparment2= new Department("Marketing",101,"indore")
var deparment3= new Department("IT",102,"mumbai")


deparment1.Departmentdetails()


// static keyword in class
// static keyword lagane se kisi bhi property ya method se phele to vo property ya method sirf class se hi accessible hogi instance se nahi hogi
// aur js me bhi hoti he


class Company{
 static name:string="Google"
}

var c1 =new Company()

console.log(Company.name);


// typeguard in ts
// ye kya karta he ki variable ka actual datatype batata he
// iski 3 types hote he typeof(),instanceof(),custom Type()

// typeof()
// jab bhi kisi variable ka datatype dekhna ho to iska use karte he

// instanceof()
// jab bhi kisi instance ki class dekhna ho to iska use karte he


// by typeof()

var userdata1:number|string|boolean

userdata1='sds'
if(typeof(userdata1)=="boolean"){
  console.log('this is a boolean datatype');
}
else if(typeof(userdata1)=="string"){
console.log('this is a string datatype');
userdata1
}
else{
console.log('this is a number datatype'); 
userdata1
}


// by instanceof()

class Product1 {

}

class Order1 {

}


function checkDetails(data: Order1| Product1){
    if(data instanceof Order1){
      console.log('this is order')
    }
    else{
      console.log('this is product')
    }
}

var p1=new Product1()
var o1=new Order1()

checkDetails(p1)


// generic in ts
// ye tab use karte he jab same datatype ki value ko return karna ho
// aur isme T ka matlab he sare datatypes 


function fruits<T>(name:T):T{
return name
}

var onlyfruit=fruits("apple")
// var onlynum=fruits(12) 


// keyof operator in ts
// iska use karne se jo type ki jo keys he bas vo hi lega uske alava kuch aur nahi lega matlab name, age, isEmp ye hi likh sakte he

type personT={
name:string,
age:string,
isEmp:true, 
}

type personX=keyof personT

let persondataX:personX="name"


// index signature
// isme kitni bhi keys add kar sakte he

type userdata2={
  name:string,
  age:number,
  mobile:number
  [key:string]:number|string
}

var user1:userdata2={
  name:"muneeb",
  age:24,
  mobile:8269527774,
  address:"idgah hills bhopal"
}


// utility
// ye ts ke andar predefined types hoti jo ke madad karti he types ya interface ko manipulate karne me
// isme kya hota he ki jo ham types banate he usme jese ham khali 2 property use karna he ya puri nahi karna aur ya hame usko readonly banana he matlab ke jab object banay tab hi use kar pay baad me add nahi kar pay to iska use karenge

// utility types in ts
// partial, Required, Readonly, Pick,Omit,Exclude,Extract,NamNullable,Record

interface colledgetype{
  name:string,
  location:string,
  students:number,
  branch?:number
}

// partial iska use tab karte he jab hame types ki saari properties use nahi karni ho
var colledgedata1:Partial<colledgetype>={
  name:'iit delhi',
  location:'delhi',
}

function getcollegedata(data:Partial<colledgetype>){
return data
}

getcollegedata({name:"iit bombay"})


// Required 
// isme optional property bhi deni padti he
function getcollegedata2(data:Required<colledgetype>){
return data
}

getcollegedata2({name:"iit bombay",location:"asasas",students:12,branch:12})


// readonly
// iska use tab karte jab object banay tabhi use karpay baad me add nahi ho

// Omit iska use tab karte jab type ya interface ki koisi property use nahi karni ho to

var colledgedata3:Omit<colledgetype,"students" | "location">={
name:"sdsd",
branch:1212
}

// Exclude 
// iska use karne se jo value type me di vo bhi use nahi kar sakte

type ApiStatus='loading' | 'error' | 'pending' | 'success'     // isme bas ye values hi likh sakte he aur dusri nahi likh sakte

var APICall:Exclude<ApiStatus,'pending'>
APICall='success'

// Extract
// iska use tab karte he jab type ki kuch values hi chahiye

var APICall2:Extract<ApiStatus,'loading' | 'success'>
APICall2="success"


type RandomType=string | number | undefined | null | string[] 

// NonNullable iska use tab karte he jab null ya undefined nahi rakhna ho
var randomData:NonNullable<RandomType>


// Record
// iska use tab karte he jab types ki values ko bhi object ki keys banani ho

type siteRole="Admin" | "user" | 'guest'

var RollName:Record<siteRole,string>={
  Admin:"sasas",
  user:"asas",
  guest:'asas' 
}



// namespace
// iska use code ki logical grouping ke liye karte he
// matlab agar same name se function ya class he to use karte he taki call kare to koi issue nahi aay
// aur isko export karte he
// aur isko dusri file me bhi use kar sakte he

namespace UserNamespace{

export class Auth{
 login(){
  console.log('user login funtion')
 } 
}


export function getList(){
  console.log('list of users')
}

}

var user3=new UserNamespace.Auth()
user3.login()
UserNamespace.getList()


// decorators
// isme bhi decorators python ki tarah hote he isme bhi jab class ya function banate he to uske uper decorator laga dete he jisse us class ya function ka control us decorator ke paas ajata he
// aur jis bhi class ya function ke uper lagate he uska name dekh sakte he


function classlogger(constructor:Function){       // ye constructor class ke liye hota he
console.log(constructor.name)

}

function getkeydetails(target:any,key:any){       // ye key class ki property ke liye hota he
console.log(key)

}


@classlogger
class CustomMaths{

  @getkeydetails
  value1:number
  value2:number
  constructor(x:number,y:number){
    this.value1=x
    this.value2=y
}

}

var cm1=new CustomMaths(10,20)

// use decorator to overwrite functions
// ham class ke andar ke function ko overwrite isliye karte he kyuki baadme jese hame usme kuch change karna ho aur vo function durse jagah bhi use ho raho to isliye karte he

function updateSum(target:any,key:string,descriptor:PropertyDescriptor){        // jo target he default parameter he ye aur jo key or property param he ye properties ke liye hoti he aur ye string hoti he aur jo 3 parameter he vo kuch bhi rakh sakte he lekin uska datatype PropertyDescriptor ye hona chahiye aur ye function ko describe karne ke liye hota he
  descriptor.value=function sum(x:number,y:number){
    let output=x+y
    return  "the output of "+x+" and "+y+" is : " + output
  }
  
}

class CustomMaths2{

// @updateSum               // jab bhi ese function ko overwrite karna hoto ts.config file me experimentalDecorators isko uncomment karna hoga
sum(x:number,y:number){
return x+y
}

}

var cm2=new CustomMaths2()

console.log(cm2.sum(10,30))



// Typed with promise async await
// aur ye isliye bhi use karte taki phele ek function chalne ke baad hi dusra function chale

type resultType={
 name:string,
 id:number,
 email:string 
}



function Complexlogic():Promise<resultType>{

  return new Promise((resolve)=>{              // resolve matlab proper output milega aur reject error ke liye hota he aur jo bhi resolve me hoga vo .then() ke param me ajayga
    setTimeout(() => {
      resolve({
 name:"muneeb",
 id:10,
 email:"muneeb@12345" 
})
    },2000);
  })

}


function test2(){
  console.log("test2")
}

Complexlogic().then((data:resultType)=>{
  console.log(data)

  test2()
})

// api call in type script

type APIType={
userId:string,
id:number,
title:string,
completed:boolean  
}



async function apiCallHanding():Promise<APIType>{
const result= await fetch('https://jsonplaceholder.typicode.com/todos/1')
const data= await result.json()
console.log(data)
return data
}

apiCallHanding()









