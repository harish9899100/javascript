// function Member(id, rollno, age){
//     this.personid = id;
//     this.personrollno = rollno;
//     this.personage = age;
// }
// const rohit = new Member("111111", 55521, 20);
// console.log("The id of rohit is:" + rohit.personid  + " \n" + "The roll no. of rohit :" + rohit.personrollno + "\n" + "The age of rohit is :" + rohit.personage);
// console.log("** Another person **");

// let ramesh = new Member("222222", 55522, 21);
// console.log("The id of ramesh is :" + ramesh.personid + "\n" + "The roll number of ramesh is :" + ramesh.personrollno + "\n" + "The age of ramesh is :" + ramesh.personage);

// let rakesh = new Member(333333, 55523, 22);
// console.log("** Another person ***" + "\n" + "The id of rakesh is:" + rakesh.personid + "\n" + "The roll number of rakesh is:" + rakesh.personrollno + "\n" + "The age of rakesh is:" + rakesh.personage);
// console.log("$*$ In this program we using this keyword $*$");

function Student(name, rollno, city){
    this.Studentname = name;
    this.Studentrollno = rollno;
    this.Studentcity = city;
}
let Harish = new Student("Harish", 581618, "jaipur");
console.log("Name :" + Harish.Studentname + "\nRoll number :" + Harish.Studentrollno + "\n city :" + Harish.Studentcity);
let Mohit = new Student("Mohit", 6000015, "kuchaman");
console.log("\nName :" + Mohit.Studentname + "\nRoll number :" + Mohit.Studentrollno + "\ncity :" + Mohit.Studentcity);
let Pankaj = new Student("Pankaj", 7000015, "dhigal");
console.log("\nName :" + Pankaj.Studentname + "\nRoll number :" + Pankaj.Studentrollno + "\ncity :" + Pankaj.Studentcity);
let Rohit = new Student("Rohit", 45365346, "Noida");
console.log("\nName :" + Rohit.Studentname + "\nRoll number :" + Rohit.Studentrollno + "\ncity :" + Rohit.Studentcity);
let Ankit = new Student("Ankit", 35345, "USA");
console.log("\nName :" + Ankit.Studentname + "\nRoll number :" + Ankit.Studentrollno + "\ncity :" + Ankit.Studentcity);