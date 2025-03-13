body=document.querySelector("body")
parentdiv=document.querySelector(".parentdiv")

data=[
{id:7,name:"muneeb",contact:8269527774,email:"muneeb@123",image:"https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?cs=srgb&dl=pexels-jc-laurio-1288182.jpg&fm=jpg",},    
{id:7,name:"muneeb",contact:8269527774,email:"muneeb@123",image:"https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?cs=srgb&dl=pexels-jc-laurio-1288182.jpg&fm=jpg",},    
{id:7,name:"muneeb",contact:8269527774,email:"muneeb@123",image:"https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?cs=srgb&dl=pexels-jc-laurio-1288182.jpg&fm=jpg",},    
{id:7,name:"muneeb",contact:8269527774,email:"muneeb@123",image:"https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?cs=srgb&dl=pexels-jc-laurio-1288182.jpg&fm=jpg",},    
]


store()
function store(){
parentdiv.innerHTML=""
data.forEach((v,i)=>{
    card1=document.createElement("div")            
    card1.className="card"
    parentdiv.appendChild(card1)
    card1.innerHTML=`
    <div class="detail">
    <div>ID ${v.id}</div>
    <div>NAME ${v.name}</div>
    <div>CONTACT ${v.contact}</div>
    <div>EMAIL ${v.email}</div>
    <div class="parent"><button class="button delete" onclick="abc(${i})">delete</button><button class="button edit" onclick="xyz(${i})">edit</button></div>
    </div>
    <img class="img" src=${v.image} alt="">
    `
})
}



function abc(d){
data.splice(d,1)    
store()  
}


let form=document.createElement("form")
form.className="form"
body.appendChild(form)
input1=document.createElement("input")
input2=document.createElement("input")
input3=document.createElement("input")
input4=document.createElement("input")
image=document.createElement("input")
submit=document.createElement("button")

submit.innerHTML="submit"

form.appendChild(input1)
form.appendChild(input2)
form.appendChild(input3)
form.appendChild(input4)
form.appendChild(image)
form.appendChild(submit)

input1.setAttribute("placeholder","id")
input1.setAttribute("type","number")
input2.setAttribute("placeholder","name")
input3.setAttribute("placeholder","contact")
input4.setAttribute("placeholder","email")
image.setAttribute("placeholder","image")

input1.className="input"
input2.className="input"
input3.className="input"
input4.className="input"
submit.className="input submit"

let indexnumber=""
update=false

function empty(){
input1.value=""    
input2.value=""    
input3.value=""    
input4.value=""
image.value=""  
}




submit.addEventListener("click",function(e){
e.preventDefault()
if(update==true){
obj={
id:input1.value,
name:input2.value,
contact:input3.value,
email:input4.value,
image:image.value,
}  
data.splice(indexnumber,1,obj)
store()
empty()
update=false
}
else{
obj={
id:input1.value,    
name:input2.value,    
contact:input3.value,    
email:input4.value,
image:image.value,    
}  
data.push(obj)  
if(input1.value==""){
data.pop()    
} 
else if(input2.value==""){
data.pop()    
} 
else if(input3.value==""){
data.pop()    
} 
else if(input4.value==""){
data.pop()    
} 
store()
empty()
}
})



function xyz(d){
input1.value=data[d].id  
input2.value=data[d].name 
input3.value=data[d].contact 
input4.value=data[d].email
image.value=data[d].image
store()
update=true
indexnumber=d
}





