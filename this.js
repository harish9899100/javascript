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
let harish = new Student("harish", 581618, "jaipur");
console.log("Name :" + harish.Studentname + "\nRoll number :" + harish.Studentrollno + "\n city :" + harish.Studentcity);
let mohit = new Student("mohit", 6000015, "kuchaman");
console.log("\nName :" + mohit.Studentname + "\nRoll number :" + mohit.Studentrollno + "\ncity :" + mohit.Studentcity);
let pankaj = new Student("pankaj", 7000015, "dhigal");
console.log("\nName :" + pankaj.Studentname + "\nRoll number :" + pankaj.Studentrollno + "\ncity :" + pankaj.Studentcity);
