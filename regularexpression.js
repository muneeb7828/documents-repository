


// regular expressions:- 
// ye pattern banene ke kaam ati he aur regexr.com is web pe check kar sakte he saari chezien
// ye basically bpassword email ko banane me kaam ata he 
// aur ye he iska syntax /very/gimus 


// flags in regular expressions:-

// g=global matlab pure line me jaha bhi same word hoga unsab ko target karega
// i=case insenstive matlab ke agar uperlatter ki jagah lowerlatter likha he to usko usko bhi lelega
// m=multiline matlab ke agar ek line pe ho raha to iska use karenge to multiple lines me bhi target karega
// s=singleline matlab isse bas single ko hi target karega

// ye hote he flags inko sabse aakhri me likhte he



// character in regular expressions:-

// character classes 
// . \w \d \s \W \D \S [abc] [^abc] [a-g]

// .= ye sab ko select kar leta he
// \w= ye word ke liye hota he
// \d= ye digit ke liye hota he
// \s= ye whitespace ke liye hota he
// \W= Not word
// \D= Not dogit
// \S= Not whitespace
// [abc]= isse iske andar jitne bhi word hote he un sabko select kar leta he
// [^abc]= ye nahi select karne ke liye hota he 
// [a-g]= isse a to g sab select ho jate he


// Anchors characters
// ^abc$ \b \B

// ^abc$=agar word a se shuru hoga aur c pe khatam hoga tabhi chalega
// \bmuneeb=isse agar vo word he to ajayga 
// \Bmuneeb=isse agar he to nahi ayega


// Escaped characters
// \. \* \\ \t \n \r 

// \.=iska use tab karte he jab ye . character ho tabhi select ho
// \*=iska use tab karte he jab ye * character ho tabhi select ho
// \\=iska use tab karte he jab ye \ character ho tabhi select ho
// \n=ye select karta he agar line break ho rahi he
// \t=ye select karta he agar tab kiya he to


// Grouping charecters
// (abc) \1 (?:abc) (?=abc) (?!abc)

// (abc)=isse word ki grouping ho jati he agar word isse milega tabhi select hoga nahi to nahi hoga


// Quantifiers charachters
// a* a+ a?  a{5} a{2,} a{1,3} a+? a{2,}? ab|cd


// a*= isse word 0 ya usse zada select ho jayga
// a+= isse word 1 ya usse zada select ho jayga
// b{5}= isse same word 5 hoga tabhi chalega 
// b{5,}= isse same word 5  ya usse zada hoga tabhi chalega 
// a{1,3}= isse same word iske beech me hoga tabhi chalega



let regex= /[^][a-z][a-z]eeb/g
let regex2=/^[a-zA-z1-9@#$%^0]{8,}@gmail.com$/g
