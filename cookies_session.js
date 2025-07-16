// cookies


// sabse phele ye library install karni padti he 
// react-cookie
// aur fir useCookies import karte he is library se
// aur ye hook 3 cheez return karta he 
// phela variable cookie ki name aur cookie ki value deta he object ke form me
// dura variable set karne ke liye hota he useState ki tarah aur jab isko set karte he to isme bohot saare argument dete he is tarike se  setCookie('user123', res.data[0].username, { path: '/', maxAge: 10 });
// aur jo teesra parameter hota he vo cookie ko remove karne ke liye hota he ye iska syntax removeCookie('user123')




// user123' – Cookie Name
// This is the name of the cookie.

// It identifies the cookie so you can retrieve or update it later.

// Example: You can get the cookie using 'user123' as the key.

// 2. res.data[0].username – Cookie Value
// This is the value stored in the cookie.

// In this case, you're storing the username from res.data[0].

// 3. { path: '/', maxAge: 10 } – Cookie Options
// This is an object with configuration options for the cookie:

// path: '/'

// Specifies the path the cookie is valid for.

// '/' means the cookie is accessible across the entire site.

// maxAge: 10

// Defines how long (in seconds) the cookie should last before expiring.

// 10 means the cookie will expire in 10 seconds.




// Domain

// what is domain
// server ya website ke address ko domain  bolte he for exp youtube.com google.com etc

// aur iska use isliye karte he taki kisi website pe jana he to uska domain likhna padega tabhi jayenge nahi to nahi jayenge 

// aur domain ke aane se phele ip address use hota ese 192.168.1.60

// .com , .in, .org ye sab extensions hote he

// .com ye commercial hoti he 
// .in ye india ke liye hoti 
// .org ye non profitable hoti he
// .net ye  IT company aur technology ke liye hoti he

















