// nameless function
/* let val = function(a:string):any {
    console.log(a);
} 
val("Best of Luck")
 */
// Arrow Function
// Syntax : ()=>{}
/* let arr = (a:string)=>{console.log(a)}
arr("All the Best")

let man = function mano (b:string):any {
    console.log(b)
}
man("Mando");
// Arrow ()=>{}
let kut = (c:string)=>{console.log(c)}
kut("Pattu"); */

//Named function
// two parameter
function math1 (a:number,b:number) {
    console.log(a+b);
    
}
math1(10,25);
function math2 (c:number,d:number){
    console.log(c-d);
}
math2 (20,20)

// single parameter
function greet1(a:string){
    console.log(`hi ${a}!,Welcome to typescript`)
}
greet1('swe')

// without parameter
function statement() {
    console.log("this function without parameter")
}
statement();
statement();

function option (a:string, b:number, c?:string,d?:number):void{
    if (c!=undefined){
        console.log(`Name ${a}; Id ${b};Department ${c}`)
    }
else{
    console.log(`id ${b}; name ${a}`)
}
}
option("Swetha",456,"QA Department");
option("Mano",655)

// Default Parameter
function offer(price:number,discount:number=8):void{
    console.log(discount/=price*100)
}
offer(2000,30)
offer(2000)

// return function - mention the type
function ret (a1:string):string {
return `Hi ${a1}, welcome`;
}console.log(ret("mano"));

// rest parameter(doubt)
function iteration (...number:number[]){
    let val1 = number.reverse();
    for (let val of val1){
        console.log(val+val);
    }
}
iteration(8,23,56,87,99,43,16,12);
// Nameless function
let fun = function (d:string):any{
console.log(d);
}
fun("Nameless function")

// Arrow Function ()=>{}
let arr = (e:string)=>{console.log(e)}
arr("Arrow")

// call back-Synchronous stepby step,[asynchronous moving to another without waitng]
function funn(callback:()=>void){
    setTimeout(() => {
        console.log("loading")
        callback()
    }, 5000);
}
function fuun2(callback:()=>void){
    setTimeout(() => {
        console.log("finish")
        callback()
    }, 2000);
}
funn(()=>{fuun2(()=>{})});
