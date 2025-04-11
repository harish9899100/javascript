// const car = ['BMW', 'AUDY', 'RUBICORN', 'BE6', 'THAR', 'SCORPIO', 'TOYOTA'];
// for(a = 0;a < car.length;a++){
//     console.log(car[a]);
// }

// for (a=1;a<=10;a++){
//     console.log(a);
// }

// for(a=1;a<=10;a++){
//     console.log("The table of number is :" + a * 8);
// }

// let person = {name:"rohit", age:"23", rollno:"34534"};
// for(let x in person){
//     console.log(person[x]);
// }

// let cars = ["BMW", "AUDY", "BE7"];
// for(let x of cars){
//     console.log(x);
// }

// //while loop
// let a = 1;
// while(a < 5){
//     console.log("hey");
//     a++
// }


// let i = 0;
// do{
//     console.log("hello");
//     i++;
// }
// while(i < 2)

// let fruits = ["apple", "mango", "papaya", "kiwi"];
// for(let fruit of fruits){
//     console.log(fruit);
// }


// let cars = {name:"bmw",color:"blue", id:"34566"};
// for(let x in cars){
//     console.log(cars[x]);
// }

// let a;
// for (a = 1;a<=10;a++){
//     if(a === 3){break}
//         console.log("print the value of a is:" + a);
//     }

// let a;
// for(a=1;a<11;a++){
//     if(a===4){continue}
//     console.log("the value of a is:" + a);
// }


// let cars = ["bmw", "thar", "scorpio", "be6"];
// list:{
//    console.log(cars[0]);
//     console.log(cars[1]);
//     break list;
//     console.log(cars[2]);
//     console.log(cars[3]);
// }


// let a = "hello everyone";
// for(const b of a){
//     console.log(b);
// }

// let a = [1,2,3,4,5,6,7,8,9,0];
// for(const b of a){
//     console.log(b);
// }

// let a = new Set(['1', '2', '0', '8']);  //if you add equal element then first element is saved
//     console.log(a.size);

// let word = new Set(['harish', 'khileri']);
// word.add(['village'])
// word.add(['us']);
// console.log(word.size);

// has
// let a = new Set(['hello', 'hey', 'bye']);
// console.log(a.has('bye'));

// let a = new Set([2, 3, 4, 5, 6, 7]);
// let b ;
// console.log(a.forEach(function(value) {
//    b += value + "\n"
// }));

//values
// let a = new Set([2,3,4,5,6,7,8,9]);
// let b = a.values();
// console.log(a);

// Set entries
// let a = new Set([1,2,3,4,5,6,7,8]);
// let b = a.entries();
// console.log(b);


// let a = new Map([
//   ["apple",330],
//     ["mango",440],
//    ["kiwi",550]
// ])
// console.log(a.get("kiwi"));
// console.log(a.set());
// console.log(typeof(a));
// console.log(a instanceof Map);

// let fruits = new Map([
//     ["kiwi",100],
//     ["papaya",200],
//     ["banana",300],
// ]);
// console.log(fruits.size);
// console.log(fruits.delete("kiwi"));
// console.log(fruits.size);
// console.log(fruits.clear());
// console.log(fruits.size);

// let numbers = [22,33,44,55,66,77,88,99];
// let [...rest] = numbers;
// console.log(rest);


// let text = "helloworld";
// let replace = text.replace(/hello/i, "hey");
// console.log(text);
// console.log(replace);

// try {
//     let result = 10 / x; // oops! x is not defined
//     console.log(result);
//   } catch (err) {
//     console.log("Oops! Something went wrong:", err.message);
//   }
  
// try {
//     let result = 10 / y;
//     console.log(result);
// }
// catch(err){
//     console.log("something went wrong ::", err.message);
// }

// let z = 3;
// try{
//     let hello = 10 * z;
//     console.log(hello);
// }catch(err){
//     console.log("something gose wrong :" + err.message);
// }

// function person (){
//     return "hello everyone"
// }
// console.log(person());
// let raj = [2,3,4,5,6,7];
// console.log(raj[3]);
// console.log(person() + typeof raj);
// console.log(raj);
// raj.pop();
// raj.push(15);
// raj.push("hello");
// console.log(raj);
// console.log(raj[6]);
// console.log(raj.slice(2, 5));

// function person(name, age, id){
//     return this.name=name, this.age=age, this.id=id;
// }
// let a1 = new person('rahul', '21', '23435');
// console.log("The name of a1 is:" + a1.name + '\nThe age of person is:' + a1.age + "\nThe id of person is:" + a1.id);
// let a2 = new person("rohit", 24, 123545);
// console.log("\nThe name of person is :" + a2.name + "\nThe age of person is:" + a2.age + "\nThe id of person is:" + a2.id);

// function fruits(name, color, test){
//     return this.name=name,this.color=color,this.test=test;
// }
// const a = new fruits("mango","yellow", "sweet");
// console.log("The name of new fruit is:" + a.name + "\nThe colour of fruit is:" + a.color + "\nThe test of fruit is :" + a.test);


let person = {
    fname:"rajkumar",
    lname:"choudhary",
    country:"newzeland",
    age:"29",
    fullname:function(){
        return this.fname + " " + this.lname;
    }
}
console.log("The full name of person is\n:" + person.fullname() + "\nThe age of person is:" + person.age);
