let body=document.querySelector("body")
let box=document.querySelector(".box")




let left=0
let up=0

body.addEventListener("keydown",(e)=>{    
   
if(e.key=="ArrowUp"){
if(up>0){
up=up-5
console.log(up)
box.style.marginTop=up+"px"
}
}    
else if(e.key=="ArrowDown"){    
up=up+5
console.log(up)
box.style.marginTop=up+"px"

}  
else if(e.key=="ArrowLeft"){
if(left>0){
left=left-5
console.log(left) 
box.style.marginLeft=left+"px"
}
}    
else if(e.key=="ArrowRight"){
left=left+5
console.log(left)     
box.style.marginLeft=left+"px"
}  


})





body.addEventListener("click",(e)=>{

body.style.background=`rgb(${e.clientX} ${e.clientY}  ${e.clientY})`    

})









































