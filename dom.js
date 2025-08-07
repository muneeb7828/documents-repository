// dom document object model
// dom basically is ki madat se ham html ko javascript pe chala sakte he
// isme bohot saare methods hote hain for exp document.getElementsByTagName("div"),document.getElementById("div"),document.getElementsByClassName("div"),document.querySelector("")  insab ki madad se ham html ko yape chala sakte he 



// document.getElementsByTagName() is method ki madad se apan jis bhi tags ko likhenge to vo jitni bhi honge sab aajenge iske andar array ki tarah agar apan ko access karna he koisa bhi tag to ese karenge div[0] to jo bhi phele index pe hoga usee access kar payenge.
// document.querySelectorAll() is method ki madad se apan tags ya class ya id kisi ko bhi likhenge to vo jitni bhi honge sab aajenge iske andar  array ki tarah agar apan ko access karna he koisa bhi tag to ese karenge div[0] to jo bhi phele index pe hoga usee access kar payenge.

// innerHTML ki madad se apan yahan pe html likh sakte he

// attribute ki madad se apan element ko change kar sakte he


// document.createElement()
// document.createAttribute()

// body.appendChild()
// .innerText this is property for changing text



// .classList() ye saari class ko array bana deta he
// div.classList.add("class1","class2") is tarike se koi bhi class add kar sakte he
// div.classList.remove("class1","class2") is tarike se koi bhi class remove kar sakte he
// classList.toggle() isse agar class he to remove ho jaygi nahi to add ho jaygi
// .className="" is property se kitni bhi class add kar sakte he kisi mein bhi



// dom events
// dom events usko kehte he jab user click ya kuch bhi kare uspe jo bhi ho use event bolte he

// event handler iski madad se bohot saare mouse events kara sakte he jese click karne pe kya ho ya hover karne pe kya aur bhi chezein
// iske liye phele html me jana hoga fir jis ko bhi mouse event karana he us tag pe onmouseenter ye attribute likhna hoga ye likhne ke baad name likhna hoga fir () ye banana hoga call ke liye
// jab apan khaali onmouse likhenge to kaafi suggetions ajayenge

// addEventListener() is method ki madad se events javacrips me hi kar sakte he bager html me jaye isme 3 parameters hote phela hota he event ke liye ke konsa event karana he for exp click ya mouseover ya onmouseleave aur jo dusra hota he vo hota he function ke liye ke jab phela parameter hoto kya chale isko event handler bolte he
// isme function me parameter ke andar koi variable likhte he to usme us event ka object ajata he
// agar button ke andar addEventListener() ye kare to reload hone lagta he baar baar to use rokne ke liye a.preventDefault() is method ka istemaal karte he

// aur addEventListener() iske 3 parameters hote he jo teesra hota he vo hota he event Propagation jisme true or false yani bubling event ya capturing event hote he aur by default bubling event yani false hi hota he
// agar apan chahe to use capturing bhi kar sakte he true likhke


// what is bubling event?
// bubling event vo hota he jo niche se uper jata he aur addEventListener() by default bubling event yani false hi hote he

// what is capturing event?
// capturing event vo hote he jo uper se niche aate he agar hame addEventListener ko capturing event karna he to true likhna hoga


// addeventListener some event object details:-

// isme properties aur method dono hi hote he

// e.target= ye kya karta he ki jis bhi button ya element pe addEventListener lagaya he uska tag dikhata he
// aur pura tag dedega jisse kuchbhi karsakte he us tag ke saath
// e.type=ye event ka type batata he click ya hover etc
// e.timestamp=
// e.toElement=
// e.srcelement=
// e.offsetX=ye batata he ki element ke respect me X axis se kitna door he
// e.offsetY=ye batata he ki element ke respect me Y axis se kitna door he
// e.clientX =ye batata he ki user ne browser me kitna x asix se door click kiya he
// e.clientY =ye batata he ki user ne browser me kitna Y asix se door click kiya he
// e.screenX=ye batata he ki user ne puri window yani screen me kitna x asix se door click kiya he
// e.screenY=ye batata he ki user ne puri window yani screen me kitna y asix se door click kiya he
// pageX=ye bhi clientX ki tarah hota he bas vo viewpord ke hisab se batata he aur ye jitna move hua he us hisab se batata he
// pageY=ye bhi clientY ki tarah hota he bas vo viewpord ke hisab se batata he aur ye jitna move hua he us hisab se batata he
// e.altkey=
// e.ctrlkey=
// e.shiftkey=
// e.keyCode=
// e.currentTarget=ye bhi target ki tarah hota he bas ye propagate (change) hota rehta he target usi tag ko dikhata he jispe click hua he
// e.preventDefault() isko use karne se agar loader he to hat jata he
// e.stopPropagation() isko addEventListener() ke callback function ke andar likhne se bas vahi tak chalega fir stop hojata he 
// e.Key=
// e.Text=
// e.Focus=


// access parent element
// console.log(h1.parentElement)

// access children alements
// console.log(body.children)

// access sibbling elements
// console.log(h1.nextElementSibling)
// console.log(h1.previousElementSibling)


// insert element at specific position
// body.insertBefore(newelement,body.firstchild)






// dom traversal

// .parentElement .parentNode ye dono hi properties he .parentElement ye parent tag batata he agar jese koi parent tag nahi he to ye null dikhata he.
// parentNode ye bhi .parentElement ki tarah hota he bas agar jese koi parent nahi he to kuch to dikha hi deta he

// .children this only return the child element in a form of array 
// .childNodes this returns the all tags and all text in a form of array 


// .firstElementChild ye batata he first child tag ko
// .firstChild ye childNodes ki tarah hota he bas ye first child ka batata he


// .lastElementChild ye batata he last child tag ko
// .lastChild ye childNodes ki tarah hota he bas ye last child ka batata he



// .nextElementSibling ye batata he next child tag ko
// .nextSibling ye childNodes ki tarah hota he bas ye next child ka batata he

// .previousElementSibling ye batata he privious child tag ko
// .previousSibling ye childNodes ki tarah hota he bas ye privious child ka batata he




// DOM cloneNode()
// clone matlab copy karna aur cloneNode() ki madad se ham kisi bhi tag ko copy karke dusre tag ya variable me daal sakte he
// aur iske andar true ya false likhna hota he agar nahi likhe to by default false hi hota he
// jisse kya hota he vo tag ko hi copy karta he agar apan chate he ki andar ka element bhi copy ho to true 
// likhna hoga

// setTimeout
// setTimeout ye ek method he aur iske do parameters hote he phela hota he callback function ke liye aur dusra hota he timeset karne ke liye jo ki time batata ke kitne der baad aapko variable chalana he
// aur jo niche likha he ye he iska syntax

// setTimeout(() => {
    
// },);

// setInterval
// setInterval() iske andar callback function hota he aur setTimeout ki tarah hota he bas setTimeout ek baar chalta he aur ye baar baar
// aur jo nichi likha he ye he iska syntax


// const interval= setInterval(() => {
 
// },timeset);

// clearInterval(interval)





// synchronous 
// synchronous iska matlab hota he sequentially ye bas rule wale elements ko hi leta he aur rules wale elements vo hote jo print ya call karte hi chal jate he 
// aur jo apne khud ke hisab se chalte jese events ya setTimeout ya setTimeinterval aur https request ye sab asynchronous hote he 
// aur functions bhi synchronous hote he matlab jo bhi phele call hota he vo phele chalta he


// asynchronous
// asynchronous vo hote he jo apne khud ke hisab se chalte jese events ya setTimeout ya setTimeinterval aur https request ye sab asynchronous hote he


// callstack
// callstack ye kya karta he ki jo bhi syncronous aur asyncronous hote he vo sabhi yaha aate he aur chalte he aur fir callstack khali hojata he chalane ke baad
// ye phele saare syncronous wale ko leta he fir ye khali hota he fir asynchronous wale leta he

// web API aur API call ye dono alag alag hote he
// aur web api browser ke liye hota he

// web API
// web API ye kya karta he ki jo asynchronous hote un sabhi ko store karta he fir jab unhe chalate he to ye 
// callback quee me bhej deta he    


// callback quee
// callback quee ye kya karta he ki jo bhi web API se aya he un sabhi ko rakh leta he


// event loop
// event loop ye kya karta he ki jab callstack khali hota he to ye callback quee me jo bhi hota he vo callstack me bhej deta he



// agar synchronous ko asynchronous me daal denge to vo bhi asynchronous ban jata he
// jese koi function banaya declarati agar variable me daalenge to chalega


// agar ek evion ko chod ke aur uske scope se uper call kiya to vo nahi chalega
// lekin agar funtion banaya aur uske scope ke uper event banaya aur uske andar call kiya to chal jayga
// asynchronous ki vaje se


// agar koisa bhi tag ya element banne se phele kisi variable me daale to vo nahi chalega 
// to tag ya element banne ke baad hent me koi variable change hota he to vo jitne bhi addeventlistener me laga he un sabhi me vo variable change ho jayga


// aur jo transform translate hota he usko agar chalate he to jitna chalate he utna to chal hi jata he fir agar usko chalate he to vo apni actual position pe pohuch jata he
// fir move hota he

// aur jo animation hota he vo bhi apni actual position se chalta he








