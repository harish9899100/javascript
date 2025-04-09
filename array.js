// let studnets = ['naveen', 'sidharth', 'ankit'];
// console.log(studnets.push("vishal"));   //push using for add new element in array
// console.log(studnets.push("kushal") + studnets);

// console.log(studnets.pop());      //pop using for remove last element in array
// console.log(studnets);


// let cars = ['toyota', 'thar', 'scorpio', 'be6']
// console.log(cars[3]);
// console.log(cars.length);
// console.log(typeof cars);   //object


// let names = ['akshay\n', 'sunny\n', 'varun\n', 'dhanda'];
// console.log(names.join("**"));

// //shift element remove first elemet and shift lower index another elements
// let fruit = ['mango', 'apple', 'orange', 'papaya'];
// console.log(fruit.shift() + "\n" + fruit);

//unshift add element bignig of array
// let fruit = ['papaya', 'orange', 'apple', 'mango'];
// console.log(fruit.unshift("banana"));
// console.log(fruit);

//delete array element
// let fruit = ['orange', 'apple', 'mango'];
// console.log(fruit[0] + "\n" + delete fruit[0] + "\n" + fruit + "\n" + fruit[0] + "\n" + fruit);

// //concat  adding two arrays within one array
// let boys = ['rohit', 'lucky'];
// let girls = ['priya', 'jerry', 'hello'];
// let childerns = boys.concat(girls);
// console.log(childerns);

//copywhithin  overwrite the existing element 
// let fruits = ['mango', 'banana', 'orange', 'apple'];
// console.log(fruits.copyWithin(2));

//flat 
// let x = [[2,3], [4,5], [6,7]];
// console.log(typeof(x));
// let y = x.flat();
// console.log(y);
// let z = x.flatMap(a => [a, a + 5]);
// console.log(z);

//splice  adding element in specific index 
// let students = ['rohit', 'rakesh', 'rajesh'];
// students.splice(1, 0, 'rajendra', 'rajkumar');
// console.log(students);
// let x = students.slice(1, 3);   
// console.log(x);

//indexof  using +1 because array index start from 0
// let fruits = ['apple', 'banana', 'kiwi','papaya'];
// let fruit = fruits.indexOf('papaya') + 1;
// console.log(fruit);

//lastIndexOf showing index value from last
// let x = ['apple','banana','apple', 'banana', 'papaya', 'apple', 'kiwi', 'mango'];
// let y = x.lastIndexOf('apple');//5
// let z = x.indexOf("apple");//0
// console.log('the value of x :' + x + '\nthe value of y :' + y + '\nthe value of z :' + z );
// let v = x.includes("apple");   //includes check element is persent then return true otherwise false
// console.log('apple persent in x :' + v);

//find () method   
// let number = [5,8,15,20,54,7,67];
// let num = number.find(value);
// function value(value){
//     return value >= 40;
// }
// console.log(num);

//findindex method
// let number = [34,45,56,67,78];
// console.log(number.findIndex(num));
// function num(value){
//     return value >= 50;
// }
// console.log(number); 

//array.sort arrenging accordin alphabat
// let x = ['rakesh','bhupendra','anil','zoya'];
// let y = x.sort();
// console.log('after sort:' + y);


//sort
// let x = [98,87,76,65,54,43,32,21,11];
// console.log(x.sort());

//reverse method     toReverse is not working 
// let x = [34,45,56,67,78,89,90];
// console.log(x.reverse());

//sort      tosort is not working in vs code
// let x = ['january','febuary','march','april'];
// let y = x.sort();
// console.log(y);

//concat()
// let numbers = [23,34,45,56,67];
// let numbers1 = [12,23,34];
// let total = numbers.concat(numbers1);
// console.log(total);

//date
// let x = new Date;
// console.log(x);


// foreach
// let x = ["hello", "heyy", "hii", "yes", "no"];
// let y = " ";
// x.forEach(nextline);
// function nextline(value, index, array){
//     return y += value + "\n";
// }
// console.log(y);


// let x = [12,23,34,45,56,67,78,89,90];
// let y = " ";
// x.forEach(nline);
// function nline(value){
//     return y += value + "\n";
// }
// console.log(y);

//map()  creat a new array performing function on each array element
// let number1 = [12,23,34,45,56,67];
// let number2 = number1.map(multyply);
// let number3 = number1.map(add);
// function multyply(value, index, array){
//     return value * 2;
// }
// function add(value){
//     return value + 10;
// }
// console.log(number1);
// console.log(number2);
// console.log(number3);

//flatMap()
// let myarray = [1,2,3,4,5,6,7,8];
// let newarray = myarray.flatMap(x => [x, x * 10]);
// console.log(newarray);

//filter
// const numbers = [23,34,5,45,6,3,3,11,32,364,456,2 ,45];
// let number = numbers.filter(comperision);

// function comperision(value, index, array){
//     return value > 18;
// }
// console.log(number);

//anonyomus function or inline function
// let x = [1,2,3,4,5,6];
// let y = x.map((hello) => { return hello * 3});

// console.log(y);

//arrow function
// let greet = (name) => {console.log('hello:' + name);};
// let x = greet("rohit");
// console.log(x);

//reduce
// const num = [20,30,10,40];
// let x = num.reduce(add);
// function add(total, value){
//     return total + value;
// }
// console.log(x);

// let num1 = [23,34,55,76,79,34];
// let num2 = num1.reduce((total,value) => { return total + value});
// console.log(num2);

//every method
// let x = [2,3,5,6,434,346,3,234];
// let y = x.every((value) => {return value > 1});
// console.log(y);

//some method
// let x = [23,34,67,5,7,3];
// let y = x.some((value) => {return value > 10});
// console.log(y);

//Array.from() 
// let x = Array.from("DFGDHERSF 235436 shtfff");
// console.log(x);

//with method  not work in vs code
// let months = ['january', 'feburary', 'mar', 'april'];
// let mymonths = months.with(2, 'march');
// console.log(mymonths);


//const
// const cars = ['BMW', 'AUDY', 'BE6'];
// cars[0]="toyota";
// cars.push="tata ev";
// cars.pop();
// console.log(cars);


// const cars = ['BMW', 'THAR', 'AUDY', 'SAAB'];
// console.log(cars[0]);
// {
//     const cars = ['RUBICORN', 'SCORPIO'];
//     console.log(cars[0]);
// }
// console.log(cars[0]);
