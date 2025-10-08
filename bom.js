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



// JWT (json web token) authentication
// JWT ye bhi public private criptography ki tarah kaam karta he aur state less hota he
// isme kya hota he isme token generate hota to jiske paas bhi token hota he vo authenticate kar sakta he
// jwt me kya hota he ye aapka data leta he usko encript kar dete he aur kon decript karega ye server decide karega
// iske token me 3 parts hote he 1 part me kya hota he ki ye batata he konsi algoritym use kar rahe he kyuke isme bohot sare algoritym hoti he 2 part batata he ki kya informtion he aapke paas me 3 part signature hota he iske andar private key hota he
// aur isme har token ke sath expiry time bhi dal sakte he ki kab token expire hoga


// how jwt works

// 1️⃣ Step 1 – User logs in
// You (the client, e.g., a browser or mobile app) send your username + password to the server.

// The server checks if they’re correct (e.g., by looking in a database).

// 2️⃣ Step 2 – Server creates the JWT
// If login is successful, the server makes a token with three parts:

// Header → says “This is a JWT” and “I’ll sign it with HS256” (or another algorithm).
// {
//   "alg": "HS256",
//   "typ": "JWT"
// }

// Payload → contains the data (claims) the server wants to remember.

// {
//   "userId": 123,          ==> Uniquely identifies the user.
//   "role": "admin",        ==> can access admin dashboard
//   "exp": 1733827200       ==> Expiration time
// }
// exp means expiration time — when the token stops working.

// Signature → created by:

// signature = HMACSHA256(
//   base64UrlEncode(header) + "." + base64UrlEncode(payload),
//   secretKey
// )
// This secret key is only known to the server.

// The signature ensures no one can change the token without being caught.

// 3️⃣ Step 3 – Server sends JWT to client
// The server Base64Url encodes header & payload, adds the signature, and sends you something like:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// .
// eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIiwiZXhwIjoxNzMzODI3MjAwfQ
// .
// abcdef1234567890signature

// 4️⃣ Step 4 – Client stores the JWT
// Your app stores it (in localStorage, sessionStorage, or a secure HTTP-only cookie).

// Example (localStorage):

// localStorage.setItem("token", jwt);

// 5️⃣ Step 5 – Making future requests
// Every time you need data from the server, you send the token in the Authorization header:
// Authorization: Bearer <your-jwt-here>

// 6️⃣ Step 6 – Server verifies JWT
// When the server gets your request:

// It splits the JWT into header, payload, and signature.

// It recalculates the signature using the same secret key.

// If the signature matches and the token is not expired → ✅ request is allowed.

// If it doesn’t match or is expired → ❌ request is denied.

// 7️⃣ Step 7 – Server responds
// If valid, the server uses the data in the payload (like userId, role) to know who you are and what you can do.

// Sends back the requested data (JSON, HTML, etc.).

// 🔄 Flow Summary
// Login → Server creates JWT → Send to client.

// Client stores JWT → Sends it with each request.

// Server verifies JWT → Allows or rejects request.

// 💡 Key notes:

// JWT is stateless → Server doesn’t store tokens in memory, so it scales easily.

// Anyone can read payload (it’s just encoded), but only the server can verify or create a valid signature.

// Always use HTTPS so no one can steal the token in transit.


// How UPI works.
// https://youtu.be/iI2NaN_QVTI?si=JBmCkjqCaZROab5f

// psp (payment service provider)
// ye kya karta he ki ye API for exp google pay,phonepay etc ko connect karta he bank se aur jab bhi koi payment karta he to ye sender ki upi id,id,amount aur receiver ki upi id,id leke npci ko send kar deta he
// aur npci kya karta he vo sender ke account ki amount nikal ke receiver ke account me daal deta he aur ye actual amount nahi bejta bas rbi ka trust hota he

// how upi wallet works and apple pay works 
// https://youtu.be/JQ_wXA9JA1g?si=TXG5kKHF_U8mj6FO


// how payment flow works detail explanations
// https://chatgpt.com/share/68958638-567c-800f-bf4d-7201d6692454


// google auth
// https://youtu.be/ZDuRmhLSLOY?si=b348gJZSHdZVXKC7
// https://youtu.be/GcVtElYa17s?si=FRBzExPwA83uhV0O


// session authentication
// User logs in → Server checks credentials → Server creates a session in its memory or database and gives the browser a session ID (usually in a cookie).
// On each request, the browser sends the cookie → Server looks up the session data from its storage.
// Session authentication = stateful, cookie + session ID, server stores the state.

// API authentication
// Client logs in → Server issues an access token (like JWT).Token is sent with every request in the Authorization header.Server checks token validity without looking up a session in memory.
// API authentication = stateless, token-based, server does not store state.


// network call in react native:-

// Understand the Columns
// Name – The file or API endpoint requested.
// Status – HTTP status code (200 OK, 404 Not Found, 500 Server Error, etc.).
// Type – The resource type (document, script, xhr for APIs, image, etc.).
// Initiator – Who made the request (the page, a script, etc.).
// Size – The file size downloaded.
// Time – How long the request took.
// Waterfall – A visual timeline of requests.
// XHR / Fetch – API requests (most useful for debugging).

// Common Uses
// Debugging API calls – Check if your request URL, params, or headers are correct.
// Checking status codes – See if the server returned an error.
// Inspecting response data – View JSON returned by the API.
// Watching redirects – See where your request got redirected.
// Measuring performance – See which files are slow to load.

// The Network tab only shows requests after you’ve opened the api.

// Here’s your Docs vs XHR vs JS comparison chart:

// Filter	    Full Form / Meaning	                    Kya Dikhata Hai	                                    Kab Use Karna                        	               Example
// Docs    	 Documents	               Sirf HTML document requests (main page, iframe pages)	    Page load / reload check karne, redirects dekhne	     index.html, login.html
// XHR    	 XMLHttpRequest / Fetch	      API calls, JSON data, backend se aane wale responses	    API debugging, POST/GET data check karne	           /api/user, /products?limit=10
// JS	     JavaScript	                 Sirf .js files jo page pe load ho rahi hain	           JavaScript file missing / error troubleshoot karne	    app.js, vendor.bundle.js

// No throttling iska use isliye karte he taki dekh sake kitni network speed me website sahi chal rahi he



// escrow account:-
// escrow account wallet ya upi se different hota kyu ki usme bas thoda amount ki transfer kar sakte he lekin isme big amount transfer kar sakte he aur ye real state ya bussines wagera ke liye hota he
// aur teen types ke escrow account open 

// How to Use an Escrow Account (General Process)

// Choose an Escrow Service
// This can be a bank, a licensed escrow company, or an online escrow platform (like Escrow.com, Payoneer Escrow, etc.).
// In India, banks like HDFC, ICICI, and Axis offer escrow services, and for online freelancing, sites like Upwork have built-in escrow.

// Agree on Terms
// Buyer and seller decide on:Price ,What will be delivered and Time frame
// Buyer Deposits Money into Escrow
// The buyer transfers the agreed amount to the escrow account (not directly to the seller).
// Seller Delivers the Goods/Services
// The seller ships the product, delivers the service, or completes the agreed task.
// Buyer Confirms Delivery
// The buyer checks and approves that the goods/services match the agreement.
// Escrow Releases Payment to Seller
// Once approval is given (or the inspection period ends), escrow transfers the money to the seller.
// Dispute Handling (If Needed)
// If there’s a problem, the escrow service acts as a neutral mediator and may refund the buyer or negotiate a resolution.


// ppi (Payment Protection Insurance)
// Industry: Insurance / Loans / Credit Cards
// Ye ek insurance hota hai jo aapke loan ya credit card ka repayment cover karta hai agar aap kisi wajah se payment nahi kar paate — jaise job chali jana, bimaari ho jana, ya accident ho jana.




// What is a Payment Gateway?

// A payment gateway is a service that connects your app/website to the banking system so you can accept digital payments (cards, UPI, wallets, net banking, etc.) from your customers

// What payment gateways do:-

// Secure card/UPI data → They encrypt and safely send it to banks.
// Authorization → Ask the bank: “Does this customer have enough balance? Can we charge ₹500?”
// Settlement → Move money from the customer’s account to the merchant’s account.
// Fraud detection → Block suspicious payments.
// Multiple options → Support Cards, UPI, Wallets, EMI, Net banking, etc.


// Popular Payment Gateways:-

// India: Razorpay, Paytm, PhonePe, Cashfree, CCAvenue
// Global: Stripe, PayPal, Adyen, Square

// Example in real life:-

// When you buy something on Amazon and enter your card → you’re not giving it to Amazon directly.
// Amazon sends you to a payment gateway (like Razorpay, Stripe, Paytm).
// The payment gateway securely takes your card info, talks to the bank, confirms payment, and tells Amazon → “Payment successful”.


// Complete information about Akamai
// https://gamma.app/docs/Akamai-CDN-nkd0c9hltskghx7

// Complete information about Nginx
// https://gamma.app/docs/Understanding-NGINX-The-Modern-Web-Server-5dcv1iydr83alrx

