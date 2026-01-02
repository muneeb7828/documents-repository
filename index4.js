
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



// question 6 which is maximum element use in this array and count that all element 
// Arr=[1,1,2,2,1,2,1]

// const Arr=[1,1,2,2,2,2,1]

// let arr2 = []


// Arr.forEach((v,i)=>{
//     arr3 = []
//  Arr.forEach((p,i2)=>{
//     if(v === p ){
//      arr3.push(p)        
//     }

//   })


//   arr2.push(arr3) 
   
// })

// let checkmaxnum = arr2[0]

// arr2.forEach((v,i)=>{

//    if (checkmaxnum.length < v.length ){
//     checkmaxnum = v 
//    }
// })


// console.log(checkmaxnum);


// console.log(`This is the maximun number ${checkmaxnum[0]} this is the total count of a arr = ${checkmaxnum.length}`);







let arr=[1,1,2,2,1,2,1]


let arr2 =[]

for(let i = 0; i< arr.length;i++){
   arr[i]
   let arr3=[]
for(let p=0;p<arr.length;p++){
   if(arr[i]===arr[p]){
    arr3.push(arr[p])
   }
}
   arr2.push(arr3)

  }



let checkmax = arr2[0]
for(let a= 0;a < arr2.length;a++){
    if(checkmax.length<arr2[a].length){
         checkmax=arr2[a]
         
    }
    
}
console.log(`This is the maximun number ${checkmax[0]} this is the total count of a arr = ${checkmax.length}`);





let Arr5=[-3,-2,0,-7,25,12,-11]


let nums=0
let check=0


Arr5.forEach((v,i) => {
  if(v>0){
   check++ 
nums+=v
  }


});

console.log((nums / check));
 



    
let Arr10=[1,3,4,2,9]


let num10=Arr10[0]

for (let i =0 ; i<Arr10.length;i++){

  if(num10 + Arr10[i] == 6){
     console.log(`${num10} ${Arr10[i]} = ${num10 + Arr10[i]}`)
  }
num10 = Arr10[i]

}



let Arrr=[1,2,1,3,4,2,9]
 
let k=3

let nu = []


Arrr.forEach((v,i,fullarray) => {

fullarray.splice(i,1)

console.log(fullarray);

if(!fullarray.includes(v)){
  nu.push(i)
}  

fullarray.splice(i,0,v)


});


console.log(Arrr[nu[k-1]]);


// calculate the odd and even number


number12=[1,2,3,45,35,56,71,31,41]

number12.forEach((v,i,pura) => {
  if(v%2==0){
   console.log(v,"even")
  }
else{
  console.log(v,"odd")
}

});


// calculate the sum of 2 big numbers in array


let array14 = [45,2,3,1,35,56,71,31,41]

let array15 = []

array14.forEach((v,i)=>{
  
  let numb = {value:v,index:i}

  array14.forEach((p,ind)=>{
    if(numb.value>=p){
       numb = {value:p,index:ind}   
    }
  })
  array15.push(numb.value)

  array14.splice(numb.index,1,23002323023)

})



console.log(array15);



console.log(array15[array15.length-1] + array15[array15.length-2]);


// [0][0],[1][0],[2][0]
// [0][1],[1][1],[2][1]
// [0][2],[1][2],[2][2]

let array16 =[
  [2,4,1],
  [10,5,11],
  [18,7,6]
]
console.log(array16);

array16[0][0] = array16[0][0]
array16[0][1] = array16[1][0]
array16[0][2] = array16[2][0]

array16[1][0] = array16[0][1]
array16[1][1] = array16[1][1]
array16[1][2] = array16[2][1]

array16[2][0] = array16[0][2]
array16[2][1] = array16[1][2]
array16[2][2] = array16[2][2]


console.log(array16);








let array17 = [-1,0,2,1,4,-3,3]

let checksum=[]

array17.forEach((v,i)=>{

array17.forEach((p,ind)=>{
if(i !== ind){
  if(v + p == 0){
  checksum.push({First:v,SecondValue:p})
  }
}

})

})

console.log(checksum)










