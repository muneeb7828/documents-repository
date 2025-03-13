
let body=document.querySelector("body")



class Car{

constructor(a,b,c,d){
this.brand=a,
this.color=c,
this.price=d,
this.type=b
}

start(){
console.log("starting...")    
}

run(){
console.log("runing...")    
}

stop(){
console.log("break!")
    
}


}



class I_C_E extends Car{

constructor(engine,milage,petrol_capacity,brand,type,color,price){ 
super(brand,type,color,price) 
if(engine!=undefined && milage!=undefined && petrol_capacity!=undefined)  
this.engine=engine,
this.milage=milage,
this.petrol_capacity=petrol_capacity
}    
fuel(){
console.log(`petrol fueling...`)

}
details(){
console.log(this.brand+this.type+this.color)    
}


}

class EV extends I_C_E{

constructor(battery,runingpercharge,charging_time,brand,type,color,price,engine,milage,petrol_capacity){
super(engine,milage,petrol_capacity,brand,type,color,price)        
this.battery=battery,
this.charging_time=charging_time, 
this.runing_per_charge=runingpercharge
}    
charge(){
console.log(`car is charging`)

}

}





class hybrid extends EV{

constructor(battery,runingpercharge,charging_time,brand,type,color,price,engine,milage,petrol_capacity){
super(battery,runingpercharge,charging_time,brand,type,color,price,engine,milage,petrol_capacity)
    
}    

}





let car1=new I_C_E("1200cc","20","30 litre","hyundai","i20","white","400000")
let car2=new EV("100000mah","150km","1hour","mg","hector","black","1200000")
let car3=new hybrid()

console.log(car1)
console.log(car2)
console.log(car3)



class unsecure{

constructor(username,email,password){

this.username=username
this.email=email
this.password=password

}

}

class secure{
#password
constructor(username,email,password){
this.username=username
this.email=email
this.#password=password
} 

#pa(){
return this.#password
}

}



let user1=new unsecure("muneeb","muneeb@123",12345)
let user2=new secure("muneeb","muneeb@123",12345)












































