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
// re-rendering process yani jo browser pe rerender hota he usko hi Reconciliation Algorithms bolte he aur usko hi react fiber bolte he




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



// setcount((variable)=>{return variable+1})  
// setcount((variable)=>{return variable+5})  
// setcount((variable)=>{return variable+10})  
// setcount((variable)=>{return variable+15})  
// setcount((variable)=>{return variable+20})  


// agar setcurrent ke andar callback function me daal ke add karenge to vo ek saath sab ko add kar dega



// ye sab hooks hote he

// usecallback
// ye hook memory me save karta he aur ye ek dependency array bhi leta he aur agar array me variable nahi dalenge to vo nahi chalega agar vo usecallback function me he to


// useeffect
// ye hook chalane ka kaam karta he aur ye ek dependency array bhi leta he
// aur ye usestate ko rokne ke liye bhi hota he


// useRef
// ye reference ke liye hota he agar ham chate he ki copy kare to uspe reference bhi ajay to iska use karenge 
// aur isko variable me store karenge aur variable ko tag me ref ke andar daalenge jisse connect ho jayga fir use kar payenge
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





