// promise
// syntax
// return new Promise((resolve, reject) => {})
/* function go():Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a:boolean = true;
            if(a){resolve ("I am going to the home")

            }
            else{
                reject("I am not going to the home")
            }
            
        }, 5000);
})
}
function buy():Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let b:boolean = true;
            if(b){resolve("Buying the product")

            }
            else{
                reject("I am not buy the product")
            }
            
        }, 2000);
        
    })
}
function change():Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let c:boolean = false;
            if(c){
resolve("collecting the cash")
                
            }
        else{
            reject(" forgot to collect")
        }
        }, 1000);
        
    })
}
function back() :Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let d:boolean = true;
            if(d){
                resolve("i am back to the home")
            }
            else{
                reject("i am not back to the home")

            }
        
            
        }, 5000);
    })
}
// go()
// .then(val =>{console.log(val);return buy()})
// .then(val =>{console.log(val);return change()})
// .then(val =>{console.log(val);return back()})
// .then(val =>{console.log(val)});

async function afun() {
    try {
        
    let first = await go();
    console.log(first);
    let sec = await buy();
    console.log(sec);
    let three = await change();
    console.log(three);
    let fourth = await change();
    console.log(fourth);

} catch (err) {
    console.log(err);
}
}
afun(); */

// return new Promise ((resolve, reject) => {})  

function go1() :Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         let d:boolean = true;
         if(d){
            resolve("I am going to home");
        }
            else{
                reject("I am not going to the home");
            }
    }, 5000);
        
    })
}
function buy1(): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let f:boolean= true;
            if(f){
                resolve("Im going to buy the products")
            }
            else{
                reject("I am not going to buy")
            }
        }, 3000);
        
    })
}
function collect1():Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let g:boolean = false;
                if(g){
                    resolve("collect the cash")
                }
                else{
                    reject("forgot to collect the cash")
                }
            
            
        }, 2000);
        
    })
}
function return1(): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let h:boolean = true;
            if(h){
                resolve("return back to home")
            }
            else{
                reject("not return to home")
            }
        }, 5000);
        
    })
}
async function afun1() {
    try {
        const first = await go1();
        console.log(first);
        const secd = await buy1();
        console.log(secd);
        const thir = await collect1();
        console.log(thir);
        const fth = await return1();
        console.log(fth)



    } catch (err1) {
        console.log(err1);
        
    }
    
}
afun1()