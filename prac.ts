let names:string = "swethe";
let age : number = 29;
let salary: number = 30000;
let isEmployed : string = "Employed";
let num:string[] = ["hearing music","aariwor","playing","gardening"]

/*function salary1 (a:number,b:number):number{
    return a+b;



}
console.log(salary1(30000,5000));*/

// arithmetic,assignment,relational,logical,unery -[increment,decrement and type check]and ternary/conditional operators(condition ch)

interface employee{
    namme:string;
    ages:number;
    department:string;
}
let employ1 :employee ={
    namme:"Swe",
    ages:30,
    department :"QA"
}
console.log(employ1);

let a:number = 20, b:number = 10;
console.log(a+b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// if condition
let age1:number =20;
let age2:number =25;
if(age1<25){console.log("he can vote")}

//Nested if
let country:string = "India";
let age3:number = 30;
let hasLicense:string = "Yes";
if(country=="India"){if(age3<20){if(hasLicense=="Yes"){console.log("You may go")}}};

// If Else
let sun:number = 18;
if(sun>20){console.log("he may go")}
else{console.log("he may not go")}

// Else if condition
//  let time:number =22;
//  if(time> 25) {console.log("history.!Good Mrg")}
//  else if (time<26){console.log("hi.!gud atnun")}
// else if  (time<20){console.log("hi!.gud eve")}
//  else{console.log("hi!.gud ni8")}

// Else if condition
//  let marks:number = 59
//  if(marks>90 && marks<=100){console.log("A Grade")} // marks = 96
//  else if(marks>=80 && marks<=89){console.log("B Grade")} //marks = 85
//  else if(marks>=60 && marks<=79){console.log("C Grade")} //marks=70
//  else if(marks>=40 && marks<=59){console.log("D Grade")} //marks = 59
//  else if(marks>=0 && marks<40){console.log("Fail")} //marks=25
//  else if(marks>100){console.log("Invalid marks")} //marks 155
//  else {console.log("Negative numbers not allowed")} //marks= -150

// Switch Case Statement
let day:number=4;
switch(day){
    case 1 :console.log("Monday");
    break;
    case 2 :console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday")
    break;
    default :console.log("Invalid days");
}

// for loop
// print 1 to 10
// for (let i=1;i<=10;i++){
//     console.log(i);
// }
// even number
// for (let a=2;a<=10;a+=2){
//     console.log(a);
// }
// odd numbers
/* for (let s=1; s<=10;s++)
    if (s%2==1){
        console.log(s);
    }
    
    // descending
    for(let b=9;b>=1;b--){
        console.log(b);
    } 
     */

    // while
    /* let c:number =1;
    while(c<=5){
        console.log(c);c++;
    } 
    // even
    let d:number =2;
    while(d<=10){
        console.log(d);d+=2;
    } */ 

/* 
        let e=2
        while(e<=10)
            if(e%2==0){console.log(e);e+=2}
        // do while
    let j=1;
    do{console.log(j);
        j++;
    }    while (j<=5);
 */
 /*    Array
let empId:number[]=[1224,1225,1226,1227];
console.log(empId[1]);
let empName:Array<string|number>=["swe",66,29,"kathi",77,"suba",28];
console.log(empName[3]);
let numName:Array<string>=["swe","kathi","suba","padma"];
console.log(numName[0]);
 */
// Iteration For in loop
//   let empId1:number[]= [1995,1996,1997,1998];
//  for(let i in empId1){
// console.log(`Employee Id ${empId1[i]}is available`);
// console.log(`Employee Id ${empId1[0]}`);
// console.log(`Employee Id ${empId1[1]}`);}

//  let anyVal:any[]=[11,true,"alice",45,false,76,"bob",null,"charlie"];
//  for(let av of anyVal) {console.log(`value of ${av}`);}
 
// let name1:[string,number,string][]=[["swetha",66611,"qaTeam"],["Kathija",66612,"developerTeam"],["suba",66613,"Manager"],["Mano",66614,"Senior manager"]];
// for (let re of name1){
// // console.log(`${(re[0])} with employee id ${(re[1])} works in ${(re[2])}`);}
// // console.log(`${(name1[]))
// console.log(`${re[0]} with employeeId ${re[1]} working in ${re[2]}`)
// }

// tuple
let tup: [string,string] = ["swethssa","gfrgd"]
let tup1:[string,boolean,number][] = [["sathya",false,50],["saam",true,69]];

// string methods
let str:string = "I have an Orange in my hand"
console.log(str.length)
let upperStr = str.toUpperCase();
console.log(upperStr)
console.log(str.toUpperCase());
console.log(str.toLowerCase())

// Index Acess - CharAt,indexof,substring()
console.log(str.charAt(5))
console.log(str.indexOf('e'));
console.log(str.substring(7,16).toUpperCase());
// Value Verify
console.log(str.startsWith('I have'))
console.log(str.startsWith('an',7))
console.log(str.endsWith('hand'))
console.log(str.startsWith('hand',23))
console.log(str.includes('I have'))
console.log(str.includes('hand',23))

let str1:string = "I have an Orange in my hand"
console.log(str1.trimEnd()); //space trimmer at end
console.log(str1.trimStart());   //space trimmer at start
console.log(str1.trim());
// console.log(str1.split(" "))
console.log(str1.split('0'))
console.log(str1.replace('a','e'))
console.log(str1.replaceAll('a','e'))

let greet:string=" Hi Typescript,welcome to Typescript,Hello Typescrist"
console.log(greet.replace('Type','Java'))
console.log(greet.replaceAll('Type','Java'))
console.log(str.concat (greet))
console.log(str.concat(',i need a Basket'))
console.log(str.padStart(40,'swethA'));
console.log(str.padEnd(45,"kathija"));
console.log(str.charCodeAt(2))
console.log(str.codePointAt(2))

let str2 :string = "Im swethe working in QA Department";
let newstr2:string = "";
for(let i=0; i<=str2.length-1; i++){
    if (i%2==0){
        newstr2 += str2[i].toUpperCase()
    }else{
        newstr2 += str2[i].toLowerCase()
    }
}
console.log(newstr2);

// Array Method
let fruits:string[]=['Apple','Orange','Dragon','Kiwi']
console.log(fruits.length)
console.log(fruits)
let lastFruit = fruits.pop()
console.log(fruits)
console.log(lastFruit);

 let addFruit= fruits.push('kiwi','watermelon')
 console.log(fruits);
 console.log(addFruit);
 let frontfruit = fruits.shift()
 console.log(fruits)
 console.log(frontfruit);
 let frontaddfruit = fruits.unshift('Mango','guava','grapes')
 console.log(fruits);
 console.log(frontaddfruit);

//  Advance Array - [map,filter,reduce]
//  map
// syntax : variable name.map((value ,index,accumulator)=>)
let e:number[]=[10,20,30,40,50];
let f=e.map((l,n,ac)=>l*5)
console.log(f)

// filter
// syntax :variablename.filter((value,index,accumulatot)=>);
let g:number[] = [12,21,5,45,63,6,1,65,47,654,60,14,23,4,492]
let h=g.filter((x,y,z)=> y<=12)
console.log(h);

// reduce
// syntax :variablename.reduce((accumulator,currentValue)=>)
let r:number[]=[10,20,30,40]
let red=r.reduce((m,n)=>m-n)
console.log(red);


// class
class room1 {
    colour():void{
        console.log("I need white colour")
    }
    table():void{
        console.log("I need wooden table")
    }
    ac():void{
        console.log("fix bluestar ac")
    }
}
const value1 = new room1();
value1.colour();
value1.table();
value1.ac();


class holy {
    name1:string;
    id1 :number;
    place1:string;
    constructor(stdname:string,stdid:number,stdplace:string){
        this.name1 = stdname;
        this.id1 = stdid;
        this.place1 = stdplace;
    }
    stddetails() : void{
        console.log("the name of the student is",this.name1);
        console.log("The Id of the student is", this.id1);
        console.log("The place of the student is", this.place1);
        
    }
}
const student = new holy ("Swet",6543,"Mumbai");
student.stddetails();