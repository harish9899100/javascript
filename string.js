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
// let text1 = "hello sir ";
// let text2 = "hello friend";
// let text3 = "hey everyone";
// let text4 = text1.concat(text2, " ", text3);
// console.log(text4);


//trim string means removing start and end spece counting 
// let hello =("       hello  everyone      ");    //28
// let text = hello.trim();                        //15
// console.log("The size of hello is:" + hello.length + "  " + "\nThe size of text is :" + text.length);


//padStart method
// let text = "8";
// let text1 = text.padStart(7, "0");
// console.log(text1); 

// let text1 = "8";
// let text2 = text1.padStart(15, "x");
// console.log(text2);

//the padStart is a string method if we are using a number then first converting to string 
// let text1 = 8;
// let text2 = text1.toString();
// let text3 = text2.padStart(8, "0");
// let text4 = text2.padEnd(8, "0");
// console.log(text2);
// console.log(text3);  //00000008
// console.log(text4);  //80000000
// console.log(typeof(text1));    //number
// console.log(typeof(text2));    //string 


//Repeat method
// let text1 = "$$ CHOUDHARY $$";
// let text2 = text1.repeat(4);      //$$ CHOUDHARY &&&& CHODHARY &&&& CHOUDHARY &&&& CHOUDHARY &&
// console.log(text2);



//replace() method only one word replace whole sentance
// let text1 = ("let's visite jaipur:");
// let text2 = text1.replace("let's", "hello");
// console.log(text1);    //let's visite jaipur
// console.log(text2);    //hello visite indor  

//replaceAll() method change one word from whole sentance 
// let text1 = ("hello everyone, hello ram, hello lakshman, hello bharat, hello shatrughan ");
// let text2 = text1.replaceAll("hello", "hii");
// console.log(text1);
// console.log(text2);


//split method    saprating like array index
// let text1 = "hello everyone, what, is going on ";
// let text2 = text1.split(",");
// console.log(text1);
// console.log(text2);


//indexof method       finding particular word index value
// let text1 = "hello everyone what are you doing today";
// let text2 = text1.indexOf("today");
// let text3 = text1.indexOf("everyone");
// console.log(text2);      //34
// console.log(text3);      //6

 
//lastindexof method
// let x = ("hello everyone what are you today hello why you are doning hello no problam");
// let y = x.indexOf("hello");
// let z = x.lastIndexOf("hello");
// console.log("Using indexof method ::", y);         //0
// console.log("Using lastindexof method ::", z);     //59 



//search method
// let text1 = "hello everyone what are you doning today hello ";
// let text2 = text1.search("you");
//  console.log(text2);


//match method 
// let text1 = ("in the jaipur and in the khatipura and in the jodhpur misthan bhandar kachori are available SPAIN RAMAIN");
// let text2 = text1.match(/in/g);
// console.log(text2);         //3
// let text3 = text1.match(/in/gi);
// console.log(text3);  


//include method 
// let text1 = ("hello everyone how's going your day ");
// let text2 = text1.includes("hello");   //true
// let text3 = text1.includes("friend");  //false
// console.log(text2);
// console.log(text3);


//startswith and endswith method
// let text1 = ("thanks charger for shoporting my phone");
// let text2 = text1.startsWith("thanks");
// let text3 = text1.endsWith("phone");
// console.log(text2);
// console.log(text3);


//tamplat string
// let text1 = "rohit";
// let text2 = "kumar";
// let text3 = `welcome ${text1} ${text2}`;
// console.log(text3);  


//add through toFixed method
// let text1 = 10;
// let text2 = 5;
// let text3 = `total ${(text1 + text2).toFixed(2)}`; 
// console.log(text3);


//multyply through toFixed method
// let x = 20;
// let y = 5;
// let z = `total ${(x * y ).toFixed(3)}`
// console.log(z); 


