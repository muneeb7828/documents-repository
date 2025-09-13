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

// In React Native, the disabled prop on touchable components like TouchableOpacity, Pressable, or Button tells React Native:If disabled={true} →The button won’t respond to touch presses.onPress won’t fire.

// Text component 
// ye isliye hota he jese khuch text likhna ho to iska use karte he
// aur isme onPress event use kar sakte he

//  <Text
//    style={{
//      fontSize: 12,
//      fontWeight: '600',
//      color: focused ? '#C7A348' : 'gray',
//      marginTop: 3,
//      textAlign: 'center',
//      includeFontPadding: false,
//      width: '100%',
//    }}
//    numberOfLines={1}            // prevents breaking
//    ellipsizeMode="clip"       // ensures full word shows, no "..."
//  ></Text>

// Inputfield component
// <TextInput
  //  style={styles.input}
  //  value={potName}
  //  onChangeText={setPotName}
  //  placeholder="Enter your pot name"
  //  placeholderTextColor="rgba(193, 153, 69, 0.6)"
  //  disableFullscreenUI={true}        // for hide text bar
  //  autoCorrect={false}               // no auto-correction
  //  autoCapitalize="none"             // don’t auto capitalize
  //  keyboardType="visible-password"   // disables prediction bar
  //  importantForAutofill="no"         // stop autofill
  //  autoComplete="off" 
  // contextMenuHidden={true}  
  // secureTextEntry={true}             // for dots
// />



// Button component
// isme button ko ese likhte he
// <Button title='press here'></Button>

// SafeAreaView component
// ye View ki tarah hota he bas ye top se aur bottom se cheezon ko hata deta
// and SafeAreaProvider without this SafeAreaView would not know the safe area insets.

// SafeAreaProvider component
// iOS (aur kuch Android phones) mein screen ke kuch hisse hote hain jaha pe tumhara app ka content nahi aana chahiye — jaise:Notch (iPhone X se shuru) , Rounded Corners ,Dynamic Island (iPhone 14 Pro+) ,Status Bar / Navigation gestures area (Android phones mein)
// if we dont use SafeAreaProvider
// React Native ko pata hi nahi chalega ki safe area kaunsa hai.Tumhara header, tab bar, ya koi bhi content status bar ke peeche chala jayega.iPhone notch ya Dynamic Island ke peeche content cut ho sakta hai

// ScrollView isko lagake kisi bhi component ko scrollable bana sakte he
// <ScrollView
//   ref={scrollViewRef}
//   horizontal                // isse horizontally scroll kar sakte he
//   pagingEnabled             // iska use karke slidable ban sakte he
//   showsHorizontalScrollIndicator={false}
//   onMomentumScrollEnd={onScrollEnd}    // jab scroll end hoga to ye chal jayga aur isme argument nahi pass karne ki zarurat nahi padti apne aap event pohoch jata he
// ></ScrollView>

// KeyboardAvoidingView
// KeyboardAvoidingView ka kaam hai screen ko upar shift karna ya resize karna jab keyboard dikhta hai.
// behavior – Ye decide karta hai ki view kaise adjust hoga aur ye iski values "padding" ye iphone ke liye he aur ye bottom pe padding add karke content upar karega.Aur"height" ye android ke liye he aur ye view ki height chhoti kar dega aur undefined karte he to systgem handle karta he

// React Native me jab tum console.log(pot.image) karte ho, to wo number dikhata hai (jaise 2, 3, 4), lekin wo actually local image ka internal reference hota hai. Ye React Native ka normal behavior hai.

// isme console.log nahi hota isme debugger hota he jisme error dekhte he
// aur isme ek method hota he console.warn() ye console.log ki tarah kaam karta bas ye screen pe dikhata he
// npx react-native log-android  isse logs terminal pe dekh sakte he

// And  for debugging check we should use reactotron instead of flipper
// and we also use santry for debugging in react native

// aur isme hooks same hote he react ki tarah isme bhi hooks ko react library se import karna padta he

// aur isme props bhi same hi hote he

// onpress event
// agar onpress parent pe laga he aur child pressable he to agar child pe onpress nahi bhi laga to aur uspe click karenge parent wala trigger nahi hoga aur child component View he to parent trigger hojayga

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
// ye Button component jese hi hoti bas isme styling bhi kar sakte he button me nahi kar sakte aur isme single closing tag dono hote he


// Activity Indicator (loader)
// is component ka use karke loader dikha sakte he aur ye single tag hota he aur size property se size adjust kar sakte he aur color property se color change kar sakte he

// Modal in react native
// ye pop up ke liye hota he aur bydefault puri height cover kar leta he to jo text likha hota he to hide hojata he to hide se hatane ke liye isko transparent={true} karna padta he
// and if we wrap Modal inside ScrollView so this makes screen issues 

// <Modal transparent={true}>
//  <View>
//   <View>
//      <Text>Hello Code step by step<Text/>
//   <View/>
//  <View/>
// <Modal/>

// pressable component
// aur ye tab use karte he jab button pe multiple events lagana ho
// isme 4 event hote he onpress , onpressin , onpressout ,onpresslong
// and we should use Pressable component instead of View component


// GestureHandlerRootView component
// GestureHandlerRootView is just like a normal <View>, but it is required so that swipe, drag, and touch gestures work properly in React Native.
// If you don’t wrap your app (or screen) inside it → gestures won’t work and you get that red error.
// So basically:
// Use <View> → for normal UI.
// Use <GestureHandlerRootView> → when you need gesture support (drag, swipe, bottom sheet, etc.).
// Usually, you wrap your whole app once in App.js inside GestureHandlerRootView and you’re done.
// npm install react-native-gesture-handler
// Note: e.stopPropagation() only works if you’re using react-native-gesture-handler components (Pressable, TouchableOpacity, etc. from react-native-gesture-handler).
// so first we need to import presaable and TouchableOpacity from react-native-gesture-handler and then wrap code with this component and then we can use e.stopPropagation() 
// so Pressable component of react-native-gesture-handler has same properties like react native Pressable component 



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



// and for type script we have to add this file 
// nativewind-env.d.ts and my-app.d.ts
// and add this line into boht this file
// <reference types="nativewind/types"/>


// For Animation we use React Native Reanimated library



// this is for phone connect
// usb connect and in phone developer is on and
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
// barStyle="dark-content"  // isse icons ka color black ho jata he
// hidden={true}            // isse pura status bar hide ho jata he
//  />
// </View> 

// this is how we add status bar globally
// return (
//   <>
//      <StatusBar
//       barStyle="dark-content"   // options: "light-content", "dark-content"
//       backgroundColor="#fff" // background color of status bar (Android only)
//     />
//   <PotsStackNav.Navigator screenOptions={{ headerShown: false }}>
//     <PotsStackNav.Screen name="PotsMain" component={Pot} />
//     <PotsStackNav.Screen name="PotsDetails" component={PotsDetails} />
//     <PotsStackNav.Screen name="Addpot" component={Addpot} />
//   </PotsStackNav.Navigator>
//   </>
// );

// and this is for per screen
// import { StatusBar } from "react-native";
// 
// function Addpot() {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
//       {/* Screen UI */}
//     </>
//   );
// }

// iOS doesn’t allow changing the status bar background color directly (it’s always transparent).
// On iOS, the background comes from the parent screen/view’s background color behind the status bar.
// If you want iOS to also appear white, you should set your screen/container background to white at the top.
// like this
//<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
//      <StatusBar
//       barStyle="dark-content"   // options: "light-content", "dark-content"
//       backgroundColor="#fff" // background color of status bar (Android only)
//     />
//   <PotsStackNav.Navigator screenOptions={{ headerShown: false }}>
//     <PotsStackNav.Screen name="PotsMain" component={Pot} />
//     <PotsStackNav.Screen name="PotsDetails" component={PotsDetails} />
//     <PotsStackNav.Screen name="Addpot" component={Addpot} />
//   </PotsStackNav.Navigator>
//</SafeAreaView>


// platform in React Native
// iska matlab aap phone pe konsa operating system use kar rahe ho android ya ios ya windows
// iska use isliye karte he taki android pe kuch aur dikhana he aur ios pe kuch dikhana he
// aur ye bhi react native se import hoga
// aur isko ese use karte he Platform.OS to ye platform ka name batata he

// npm i react-native-webview 
// ye karne se koisi bhi web app me pe dekh sakte he
// jese agar user ko ek offer page ya terms & conditions page website se dikhana ho → wo page WebView me load kar dete hain.
// and by default, React Native app cannot directly “see” what the user is doing inside a WebView (like button clicks, form fills, payments, etc.).


// shadow properties
// iOS Shadow
// shadowColor: '#000',
// shadowOffset: { width: 0, height: 2 },
// shadowOpacity: 0.05,
// shadowRadius: 3,

// Android Shadow
// elevation: 3,


// Alert in React Native
// Alert.alert("Pot Created", "Your saving pot has been created successfully!", [
//   { text: "OK", onPress: () => navigation.navigate("MainTabs") }
// ]);


// useIsFocused()
// useIsFocused() is a React Navigation hook.
// When to use it?
// Refreshing data when user comes back to the screen.
// Starting/stopping animations depending on focus.
// Resetting form fields when screen becomes active.
// Pausing API calls or timers when leaving the screen.
// When I say active and visible, I mean the screen is the one currently on top in the navigation stack (the one the user can actually see).
// How to use 
// import { useIsFocused } from '@react-navigation/native';
// const isFocused = useIsFocused();


// responsive screen in react native:-
// const { width, height } = Dimensions.get("window");
// const scale = (size) => (width / 375) * size;
// const verticalScale = (size) => (height / 812) * size;
// const moderateScale = (size, factor = 0.5) =>
//   size + (scale(size) - size) * factor;
// headerBar: {
//   width: "100%",
//   paddingVertical: verticalScale(22),
//   paddingHorizontal: moderateScale(15),
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   marginBottom: verticalScale(15),
// },


// width -scale(40)
// scale(40) is not React Native built-in. It usually comes from a helper library like react-native-size-matters or a custom scaling utility.
// What scale(40) means
// The idea is: different devices have different screen widths/heights & pixel densities.
// If you hardcode 40, it might look small on a tablet but big on a small phone.
// scale(40) takes 40 as a design size and converts/scales it so it looks proportional on any screen.

// How scale() is defined

// import { Dimensions } from "react-native";
// const { width } = Dimensions.get("window");

// This is the "guideline width" your designs were made for
// const guidelineBaseWidth = 375; // iPhone X width

// export function scale(size) {
//   return (width / guidelineBaseWidth) * size;
// }
// to jab scale(40) karte he to ye function call hojata he

// scale(20) → increases/decreases based on screen width.
// verticalScale(10) → scales based on screen height.
// moderateScale(14) → balanced scaling, not too big/small.


// agar hame dekhna he ki ye AddMoneyModal file kaha use ho rahi folder me to ye command likhenge
// Get-ChildItem -Recurse | Select-String "AddMoneyModal"


// why use usememo hook

// const filteredTx = useMemo(() => {
//   return transactions.filter((tx) => tx?.fromWalletId === pot.id || tx?.toWalletId === pot.id);
// }, [transactions, pot.id]);

// What it does: Runs the filter only when transactions or pot.id change.
// Purpose: Avoids recalculating filteredTx on every render (which can be costly if transactions is large).
// if we dont use this usememo hook AND USE useeffect hook so what will happen we will need an extra usestate and a re-render.
// useMemo → for calculations inside render (lightweight, no extra state, no side-effect).
// useEffect → for side-effects outside render (API calls, subscriptions, DOM changes, updating state). 
// Need a value? → useMemo
// Need to do something? → useEffect

// why use useCallback hook

// const filterTx = useCallback(() => {
//   return transactions.filter(
//     (tx) => tx?.fromWalletId === pot.id || tx?.toWalletId === pot.id
//   );
// }, [transactions, pot.id]);

// What it does: Returns a memoized function.
// The function filterTx will be referentially stable (same identity) until transactions or pot.id change.
// It does not return the value directly — it returns a function you can call later.



// send data to contextapi file

// How React Navigation works by default
// Normally, you can only navigate like this:

// function SomeScreen({ navigation }) {
//   return (
//     <Button
//       title="Go"
//       onPress={() => navigation.navigate('Details')}
//     />
//   );
// }

//but this only works inside a screen that React Navigation has already provided with a navigation prop.
// If you're in:A Redux action and Context API function and A utility file and network request callback you don’t have direct access to navigation. That’s where RootNavigation comes in.

// This is how RootNavigation file made

// import { createNavigationContainerRef } from '@react-navigation/native';

// export const navigationRef = createNavigationContainerRef();

// export function navigate(name, params) {
//   if (navigationRef.isReady()) {     // Ensures NavigationContainer has mounted and The isReady() check prevents crashes if you call navigation before the app has finished mounting the NavigationContainer.
//     navigationRef.navigate(name, params);
//   }
// }

// createNavigationContainerRef() creates a reference to your NavigationContainer.


// App.js
// import { NavigationContainer } from '@react-navigation/native';
// import { navigationRef } from './RootNavigation';

// export default function App() {
//   return (
//     <NavigationContainer ref={navigationRef}>
//       {/* your stacks/tabs */}
//     </NavigationContainer>
//   );
// }
// Now navigationRef points to your navigator globally.

// How it works
// import { navigationRef } from './RootNavigation';
// export function goToDetails(data) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate('TransactionDetailsScreen', { data });
//   } else {
//     console.log('Navigation is not ready yet.');
//   }
// }




