// Named function
//syntax: Function Functionname(Parameter):void{
// block of code to be executed}
// functionname(argument)

// Function with two argument
function fun2(a:number,b:number){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
}
fun2(10,5);

// Function with single parameter
function fun3(a:string){
    console.log(`hi ${a}!...Welcome`)
}
fun3('Swetha')

// Function without parameter
function fun4(){
    console.log("Welcome")
}
fun4();
fun4()

// Function with Optional parameter
function fun5(a:string,b:number,c:string,d?:number):void{
    console.log(`Hi ${a} your id is ${b},you cant able to ${c}`)
}
fun5("Swe",6549,"Change")

// Function with Default Parameter
function fun6(price:number,discount:number =8):void{
    console.log((discount/=price)*100);
}
fun6(2000,30);
fun6(2000)
// 
function fun7(name:string = "world"){
    console.log("Hello"+ name);
    
}
fun7()
fun7("swe")

// function with return type
function fun8(nam1:string):string{
    return `hi ${nam1}! Welcome to Typescript`
}
console.log(fun8("kathii"))
// 
function mat(a:number,b:number):string{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b); 
    return "Execution Completed"
}
mat(10,5)
console.log(mat(10,5));

// function with rest parameter
function iter(...number:number[]){
    let val1 = number.reverse();
    for(let val of val1){
        console.log(val+val);
        
    }
}
iter(2,3,4,5,6,7,8)

// code practice from gpt
function greets (){
    console.log("Hello,welcome to Typecript")
}
greets()

function add(a:number,b:number){
    console.log(a+b)
}
add(10,20)
// 
function multiply(c:number,d:number){
    console.log(c*d);
    return "Twenty"
}
 multiply(5,4)
 console.log( multiply(5,4));
 
// 
function multiply2(c:number,d:number){
    return c*d;
}
console.log(multiply2(5,4));

// CheckEvenodd
function checkEvenOdd (e:number){
    if(e%2===0){
        console.log("Even");
    }
    else{
        console.log("odd");
        
    }
}
checkEvenOdd(8);
//
function welcomeUser(name:string){
    return `Welcome ${name}`
    
}
console.log(welcomeUser("Swetha"));
