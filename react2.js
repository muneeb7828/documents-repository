
// css modules:-
// jab bhi apan css file import karte he to vo global hoti he to isiliye css modules ka istemaal karte he taki har component ke liye ek diffrent css apply ho
// aur jab bhi css module ki file banaenge to index.module.css ese bayenge 
// aur jab isko import karenge to isko name dena padega aur jo name delge vo object ban jayga unsaari classes ka
// to jab bhi hame css use karni hogi to name.classname karke karni hogi
// aur agar class ka name hyphen ke saath he to ese use karenge name["nav-container"] 


// redux and redux toolkit
// ye react se alag hota he lekin iska use react me karte he state ko manage karne ke liye


// axios.get()
// axios ye bhi fetch ki tarah hota he bas isse asaan hojata he data ko lena 


// React Router
// iska use karke alag alag page bana sakte he  aur isme bohot saari cheez hoti he 
// aur isme phele isko install karna hota he ye commond dalke npm i react-router-dom 
// aur fir isko import karna hota he ese import { BrowserRouter, Routes,Route } from 'react-router-dom'
// aur fir BrowserRouter isko return ke andar call karte he aur fir uske andar Routes ko call karte he aur uske andar jitne bhi chahe utne route bana sakte he
// aur route ke andar path dete he page banane ke liye aur element dete he component ke liye ke us page pe konsa component ho


// aur jis bhi component ko redirect karna he us page pe to us component ke andar Link ko import karna padta he ese import { Link } from 'react-router-dom'
// aur link tag ko likhte he us tag pe jispe click karke page pe redirect karna he

// Link tag ki tarah navLink tag bhi hota he vo bhi same kaam ata he
// aur isme jab bhi click karte he to active class apne aap add ho jati he



// useparams()
// useparams() ye router ka hook hota he aur ye object return karta he aur iska use isliye karta he taki route ke path ko dynamic banane ke liye 
// aur ye tabhi kaam aayga jab route me path /: ese likhenge aur iske baad jo bhi likhenge vo property ban jaygi aur browser ke location me jo / iske baad jo likhenge vo iski value ban jaygi




// parent child route
// agar ham route ke andar route banate he to usi ko parent child route bolte he


// outlet
// aur isko parent component me import karte he taki jo child componenet he uski position ke liye ke kaha par rakhna he


// usenavigate()
// ye history object ki tarah hota he aur ye method return karta he to method ke andar jo bhi number dalte he utna piche chala jata he


// useRouteError()
// ye error page ko handle karta he
// aur jo route me path dete he waha agar ye path de to "*" to error page ko dikhata he




// get fetch api with loader and useLoaderData() hook

// loader
// is property ko route tag me use karte he aur iski value me component likhte he to jo bhi return hota he component me vo is property me ajata he

// useLoaderData()
// aur fir route me jo element he usme useLoaderData() hook ka use karke uski value get kar sakte he


// usenavigation()
// is ka use loader me karte he isme bohot saari property hoti he lekin state property main hoti he iske andar 1 value hoti jo ke change hoti rehti he idle loader submit




// ENV variables
// ye bas vite react me hi chalti iska use karke data ko chupa sakte he sabse phele .evn file banini padti he folder me sabse niche
// aur fir VITE_ ye karke variable banate he ye he iska systax VITE_data="" isme likhke fir is file ko kahi bhi use kar sakte he
// aur ye likhke fir isko import karna hota he jaha par bhi use karna he ese import.meta.env.data 





// Pagination
// Pagination vo hoti he jiska use isliye karte he taki ek baar pura data nahi ajay jiske computer load padega aur user interface kharab hoga 
// iska use karte start aur limit daal sakte he url link pe jisse utne hi numbers ka data dikhega us page pe


// ...obj isko {} isme likho to pura obj ki property copy ho jati he

// Date.now() iska use karke current time get kar sakte he iske liye phele movement library ko install karna padta he
// aur isko format(Date.now)={dddd} likhne se date format me ho jati he


// react-icons 
// react-icons is library se bohot saare icons import kar sakte he

 

// let date=new Date().toLocaleDateString()  
// let time=new Date().toLocaleTimeString() 











