
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
// <Stack.Screen name="HomePage" component={HomePage} options={{headerTitle:()=><Text>home</Text>}} />      // left side 
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
      //   <NavigationContainer>
      //   <Tab.Navigator screenOptions={{ headerShown: false,tabBarHideOnKeyboard:true}}>  // ye karne se keyboard ane baad bottom tab navigaion uper atahe to isse hat jayga
      //      <Tab.Screen name="Login" component={Login} />
      //     <Tab.Screen name="Signup" component={Signup}/>
      //   </Tab.Navigator>
      // </NavigationContainer>
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

// agar ham chate he ki tab navigation visible rahe aur single tab me multible screens dekh sake to iska use karenge
// function PotsStack() {
//   return (
//     <PotsStackNav.Navigator screenOptions={{ headerShown: false }}>
//       <PotsStackNav.Screen name="PotsMain" component={Pot} />
//       <PotsStackNav.Screen name="PotsDetails" component={PotsDetails} />
//       <PotsStackNav.Screen name="Addpot" component={Addpot} />
//     </PotsStackNav.Navigator>
//   );
// }
// <Tab.Screen name="Home" component={Home} />
// <Tab.Screen name="Analytics" component={Home} />
// <Tab.Screen name="Pots" component={PotsStack} />
// <Tab.Screen name="Payment" component={Home} />



// aur ye command chalane ke baad kuch error ata he to ye use karenge npm start --clean-cache

// this is for icon in react navigation 
// npm install react-native-vector-icons


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

// ()=>navigation.navigate("Pots", { screen: "Addpot",params: { from: "HomeScreen" } })
// if we want to Navigate screen to the screen where lots of screen are present in a different funtion

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

// some keyboard events
// useEffect(() => {
//   const showSub = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
//   const hideSub = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));
//   return () => {
//     showSub.remove();
//     hideSub.remove();
//   };


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

// axios.create
// const api = axios.create({
//   baseURL: 'https://e9340e07eb2d.ngrok-free.app/api/sunduk-service',
//   timeout: 1000,
// });
// isse axios create karke variable me store kar sakte he jis kya hogaki baad me bas api.get('/users') ye likhna hoga pura url nahi
// aur timeout is property ka use karke axios ki time set kar sakte he agar is time ke hit karengeto nahi chalegi



// path me param ese dete he
// params: {amount:amount,fromCurrency:USD,toCurrency:INR,}


// Cookie in react-native:-

// npm install @react-native-cookies/cookies

// import Cookies from '@react-native-cookies/cookies';

// const saveUserCookies = async (jsessionid, email, fullName) => {

// Ye domain wo hota hai jiske liye cookies store karni hain.
// Agar aapka backend URL hai https://502ea5ad5cdc.ngrok-free.app/api/..., to aapko sirf host (subdomain + domain) likhna hota hai.
// Cookies browser / WebView / network requests me tabhi automatically attach hoti hain jab domain match kare.
// aur jaha par bhi ye api hit hogi to apne aap cookie save ho jaygi

//  const domain = '502ea5ad5cdc.ngrok-free.app'; // apne backend ka domain

//     // JSESSIONID cookie
//     await Cookies.set(domain, {
//       name: 'JSESSIONID',
//       value: jsessionid,
//       path: '/',
//       secure: true,
//       sameSite: 'Lax',
//     });

//     // Email cookie
//     await Cookies.set(domain, {
//       name: 'email',
//       value: encodeURIComponent(email),
//       path: '/',
//       secure: true,
//       sameSite: 'Lax',
//     });

//     // Full name cookie
//     await Cookies.set(domain, {
//       name: 'fullName',
//       value: encodeURIComponent(fullName),
//       path: '/',
//       secure: true,
//       sameSite: 'Lax',
//     });
//   };
// name → Cookie ka naam (JSESSIONID, email, fullName).
// value → Jo data store karna hai (yaha pe jsessionid variable ki value).
// path → / ka matlab hai ki ye cookie pure domain ke liye valid hai (sub-paths ke liye bhi).
// secure: true → Iska matlab ye cookie sirf HTTPS connection pe bheji jayegi (ngrok free app pe ye kaam karega kyunki wo https hota hai).

// sameSite: 'Lax' → Browser ko batata hai ki ye cookie same site requests ke saath bhejna safe hai (cross-site request me kab bhejna hai ye control karta hai).

// value: encodeURIComponent(email) -> Email aur full name me space, @, special characters hote hain.un characters ko safe format me convert karta hai.


// if (jsessionid && email && fullName) {
//   await saveUserCookies(jsessionid, email, fullName);
//   console.log("✅ Cookies saved successfully!");
// }


// React-native me is tarike cookie dekh sakte he isme browser me nahi dekh sakte
// const checkCookies = async () => {
//   const cookies = await Cookies.get('502ea5ad5cdc.ngrok-free.app');
//   console.log('🍪 Saved Cookies:', cookies);
// };


// Deep link 
// Deep link ek special URL hoti hai jo directly app ke specific screen/page ko open karti hai.

