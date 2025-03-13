
// question on forEach

// first ques
// ans=the difference between foreach and map is map returns a array whether foreach not return any thing from loop



// second ques

let array=[10,20,30,40,50]


array.forEach(function(a,i,p){

console.log(a)

})


// 3 ques

const num=[1,2,3,4,5,6]

let variable1=0

num.forEach(abc)

function abc(v,i,p){

 variable1+=v
 console.log(variable1);
 

}



// 4 ques
// ans= we can not use foreach array to create a new array beacause it not return any thing


array2=[2,4,6,8]

array3=[]


let squares=array2.reduce((i,s)=>{

    array3.push(s*s)    
return array3    
    
},1)


console.log(squares);




// question on map


// ans1= map returns a array with undefined values from old array if condition not true

// ques 2  convert into their squares



let b=array2.map((s)=>{
   
return s*s
        
})


// ques 3

people=[
{name:"muneeb", age:24},
{name:"saad", age:30},
{name:"yayah", age:32},    
]



let namee=people.map((s,i)=>{

  return s.name

})


console.log(namee);



// ques 4


array4=[1,2,3,4,5,6]


let strg=array4.map(function(s){

return  s.toString()

})

console.log(strg);



// ques 5
// ans= agar map se bas even ke square nikalenge to jo true nahi honge usko bhi empty array dedega undefiens ke sath aur filter se nikalenge to bas even wale hi dega







// question on filter

// ques 2

let array5=[2,56,78,34,5,7,0,12]

even=array5.filter((v)=>{

if(v%2==0){
return v    
}

})

console.log(even);


// ques 3

array6=["apple","","orange","","banana","",]


fruit=array6.filter((s)=>{

if(s==""){
        
}else{
 
return s    
}

})

console.log(fruit);



// ques 4


let peoples=[
{name:"muneeb", age:24},
{name:"saad", age:30},
{name:"yayah", age:20}, 
{name:"hamza", age:32},    
]


agee=peoples.filter((s)=>{

if(s.age>=30){
return s    
}
    
})

console.log(agee);




// question on reduce


// ques 2

array7=[1,2,3,4,5,6,7]

sum2=array7.reduce((i,v,ind,p)=>{

      i=i+v  
return i        
    
})

console.log(sum2);


// ques 3


let array8=["apple","banana","orange","cherry","banana","orange",]

let compare=[]

array8.reduce((i,v,ind,p)=>{

if(i==v){
compare.push(v)
}   
return i

},"banana")


console.log(compare);



// ques 4

let array9=[[1,2],[3,4],[5,6]]


flat=array9.reduce((i,v,ind,p)=>{


i=i.concat(v)
return i    

    
})

 console.log(flat);
 


// mix question

// ques1

let array11=[1,2,3,4,5,6]
let sum1=0

array11.filter((a)=>{

if(a%2==1){
sum1+=a
return   

}     

})

console.log(sum1);



// ques2


let double=array11.map(function(v){

return   v+v

})


greatvalue=double.filter((v)=>{

if(v>=10){
return v
}


})

console.log(greatvalue);



// ques3


let products=[
  {product:"book",price:24},
  {product:"pen",price:30},
  {product:"notbook",price:20}, 
  {product:"color",price:32},    
  ]

sum4=0


total=products.reduce((i,v)=>{

sum4+=v.price


},10)

console.log(sum4);



// reduce ques 5




let array12=[12,2,3,45,67,34]



greatervalue=array12.reduce((i,v)=>{

if(v>i)
  i=v 
   
return i

})

console.log(greatervalue)



let array13=[1,2,3,4,5,6,7,8,9]


evennumber=array13.filter((v)=>{

if(v%2==0){
return v
}

})


square=evennumber.map(function(v){

return v*v

})

sumsquare= squares.reduce(abc)

function abc(i,v){

i=i+v
return i  

}

console.log(sumsquare);






