/* SetTimeOUt
syntax(()=>{},timeout);
function funn():void{
    setTimeout(() => {
        console.log("loading")
    }, 5000);

}
function fun2():void{
    setTimeout(() => {
        console.log("loading successful")
    }, 2000);
}
funn();
fun2(); */

/* function names () :void{
    setTimeout(() => {console.log("Installing")
        
    }, 5000);
} 
function names1 () : void{
    setTimeout(() => {console.log("Instalizing Completed")
        
    }, 2000);
}
names();
names1(); */


// callback(within Two function called callback)
/* function namez (callback:()=>void){
    setTimeout(() => {console.log('processing');
        callback()       
    }, 5000);
}
function namez1 (callback:()=> void){
    setTimeout(() => {console.log("Process Completed")
callback()        
    }, 2000);
}
namez(()=>{namez1(()=>{})}); */

// namez(()=>{namez1(()=>{})});

// Call back
/* function funn(callback :()=> void){
    setTimeout(() => {
        console.log("loading");
        callback()
    }, 5000);

}
function fun2(callback :()=> void){
    setTimeout(() => {
        console.log("loading successful");
        callback()
    }, 2000);
}
funn(() => {fun2(()=>{})
    
}); */

// Callback hell (more than two function called callback hell)
/* function ramez (callback:()=>void){
    setTimeout(() => {console.log('processing');
        callback()       
    }, 5000);
}
function ramez1 (callback:()=> void){
    setTimeout(() => {console.log("Process Completed")
callback()        
    }, 2000);
}
function ramez2 (callback:()=>void){
    setTimeout(() => {console.log("100%")
        callback()
    }, 3000);
}
ramez(()=>{ramez1(()=>{ramez2(()=>{})})}) */

