//  let str:string ='I am Swetha, working in the QA department.My contact number is 9444965453 and my email iD is swetha9757@gmail.com';
 
//   console.log('Name :',str.substring(5,11).toUpperCase()); // -->Name:SWETHA
//   console.log('Department :',str.substring(29,39).toUpperCase());//-->  Department:QA DEPARTMENT

    // let str1:string ='I am Swetha,I work in the QA department.My contact number is 9444965453 and my email iD is swetha9757@gmail.com';
    // let swe = str1.split(" ");
    // let result = '';
    // for (let re=0; re<swe.length; re++){
    //    result= result + 
    //     swe[re].substring(0,1)+
    // swe[re].substring(1,2).toUpperCase()+
    // swe[re].substring(2)+" ";
    // }
    // console.log(result);

// let str1:string ='I am Swetha,I work in the QA department.My contact number is 9444965453 and my email iD is swetha9757@gmail.com';
//    let swe = str1.split(" ");
//    let result = '';
//    for (let re=0; re<swe.length; re++){
//    for(let i=0; i<swe[re].length; i++){
//     if(i%2==0){
//            result= result + 
//        swe[re].substring(i,i+1).toUpperCase();
//     } else{
//            swe[re].substring(i,i+1).toLowerCase();
//         }
//        }
//        result=result+" ";
//     }

//    console.log(result);


//  let sen:string = 'hello typescript welcome';
//  let swe = sen.split(" ");
//  for(let i=0;i<swe.length;i++){
//     swe[i]=swe[i].charAt(0).toUpperCase() + swe[i].slice(1);
//  }
//  console.log(swe.join(" "));


// // console.log(sen.substring(0).toUpperCase());
//  console.log (sen.charAt(0).toUpperCase()+sen.substring(1,5));console.log(sen.charAt(6).toUpperCase()+sen.substring(7,16));


// console.log(sen.slice(1))


// let obj:any = {
//     name : "hari",
//     place : "Chennai",
//     age : 52,
// }
// console.log("name :",obj.name);

// type assign = {
//     name1:string[];
//     place:string[];
//     age:number[];
//     }
// let obj2:assign = {
//     name1:["bala","swetha","kathi"],
//     place:["chennai","delhi","mumbai"],
//     age:[45,25,27]
// }
// console.log("name1:",(obj2.name1[1]));
// console.log(obj2.place[2]);
// console.log(obj2.age[0]);

//object
// let obj:any={
//     name : "Swetha",
//     place : "Chennai"

// }
// console.log(obj);

// // type
//  type assign = {
//     name1 : string;
//     place1 : string;
//     age : number;
// }
// let typ1 : assign = {
//     name1 :"Swetha",
//     place1 : "Mumbai",
//     age :54


// }
// console.log(typ1);

// Interface with class
/* interface val{
    name() : void;
    age(): void;
}
class val1 implements val{
    name() : void{
        console.log("kathija");
    }
    age() : void {
        console.log(45);
    }
}
const details = new val1();
details.name();
details.age();
 */

// Regular Property
interface sun{
    name:string;
    age:number;

}
const sun1 :sun={
    name: "Suba",
    age: 24
}
console.log(sun1);

// Optional
interface suns{
    name:string;
    age:number;
    pincode?:number;

}
const suns1 :suns={
    name: "Siva",
    age: 30
}
console.log(suns1); 

// Readonly Property
interface sun2{
    readonly name:string;
    age:number;

}
const set :sun2={
    name: "Suba",
    age: 24
}
console.log(sun1);

// Overraid
interface parent{
    land():void;   
}
interface parent1 {
    gold():void;
}
class son implements parent1{
    land() :void{ 
        console.log("8 acres");
    }

gold() : void{
    console.log("2 lakhs");
}}
const son1 = new son();
son1.land();
son1.gold();