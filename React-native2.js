
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
  //   <Stack.Screen name="HomePage" component={HomePage} />
  //   <Stack.Screen name="Wallet" component={Wallet} />
  //   <Stack.Screen name="userprofile" component={UserProfileScreen} />
  //   <Stack.Screen name="Loginscreen" component={LoginScreen} />
  //  </Stack.Navigator>
// </NavigationContainer>

//  style in stact navigation
//  <Stack.Screen name="HomePage" component={HomePage} options={{title:"Home",headerStyle:{backgroundColor:'blue'},headerTitleStyle:{fontSize:20},headerTintColor:"orange"}} />

//  isse sare stacks ka color change ho jata he
//  <Stack.Navigator initialRouteName="HomePage" screenOptions={{title:"Home",headerStyle:{backgroundColor:'blue'},headerTitleStyle:{fontSize:20},headerTintColor:"orange"}}>

// button and component in stack navigation
// isme bas left aur right side pe button and component add kar sakte he
{/* <Stack.Screen name="HomePage" component={HomePage} options={{headerTitle:()=><Text>home</Text>}} />      // left side */}
// <Stack.Screen name="HomePage" component={HomePage} options={{headerRight:()=><Text>home</Text>}} />      // right side

// stack.navigator tag ke uper agar kisi bhi component ko likhenge to vo dynamic ho jaygi

// share data from one screen to another
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
//            <Tab.Screen name="Signup" component={Signup}/>
//            <Tab.Screen name="FormPost" component={FormPost}
//            options={{
//            tabBarStyle: { display: 'none' }, // This hides the tab from the top bar 
//            tabBarButton: () => null,         // This disables the tab button
//            }} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     )
//   }


// Move FormPost to a Stack Navigator (not the Top Tabs)
// Goal:Remove FormPost from top tabs
// Keep FormPost available via navigation.navigate('FormPost')
// 1. Wrap your app with both Stack and Tab Navigators
// const Tab = createMaterialTopTabNavigator();
// const Stack = createNativeStackNavigator();

// 2. Create Tab Navigator without FormPost
// function TabScreens() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Login" component={Login} />
//       <Tab.Screen name="Signup" component={Signup} />
//     </Tab.Navigator>
//   );
// }

// 3. Add FormPost to Stack Navigator Only
// export default function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Tabs">
//         <Stack.Screen
//           name="Tabs"
//           component={TabScreens}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="FormPost" component={FormPost} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
//  Now FormPost is:
// Not visible in Top Tab Bar	No Tab labeled "FormPost"
// Still accessible via navigation.navigate("FormPost")	Not part of tab navigation

// aur ye command chalane ke baad kuch error ata he to ye use karenge npm start --clean-cache




// redirect form one screen to onether screen 
// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();
// navigation.navigate('Wallet')

// navigation.reset({
//   index: 0,
//   routes: [{ name: 'Login' }],
// });
// navigation.reset():
// This clears all previous routes (screens) from the navigation history (stack), so the user cannot go back to any previous screen using the back button.

// index: 0:
// This sets the active screen index (0-based) — so Login will be the only screen, and it will be the active one.

// routes: [{ name: 'Login' }]:
// This defines a new route stack — here, you're only adding the Login screen.



// async storage in react native
// jab bhi kuch app me store karna hoto iska use karte he aur ye library hoti he to isko install karna hota he aur ye local storage ki tarah hota he  
// isme bhi same methods hote he setItem() , getItem() , remove() bas localstorage ki jagah AsyncStorage likhte he aur time leta he aane me to isko async function me likhte he
// npm install @react-native-async-storage/async-storage
// npx react-native link @react-native-async-storage/async-storage
// aur ye hotahe he iska syntax  
// import AsyncStorage from '@react-native-async-storage/async-storage'
// const setdata =async()=>{
// const name=await AsyncStorage.setItem("user","muneeb")
// }
// const access_token=await AsyncStorage.getItem("access_token")



// Element Inspector in react native
// emulator pe ctrl+m press karne se aur metro pe j karne se ek popup agayga uspe show Element inspector pe click karenge to open hojayga


// const input=useref() 
// input.current.focus();   // isse focus ajata he jispe bhi useref laga he

// url='http://10.0.2.2:3000/users?q=${text}'
// isse jo bhi value match karegi us objects ko array ke andar return karega


// this is for android app installation
// build apk
// cd android
// ./gradlew assembleRelease
// au iske baad zip file me convert karke dena hota he


// is command se console log terminal pe khul jata he
// npx react-native log-android


// is tarike se headers likhte he
// axios.get('https://b14273574154.ngrok-free.app/api/sunduk-service/custom-login', {
//  withCredentials: true,    // ye cookie ke liye hota he agar cookie hoti toye chal jata he
//  headers:{
// 'Content-Type': 'application/json',
//  Cookie: `JSESSIONID=${jsessionid}`,    // is tarike sessionid send kar sakte he
// },
// })


// npm install react-native-inappbrowser-reborn
// Use react-native-inappbrowser-reborn for login
// This keeps the login flow within the app and maintains the session
// ye app ke andar hi browser ko khol deta he jisse cookies lene me problem nahi hoti aur secure bhi ho jata he


//  change icon for android 
// "https://youtu.be/mUFnr9uIlHs"

//  change icon for ios
// "https://youtu.be/V_QBKYROB6w"


// AndroidManifest.xml
// isme app ki conigurations hoti he



// hide keyboard from phone
// import { Keyboard } from 'react-native';
// Keyboard.dismiss()
// Dismiss Keyboard When Tapping Outside Input
// Wrap your screen in TouchableWithoutFeedback.So whenever user click outside the textinput keyboard will remove
// <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//   <View style={{ flex: 1 }}>
//    {/* your form and scrollview here */}
//   </View>
// </TouchableWithoutFeedback>


// jwt in react native
// const response = await fetch('http://192.168.29.52:3000/protected', {
//    method: 'GET',
//    headers: {
//      'Content-Type': 'application/json',
//      'Authorization': Bearer `${token}`,
//    },
//  });

// aur session authentication bas ek server (browser) pe hi chalta he aur jwt bohot saare servers par chal jata he 
// aur ye ham isliye use karte he taki hame user ki bare me pata chale aur user ki permission mile


// How UPI works.
// https://youtu.be/iI2NaN_QVTI?si=JBmCkjqCaZROab5f


// How google pay and android pay works 
// https://youtu.be/JQ_wXA9JA1g?si=TXG5kKHF_U8mj6FO


// how payment flow works detail explanations
// https://chatgpt.com/share/68958638-567c-800f-bf4d-7201d6692454


// path me param ese dete he
// params: {amount:amount,fromCurrency:USD,toCurrency:INR,}


// google auth
// session authentication
// JWT (JSON WEB TOKEN)
// network call in react native
// wallet








