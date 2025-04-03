function Member(id, rollno, age){
    this.personid = id;
    this.personrollno = rollno;
    this.personage = age;
}
const rohit = new Member("111111", 55521, 20);
console.log("The id of rohit is:" + rohit.personid  + " \n" + "The roll no. of rohit :" + rohit.personrollno + "\n" + "The age of rohit is :" + rohit.personage);
console.log("** Another person **");

let ramesh = new Member("222222", 55522, 21);
console.log("The id of ramesh is :" + ramesh.personid + "\n" + "The roll number of ramesh is :" + ramesh.personrollno + "\n" + "The age of ramesh is :" + ramesh.personage);

let rakesh = new Member(333333, 55523, 22);
console.log("** Another person ***" + "\n" + "The id of rakesh is:" + rakesh.personid + "\n" + "The roll number of rakesh is:" + rakesh.personrollno + "\n" + "The age of rakesh is:" + rakesh.personage);
console.log("$*$ In this program we using this keyword $*$");