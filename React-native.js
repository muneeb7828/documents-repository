// React-native
// ye basically mobile apps banane ke kaam ati he

// Main topics to learn react native

// Setup and install React-Natice
// React-native basics
// Components
// hooks and lifecycle
// navigation
// handle list
// form handling
// rest Apis
// redux


// ye command likhne se kya kya issues arahe he connect karne me ye pata chal jata he
// npx react-native doctor


// extensions for react-native
// React Native Tools


// react native with expo
// iske liye expo go app install karna padta he phone me fir usko scan karna hota he tab dekh pate he phone me
// aur ye cli ki tarah hota he bas isme emulator nahi hota


// aur jab bhi emulator banay to medium se hi banay aur android 12,Api level 31 se banay kyuki ye space kam leta he

// npx @react-native-community/cli init
// aur ye command chalene ke baad npm install bhi karna padta he fir uske baad npx react-native run-android ye command chalate he

// aur npx react-native run-android agar ye command chalane ke baad kuch error aay to ye command chalayenge
// adb kill-server, adb start-server
// npx react-native start --reset-cache




// React native app file structure

// important files in react native app

// Package.json
// ye sabse main file hoti ye project ki saari information rakhti he jese ki project ka name kya he version konsa use hua he script kya he aur project ki saari libraries bhi isi me hoti he

// metro config.js file
// ye application ko fast reload karne ke kaam ati he jese hi ham change karke save karte he to ye fast reload karke javascript me convert karta he code ko

// babel config.js file
// ye file purane code me convert kar deti he nay code ko 

// index.js
// ye react me main.jsx file ki tarah hoti he isme app registered hota he

// app.js
// ye file ka phela component hota he aur isi me saare components banate he aur ye index.js me render hota he

// eslintrc.js
// ye ecma script ke liye hota he agar chate he ki ecma script ka koi specific version use ho ya jese koi variable jinko use nahi kiya uske liye error dikhana he ya koi console he uske liye error dikhana he
// to isme saari ecma script ki configuration hoti he 


// ios and android folder

// ios folder ye ios build ko compile karne me aur build ko banane me responsible hota he

// android folder ye android build ko compile karne me aur build ko banane me responsible hota he
// ye basically javascript ke code ko android me convert karne me madad karta he


// difference between package.json and package-lock.json
// is dono me ye difference hota package.json isme jo bhi project banane me jo library install karte he vo isme aati he 
// aur package-lock.json isme jo library he unki bhi dependency library ati he

// node_modules
// isme pure app me jitni bhi libraries he vo sab isme hoti he






// Gemfile
// ye ruby ke liye bani hoti he 
// aur jo ruby hoti he ye jab bhi debug karte he to ye kaam ati he
// to jo bhi ruby ko dependency dena chate ho ya ruby me khuch change karna ho to isme karte he


// .watchmanconfiq
// ye file check karti he ki kuch app me change hua ye bas check karne ke kaam ati he

// prettierrc.js
// ye file app ki formating ke liye hoti he
// jese kitne spacecs dene he single Quote rakhna he ya nahi rakhna etc

// .flowconfig
// ye file basically isliye hoti he jab app chalega to phele konsi file chalegi aur konsi baad me chalegi vo sab is file me hota he aur isme change bhi kar sakte he


// .bundle
// jab bhi ios me ya android me bundling karte he to ye chalti he


// __tests__
// isme kya hota he ye file test karne ke kaam ati he





// start working project

// isme bohot saari cheeze react js ki tarah hoti bas kuch chezien different hoti he jese css aur tags etc aur isme tags ko components bolte he jo ki import karne padte he react-native liberay se aur isme saare component upperletter se shuru hote he
// aur isme onclick events nahi hote isme onpress events hote he

// aur check karne ke liye React-Native folder ko dekhe

// View component
// view component jo hota he vo parent div ki tarah hota he aur jab jsx likhte he to view se hi wrap karte he aur isko khali button pe bhi wrap kar sakte he
// View doesn't support onPress in React Native.
// To make a non-button component respond to taps, you must wrap it in a TouchableOpacity, TouchableWithoutFeedback, or Pressable.


// Text component 
// ye isliye hota he jese khuch text likhna ho to iska use karte he
// aur isme onPress event use kar sakte he

// Button component
// isme button ko ese likhte he
// <Button title='press here'></Button>

// isme console.log nahi hota isme debugger hota he jisme error dekhte he
// aur isme ek method hota he console.warn() ye console.log ki tarah kaam karta bas ye screen pe dikhata he

// aur isme hooks same hote he react ki tarah isme bhi hooks ko react library se import karna padta he

// aur isme props bhi same hi hote he


// css in react-native

// isme bhi 3 tarike se css karte he inline internal aur external
// jab external file banate he to .js se banate he for exp index.js


// is tarike internal styling karte he aur external bhi same hoti he bas usko export karna padta he aur isme px nahi hota

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
textstyle:{
fontSize:20,
backgroundColor:"black",
}
});


// aur is tarike se isko use karte he
{/* <Text style={styles.textstyle} >Hello World</Text> */}

// aur agar ek se zada class use karna hoto ese karenge
<Text style={[styles.textstyle,styles.container,{fontSize:10}]} >Hello World</Text>


// isme is tarike se inputs likhte he
// <TextInput
// value={name}
// style={styles.textInput}
// placeholder='Enter Your name'
// />

// ye event bas text input me kaam karta he
// onChangeText={(v)=>{setname(v)}}

// ye password input ke liye hota he
// secureTextEntry={true}


// Form in React-Native

    // <View>
    //   <Text style={{ fontSize:30}} >Simple Form in React Native</Text>

    //   <TextInput
    //   style={styles.textInput}
    //   placeholder='Enter username'
    //   value={name}
    //   onChangeText={(v)=>{setname(v)}}
    //   />
    //   <TextInput
    //   style={styles.textInput}
    //   placeholder='Enter email'
    //   value={email}
    //   onChangeText={(v)=>{setemail(v)}}
    //   />
    //   <TextInput
    //   style={styles.textInput}
    //   placeholder='Enter password'
    //   value={password}
    //   secureTextEntry={true}
    //   onChangeText={(v)=>{setpassword(v)}}
    //   />
    //  <View style={{marginBottom:10}}>
    //   <Button title='Print Details' onPress={()=>{setdisplay(true)}}></Button>
    //  </View>
    //   <Button title='Clear Details' onPress={()=>{resetformdata()}}></Button>
    //   {
    //     display?
    //     <View>
    //       <Text style={{ fontSize:30}} >User name is {name}</Text>
    //       <Text style={{ fontSize:30}} >User password is {password}</Text>
    //       <Text style={{ fontSize:30}} >User email is {email}</Text>
    //     </View>
    //     :null
    //   }


    // </View>


// FlatList component 
// ye component map aur filter ki tarah iterablabe hota he aur ye bhi ek callback function leta he aur iska use isliye karte he kyuki jab scroll karte he to ye screen ke bahar ke elements ko hata deta he jisse phone hang nahi hota
// aur isme header footer bhi bana sakte he map me nahi bana sakte
// aur isme value ke liye item hi likh sakte he aur kuch nahi likh sakte
// aur isme alag se ScrollView ko import karne ki zarurat nahi padti lekin map me ScrollView lagana padta he
// ye he iska syntax

//  <FlatList 
//  data={users}
//  renderItem={({item})=><Text>{item.name}</Text>}
//  keyExtractor={(item)=>item.id} 
//  />
 

// SectionList
// ye bhi flatlist ki tarah hoti bas ye nested array me bhi kaam ati he aur flatlist nahi aati aur isme jab nested array denge to data name se hi denge

// <SectionList
//  sections={users}
// renderItem={({item})=><Text style={{fontSize:20}}>{item}</Text>}          // ye nested ke liye he
// renderSectionHeader={({section:{name}})=>(                                          // ye parent array ke liye he matlab aapko konsi property dikhana he array ke object ki header ke liye
//  <Text style={{fontSize:25,color:"red"}}>{name}</Text>
// )}
// />


// flex:1
// iska flex react ke flex se thoda alag hota he aur ye jispe bhi lagate he to ye us hisaab se height leta he je 2 component he un dono pe hi flex:1 ye class lagi he to dono hi half half space lenge

// aur jab bhi function ka class ko call kare to to uska first letter capital hona chahiye


// class component in react native

// iske andar ek Component name ki class ko inherit karna padta he to isko import karna padte he react library se aur fir render(){} iske function ke andar jsx likhte he agar Component class ko inherit nahi karenge to render() isko use nahi kar payenge
// aur class component ko function ke andar bhi call kar sakte he
// aur isme bas variable hi render ke andar banate he aur functions render ke upar banate he aur jab function ko call karenge to this keyword lagana padega
// aur isme hooks ka use nahi kar sakte
// aur ye hota he iska syntax

// import { Component } from "react";
// import { Text,View,TextInput,Button } from "react-native";
// import ChildClassComponent from "./childClassComponent";


// class Classcomponent extends Component{
//    constructor(){
//       super()
//      this.state={
//       name:"rehman",
//       age:24
//      }
//    }
// updatename(){
//  this.setState({name:"Muneeb ur rehman"})  
// }   

// render(){
// return(
//  <View>
//     <Text style={{fontSize:30,color:'red'}}>Parent Class component</Text>
//     <Text style={{fontSize:20}}>{this.state.name} This is state value in class component</Text>
//     <TextInput placeholder="Enter your name"/>
//     <Button title="Press ME" onPress={()=>{this.updatename()}}/>
//     <ChildClassComponent name={this.state}/>
//  </View>   
// )

// }    

// }


// export default Classcomponent;



// is tarike se state bana sakte he class ke andar aur iske liye super() isko call karna hoga taki ye state Component class ki he
  //  constructor(){
  //     super()
  //    this.state={
  //     name:"rehman",
  //     age:24
  //    }
  //  }

// and this is how we change state in class component
// aur isme function ka kuch bhi rakh sakte he aur isme jo setState he ye hi state ki value ko change karta he

// updatename(){
//  this.setState({name:"Muneeb ur rehman"})  
// }  



// lifecycle method in react native
// ye important hota he isko samajhna
// isme 3 phase hote he Mounting ,Update,Unmounting

// Mounting 
// jab component render hota he usi ko Mounting bolte he

// Update
// jab component me khuch change kar rahe he usi ko Update bolte he

// Unmounting
// jab component hata dete he ui se to usko Unmounting bolte he jese ek page se dusre page pe chale gay to phela page Unmount hogaya

// aur har component ke alag alag lifecycle methods hote he

// aur saare lifecycle method ka ek hi hook hota he useEffect()


// show hide toggle component

// const ToggeComponet = () => {
//  const [show,setshow]=useState(true)
//     return (
//     <View>
//       <Text style={{fontSize:30}}>Show/hide Component</Text>
//       <Button title='toggle Component' onPress={()=>{setshow(!show)}}/>
//       {
//        show==true?<User/>:null
//       }
//     </View>
//   )
// }


// const User=()=>{
//  return <View>
//    <Text style={{fontSize:30,color:'green'}}>User Component</Text> 
//   </View>  
// }



// TouchableOpacity
// ye Buutton component jese hi hoti bas isme styling bhi kar sakte he button me nahi kar sakte aur isme single closing tag dono hote he


// Activity Indicator (loader)
// is component ka use karke loader dikha sakte he aur ye single tag hota he aur size property ke size adjust kar sakte he aur color property se color change kar sakte he

// Modal in react native
// ye pop up ke liye hota he aur bydefault puri height cover kar leta he to jo text likha hota he to hide hojata he to hide se hatane ke liye transparent={true} karna padta he

// <Modal transparent={true}>
//  <View>
//   <View>
//      <Text>Hello Code step by step<Text/>
//   <View/>
//  <View/>
// <Modal/>

// pressable Event
// aur ye tab use karte he jab button pe multiple events lagana ho
// isme 4 event hote he onpress , onpressin , onpressout ,onpresslong


// Apply NativeWind in react native

// To convert this React Native AppContext file to use NativeWind, you will:
//  Replace StyleSheet.create styles with Tailwind utility classes
//  Use className prop instead of style


// Install and configure NativeWind

// 1 Install NativeWind:

// npm install nativewind
// npm install metro-react-native-babel-preset

// 2 Update babel.config.js:

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: ['nativewind/babel'],
// };


// 3 Create tailwind.config.js:

// npx tailwindcss init


// tailwind.config.js

// module.exports = {
//   content: [
//     "./App.{js,jsx,ts,tsx}",
//     "./AllComponents/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// Updated AppContext.js Using NativeWind:

// import React, { createContext, useState } from "react";
// import { View, Text, Image, TextInput, TouchableOpacity, CheckBox } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// // Images (make sure these exist in assets folder and paths are correct)
// const LogoutImage = require("../assets/Walletimages/Logoutimage.png");
// const VectorIcon = require("../assets/Walletimages/Vector.png");
// const FaceIcon = require("../assets/Walletimages/Group77.png");
// const PasscodeIcon = require("../assets/Walletimages/Group78.png");
// const UAEPassLogo = require("../assets/Loginimages/Group40.png");
// const LineDivider = require("../assets/Loginimages/blackline.jpg");

// const AppContext = createContext();

// const AppProvider = (props) => {
//   const [islogin, setislogin] = useState(false);
//   const [isquicklogin, setisquicklogin] = useState(false);
//   const [changefooterclr, setchangefooterclr] = useState(1);
//   const navigation = useNavigation();

//   const Cards = () => (
//     <View>
//       {!isquicklogin && (
//         <TouchableOpacity
//           className="h-11 bg-yellow-700 justify-center items-center rounded-md mx-[8%] mt-[80%]"
//           onPress={() => navigation.navigate("Login")}
//         >
//           <Text className="text-white font-bold text-xs">Log in</Text>
//         </TouchableOpacity>
//       )}

//       {!isquicklogin && (
//         <TouchableOpacity onPress={() => setisquicklogin(true)}>
//           <Image source={LogoutImage} className="h-11 w-[85%] mx-[8%] mt-2" resizeMode="contain" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );

// 


// and for type script we have to add this file 
// nativewind-env.d.ts and my-app.d.ts
// and add this line into bhot this file
// <reference types="nativewind/types"/>


// this is for phone connect
// adb kill-server
// adb start-server
// adb devices

// Status Bar in React native
// ye jo phone me top pe icons dikhte he usi ko status bar bolte he
// iska use karke styling change kar sakte he status bar ki
// sabse phele isko react native se import karna padta he fir isko View ke andar likhna hota he

// <View>
// <StatusBar
// backgroundColor="orange"
// barStyle="dark-content"   isse icons ka color black ho jata he
// hidden={true}             isse pura status bar hide ho jata he
//  />
// </View> 

// platform in React Native
// iska matlab aap phone pe konsa operating system use kar rahe ho android ya ios ya windows
// iska use isliye karte he taki android pe kuch aur dikhana he aur ios pe kuch dikhana he
// aur ye bhi react native se import hoga
// aur isko ese use karte he Platform.OS to ye platform ka name batata he

// npm i react-native-webview 
// ye karne se koisi bhi web phone pe dekh sakte he


// Navigation in React-Native

// ye browerserrouter ki tarah hoti he 
// aur isme 3 tarike ki navigtion hoti he stack, drawer, tab

// require packages for react navigation 
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context


// stack navigation
// jab bhi ek page se dusre page pe jana ho to stack navigation ka use karenge
// npm install @react-navigation/native-stack

// how to use this

// import { NavigationContainer } from '@react-navigation/native'; 
// import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
// const Stack = createNativeStackNavigator();
// <NavigationContainer>
//    <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>      // ye karne se header show nahi hote
//     <Stack.Screen name="HomePage" component={HomePage} />
//     <Stack.Screen name="Wallet" component={Wallet} />
//     <Stack.Screen name="userprofile" component={UserProfileScreen} />
//     <Stack.Screen name="Loginscreen" component={LoginScreen} />
//    </Stack.Navigator>
// </NavigationContainer>

//  style in stact navigation
//  <Stack.Screen name="HomePage" component={HomePage} options={{title:"Home",headerStyle:{backgroundColor:'blue'},headerTitleStyle:{fontSize:20},headerTintColor:"orange"}} />

//  isse sare stacks ka color change ho jata he
//  <Stack.Navigator initialRouteName="HomePage" screenOptions={{title:"Home",headerStyle:{backgroundColor:'blue'},headerTitleStyle:{fontSize:20},headerTintColor:"orange"}}>

// button and component in stack navigation
// isme bas left aur right side pe button and component add kar sakte he
// <Stack.Screen name="HomePage" component={HomePage} options={{headerTitle:()=><Text>home</Text>}} />      // left side
// <Stack.Screen name="HomePage" component={HomePage} options={{headerRight:()=><Text>home</Text>}} />      // right side

// share data from one screen to onether
// props.navigate.navigate("Home",{name:"muneeb",age:24})    this is where we are sharing data
// props.route.params                                        this is where we getting data


// drawer navigation
// jab bhi kuch slide karte he jese menu pe click karte he to ek slider ajata ahe usi ko drawer navigation bolte he

// tab navigation
// ye kya karta he ki jab button pe click karne par ya slide karne par dusre component pe jay to usi ko tab navigation bolte he

// for bottom tab navigation

// npm install @react-navigation/bottom-tabs

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab =createBottomTabNavigator();     // isko App ke bahar hi likhenge
// function App() {
// return (
//         <NavigationContainer>
//         <Tab.Navigator screenOptions={{ headerShown: false}}>
//            <Tab.Screen name="Login" component={Login} />
//           <Tab.Screen name="Signup" component={Signup}/>
//         </Tab.Navigator>
//       </NavigationContainer>
//     )
//   }
// function Login(){

//   return(
//     <View>
//       <Text>Login</Text>
//     </View>
//   )
// }


// for top tab navigation

// npm install @react-navigation/material-top-tabs react-native-tab-view@3.5.1   
// npm install react-native-pager-view              

// import { NavigationContainer } from '@react-navigation/native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'


// const Tab =createMaterialTopTabNavigator();     // isko App ke bahar hi likhenge

// function App() {

// return (
//         <NavigationContainer>
//         <Tab.Navigator screenOptions={{ headerShown: false }}>
//            <Tab.Screen name="Login" component={Login} />
//           <Tab.Screen name="Signup" component={Signup}/>
//         </Tab.Navigator>
//       </NavigationContainer>
//     )
//   }

// aur ye command chalane ke baad kuch error ata he to ye use karenge npm start --clean-cache


// redirect form one screen to onether screen 
// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();
// navigation.navigate('Wallet')



// async storage in react native
// jab bhi kuch app me store karna hoto iska use karte he aur ye library hoti he to isko install karna hota he aur ye local storage ki tarah hota he  
// isme bhi same methods hote he setItem() , getItem() , remove() bas localstorage ki jagah AsyncStorage likhte he aur time leta he aane me to isko async function me likhte he
// npm install @react-native-async-storage/async-storage
// aur ye hotahe he iska syntax  
// import AsyncStorage from '@react-native-async-storage/async-storage'
// const setdata =async()=>{
// const name=await AsyncStorage.setItem("user","muneeb")
// }

// Element Inspector in react native
// emulator pe ctrl+m press karne se ek popup agayga uspe show Element inspector pe click karenge to open hojayga


// const input=useref() 
// input.current.focus();   // isse focus ajata he jispe bhi useref laga he

// url='http://10.0.2.2:3000/users?q=${text}'
// isse jo bhi value match karegi us objects ko array ke andar return karega


// this is for android installation
// build apk
// cd android
// ./gradlew assembleRelease


// is command se console log terminal pe khul jata he
// npx react-native log-android


// is tarike se headers likhte he
// axios.get('https://b14273574154.ngrok-free.app/api/sunduk-service/custom-login', {
//  withCredentials: true,
//  headers:{
// 'Content-Type': 'application/json',
// },
// })


//  change icon for android 
// "https://youtu.be/mUFnr9uIlHs"

//  change icon for ios
// "https://youtu.be/V_QBKYROB6w"









