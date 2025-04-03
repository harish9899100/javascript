// let x = "this is a simple string usign dubble quots";
// let y = 'this is a simple string using single quots';
// let z = 'how to write string inside "string"';
// let a = "what's going everyone";
// console.log(x + "\n" + y + "\n" + z + "\n" + a);

//using templet 
// const A = `what's  going "everyone"`;
// console.log(A);

//how to find text length
// let a = 'qwertyuiopasdfghhjklzxcvbnm'; 
// let b = "how to finde text length"; 
// console.log("The length of a is:"+  a.length);
// console.log("The length of b is:" + b.length);

//find specific index value  using charAT keyword
// let a = "HELLOEVERYONE2222";
// console.log(a.length);
// console.log(a.charAt(3));
// console.log(a.charAt(1));
// console.log(a.charAt(0));
// console.log(a.charAt(8));
// console.log(a.charAt(11));
// console.log(a.charAt(15));
// //findng uniq valus using CharCodeAt() keyword
// console.log(a.charCodeAt(0));
// console.log(a.charCodeAt(1));
// console.log(a.charCodeAt(2));
// console.log(a.charCodeAt(3));
// console.log(a.charCodeAt(4));

//how to use slice operator in javascript
// const mouse = 'mi, hp, lenovo';
// const text = mouse.slice(5,15)
// console.log(text);

//extract part of slice
//  let text = "abc, def, ghi";
//  let word = text.slice(3);
//  console.log(word);


//revers slice oprator
// let text = "hello, everyone, hey";
// let word = text.slice(-6);
// console.log(word);

//substring slice 
// let text = "hello, hey, hi";
// let word = text.substring(4,8);
// console.log(word);

//converting in uppercase
// let hello = "hello everyone";
// let hey = hello.toUpperCase();
// console.log(hey); 


//converting in lowercase
// let hello = "HELLO EVERYONE";
// let hey = hello.toLowerCase();
// console.log(hey);

//concat string
let text1 = "hello sir ";
let text2 = "hello friend";
let text3 = "hey everyone";
let text4 = text1.concat(text2, " ", text3);
console.log(text4);