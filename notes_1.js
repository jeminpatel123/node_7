// What is JavaScript?
// ->scripting language

// language
// 1. programming
    // c,c++.....
// 2. scripting
    // JS,VB
// 3. markup
    //  HTML - XML
    
//

//1-03-2023 ---------------------------------------
// var , let , const

// var a=10; // declare int
// var a="skillqode"    //string 
// // console.log(a); //undefined
// console.log(a);

// console.log(10+10);
// var a='30';
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(+a+ +b); //3020
// + concate
// console.log(a-b); 
// console.log(a*b); 
// console.log(a%b); 

/*
            var                                             let

    var keword introduced in "ES1"                let keyword introduced in "ES6"

    var keyword allows the duplicate              let keyword wont allows the duplicate
    variables                                     variables

    variable hoisting issue raised                we can overcome variable hoisting
    with var keywors                              with let keyword

    scope rule break by var keyword               let keyword obeys the scope rule

    global polluting issue raised                 we can overcome global polluting issue
    because of var keyword                        by using let keuword

*/

// let a=10; //globa;
// console.log(a);
// {
//     let a=100; //local
//     console.log(a);
// }
// console.log(a);

// var a=10; //globa;
// console.log(a);
// {
//     var a=100; //local
//     console.log(a);
// }
// console.log(a);

// const a; //'const' declarations must be initialized.
// const API_KEY=10;
// API_KEY=API_KEY*2; //TypeError : Assignment to constant variable.
// console.log(API_KEY);

// let a=10;
// let b='s';
// let c;
// c = a*b; //NaN - Not a Number
// console.log(typeof(c));

// ==  only value  
// ===   value + type  

// let val = 10n;
// console.log(typeof (val))
// let a;
// console.log(typeof (a))
// console.log(typeof (null))
// console.log(typeof (NaN))


// console.log(typeof "Hello");                  //string
// console.log(typeof 100);                      //number
// console.log(typeof true);                     //boolean
// console.log(typeof undefined);                //undefined
// console.log(typeof null);                     //object
// console.log(typeof []);                       //object
// console.log(typeof function () { });          //function
// console.log(typeof {});                       //object
// console.log(typeof 100n);                     //bigint
// console.log(typeof Symbol("Hello"));          //symbol
// console.log(typeof NaN);                      //Number

//undefined 
//null      
//NaN       

// console.log(undefined == undefined);
// console.log(undefined === undefined);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(null == null);
// console.log(null === null);

// console.log(undefined == NaN)
// console.log(undefined === NaN)

// console.log(undefined == null)
// console.log(undefined === null)

// console.log(NaN == null)
// console.log(NaN === null)



// 6-03-2023

//collection of "characters" called as "string"
//we will declare the string by using ""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) operator also called as "template literal"
//``(backtick) operator used to define the paragraphs (multiline strings)
// let my_string = `   C language
// C++
// javascript


// python
// react
// angular
// `
// console.log(my_string)
// let sub_one = "ReactJS";
// let sub_two = "NodeJS";
// let sub_three = "MongoDB";
// let mern_stack = `front end ${sub_one} , back end  .....${sub_two} , database ....${sub_three}`;
// console.log(mern_stack)
// let mern_stack =  "front end   " + sub_one + ", back end  " + sub_two + ", Database " + sub_three;
// console.log(mern_stack);



//boolean
//true / false
//true - 1
//false - 0

// var flag = true;
// var flag1 = false;


// console.log(flag);
// console.log(flag1);
// console.log(true + true); 
// console.log(true + false);
// console.log(1 + true); 
// console.log(1 / true); 
// console.log(true / true);
// console.log(true / false); 
// console.log(true / "A"); 

// -------------------------------------------------------------------------------
// 7/03/2023
// -------------------------------------------------------------------------------

//     function
//     ********
//         business logic called as function
//         functions are used to reuse the business logic
//         we have following types of functions upto "ES13"
//         1) named functions
//         2) anonymous functions
//         3) rest parameters in functions
//         4) default parameters in functions
//         5) optional parameters in functions
//         6) generators
//         7) constructor functions
//         8) IIFE  (Immidiate Invokable functional Expressions)


// named function
// **************
//     the function with the particular "name" called as named function
//     Syntax
//     ++++++
//     1) function definition
//     2) function calling

// function definition
// ------------------
//    function functionname(arg1,arg2,arg3,arg4,......argn){
//        business logic
//    }
// function calling
// ------------------
//    functionname(param1,param2,param3,param4,.....paramn);

// function fun_one(){
//      return "welcome to named functions";
// }
// console.log(fun_one());
// let str = fun_one();
// console.log(str);
// console.log(fun_one); //[Function: fun_one]




// function fun_one(arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
// }
// fun_one("Angular15","NodeJS","MongoDB"); 
// fun_one("ReactJS","NodeJS");
// fun_one();
// fun_one(undefined, "NodeJS");
// fun_one(null, null, null);


// 2 - pizza rule

// function fun_one() {
//   return "Hello";
// }
// function fun_two() {
//   return fun_one();
// }
// console.log(fun_two());

// function fun_one() {
//   return "Hello";
// }
// function fun_two() {
//   return fun_one;
// }
// console.log(fun_two()());


// function fun_one() {
//   return "Hello";
// }
// function fun_two() {
//   return fun_one;
// }
// console.log(fun_two()()); //fun_one()
// console.log(fun_two());


// ------------------------------

// square
// cube
// Real-Life-Example

// function fun_one(arg1, arg2, arg3) {
//   console.log(arg1(), arg2(), arg3());
// }
// function fun_two() {
//   return "Hello_1";
// }
// function fun_three() {
//   return "Hello_2";
// }
// function fun_four() {
//   return "Hello_3";
// }
// fun_one(fun_two, fun_three, fun_four);


// var fun_one = "Hello_1";
// var fun_one = function(){return "Hello_var"};

// function fun_one() {
//   return "Hello_2";
// }
// console.log(fun_one());



// function fun_one() {
//   return var_one;
// }
// console.log(fun_one());

// var var_one = "Hello_1";
// console.log(fun_one());

// function fun_one() {
//   var var_one = "Hello_1";
// }
// fun_one();
// console.log(var_one);

//     anonymous functions
//     *******************
//         - the function without name called as anonymous function
//         - anonymous functions also called as "arrow" functions/"lamda" functions/"callback" functions
//         - we will represent arrow functions with "=>"
//         - "=>" introduced in ES6

// 
// Syntax:
// ******
//     1) function definition
//     2) function calling
//     function definition
//     *******************
//     var/let/const variablename = (arg1,arg2,arg3,....argn)=>{
//         //business logic
//     }
//     function calling
//     ****************
//     variablename(param1,param2,param3,.....paramn);

//Arrow function
// let fun_one = () => {return "welcome to arrow functions fun_one() "};
// console.log(fun_one());

// let fun_two = () =>  "welcome to arrow functions fun_two()";
// console.log(fun_two());

// // Anonymous function
// let fun_three = function(){ return "hello" };
// console.log(fun_three());

// 13-03-2023
/*
    array
    *****
        collection of "elements" called as "array"
        index starts from "0"
        []
*/
// let arr = [10, 20, "thirty", 40, "50", 60, "70", 80, 90, 100];
// console.log(typeof arr);

// console.log(arr);
// console.log(arr[0]);
// console.log(arr['0']);

// Object - Key : value
// console.log(arr[3.0]);

// console.log(arr[3.1]);
// arr[3.1] = 45;
// console.log(arr[3.1]);
// console.log(arr);
// arr["A"] = 110;
// console.log(arr);

// console.log(arr[4][0]);
// console.log(arr.length);

// let arr = [10, 20, 30, 40, 50];
// console.log(arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr[-1]);
// console.log(arr[5], arr[100]);

//length
// The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.length);
let arr1 = [10, 20]; //
arr1[2] = 30;
console.log(arr1.length);
arr1[10] = 1000;
console.log(arr1.length);
console.log(arr1);
arr1[4] = 44;
arr1[6] = undefined;

console.log(arr1);


//delete
//delete the particular

// If you want an array element to exist but have an undefined value, use the undefined value instead of the delete operator.
// let b;

// let arr = [10, 20, 30, 40, 50];
// arr.length = 10;
// arr[2] = undefined;
// console.log(arr);
// console.log(arr[7]);

// console.log(arr.length);
// delete arr[4];
// console.log(arr.length);
// delete arr[0];
// arr[7] = undefined;
// arr[4] = undefined;
// delete arr[7];
// console.log(arr);
// console.log(arr[4] );
// console.log(arr[0] );
// console.log(arr[8]);
// console.log(arr);

//push()
//pop()
//unshift()
//shift()
// let arr = [20, 30, 40];
// console.log(arr);
// arr.push(50);
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

