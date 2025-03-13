const hour=document.getElementById("hour")
const minute=document.getElementById("minute")
const second=document.getElementById("second")
const scale=document.getElementById("scale")
const container=document.querySelector(".divcontainer")

let number=1


let watch=setInterval(()=>{

let date=new Date
let htime=date.getHours()*30 + date.getMinutes()/2  
let mtime=date.getMinutes()*6   
let stime=date.getSeconds()*6

hour.style.transform=`rotate(${htime}deg)`
minute.style.transform=`rotate(${mtime}deg)`
second.style.transform=`rotate(${stime}deg)`
  
if(number==1){
scale.style.transform=`rotate(-30deg)`    
number=0
}
else{
scale.style.transform=`rotate(30deg)`    
number=1    
}

},1000)



let stop=function(){
clearInterval(watch)    
}








