//var a = 10;
//console.log(a)
//var a = 25;
//console.log(a)
//let $ = 44;
//console.log($)
//let _ = 76;
//console.log(_)
//var a = "moon";
//console.log(a)
//let b = "sun";
//console.log(b)
//const c = "star";
//console.log(c)

// data type
// number
// let age:number=66;
// let num:number;          //Annotation
// let num1;                //Inference
// num = 24;
// num = -5.76;
// num = 12356788;
// num = -25;
// num1 = 22;
// num1 = 'power'
// num1 = true

// String
// let sun:string;
// let sun1;
// sun = "kathija"
// sun ='spring'
// sun = `1997`
//  sun = `$(cute)priya`;
//  sun = "${puppy} papa";
//  console.log(sun);

// boolean
// let lean:boolean;
// lean = true;
// lean = false;

/*null and undefined
let swe:null = null;
swe;
console.log(swe);

let boat:undefined = undefined;
boat;
console.log(boat);*/

// any
/*let script:any;
script = "sus";
script = false;
script = -44;
console.log(script);

// union
let baba:string|number|null;
baba = "testing";
baba = 9.25;
baba;
console.log(baba);*/

// Arithmetic Operator
/*let a: number = 5;
let b:number = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b); // quotient Value
console.log(a%b);//Remainder value
console.log(a**b);*/

//Assignment Operator[+=,-=,*=,/=,%=,**= ]
// let a:number=25,b:number=2;
// console.log(a=b); //a=2;
// console.log(a+=b); //2+2 = 4;
// console.log(a-=b); //4-2 = 2;
// console.log(a*=b);  //2*2 =4;  
// console.log(a/=b); // quotient Value  //4/2 = 2;
// console.log(a%=b);//Remainder value    // 2%2 = 0;
// console.log(a**=b); //0**0 = 0;
//console.log(a);


// relational operator //[>,<,>=,<=] [==,!=,===,!==]
//  let s:number = 10,w:number = 20;
// console.log(s>w);
// console.log(s<w);
// console.log(s>=w);
// console.log(s<=w);
// let s:number = '5';
// let w:number= 5;
// console.log(s==w);
// console.log(s===w)

// unery operator
//  let s:number = 10;
// console.log(s);
//  console.log(s++); //10
// console.log(++s); //12
// console.log(s--);  //12
// console.log(--s);  //10
// console.log(typeof(s));  //number

//  let a:number = 25;
// console.log(a); //25
//  console.log(a++); //25
// console.log(++a); //27
// console.log(a--);  //27
// console.log(--a);  //25
// console.log(typeof(a));  //number

 
// If Condition
//  let age:number = 27;
//  let age1:number = 17;
//  if (age>=18) {console.log ("this person eligible to vote")}
//  if (age1>=18) {console.log("this person is not eligible to vote")}

// Nested If condition
// let country:string = "India";
// let age:number = 22;
// let hasLicence:string = "yes"
// if(country=="India"){if(age>=20){if(hasLicence=="yes"){console.log("you may go");}}}

// If else condition
// let score:number = 50;
// if(score<=50){console.log("way to half century")}
//  else{console.log("duck our")}

//Else if condition
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


// Nested If condition
//  let country:string = "India";
//  let age:number = 22;
//  let hasLicence:string = "yes"
//  if(country=="India"){if(age>=20){if(hasLicence=="yes"){console.log("you may go");}}}

// for(let i:number=6; i<=90; i+=6){console.log(`${i}`)}

// for(let i:number=6;
// i<=90;i+=6){console.log(`${i}`)}

// let a:number=6;
// while(a+=6;{a<=90})

// assignment operator
// let a:number=10, b:number=5;
// console.log(a+=6);
// console.log(a+=6);

// while loop
// let a:number=1;
// while(a<=5){console.log(a);a++;}
// let b:number=2;
// while(b<=10){console.log(b);b+=2}

// let c:number=6;
// while(c<=90){console.log(c);c+=6}

// odd numbers output
// for(let a=1;a<=10;a++){
//     if(a%2==1){
//         console.log(a);
//     }
// }

// for(let a=5;a>=1;a--){
//     console.log(a)
// }

//  let c:number=6;
//  for(c=6;c<=90;c+=6){console.log(c);}

// let a:number=1;
// while(a<=10){if(a%2==0){console.log(a);}a++;}

// Iterating an array using for in loop
// let empId:number[]=[100,200,300,400];
// for(let i in empId){
//     console.log(`Employee Id ${empId[i]}`);
//      console.log(`Employee Id ${empId[1]}`);
//     console.log(`Employee Id ${empId[3-1]}`);
// }

// Array
// let names:(string)[]=['swetha','kathi','suba','padma'];
// console.log(names);
// console.log(names.length);
// let fruits:(string|number|boolean)[]=['swetha','kathi',25,67,true,true,'suba',false];
// console.log(fruits);

// let names:Array<string|number|null|undefined> = [];
// names[0] = 'swe';
// names[1] = 'suba';
// names[5] = 54;
// names[4] = null;
// names[3] = undefined;
// console.log(names);
