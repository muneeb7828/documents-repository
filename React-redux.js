// what is redux
// redux ek library he jo ke state ko manage karne aur state ko update karne ke kaam ata he action events ka use karke


// why use redux
// ye state ko manage karne ke kaam ata he isme kya hota he ek store hota he jiska data kahi par bhi bhej sakte he React hooks (contextapi, usecontext) ki tarah



// redux main topics

// action
// what to do matlab kya karna he increment karna he ya decrement karna he
// aur action ek object hota he jiske andar ek type aur payload naam se field hoti he type field batati he kya karna he aur payload me information add kar sakte he

// action creator
// ye ek function hota he jo ke action ko return karta he 
// aur ye reusable, portable,easy to test hota he 
// ye hota he iska syntax

// export const incNumber = ()=>{   
//     return{
//      type:'INCREMENT',
//      payload:num   
//     }
// }



// reducer
// how to do matlab kese karna he 
// reducer are functions that takes current state and an action as argument and return new state result
// aur ye usereducer hook ki tarah hota he
// ye hota he iska syntax 

// const initialState = 0

const changetheNumber = (state =initialState,action)=>{
switch(action.type){
case "INCREMENT":return state + action.payload;
case "DECREMENT":return state - 1;
default:return state   
}

}



// store
// object which holds the state of the application matlab isme data store hote he
// and the redux store brings together the state,actions and reducers that make up your app
// we will only have single store in a redux application
// and every redux store has a single root reducer function 
// aur isko ese use karte he

// import {createStore} from "redux"

// const store =createStore(rootReducer)




// functions associated with store
// createStore()
// matlab store ko kese create kare

// dispatch(action)
// matlab actions ko kese use kare ke hame increment karwana he ya decrement karwana he

// getState()
// ye method use hota he current state ko lene ke liye


// redux principle

// single source of truth
// matlab ek hi single store rahega

// State is Read-Only
// the only way to change the state is to dispatch an action

// immutability and one-way data flow and predictability of outcome

// Changes are made with reducer functions


// how to implement redux in react

// sabse phele redux aur react-redux in dono ko install karna padta he


// isme agar redux dikhana he jaha console hota he to google pe jake redux devtools extention ko install karna hoga fir google pe hi github ka link hoga uspe jake documentation ke andar Browser Extension Installation and Configuration is link pe click karke 
// Basic store ke andar window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() isko copy karke createStore ke andar paste karna hoga jisse redux show ho jayga 

//  const store = createStore(
//    reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );

// aur isme redux ko use karne ke liye main.js file me provider ko import karna hoga react-redux library se fir usko wrap karna hoga app me contextapi ki tarah jisse fir usko use kar payenge aur isme props bhi dena hoga store ka data use karne ke liye

// aur samajh ne ke liye redux folder me dekhe



