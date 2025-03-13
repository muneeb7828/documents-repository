
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
// e.clientX=ye batata he ki user ne browser window me kitna x asix se door click kiya he
// e.clientY=ye batata he ki user ne browser window me kitna Y asix se door click kiya he
// e.screenX=ye batata he ki user ne puri window yani screen me kitna x asix se door click kiya he
// e.screenY=ye batata he ki user ne puri window yani screen me kitna y asix se door click kiya he
// e.pageX=ye bhi clientX ki tarah hota he bas vo viewpord ke hisab se batata he aur ye jitna move hua he us hisab se batata he
// e.pageY=ye bhi clientY ki tarah hota he bas vo viewpord ke hisab se batata he aur ye jitna move hua he us hisab se batata he
// e.currentTarget=ye bhi target ki tarah hota he bas ye propagate (change) hota rehta he target usi tag ko dikhata he jispe click hua he aur currentTarget kya karta he agar ek ke upar ek element he to un sabhi ka currenttarget dikhayga
// e.preventDefault()isko use karne se agar loader he to hat jata he
// e.stopPropagation() isko addEventListener() ke callback function ke andar likhne se bas vahi tak chalega fir stop hojata he 
// e.Key=isko use karne se ye pata chal jata he ki user ne konsa key press kiya he aur ye bas keydown ya keypress ya keyup me kaam karta he
// e.keyCode=
// e.Text=
// e.Focus=
// e.button=ye bas mousedown event me chalta he aur ye 3 value return karta he 0,1,2
// agar mouseleft pe click kiya he to 0 return karta he aur mousescroll kiya to 1 aur mouseright pe 2 return karta he

// this is for mouse event
// e.ctrlkey=ye batata he true or false agar mouseleft click ke sath ye click karenge to true batayega nahi to false batayega
// e.altkey=ye batata he true or false agar mouseleft click ke sath ye click karenge to true batayega nahi to false batayega
// e.shiftkey=ye batata he true or false agar mouseleft click ke sath ye click karenge to true batayega nahi to false batayega
// e.metaKey=ye window key hota he aur ye ctrl key ki tarah hota he ye batata he true or false agar mouseleft click ke sath ye click karenge to true batayega nahi to false batayega

// this is for keypress or keydown event
// e.ctrlKey,e.altKey,e.shiftkey,e.metaKey agar ye keypress ya keydown event karke use karenge to usme mouse ko click karne ki zarurat nahi padegi ese hi chal jayaga



// some eventhandler events:-

// onclick=ye mouse click ke liye hota he 
// ondblclick=ye mouse ko double click karne per chalta he 
// oncontextmenu=ye mouse right click karne pe chalta he 
// onmouseenter=ye mouse hover ke liye hota he 
// onmouseout=ye jab mouse out karenge tab chalega
// onmousedown=ye jab bhi mouse  click karenge tab chalega 
// onmouseup=ye jab click karke chodenge tab chalega
// onkeypress=ye jab bhi keypress karenge tab chalega aur ye body ya form me hi chalte he 
// onkeyup=ye jab keypress karke chodenge tab chalega aur ye body ya form me hi chalte he
// onscroll=ye jab chalega jab bhi ham scroll karenge




// form event handler

// onfocus=isko form me use karte he jab bhi input me khuch likhte he to border hilti he to jab bhi border hilegi to ye chalega 
// onblur=ye focus ka opposite hota he matlab jo onfocus me hua he isko use karke hata sakte he 
// oninput=ye bas input text me kaam karta he aur isko use karke dusre variable me daal sakte he iski value ko
// onchange=ye bhi oninput ki tarah hota he bas ye click karne ke baad dusre variable me jata he aur oninput likhte hi chale jata he
// onsubmit=ye submit pe click karne pe work karta he aur ye bas form tag me hi bana sakte he
// oninvalid=agar khuch invalid ho username me ya email me to ye work karta he




// pseudo classes in css
// pseudo classes matlab click karne par ya hover karne par khuch perform kare aur ye saare .(dot) likh ke chalate he
// hover=isse jab bhi element me hover karke kuch perform karna ho tab use karte he
// link=isse agar kisi tag ke aage lagate he to agar vo link tag hoga to chal jayga
// active=isko jis bhi tag ya class ke aage lagate he to aur usme jo bhi likhte vo tabhi chalta he jab active class add karte he
// visited= ise lagane se ye pata chal jata he ki koi page ya link pe redirect hua he ki nahi 

// z-intex
// z-intex isse tag ko aage piche kar sakte he magar sirf usi element ko aage ya piche karta he jis pe z-intex laga he na ke kisi dusre tag se aage ya piche



// callback function 
// callback function vo hote jo kisi funtion ke argument me paas hote 
// jese array ittration methods ke andar aur events ke andar aur normal funtion me bhi jo function hote he vo callback function hote he



// higher order function
// higher order function vo hote jiske andar callback function banta he
// jese addEventListener vo higher order function he aur iske andar jo function banta he vo callback function hota he


// callback hell
// callback hell vo hota he jo callback function ke andar function fir function ke andar funtion aur fir uske andar function and so on aur isliye isko varify karna thoda mushkil hota he to isi ko callback hell bolte he


// object destructure  
// let {name:email:contact:id}=obj
// to isse kya hoga ki agar is obj me is naam ki property he to uski value ajaygi is variable me
// to isi ko object destructure bolte he



// array destructure
// array destructure isme kya karte he ki ye thoda object destructure se alag hota he
// isme iske andar [] agar kuch value likhte he to jo bhi phele likhte to vo array ki pheli value ban jati he aur jo dusre me likhte he to vo array ki dusri value ban jati he
// let [name,name2,name3]=array1;

let array1=["muneeb","saad","rehman","yayah","hamza"]
let [name,name2,name3]=array1;

// aur agar array ki value bohot saari ho to ese karenge to ese koisi bhi value nikal ni hogi to nikal sakte he

let array2=["muneeb","saad","rehman","yayah","hamza","muneeb","saad","rehman","yayah","hamza"]

let [,,,,,,,,,last]=array2

console.log(last)





// clearInterval()
// clearInterval() isse setInterval remove kar sakte he bas setInterval ko kisi variable me daalna hoga
// aur fir us variable ko iske andar dalenge to setinterval remove hojayga 


// closure
// closure vo hota he agar function ke andar function he to isse andar vale function me bhi bahar wale function ke variables ko use kar sakte he


// rest operator
// rest operator isse pura hi array ko copy kar sakte he agar khuch value hatake ke
// pura chahiye to ese karenge let [a,b...rest]=array isse pheli aur dusri value ko chodke pura array ajayga



let array=["hellow","world","my","name","is","muneeb",23,23,54,12]


let [a,b,...rest]=array

console.log(rest)



