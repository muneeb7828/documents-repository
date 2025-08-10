// BOM  Browser Object Model:-

// iski madad se ham window me changing kar sakte he

// aur browser object model use karne ke liye hame window object ka istemaal karna padta he

// isme bhi DOM ki tarah methods hote he

// get Width & Height of Browser:-
// ye sab properties hoti he

//innnerHeight isse browser ki andar ki height yani web page ki height ka pata laga sakte he

//outerrHeight isse browser ki bahar ki height yani pure web page ki height ka pata laga sakte he

//innerWidth isse browser ki andar ki width yani web page ki width ka pata laga sakte he

//outerWidth isse browser ki bahar ki width yani pure web page ki width ka pata laga sakte he

// onrezise ye event handler hota he jo ki window ke liye hota he aur ye bas body tag me hi laga sakte he 


let body=document.querySelector("body")
body.setAttribute("onresize","abc()")



function abc(){
  
console.clear()   

let iheight=window.innerHeight
let oheight=window.outerHeight

let iwidth=window.innerWidth
let owidth=window.outerWidth    

console.log(iheight+" innerheight")
console.log(oheight+" outerheight")
console.log(iwidth+" innerwidth")
console.log(owidth+" outerwidth")


}

// window.scrollY
// window.scrollY ye batata he ki y axis se kitna scroll hua


// window.scrollX
// window.scrollX ye batata he ki X axis se kitna scroll hua



// open & close browser window:-

// open() method
// window.Open() iske 3 parameter hote 1 hota he url ke liye aur usme https likhna zaruri hota he
// aur dusra parameter hota he kis page pe redirect hona he uske ke liye isme 4 property hoti he _blank,_parent,_self,_top
// _blank ye dusre page pe redirect karta he aur bydefault _blank hi hoti he
// _parent ye same page pe redirect karta he ,_self ye iframe ke liye hota he,_top ye phele use hota tha
// aur 3 parameter hota he vo hota he specification ke liye yani height,width,top,left set karne ke liye
// aur ye sab string ke andar likhenge

// Close() method
// Close() jo window open kari he usko phele variable me store karenge fir us window ko close method lagake hata sakte he  
// aur ye bas usi ko close karta he jo same website ho agar different hui to nahi karega

// ye pop up me bhi kaam ata he 


let Open=document.createElement("button")
let closee=document.createElement("button")
body.appendChild(Open)
body.appendChild(closee)
Open.innerHTML="Open"
closee.innerHTML="close"

let closewindow

Open.addEventListener("click",()=>{

closewindow=window.open("https://ntp.msn.com/edge/ntp?locale=en-US&title=New%20tab&dsp=1&sp=Bing&PC=U531&ucpdpc=UCPD","_blank","height=300px width=200px ")    

console.log(closewindow)

})


closee.addEventListener("click",()=>{

closewindow.close()
console.log(closewindow)
})


// resize new browser window

// resizeBy() resizeTo()

// resizeBy() ye nayi window ko jo open kari he usko rezise karta he
// resizeBy() isme 2 argument hote he width,height ke liye aur isme jo bhi height width dete he vo ho jati he

// resizeTo() ye bhi nayi window ko jo open kari he usko rezise karta he
// resizeTo() isme 2 argument hote he width,height ke liye aur isme jo bhi height width dete he vo aur add hoke ajati he




// scroll to browser window

// window.scrollby() 
// scrollby iske 2 argument hote he phela hota he X axix ke liye 2 hota he Y axis ke liye 
// aur ye jis position pe ruka us position se chalta he


// window.scrollto()
// scrollto iske 2 argument hote he phela hota he X axix ke liye 2 hota he Y axis ke liye 
// aur ye apni actual position se chalta he matlab shuru se


// move new browser window

// aur ye bas usi window ko move karega jo same page me ho

// moveTo()
// moveTo() isme 2 argument hote he x axis, y axis ke liye aur isme jo bhi height width dete he vo utni screen ke x axis, y axis se door hojati he

// moveBy()
// moveBy() isme 2 argument hote he x axis, y axis ke liye aur isme jo bhi height width dete he vo utni apni khud ki x,y axis se door karta he translate ki tarah



// window events:-
// isko window.onresize karke use karte he ya body tag me

// onresize=ye jab chalega jab bhi window ki height width change karenge
// onload=ye jab use karenge jab bhi loader ayaega to usme ye function chalega 
// onunload=ye jab chalega jab loader nahi hoga
// ononline= isko use karte he pata karne ke liye ke user online he ke nahi agar he to kuch show kara sakte he
// onoffline=isko use karte he pata karne ke liye ke user offline he ke nahi agar he to kuch show kara sakte he


// navigator ek object hota he jiske andar bohot saari properties hoti he
// navigator.online isse pata laga sakte he ki user online he ya offline he 




// location object:-

// jo url bar hota he vo hi location object hota he

// get hostname,protocol,href of location object

// ye sab proterties he location object ki

// host
// host me website ka name ata he port ke saath agar port name nahi he to sirf hostname hi ayega

// port vo hota he jo colon ke baad lagta he

// hostname
// hostname website ka name hota he jese ki www.google.com etc

// ip address ye hostname hota he agar website nahi he to

// href
// href isse pura url nikal sakte he

// origin
// origin ye bhi href ki tarah hota he

// protocol (set of rules) 
// protocol vo hota jo page aap search kar rahe ho usko connect karne ka kaam aur data sharing ka kaam karta he agar vo page he to 
// aur bina protocol ke ham connect aur data share nahi kar sakte dusre page ko aur internet ko access bhi nahi kar sakte
// aur jis ko bhi connect kar rahe he uska bhi protocol ka type same hona chahiye agar same nahi he to connect nahi hoga
// http,tcp/ip,smtp,pop etc ye sab types hote he protocol ke aur tcp/ip ye sab se zada basic hota he


// http (hiper text transfer protocol)
// http ye kya karta he ki jo page aap ko chahiye usko connect karta he agar vo page he to


// hash
// hash ye jo bhi # ke baad likha hota he vo dikhata he

// search
// search ye jo bhi ? ke baad likha hota he vo dikhata he



// location methods

// reload()
// reload() isse se reload hota he

// assign()
// assign() isse new location assign ho jati he

// replace()
// replace() ye bhi assign ki tarah hota he bas isse purana wala delete ho jata he



// get history of browser window (history object)

// jo back karne ka option hota he usi ko history bolte he

// history.back() ye previous page batata he
// history.forward() ye next page batata he
// history.go() isse jo bhi number dalo us page pe la deta he
// history.length se history length batata he






// offsetTop
// closee.offsetTop ye batata he ke body ke top se kitna door he


// offsetLeft
// closee.offsetLeft ye batata he ke body ke left se kitna door he


// scrollTop
// closee.scrollTop ye batata he ki top se kitna scroll hua he


// scrollLeft
// closee.scrollLeft ye batata he ki left se kitna scroll hua he



// scrollHeight
// agar hame pata lagana he ki jo box scroll ho raha he uski puri height kitni he


// scrollWidth
// agar hame pata lagana he ki jo box scroll ho raha he uski puri width kitni he



// offsetHeight
// ye puri box ki hight batata he including padding and border


// offsetWidth
// ye puri box ki width batata he including padding and border



// console.clear() is se console clear ho jata he

// focus() isse window pe focus ajata he





// protocol (set of rules) 
// protocol vo hota jo page aap search kar rahe ho usko connect karne ka kaam aur data sharing ka kaam karta he agar vo page he to 
// aur bina protocol ke ham connect aur data share nahi kar sakte dusre page ko aur internet ko access bhi nahi kar sakte
// aur jis ko bhi connect kar rahe he uska bhi protocol ka type same hona chahiye agar same nahi he to connect nahi hoga
// http,tcp/ip,smtp,pop etc ye sab types hote he protocol ke aur tcp/ip ye sab se zada basic hota he

// http (hiper text transfer protocol)
// http ye kya karta he ki jo server aap ko chahiye usko connect karta he agar vo server he to

// https (hiper text transfer protocol security)
// https ye bhi http ki tarah hota he bas ye secure hota he aur http aur tls se milkar bana he

// What is Encryption
// it is secure feature of https 
// if a client wants to sent text to server but dont want anybody to read then we use encryption.So we hide message or obfuscate message so no one can read message and only server can decryped message

// types of Encryption
// Symmetric Encription and Asymmetric Encryption

// Symmetric Encription
// it is an old and best known technique.it is simplest kind of incryption because it involves only one secret key to encrypt and decrypt information like password
// isme ek disadvantage hota he agar encrypt data ko decrypt karna he to to secret key bhi share karna hogi aur http me sent karne se hack ho sakti he to https ka use karna hoga

// Asymmetric Encryption
// ye zada secure hoti he Symmetric Encription se kyu ki isme 2 key hoti he public key and private key.Public key use for encrypt data while private key is use for decrypt data and we can not give private key to anyone.

// tcp/ip 
// tcp/ip ye kya karta he ki tcp jo bhi server search kar rahe ho usko connect karne ka kaam karta he
// aur ip data sharing ka kaam karta he


// smtp (system mail transfer protocol)
// ye mail transfer karne ke kaam ata magar tabhi jab receiver online ho kyu ki ye server me store nahi karta

// pop(post office protocol)
// ye kya karta he ki ye bhi mail transfer karta he lekin agar receiver online nahi he to bhi mail transfer kar deta he 
// aur mail server me store ho jata he aur jab bhi receiver online ata he to uske paas server se mail ajata he jese whatsapp instagram me hota he


// server
// server net se chalta he
// kabhi esa hota he ki website hang ho jati he kyuki server me bohot saare users ajate he same page pe jaane ke kiye jisse kya hota he ki server ko us page pe bhejna mushkil ho jata he
// server kya hota he ki jo bhi chiz aap search kar rahe ho usko store karke bhejne ka kaam karta he us page pe







