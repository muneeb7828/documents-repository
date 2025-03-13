
// api(application programming interface)
// iska use isliye karte data ko lane ke liye agar aapko data chahiye to aapko api daalna hoga agar sahi api hua to aapko lake de dega agar galat hua to nahi dega
// aur api key kya hoti he jese aapko kisi ka data chahiye lekin usme api key dali hui he to aapko api ke saath api key bhi daalni padegi aur agar nahi api key dalenge to nahi khulegi 
// lekin kuch website api key nahi daalti unka data directly api se ajata he



// Promises in javascript 
// Promises vo hoti he agar kuch karvana he agar aur vo kaam hogaya to success ho jata he aur .then() wala callback function chal jata he
// agar khuch kaam diya vo nahi hua to reject ho jata he aur .catch() iske callback function wala chalta he
// matlab aapko 2 condition daalni hoti he Promises ke andar ke agar sahi ho to .then() isme chale nahi to .catch() isme chale


// aur Promise method ke andar callback ke 2 parameters hote he 1 hota he resolve ke liye yani .then() ke liye
// aur dusra hota he reject ke liye yani .catch() ke liye
// aur ye hamesha new keyword ke baad hi Promise method likhte he
// aur isko hamesha variable me store karke chalate he
// ye he iska syntax




let ab=new Promise((resolve,reject)=>{

    resolve()    
    reject()
    
    })
    
    
    .then(()=>{
    
    console.log("resolve he")
        
    })
    
    
    .catch(()=>{
    
    console.log("galat he")
    
    })
    
    
// fetch api
// fetch api ki madat se bahar se data lete he to isme time bhi lag sakta he to ye asynchronous he
// aur promise hi hota he bas isme ye fetch() ke baad .then() lag jata he ese fetch(URL).then().then().catch()
// aur iske .then() ke callback function ke parameter ke andar variable likhe to us link ka pura data ajata he
// aur agar aapne data liya aur aap chate ho ki vo json (javascript object notation) ban jaya to aapko us data ke baad .json() likhna hoga 
// aur usee return karna hoga kyun ke agar return na karke usi me chalayenge to usme nahi chalega kyu ke ye alag promise he isme bhi time lag sakta he
// aur agar karate bhi he to promises pending ajayega to isi liye isko return karke dusre .then() me daalna hoga 
// aur agar ek baar promise pending show hogayi aur fir uske baad fulfilled bhi hogayi to resolve nahi karegi
// aur resolve hamesha .then() likhenge to hogi
// aur fetch me methods bhi hote he jis ki madad se ham data me kisi bhi object ko change kar sakte he aur add kar sakte he aur remove kar sakte he 



// json() (Javascript Object Notation)
// json() is method se kisi bhi valid string ko object me convert kar sakte he json.parse() ki tarah
// aur ye javascript ka object hi hota he inbuild


// async await
// async await ye promises hi hota he bas isme .then() ka use nahi karte aur isko try{} aur catch() {} me likhte he
// async function se asynchronous bhi synchronous ki tarah chalta he bas ye promises ko hi chalata he





let abs=async()=>{

try {
let ob=await fetch("https://jsonplaceholder.typicode.com/posts")
    ob=await ob.json()
    console.log(ob)


}catch (ob) {

}    

}


abs()


let obj2={

method:"POST",
headers:{
"Content-type": "application/json"
},
body:JSON.stringify({
name:"muneeb",
contact:134343979,
email:"muneeb@123",
})

}


obj=fetch("https://jsonplaceholder.typicode.com/posts",obj2)

obj.then((data)=>data.json())
.then(d=>console.log(d))




// local storage 
// local storage ye web browser me hoti hi aur iska use karke web browser me code store kar sakte key pairs me aur ye key pair dono ko hi string leta he
// localStorage.setItem("contact",'45452154') isse set kar sakte he
// console.log(localStorage.getItem(gg)) isse key ki value le sakte he
// localStorage.removeItem("contac") isse remove kar sakte he key ko
// localStorage.clear() isse clear kar sakte he pura local storage
// localStorage.key(1) isse key ka name nikal sakte he
// localStorage.length ye length batata he



let gg="name"
let kk="muneeb"


localStorage.setItem(gg,kk)

let contact="contac"

localStorage.setItem(contact,54545454)


// sessionStorage
// sessionStorage ye pura local storage ki tarah hota he bas ye same page me chalta he
// agar different page me kholenge to store khaali ho jayga

// onstorage ye function hota he jo ki window ke storage ke liye hota he
// to isko window.onstorage karke hi chala sakte he to jab bhi kuch change karenge local storage me ya session storage me 
// to is function me jo bhi hoga vo chal jayga dusre tab ke same page me
// aur iske parameter me khuch varibale likhte he to pura StorageEvent ajata he



window.onstorage=(e)=>{

alert("he you are changing in stogare")
console.log(e)

}




// cookies:-
// cookies matlab aap kisi bhi website pe jata he waha pucha jata he ke aap cookies accept karna chahenge
// aur cookies ye ek storage hi hota he aur iske andar data store kar sakte he browser ke andar 
// aur ye key value pairs me likhi jaati he aur iski kuch limit hoti he
// aur isme options bhi hote he jese path /a,/store ,
// cookies ke zariye admin bhi apna storage dekh sakta he
// aur isko document.cookies="name=muneeb" karke add kar sakte he cookies ko browser me aur ye reassign nahi hoti local storage ki tarah
// ye directly add ho jati he
// aur ye semi colon se seperate karta he ek cookey dusri cookey se
// ecodeURIComponent() is method se key ke andar bhi semi colon likh sakte he
// decodeURIComponent() is method usko dekh sakte he







// confirm()
// confirm() ye method alert ki tarah hota he isko confirm karne ke liye use karte 
// aur isme 2 button hote he aur ye bolean return karta he ok he to true aur cancel he to false


// fake store api
// jsonplaceholder fake api




// UI matlab jo apan code likhte he ye Ui hota he aur jo file folder hoti he vo UX hoti he



// fetch methods
//POST,PUT,DELETE,GET 


// json server
// json server me jo data hota he vo purana wala data dikhata he tab tak dikhata he jab tak usko terminal me jake wapas se update nahi karte 



// Classes in javascript
// Class ko blueprint bhi bolte he
// Classes object constructor ki tarah hota he usse jitne bhi chahe he utne instaans bana sakte he yani objects
// Instaans yani objects
// aur iske andar constructor naam ka function hota he jisse ham kitne bhi object bana sakte he 
// aur jab bhi naya instaans banate he yani object to usse pehle new kewword ka istemaal karna padta he
// aur ye this ko return karta he agar usme kuch value he to karega agar usko ese hi chod diya this.username karke aur kuch value nahi di to ye kuch return nahi karega
// aur isme 4 jise hoti inheritance,polymophism,incapsulation,abstraction,

// Inheritance
// Inheritance matlab virasat se mila hua matlab ham kisi ke inherit he to ham uske chizon ko use kar sakte he 
// aur apan kisi bhi class ko kisi dusre class se inherit kar sakte he aur ese bohot baar kar sakte he yani class1,class2,class3 ye 3 class he aur ham ne class2 ko class1 ke inherit kar diya yani class2 bhi class1 ki chizon ka use kar sakta he aur fir class3 ko class2 ke inherit kar diya
// agar apan kisi bhi class ke baad extend keyword likhennge aur uske baad jis bhi class ka naam likkhenge to usse ham inherit kar sakte he uski chizon ko jisko extend ke baad likha he
// aur bagair super() method ke ham us class ki chizon ka use nahi kar sakte jis ko bhi inherit kiya he
// super() iske argument me jo bhi likhte he vo uske paremeter me jaati he jisko inherit kiya he
// aur super() is method ko constructor ke baad likhte he

// polymophism
// polymophism iska matlab hota he many forms yani poly matlab many mophism matlab forms
// aur class me polymophism ka matlab hota he ek hi class se bani hui bohot saari classes


// incapsulation
// incapsulation ye class ke andar ka dikhata he

// abstraction
// abstraction ye agar kuch class me hide karna ho to abstraction ka use karenge aur iska sign hota he # 
// aur isko variable se pehle likhte he agar usko chupana he to aur fir usko this. ke baad bhi likhenge 
// aur isse password ko chupa sakte he


// prototype
// prototype isse methods dikhte he instaans ke

// static iska use karke hide kar sakte he


// aur ye class ka syntax


class User{

#password    
constructor(a,b,c){
this.username=a
this.email=b
this.#password=c

console.log(this.username+" "+this.email)

}
    
}



let person1=new User("saad","saad@123","saad12345")
let person2=new User("abdullah","abdullah@123","abdullah@123")


console.log(person1.password);
console.log(person2);


















