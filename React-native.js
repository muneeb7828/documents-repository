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


// is path pe android studio ki cheeze install he
// C:\Users\Admin\AppData\Local\Android\Sdk

// aur jab bhi emulator banay to medium se hi banay aur android 12,Api level 31 se banay kyuki ye space kam leta he

// npx @react-native-community/cli init
// aur ye command chalene ke baad npm install bhi karna padta he fir uske baad npx react-native run-android ye command chalate he

// aur npx react-native run-android agar ye command chalane ke baad kuch error aay to ye command chalayenge
// adb kill-server, adb start-server

// isme jo tags hote he vo html ki tarah hote he lekin same nahi hote aur tags ko import karna padta he react native library se
// aur isme tags ko components bolte he






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
// view component hota he vo parent div ki tarah hota he aur jab jsx likhte he to view se hi wrap karte he aur isko khali button pe bhi wrap kar sakte he

// Text component 
// ye isliye hota he jese khuch text likhna ho to iska use karte he

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



















































