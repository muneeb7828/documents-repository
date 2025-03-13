
let body=document.querySelector("body")
let form=document.querySelector("#form")
let container=document.getElementById("container")
let id=document.getElementById("id")
let name=document.getElementById("name")
let contact=document.getElementById("contact")
let email=document.getElementById("email")
let submit=document.getElementById("button")
let delete_all=document.getElementById("deleteall")




b=JSON.parse(localStorage.getItem("data"))
array=JSON.parse(localStorage.getItem("data"))

b==null?array=[]:array=JSON.parse(localStorage.getItem("data"))




function store(){

container.innerHTML=""   
array.forEach((v,i)=>{

container.innerHTML+=`
<div id="parentcard">
<div class="child"></div>
 <div id="card">
   <div class="details">ID: ${v.id}</div> 
   <div class="details">NAME: ${v.namee}</div> 
   <div class="details">CONTACT: ${v.contact}</div> 
   <div class="details">EMAIL: ${v.email}</div> 
   <div class="details div"><button class="btn dlt" onclick="dlt(${i})">delete</button><button class="btn edit" onclick="edit(${i})">edit</button></div> 
 </div> 
</div>   
`    


})

}

store()


let update=false
let index=null

function edit(d){

id.value=array[d].id
name.value=array[d].namee
contact.value=array[d].contact
email.value=array[d].email

update=true
index=d

}




submit.addEventListener("click",(e)=>{

if(update==false){  
e.preventDefault()  
obj={
id:id.value,
namee:name.value,
contact:contact.value,
email:email.value,
}

array.push(obj)
store()
localStorage.setItem("data",JSON.stringify(array))
}
else{
e.preventDefault() 
obj2={
id:id.value,
namee:name.value,
contact:contact.value,
email:email.value,
}  

array.splice(index,1,obj2)  
store()
localStorage.setItem("data",JSON.stringify(array))
update=false
}

})


function dlt(d){

a=confirm("are you sure you want to delete?")
if(a==true){
array.splice(d,1)
store()
localStorage.setItem("data",JSON.stringify(array))
}


}






delete_all.addEventListener("click",()=>{


if(localStorage.getItem("data")!="[]" && localStorage.getItem("data")!=null){  
let confrm=confirm("if you click ok so it will delete all cards")

if(confrm==true){
let confrm2=confirm("are you sure you want to delete all cards?")
  
if(confrm2==true){
localStorage.clear()
container.innerHTML=""
}

}
 
}
})


let parentcard=document.querySelectorAll("#parentcard")

let child1=document.querySelectorAll(".child")

parentcard.forEach((v,i)=>{

let ab=parentcard[i].querySelector(".child")

parentcard[i].addEventListener("mouseover",()=>{  
  
ab.classList.add("active")

})  

  
})



parentcard.forEach((v,i)=>{

let ab=parentcard[i].querySelector(".child")

parentcard[i].addEventListener("mouseout",()=>{  
  
ab.classList.remove("active")

})  

  
})


parentcard.forEach((v,i)=>{

let ab=parentcard[i].querySelector(".child")

parentcard[i].addEventListener("click",()=>{  
  
ab.classList.remove("active")

})  

  
})


parentcard.forEach((v,i)=>{

parentcard[i].addEventListener("dblclick",()=>{
  
parentcard.forEach((va,ind)=>{

parentcard[ind].removeChild(child1[ind])
  
})  

})


})

