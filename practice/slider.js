const parentdiv=document.getElementById("parentdiv")
const left=document.getElementsByClassName("left")
const right=document.getElementsByClassName("right")
const slider=document.querySelector(".slider")
const image=document.getElementsByClassName("img")
const frame=document.querySelector(".frame")
const bottom=document.querySelector(".bottom")

let length=image.length

let num=1



right[0].addEventListener("click",()=>{
if(num<image.length){
slider.style.transform=`translateX(-${num*50}vw)`
num++
transparent()
buttons[num-1].style.background="white"
}
else{
slider.style.transform=`translateX(0vw)`
num=1
transparent()
buttons[num-1].style.background="white"
}
})



left[0].addEventListener("click",()=>{
if(num==1){
slider.style.transform=`translateX(${-(image.length-1)*50}vw)`
num=image.length
transparent()
buttons[num-1].style.background="white"
}
else{
slider.style.transform=`translateX(-${(num-2)*50}vw)`
num--
transparent()
buttons[num-1].style.background="white"
}
})

let i=0

for(i;i<image.length;i++){  
const div=document.createElement("div")
      div.className="dot"
      bottom.appendChild(div)
              
}


let buttons=document.querySelectorAll(".dot")

buttons[0].style.background="white"

buttons.forEach((v,i)=>{

v.addEventListener("click",()=>{
slider.style.transform=`translateX(-${i*50}vw)`
transparent()
v.style.background="white"
})

})


let transparent=function(){
buttons.forEach((v,i)=>{

v.style.background="transparent"

})

}


let startinterval=function(){
start=setInterval(()=>{              
if(num<image.length){
slider.style.transform=`translateX(-${num*50}vw)`
num++
transparent()
buttons[num-1].style.background="white"
console.log(num) 
}
else{
slider.style.transform=`translateX(0vw)`
num=1
transparent()
buttons[num-1].style.background="white"
console.log(num) 
}
},2000)
}

startinterval()

let stopinterval=function(){
clearInterval(start)
}


frame.addEventListener("mouseover",stopinterval)
frame.addEventListener("mouseout",startinterval)
right[0].addEventListener("mouseover",stopinterval)
right[0].addEventListener("mouseout",startinterval)
left[0].addEventListener("mouseover",stopinterval)
left[0].addEventListener("mouseout",startinterval)

buttons.forEach((v,i)=>{
v.addEventListener("mouseover",stopinterval)
v.addEventListener("mouseout",startinterval)

})