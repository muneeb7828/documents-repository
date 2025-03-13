

const body=document.body

console.log(body);

var div=document.createElement('div')
var childdiv=document.createElement('div')
var child2div=document.createElement('div')
var form=document.createElement('form')
var input1=document.createElement('input')
var input2=document.createElement('input')
var input3=document.createElement('input')
var button=document.createElement("button")


let inputs=[input1,input2,input3]




body.appendChild(div)
form.appendChild(childdiv)
form.appendChild(child2div)
div.appendChild(form)
form.appendChild(input1)
form.appendChild(input2)
form.appendChild(input3)
form.appendChild(button)


body.style.background="beige"

div.style.height="100vh"
div.style.width="100vw"
div.style.display="flex"
div.style.justifyContent="center"
div.style.alignItems="center"
form.style.display="flex"
form.style.flexDirection="column"
form.style.justifyContent="center"
form.style.gap="50px"
form.style.alignItems="center"
form.style.width="260px"
form.style.height="400px"
form.style.border="2px solid black"
input1.style.width="240px"
input2.style.width="240px"
input3.style.width="240px"
button.style.width="250px"
button.style.height="30px"
inputs[0].style.border="none"
inputs[1].style.border="none"
inputs[2].style.border="none"
inputs[0].style.borderBottom="2px solid white"
inputs[1].style.borderBottom="2px solid white"
inputs[2].style.borderBottom="2px solid white"
inputs[0].style.background="black"
inputs[1].style.background="black"
inputs[2].style.background="black"
inputs[0].style.color="white"
inputs[1].style.color="white"
inputs[2].style.color="white"
childdiv.style.color="white"
child2div.style.color="white"
input1.setAttribute("placeholder","name...")
input2.setAttribute("placeholder","email...")
input3.setAttribute("placeholder","password...")
input3.setAttribute("type","password")
button.innerHTML="SEND MESSAGES"
button.style.color="beige"
button.style.background="gray"
form.style.background="black"


childdiv.innerHTML="SAY HELLO"
child2div.innerHTML="Lorem ipsum dolor elit."


let abc=()=>{

input1.setAttribute("placeholder","full name...")
            
}


input1.addEventListener("mouseover",abc)


input1.addEventListener("mouseleave",()=>{

input1.setAttribute("placeholder","name...")
    
})


button.addEventListener("click",(a)=>{

a.preventDefault()
    
})

