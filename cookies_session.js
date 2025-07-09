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


