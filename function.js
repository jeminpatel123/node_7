




// let fun_one = (arg1, arg2, arg3) => {
//   console.log(arg1, arg2, arg3);
// };
// fun_one("Angular13", "NodeJS", "MongoDB");
// fun_one("ReactJS", "NodeJS", "MongoDB");
// fun_one("VueJS", "NodeJS", "MongoDB");
// fun_one();
// fun_one(undefined, "Hello_2");
// fun_one(null, null, null);

// let fun_one = () => {
//   return "Hello";
// };
// console.log(fun_one);

// let fun_one = () => {
//   return () => {
//     return () => {
//       return "Hello";
//     };
//   };
// };
// console.log(fun_one()()());

// let fun_one = (arg1, arg2, arg3) => {
//   console.log(arg1(), arg2(), arg3());
// };
// fun_one(
//   () => {
//     return "Hello_1";
//   },
//   () => {
//     return "Hello_2";
//   },
//   () => {
//     return "Hello_3";
//   }
// );
// fun_one(
//   () => "Hello_1",
//   () => "Hello_2",
//   () => "Hello_3"
// );

// default parameters in functions
// *******************************
//     while defining the functions, we will initilize arguments with default values
//     this concept introduced in ES6

// function fun_one(arg1 = "Hello_1", arg2 = "Hello_2", arg3 = "Hello_3") {
//   console.log(arg1, arg2, arg3);
// }
// fun_one();
// fun_one("H_1", "H_2", "H_3");
// fun_one("Welcome_1", "Welcome_2", "Welcome_3", "Welcome_4");
// fun_one(undefined, undefined, undefined);
// fun_one(null, null, null);
// fun_one(undefined, undefined, "H_3");

// function fun_one(arg1,arg2="hello_2"){
//     console.log( arg1, arg2 );
// }
//fun_one();
//fun_one("hello_1");
//fun_one(undefined,undefined);
// fun_one(null,null);

// rest parameters in functions
// ****************************
//     by using rest parameter, we can hold/store more than one value
//     ES6
//     we will represent rest parameter with "..." operator
//     "..." operator called as spread operator
//     we can have only "one" spread operator per function
//     position of spread operator should be last in occurances

// function fun_one(...arg1) {
//   console.log(arg1);
// }
// fun_one();
// fun_one("Hello_1");
// fun_one("Hello_1", "Hello_2");
// fun_one("Hello_1", "Hello_2", "Hello_3");
// fun_one(undefined, undefined);
// fun_one(undefined, null);

// function fun_one(...arg1,...arg2){

// };

// function fun_one(...arg1,arg2){}

// function fun_one(arg1, arg2 = "Hello_2", ...arg3) {
//   console.log(arg1, arg2, arg3);
// }
// fun_one();
// fun_one("Hello_1", undefined, "Hello_3", "Hello_4");
// fun_one(undefined, undefined, undefined);
// fun_one(null, null, null);

// constructor functions
// *********************
//     collection of variables and functions called as class
//     in javascript we will create classes by using constructor functions
//     in constructor functions all the members should start with "this" keyword
//     we can create object by using new keyword

// function class_one(){
//     this.var_one = "Hello_1";
//     this.var_two = "Hello_2";
//     this.var_three = "Hello_3";
// }
// let obj = new class_one();
// console.log( obj.var_one, obj.var_two, obj.var_three );

// function class_one(arg1,arg2,arg3){
//     this.var_one = arg1;
//     this.var_two = arg2;
//     this.var_three = arg3;
// }
// let obj1 = new class_one("Angular","NodeJS","MongoDB");
// console.log( obj1.var_one, obj1.var_two, obj1.var_three );
// let obj2 = new class_one("ReactJS","NodeJS","MongoDB");
// console.log( obj2.var_one, obj2.var_two, obj2.var_three );

// function class_one(){
//     this.fun_one = function(){
//         return "hello_1";
//     }
//     this.fun_two = function(){
//         return "hello_2";
//     }
//     this.fun_three = function(){
//         return "hello_3";
//     }
// }
// let obj = new class_one();
// console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );

// function class_one(){
//     this.var_one = "hello_1";
//     this.fun_one = function(){
//         return this.var_one;
//     }
// }
// let obj = new class_one();
// console.log( obj.fun_one() );

// function class_one(){
// };
// class_one.prototype.var_one = "Hello_1";
// class_one.prototype.var_two = "Hello_2";
// class_one.prototype.var_three = "Hello_3";
// let obj = new class_one();
// console.log( obj.var_one, obj.var_two, obj.var_three );

// function class_one(){
// };
// class_one.prototype.var_one = "Hello_1";
// class_one.prototype.fun_one = function(){
//     return "Hello_2";
// }
// let obj = new class_one();
// console.log( obj.var_one, obj.fun_one() );

// function class_one(){
// };
// class_one.prototype.var_one = "Hello_1";
// function class_two(){
// }
// class_two.prototype = Object.create(class_one.prototype);
// class_two.prototype.var_two = "Hello_2";
// let obj = new class_two();
// console.log( obj.var_one, obj.var_two );

// function Parent(){
// };
// Parent.prototype.fun_one = function(){
//     return "Parent";
// }
// function Child(){
// }
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.fun_two = function(){
//     return "Child";
// }
// function Subchild(){
// }
// Subchild.prototype = Object.create(Child.prototype);
// Subchild.prototype.fun_three = function(){
//     return "Subchild";
// }
// let obj = new Subchild();
// console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
//Parent Child Subchild

// IIFE
// ****
//     Immidiate Invokable Functional Expression
//     ES9
//     when ever we create the functions, automatically it will be invoked
//     Syntax
//     ******
//     ((arg1,arg2,arg3,....argn)=>{
//         business logic
//     })(param1,param3,param3,....paramn);

// let a = [12];
// console.log(a);

// a.push(() => {
//   console.log("IIFE");
// });

// console.log(a[1]());
// //IIFE

// ((arg1, arg2, arg3) => {
//   console.log(arg1, arg2, arg3);
// })("Hello_1", "Hello_2", "Hello_3");
// //Hello_1 Hello_2 Hello_3

// let x = () => {
//   return "hello";
// };
// console.log(x());

// ((arg1, arg2, arg3) => {
//   console.log(arg1(), arg2, arg3);
// })(
//   () => {
//     return "hello_1";
//   },
//   (() => {
//     return "hello_2";
//   })(),
//   (() => {
//     return "hello_3";
//   })()
// );

// setTimeout(()=>{
//     console.log("Hello");
// },5000);

// for(var i=0;i<5;i++){
//     ((i)=>{
//         setTimeout(()=>{
//             console.log(i);
//         },5000)
//     })(i);
// }

// Generators
// **********
//     - Generators "controls" the "flow" of execution
//     - Generator functions prefix with "*"
//     - all the statements in functions prefix with "yield" keyword
//     - ES9
//     - Generators returns "cursor" mechanism
//     - through "cursor", we will control "flow" of execution

// function *fun_one(){
//     yield "hello_1";
//     yield "hello_2";
//     yield "hello_3";
//     yield "hello_4";
//     yield "hello_5";
// }
// let cursor = fun_one();
// console.log( cursor.next() );
// console.log( cursor.next() );
// console.log( cursor.next() );
// console.log( cursor.next() );
// console.log( cursor.next() );
// console.log( cursor.next() );

// function *fun_one(){
//     yield "Hello_1";
// }
// function *fun_two(){
//     yield "Hello_2";
// }
// function *main(){
//     yield *fun_one();
//     yield *fun_two();
//     yield "Hello_3";
// }
// let cursor = main();
// for(let i=0;i<3;i++){
//     console.log( cursor.next() );
// }

// optional parameters in functions
// ********************************
//     - while calling the functions, we can make few parameters are optional
//     - ES6
//     - we can represent optional parameters with "?"
//     - optional parameters won't work in "javascript" environment
//     - optional parameters will work in typescript environment
//     - typescript is the programming language
//     - typescript relesed by microsoft
//     - typescript follows the OOPS
//     - extension of typescript files ".ts"
//     - browsers can't understand typescript
//     - so, we need to convert typescript to equalent javascript
//     - conversion from typescript to equalent javascript called as transpilation
//     - "tsc" is the tool, used to perform the transpilation
//     - "tsc" stands for typescript compiler
//     installation
//     ************
//         typescript installation is command based installation
//         > npm install -g typescript
//         npm stands for node packaging manager
//         npm available in nodejs
//         -g stands for global installation
