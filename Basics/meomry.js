let youtubename = "ronilsasani.conm"
anothername = "sasanironilcom"
anothername = "youtubename"
console.log(youtubename);
console.log(anothername);


// HEAP MEMORY for the non primitive object, function and array

let userOne = {
    name : "ronil",
    age : 29,
}

let userTwo = userOne

userTwo.name = "sasanironi" // it will change the userone value because it is reference not a copy like a primitive datatype

console.log(userOne.name);
console.log(userTwo.name);