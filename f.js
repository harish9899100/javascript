console.log(`This "file" for 'practice'`);
let a = 25;
let b = 15;
let c = a+b;
console.log("The addition of a and  b is :" + c);
function hk(){
    return "Hello harish";
}
console.log(hk());
//if else:
if (a>18){
    console.log("you are grater than eighteen year old");
}
else{
    console.log("you are less then eaighteen ");
}
//object
let persone = {
    firstname:"yash",
    sirname:"choudhary",
    fullname:function f(){
        return this.firstname + " " + this.sirname;

    },
    age:28,
    id:"yc"
}
console.log(persone.fullname());