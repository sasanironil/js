let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)// we specified the score as a number or it will convert into number
console.log(valueInNumber);

// "33" // it is easy to convert in number
// "33abc" // it is not easy it shows NaN which means Not A Number
// true // it shows the 1 which means it is boolean value If it is False then it shows the 0

// conver the numbers in to boolean

let isLoggedIn = 1
 let booleandIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleandIsLoggedIn);

 // if we write 1 then it shows the true
 // if write o then it shows the false
 // it we write "" then it shows the false
 // if we write "ronil" then it shows the true

 // Operation

 let str1 = "hello"
 let str2 = "ronil"
 let str3 = "str1 + str2"

 console.log(str3);


 console.log("1" +2);
 console.log(1 + "2");
 console.log("1" + 2 +2); 
 console.log(1 + 2 +"2"); 
 
