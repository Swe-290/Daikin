// find even or not
let age:number=10
let age1=(age>11)?'even':'odd';
console.log(age1);

let ages = 10;
let result = (ages%2===0)? 'even':'odd';
console.log(result);

let a = -5
let b = (a>0)? 'positive':'negative';
console.log(b);

let ages1 = 18
let c = (ages1>=18)? 'Eligible to vote':'Not Eligible to vote';
console.log(c)

// greater than 10 or not
let g = 15;
let h = (g>10)? 'Greater than 10':'not greater than 10';
console.log(h);

// Divisible by 5
let a1 = 20
let b1 = (a1%5 == 0)? 'divisible by 5':'not divisible by 5';
console.log(b1);
// Even and greater than 10 (20)
let c1 = 20
let d1=(c1%2===0 && c1>10)? 'Even and greater than 10':'Not Even and greater than 10'
console.log(d1);
// Even or greater than 10
let c2 = 10
let d2 = (c2%2===0 || c2>10)? 'even':'greater than 10';
console.log(d2);
// using Nested if (to check positive ,negative and zero) [wrong method]
let number1 :number = 20
let num2 : number = -25;
let num3 : number = 0;
if(number1==20){if(num2>=-25){if(num3===0){console.log("Positive,Negative,Zero");
}}}

// correct way
let num:number = 20;
let result1 = (num>0)?'Positive':(num<0)?'Negative':'Zero';
console.log(result1);

// check even or odd
let m :number = 20;
if ( m%2!==0){console.log("even")}
else{console.log("odd");
}

let v :number = 18
if (v>=18){console.log("eligible");
}
else {console.log("not eligible");
}

let score:number = 100;
if (score>90 && score>=100){console.log("A Grade")}
else if (score>75 && score>89){console.log("B Grade");}
else if(score>50 && score>74){console.log("C Grade")}
else if (score<50){console.log("fail")}

let score1:number = -0;
if (score1>=90){console.log("A Grade")}
else if (score>=75){console.log("B Grade");
}
else if (score>=50){console.log("C Grade");
}
else {console.log("fail");
}

// else if
let age2 :number = 60;
if (age2<=12){console.log("child");
}
else if (age2<=19){console.log("teenager");
}
else if (age2<=59){console.log("Adult");
}
else{console.log("senior citizen");
}

//
let integer:number = 1;
if (integer>0){console.log("Positive");
}
else if (integer<0){console.log("Negative");
}
else {console.log("zero");
}
//
let i :number=5
if (i>0){console.log("Positive")}
else if (i<0){console.log("Negative")}
else{console.log("zero")}


let a2:number = 10;
if(a2%2===0){console.log("even")}
else {console.log("odd");
}

let age3 = 18
if(age3>=18){console.log("eligible");
}
else{console.log("not eligible");
}

let scores1:number = 100;
if(scores1>=90){console.log("A Grade");
}
else if (scores1>=75){console.log("B Grade");
}
else if (scores1>=50){console.log("C Grade");
}
else{console.log("Fail");
}

// switch case

let day:number = 3;
switch (day){
case 1:console.log("Monday");
break;
case 2:console.log("Tuesday");
break;
case 3:console.log("Wednesday");
break;
case 4:console.log("Thursady");
break;
case 5:console.log("Friday");
break;
case 6:console.log("saturday");
break;
case 7:console.log("Sunday");
break;
    }


    // 
    let p:number=20;
    let hasId:boolean=true;
    if(p>=18 && hasId===true){console.log("Allowed");
    }
    else{console.log("Not Allowed");
    }

    let ticket:boolean=true;
    let pass:boolean= false;
    if(ticket===true || pass) {console.log("have a ticket");
    }
    else{console.log("not");
    }
    
    // ! operator
    let isloggedIn : boolean = false;
    if(!isloggedIn){console.log("Please login");
    }
    else{console.log("welcome");
    }

    // 
    let num1:number=15;
if(num1>10 && num1<20){console.log("between 10 and 20");
}
// 
let marks:number=60;
let atten:number=80;
if(marks>=50 && atten>=75){console.log("eligible");
}
else{console.log("not eligible");
}
//
let num4:number=30;
if(num4%3===0 && num4%5===0){console.log("divisible by both 3 and 5")}
else{console.log("not divisible by both 3 and 5");
}

// positive and even
let num5:number=8
if (num5>6 && num5%2===0){console.log("positive and even");
}

// else if
let age4:number = 15;
if (age4<13){console.log("child");
}
else if(age4>=13 && age4<18){console.log("teenager");
}
else{console.log("adult");
}
// 
let ages4:number = 20;
if (ages4<13){console.log("child");
}
else if(ages4>=13 && ages4<18){console.log("teenager");
}
else{console.log("adult");
}

// 
let z:number=5
if (z>0){console.log("positive");
}
else if(z<0){console.log("negative")}
else{console.log("zero");
}

let fruits:string[]=["Apple","Banana","Mango","Orange"];
let result2 =fruits.slice(1,3)
console.log(result2);

// map
let s2:number[]=[1,2,3,4];
// let re=s2.map((r,s,t)=>s*1)
let re=s2.map((r,s,t)=>r*1)

console.log(re);



// filter
// syntax variablename.filter((val,index,acc)=>);
let s:number[] = [10,15,20,25]
let result3 =s.filter((x,y,z)=> y>0) //checks index number

console.log(result3);

// reduce
let nu:number[]=[10,20,30,40,50];
let nu1=nu.reduce((m,n)=>m+n)
console.log(nu1);
