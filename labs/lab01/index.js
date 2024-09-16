// console.log("Hello");

var prompt = require("prompt-sync")({sigint:true});

// var msg = prompt("Input your name: ");
// console.log("Hi",msg);

// ///-----------------------------------------------------
// var x=10;
// let y=12

// var z=x+y;
// console.log(z);
// console.log(y-x);
// console.log(x*y);
// console.log(x/y);
// console.log(Math.pow(10,3));

//---------------------------------------------------------

// var m = prompt("Input your mark: ")

// m = parseInt(m);
// switch(m){
//     case 75:
//         console.log("Very Good");
//         break;
//     case 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }


// if(m>=0 && m<=100){
//     if(m>75){
//         console.log("Very Good");
//     }else if(m>50){
//         console.log("Pass");
//     }else{
//         console.log("Fail");
//     }
    
// }else{
//     console.log("Invalid");
// }

//---------------------------------------------------
// for(var i=1;i<=5;i++){
//     console.log("i: ",i)
// }

// var j = 5;
// while(j>=1){
//     if(j==3){
//         break;
//     }
//     console.log("j: ",j);
//     j--;
// }

// var myCars=["BMW", "Ford", "Mazda"];
// // console.log(myCars);
// for( var i=0;i<myCars.length;i++){
//     console.log(myCars[i]);
// }

// function myFun1(){
//     console.log("Hello from myFun1");
// }
// myFun1();

// function myFun2(){
//     return "Hello from myFun2"
// }
// var ret=myFun2();
// console.log(ret);

// function myFun3(a, b){
//     return a+b;
// }
// console.log(myFun3(4,5));

//---------------------------------------------
var name = "Mohammed";
// console.log(name.length);
// for (var i=0;i<name.length;i++){
//     console.log(name.charAt(i));
// }

var str="How are you doing?";
var strArr=str.split(" ");
// for (var i=0;i<strArr.length;i++){
//     console.log(strArr[i]);
// }

// var part1=str.substring(4);
// console.log(part1);

// var part1=str.substr(4,3);
// console.log(part1);

// var str2=str.toUpperCase();
// console.log(str2);

// var str3=str.toLowerCase();
// console.log(str3);

// //let and var

// const pi=3.14

//----------------
//EXERCISE 1
// function capitalize(str) {
//     return str.split(' ').map(x => {
//       return x.charAt(0).toUpperCase() + x.slice(1);
//     }).join(' ');
//   }
  
//   let test1 = "capitalize this sentence";
//   let capitalized = capitalize(test1);
  
//   console.log(capitalized); 

//EX2
// function max(num1, num2, num3){
//     let maxNum = num1;
//     if(num2>maxNum){
//         maxNum = num2;
//     }

//     if(num3>maxNum){
//         maxNum = num3;
//     }

//     return maxNum
// }

// console.log(max (1,0,1));
// console.log(max (0,-10,-20));
// console.log(max (1000,510,440));

//EX3
// function right(str) {
    
//     let lastThree = str.slice(-3);
  
//     let notLastThree = str.slice(0, -3);
  
//     return lastThree + notLastThree;
// }

// console.log(right("Python"));
// console.log(right("JavaScript"));
// console.log(right("Hi"));

function angle_Type(angle){
    while(angle>0 && angle<=180){
        if(angle>0 && angle<90){
            return "Acute angle"
        }
        if(angle==90){
            return "Right angle"
        }
        if(angle>90 && angle<180){
            return "Obtuse angle"
        }
        if(angle==180){
            return "Straight angle"
        }
    }
}
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))
