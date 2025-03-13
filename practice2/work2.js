let qna=document.querySelectorAll(".qna")

qna.forEach(function(quesandans,i){

let arrow=quesandans.querySelector(".downarrow")
let ans=quesandans.querySelector(".ans")    

quesandans.addEventListener("click",()=>{
    
ans.classList.toggle("active")    
arrow.classList.toggle("active")
})

})
































