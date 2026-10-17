// Array
// let empId:number[]=[1224,1225,1226,1227];
// console.log(empId);
// let empName:Array<string|number>=["swe",66,29,"kathi",77,"suba",28];
// console.log(empName);
// let numName:Array<string>=["swe","kathi","suba","padma"];
// console.log(numName);

// Iteration For in loop
//  let empId:number[]= [1995,1996,1997,1998];
//  for(let i in empId){
// console.log(`Employee Id ${empId[i]}`);
// console.log(`Employee Id ${empId[0]}`);
// console.log(`Employee Id ${empId[4-1]}`);}

// let anyVal:any[]=[11,true,"alice",45,false,76,"bob",null,"charlie"];
// for(let av of anyVal) {console.log(`value of ${av}`);}
 
// let name1:[string,number,string][]=[["swetha",66611,"qaTeam"],["Kathija",66612,"developerTeam"],["suba",66613,"Manager"],["Mano",66614,"Senior manager"]];
// for (let re of name1){
// console.log(`${(re[0])} with employee id ${(re[1])} works in ${(re[2])}`);}
//  console.log(`${(name1[]))

// let names:string[]=['sam','nayan','joe','sim']
// for(let val1 of names)
//     console.log(val1);


// Advance Array Method 
// map,filter,reduce
// let a:number[]=[10,20,30,40,50];
// let b=a.map ((x,y,z)=>y+10)
// console.log(b);


// let f:number[]=[12,234,46,23,45,87,1,7,34];
// let fil=f.filter((x,y,z) => y<=2);
// console.log(fil);
// let r:number[]= [10,20,30,40];
// let red=r.reduce((m,n) => m-n);
// console.log(red);

// let names:string = 'hello typescript welcome';
// let name1 = names.split(" ");
// for (let i=0; i<name1.length; i++){
//     name1[i]=name1[i].charAt(0).toUpperCase() +name1[i].slice(1);
// }
//  console.log(name1.join(' '));


// Function with two parameter){}
// function math (a: number,b:number){
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);
// }
// math(25,35);
// math(10,5);

// // function with single parameter
// function greet(a:string){
//     console.log(`Hi ${a}!,Welcome to Typescript..!`);
// }
// greet("kathi");
// greet("swe");

// // Function Without Parameter
// function greet1(){
//     console.log('This is the function without parameter')
//     }
//     greet1();
//     greet1();
//     greet1();

//     // functional with optional parameter
//     function option(a:string,b:number,c?:string):void{
//         if(c!=undefined){
//             console.log(`Name:${a};ID:${b};Department:${c}`    )
//         }else{
//             console.log(`${b} is belongs to ${a}`)
//         }
//     }
//     option('swetha',22126,'QA Department');
//     option ('kathi',12345);

    // Function with Default Parameter
    // function offer(price:number,discount:number=8):void{
    //     console.log((discount/price)*100);
    // }
    // offer(2000,30);
    // offer(2000);

    // class Aariwork{
    //     colour (r:string):any{
    //         console.log(r);
    //     }
    //     work ():void{
    //         console.log("I need thread work");
    //     }
    //     design():void{
    //         console.log ("Dont change the design");
    //     }
    // }
    // const Value = new Aariwork();
    // Value.colour ("I need red colour");
    // Value.work();
    // Value.design();

    // 2
/*class room {
    colour (s:string): any {
        console.log(s);
    }
    table():void{
        console.log("I need wooden table");
    }
    ac():void{
        console.log("I need bluestar ac")
    }
}
const Details = new room();
Details.colour("I need blue colour");
Details.table();
Details.ac();*/

/*class room{
    colour():void{
        console.log("I need white colour");
    }
    table():void{
        console.log("I need wooden table");
        }
    ac():void{
        console.log("I need Daikin ac");
    }
}
const details = new room();
details.colour();
details.table();
details.ac();*/

// class Holy{
//     name:string;
//     id:number;
//     place:string;
//     constructor (stdname:string,stdid:number,stdplace:string){
//     this.name = stdname;
//     this.id = stdid;
//     this.place=stdplace;
// }
// stddetails():void{
//     console.log("The name of the student is",this.name); 
// console.log("The id of the student is", this.id);
// console.log("The place of the student is", this.place);
// }
// }
// const Value = new Holy("Swetha",964,"Chennai");
// Value.stddetails();

// class Student{
//     name:string;
//     id:number;
//     place:string;
    
//     constructor (stdname:string,stdid:number,stdplace:string){
//         this.name = stdname;
//         this.id = stdid;
//         this.place = stdplace;
//     }
// stddetails():void{
//     console.log("The name of the student is", this.name);
//     console.log("the student id is", this.id);
//     console.log("The Place of the student is", this.place);
// }

// }
// const details = new Student("Swetha",987,"bangalore");
// details.stddetails();






//     // Class
//     class Holy{
//         name:string;
//         id:number;
//         place:string;
//         constructor(stdname:string,stdid:number,stdplace:string){
//             this.name = stdname;
//             this. id = stdid;
//             this.place = stdplace;
//         }
//         stddetails():void{
//             console.log('The name of the student is', this.name);
//             console.log('The student id is', this.id);
//             console.log('The place of the student is',this.place);
//         }
//     }
// const stdValue = new Holy ("swetha",123,"chennai");
// stdValue.stddetails();


// class with optional and readonly method
class room{
    readonly stdname:string;
    stdid:number;
    stdplace?:string;
    constructor (readonly name:string,id:number,place?:string){
        this.stdname = name;
        this.stdid = id;
        this.stdplace = place;
    }
    stddetails():void{
        console.log("The name of the student is",this.stdname);
        console.log("The Student id is",this.stdid);
        console.log("The place of the student is",this.stdplace);
        
    }
}
const value = new room ("Swetha",964,"Chennai");
value.stddetails();// one step is missing

class parents{
    land():void{
        console.log("8 acres");
    }
    gold():void {
        console.log("0.5kg gold");
    }
    house():void{
        console.log("two houses");
    }
}
class child extends parents {
    car():void{
        console.log("BENZ");
    }
    land():void{
        console.log("82 acres");
    }
    gold():void{
        console.log("2 lakhs");
    }
    house():void{
        console.log("one house");
    }

}
const details = new child ();
details.car();
details.land();
details.gold();
details.house();