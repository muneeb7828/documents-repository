
let body=document.getElementsByTagName("body")

let tbody=document.getElementById("tbody")
let image=document.createElement("input")
let input1=document.createElement("input")
let input2=document.createElement("input")
let input3=document.createElement("input")
let input4=document.createElement("input")
let submit=document.createElement("button")
let form=document.createElement("form")
submit.innerText="submit"
input1.setAttribute("placeholder","id")
input1.setAttribute("type","number")
input2.setAttribute("placeholder","name")
input3.setAttribute("placeholder","contact")
input4.setAttribute("placeholder","email")
image.setAttribute("placeholder","image")


body[0].appendChild(form)
form.appendChild(image)
form.appendChild(input1)
form.appendChild(input2)
form.appendChild(input3)
form.appendChild(input4)
form.appendChild(submit)



let table=[
{image:`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg`,id:7,name:"muneeb",contact:8719524412,email:"muneeb@123"},
{image:`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg`,id:8,name:"rehman",contact:8719524412,email:"rehman@123"},
{image:`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg`,id:12,name:"saad",contact:8719524412,email:"saad@123"},
{image:`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg`,id:9,name:"yayah",contact:8719524412,email:"yayah@123"},

]

store()
function store(){
  tbody.innerHTML=""    
table.forEach(function(v,i){
    tbody.innerHTML+=`
    <tr>
        <td id="id"><img class="img" src="${v.image}" alt="error"></td>
        <td>${v.id}</td>
        <td>${v.name}</td>
        <td>${v.contact}</td>
        <td>${v.email}</td>
        <td><button onclick="abc(${i})">delete</button><button onclick="xyz(${i})">edit</button></td>
    </tr>
    
    `
})

}


function abc(d){
table2=table.filter((v,ind)=>{
  if(d!==ind){ 
return   table[ind]
  }
})          
table=table2
store()
}

function empty(){
input1.value=""    
input2.value=""    
input3.value=""    
input4.value=""    
image.value=""    
}

let update=false
let indexnumber
function xyz(d){
  
input1.value=table[d].id 
input2.value=table[d].name 
input3.value=table[d].contact 
input4.value=table[d].email
image.value=table[d].image
indexnumber=d
update=true
}

submit.addEventListener("click",function(e){
if(update==true){
e.preventDefault()  
obj2={
id:input1.value,
name:input2.value,
email:input3.value,
contact:input4.value,
image:image.value,
}
table.splice(indexnumber,1,obj2)
store()
empty()
update=false
}  
else if(update==false){
e.preventDefault()    
obj={
id:input1.value,
name:input2.value,
contact:input3.value,
email:input4.value,
image:image.value,
}
table.push(obj)
if(input1.value=="" ){
table.pop()
}
else if(input1.value=="" ){
table.pop()
}
else if(input2.value=="" ){
table.pop()
}
else if(input3.value=="" ){
table.pop()
}
else if(input4.value=="" ){
table.pop()
}
store()
empty()
}  

})


