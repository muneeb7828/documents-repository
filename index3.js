// body(div(nav(div1 ul(4li) div2) div div div(ul(4li) div)))


let title=document.querySelector("title")

title.innerText="Landing page"


let body=document.body

let parentdiv=document.createElement("div")

parentdiv.className="parentdiv"

body.appendChild(parentdiv)

let nav=document.createElement("nav")

nav.className="navbar"


parentdiv.appendChild(nav)



let div1=document.createElement("div")
let ul=document.createElement("ul")
let div2=document.createElement("div")
var div3=document.createElement("div")
var div4=document.createElement("div")
var div6=document.createElement("div")
let li5=document.createElement("li")
let li6=document.createElement("li")
let li7=document.createElement("li")
let p=document.createElement("p")
let p2=document.createElement("p")
let button=document.createElement("button")



let li1=document.createElement("li")
let li2=document.createElement("li")
let li3=document.createElement("li")
let li4=document.createElement("li")

li1.className="li"
li2.className="li"
li3.className="li"
li4.className="li"

ul.className="ul"

nav.appendChild(div1)
nav.appendChild(ul)
nav.appendChild(div2)

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)

div3.appendChild(div4)
div3.appendChild(p)
div4.appendChild(li5)
div4.appendChild(li6)
div4.appendChild(li7)


li5.className="downli"
li6.className="downli"
li7.className="downli"



div1.innerHTML="<h3>mnmlst</h3>"


li1.innerHTML="Home"
li2.innerHTML="Product"
li3.innerHTML="Store"
li4.innerHTML="About Us"


div2.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`


div3.className="div3"

div4.className="div4"
p.className="p"


li5.innerHTML=`<i class="fa-brands fa-facebook"></i>`
li6.innerHTML=`<i class="fa-brands fa-instagram"></i>`
li7.innerHTML=`<i class="fa-brands fa-twitter"></i>`

p.innerHTML="Argilton height il"

parentdiv.appendChild(div3)
parentdiv.appendChild(div6)
div6.appendChild(p2)
div6.appendChild(button)




div5=document.createElement("div")
div5.className="div5"
h1=document.createElement("h1")
h1.className="h1"


parentdiv.appendChild(div5)
div5.appendChild(h1)


h1.innerHTML="LESS IS MORE"



div6.className="div6"
p2.className="p2"
button.className="button"



p2.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem voluptatibus cum et quisquam eveniet pariatur dolorum natus eum odit."

button.innerHTML="read more"


let image=document.createElement("div")

div5.appendChild(image)

image.className="image"


image.innerHTML=`<img src="portrait-adorable-young-happy-boy-27903659_1_-removebg-preview.png" alt="">`

parentdiv.insertBefore(div5,div3)




button.addEventListener("mouseover",()=>{

p2.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem voluptatibus cum et quisquam eveniet pariatur dolorum natus eum odit.cum et quisquam eveniet pariatur dolorum natus eum odit."

div6.removeChild(button)

})



p2.addEventListener("mouseleave",()=>{

p2.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem voluptatibus cum et quisquam eveniet pariatur dolorum natus eum odit."
    
div6.appendChild(button)
    
})
    






