// nodejs
// ye run time he javascript ka matlab khaali browser me chalta tha mallab khaali web apps me istemaal kiya jata tha 
// lekin node ne pura javascript ka code apne paas bhi le liya jisse browers ke bahar bhi isko use kar sakte he

// npm 
// npm ye package manager hota he matlab ke ye dusro ke package leke aata he aur unko install karta he


// npx
// npx ye bhi npm ki tarah hota he bas ye ek baar chalta he




// topics of react:-
// core of React (state or UI manipulation, jsx)
// component Reusability
// Reusing of comonent (props)
// how to propagate (hooks)





// what is react.js
// react is a single page application and react is a librirary of javasript
// aur library vo hoti jo todi change ho jati he lekin framework change nahi hota jo jesa he usko vese hi use karna hoga


// why use react
// isko is liye use karte kyuki javascript me kya hota he ki koi bhi event fire hone par pura page hi uper se niche tak chal jata tha jab ke khali ek tag hi change karna hota tha
// jis website pe loader ajata tha aur user ka experience kharab hota tha 
// to iska use karne par esa nahi hota ye bas vo hi chalata he jo aapko change karna he na ki pura page


// virtual dom in react
// ye dom ka copy hota he aur iska use isliye hota he jab bhi kuch cheez change karte he to ye rerender hota he aur fir diff algorithm ki madat se dekhta he ki kya difference he aur jo difference hota he bas vo hi real dom me daal deta jisse real dom pura reload nahi hota 


// diff Algorithms
// diff Algorithms ye kya karta he ki ye difference find karta he virtual dom me aur real dom me

// Reconciliation Algorithms (React Fiber)
// ye jo changes hote he virtual dom me usko real dom me daal deta he




// components
// har ek function ko component bolte he jese navbar ka alag component aur footer alag aur main ka alag
// jisse code read karna asaan ho jata he


// React.Fragement 
// React.Fragement ye tag hota he iska use isliye karte he kyu ke jab import karte he file ko to div ajata he aur file me bhi div se wrap kiya hota he to isliye extra div ajata he 
// to usko hatane ke liye iska use karte he us file me jaha se export kar rahe he to usse extra div nahi aayga aur isko khali <></> isse bhi wrap kar sakte he


// path
// ye is tarike se work karta he ki jab apan ye likhte he ./ to same folder ke andar ka batata he aur agar ../ ye parent folder ke andar ka dikhata he



// export default and name export

// export default ko ek baar hi import kar pate he
// name export ko baar baar import kar sakte he


// props in react
// props ek object hota he react me jiske andar properties hoti he
// aur props ka use karke parent component se child component pe chezien bhej sakte he

// props.prototype 
// ye object hota he aur isko jis me props inject kar rahe he usme likhte he
// aur iske andar data types likhte he jis se ye pata rehta he ki jab bhi banay to pata rahe konsa data type use karna he


// window.confirm()
// isse confirm alert show kar sakte he



// sweetalert2 


// lnm


// agar same page pe 1 se zada component bana rahe he to usme export import nahi likhenge


// hooks
// react me bohot saare hooks hote jese usestate hook hota aur bhi bohot saare hooks hote he


// usestate
// usestate is hook ka use isliye karte he kyuke agar variable ko change karna he click pe ya kisi bhi event pe to variable se hoto jata he lekin pura page rerender ho jata he jisse vo variable vesa hi ho jata he
// to isiliye usestate hook ka use karte he
// usestate kya karta he ki ek to ye array return karta he aur isme 2 values hoti he pheli hoti he variable ki aur dusri hoti he update karne ki aur ye ek method hoti he
// pheli value ye kya karta he ki ye variable hi hoti he 
// aur jo dusri value hoti he vo array ki pheli value ko change kar deti he hamesha ke liye
// aur usestate me ek agrument bhi hota he jo initial value ke liye hota he
// aur ye 0 ko set nahi karta
// aur setcurrent variable ko change karne ke sath sath page ko rerender bhi kardeta he


// ye he iska syntax
// let [count,setcount]=usestate() 



// setcurrent((variable)=>{return variable+1})  
// setcurrent((variable)=>{return variable+5})  
// setcurrent((variable)=>{return variable+10})  
// setcurrent((variable)=>{return variable+15})  
// setcurrent((variable)=>{return variable+20})  


// agar setcurrent ke andar callback function me daal ke add karenge to vo ek saath sab ko add kar dega



// ye sab hooks hote he

// usecallback
// ye hook memory me save karta he aur ye ek dependency array bhi leta he aur agar array me variable nahi dalenge to vo nahi chalega agar vo usecallback function me he to


// useeffect
// ye hook chalane ka kaam karta he aur ye ek dependency array bhi leta he
// aur ye usestate ko rokne ke liye bhi hota he


// useRef()
// ye reference ke liye hota he agar ham chate he ki copy kare to uspe reference bhi ajay to iska use karenge 
// aur isko variable me store karenge aur variable ko tag me ref ke andar daalenge jisse connect ho jayga fir use kar payenge
// aur ye object hota he aur iske andar ek current property hoti he jiske andar ref ata he
// ye he iska syntax

// let reference=useRef(null)

// let copy=()=>{
  
// reference.current.select()
// reference.current.setSelectionRange(0,10)
// window.navigator.clipboard.writeText(password)

// }





// react.memo()
// is method ka use karne se agar child component befuzuul rerender ho raha he to iska use karne se nahi hoga



// useMemo()
// ye hook useEffect ki tarah hota he ye kya karta he ki jo bhi value iske andar likhi hoti usko cache kar leta he matlab memory me save kar leta he to jab page rerender hota he to ye rerender to hota he lekin time nahi leta 
// aur ye value ke liye hota he aur useCallback pure function ke liye hota he


// useReducer()





// css modules:-
// jab bhi apan css file import karte he to vo global hoti he to isiliye css modules ka istemaal karte he taki har component ke liye ek diffrent css apply ho
// aur jab bhi css module ki file banaenge to index.module.css ese bayenge 
// aur jab isko import karenge to isko name dena padega aur jo name delge vo object ban jayga unsaari classes ka
// to jab bhi hame css use karni hogi to name.classname karke karni hogi
// aur agar class ka name hyphen ke saath he to ese use karenge name["nav-container"] 





// React Router
// iska use karke alag alag page bana sakte he  aur isme bohot saari cheez hoti he 
// aur isme phele isko install karna hota he ye commond dalke npm i react-router-dom 
// aur fir isko import karna hota he ese import { BrowserRouter, Routes,Route } from 'react-router-dom'
// aur fir BrowserRouter isko return ke andar call karte he aur fir uske andar Routes ko call karte he aur uske andar jitne bhi chahe utne route bana sakte he
// aur route ke andar path dete he page banane ke liye aur element dete he component ke liye ke us page pe konsa component ho


// aur jis bhi component ko redirect karna he us page pe to us component ke andar Link ko import karna padta he ese import { Link } from 'react-router-dom'
// aur link tag ko likhte he us tag pe jispe click karke page pe redirect karna he



// useparams()
// useparams() ye router ka hook hota he aur ye object return karta he aur iska use isliye karta he taki route ke path ko dynamic banane ke liye 
// aur ye tabhi kaam aayga jab route me path /: ese likhenge aur iske baad jo bhi likhenge vo property ban jaygi aur browser ke location me jo / iske baad jo likhenge vo iski value ban ban jaygi




// parent child route
// agar ham route ke andar route banate he to usi ko parent child route bolte he


// outlet
// aur isko parent component me import karte he taki jo child componenet he uski position ke liye ke kaha par rakhna he




// Controlled and uncontrolled react component

// Controlled component vo hote jo react controlled kar raha he jese usesate se ya eventhandler se

// aur uncontrolled component vo hote he jo react handle nahi kar raha jese dom se value get karna ya useref ka use karke value get karna etc




// axious
// axious ye bhi fetch ki tarah hota he bas isse asaan hojata he data ko lena 














