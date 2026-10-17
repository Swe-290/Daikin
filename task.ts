// let age:number = 18;
// let age1 = (age>18? 'canVote':'cannotVote');
// console.log(age1);


// let a:number = 45;
// let b = (a>45)? 'greater':'leser' ;
// console.log(b);

// //  let age:number = 18;
// //  let age1 = (a>18)? 'canVote' : 'cannotVote';
// //  console.log(age1);

// let age:number = 18;
//  let age1 = (a<18)? 'canVote' : 'cannotVote';
//  console.log(age1);

// nested for
// let c:number=6;
// for(c=6;c<=90;c+=6){console.log(c);}

// for(let a=1; a<=10;a++){console.log(a);}

// for(let a=2;a<=10;a+=2){console.log(a);}

//  let empId:number[]= [1995,1996,1997,1998];
// for(let i in empId){
//  console.log(`Employee Id ${empId[i]}`);
//  console.log(`Employee Id ${empId[0]}`);
//  console.log(`Employee Id ${empId[4-1]}`);}
 
// let empId:number[] = [1995, 1996, 1997, 1998];
// for(let i in empId){
//     console.log(`Employee Id ${empId[i]}`);
//     console.log(`Employee Id ${empId[0]}`);
//     console.log(`Employee Id ${empId[4-1]}`);
// }



// let name1:[string,number,string][]=[["swetha",66611,"qaTeam"],["Kathija",66612,"developerTeam"],["suba",66613,"Manager"],["Mano",66614,"Senior manager"]];
// for (let re of name1){
// console.log(`${(re[0])} with employee id ${(re[1])} works in ${(re[2])}`);}

// let str1:string ='I am Swetha,I work in QA department';
// console.log(str.charAt(6));
// console.log(str.indexOf('a',3));
// console.log(str.substring(5,11).toUpperCase());  //task SWETHA
//  console.log(str1.includes('Swetha',5));
// for(let i=0;i<=34;i++){
//      if(i%2==1) 
//         console.log(i);
// }
// console.log(str1.length);


// let str:string ='I am Swetha,I work in QA department';
// let result ='';
// for (let i=0;i< str.length;i++){
//     if (i%2==0){
//         result += str[i].toUpperCase();
//             }        else {
//                 result += str[i].toLowerCase();

//             }
//     }
// console.log(result);

//let newData : [number,string][]=[[45,'swetha'],[34,'kathi'],[30,'suba']];
// for(let re=0;re<newData.length;re++){
//     console.log(newData[re]);
// } 
// for(let re of newData){
//     console.log(re);
// }
// console.log (newData[0]);
// let nd = newData[1]
// console.log(nd[0]);
// console.log(newData[2]![1]);

// let num= 10;
// console.log("this number is",num);
// console.log(`i have ${num} apples`);


//let str:string ='I am Swetha, working in the QA department.My contact number is 9444965453 and my email iD is swetha9757@gmail.com';
//let newData:string =''
// console.log('Name :',str.substring(5,11).toUpperCase());
// console.log('Department :',str.substring(29,39).toUpperCase());

// for(let str1 = 0; str1<= str.length-1;str1++){
//     if(str1%2==0){
//         newData +=str[str1].toUpperCase()}
//         else{
//             newData +=str[str1].toLowerCase()
//     }

// }
// console.log(newData);
// console.log(str.length);

//  let str1:string ='I am Swetha,I work in the QA department.My contact number is 9444965453 and my email iD is swetha9757@gmail.com';
//  console.log(str1.substring(0,1).toUpperCase());
// console.log(str1.split('0'));
//console.log(str1.concat('by pass'));

//  let str1:string ='I am Swetha,I work in the QA department.My contact number is 9444965453 and my email iD is swetha9757@gmail.com';
//  let swe = str1.split(" ");
//  let result = '';
//  for (let re=0; re<swe.length; re++){
//      result= result + 
//      swe[re].substring(0,1)+
//  swe[re].substring(1,2).toUpperCase()+
//  swe[re].substring(2)+" ";
//  }
//  console.log(result);


// let fruit:string[]=['Apple','Banana','Orange','Kiwi'];
// console.log(fruit.length); 

// let sun:string = 'hello typescript welcome';
// let set = sun.split(" ");
// for(let i=0; i<set.length;i++){
//     set[i] =set[i].charAt(0).toUpperCase()+set[i].slice(1);
// }
// console.log(set.join(' '));