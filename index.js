// // Normal JS function
// function sum(a, b) {
//     return a + b
// }

// console.log(sum(1, 2))

// // Arrow function
// const sum2 = (a,b) => {
//     return a+b
// }

// // console.log(sum2(2,9))

// // Variables 
// var a = 6
// var b = true
// let c = "Hello" // let means global variable 
// let _d = "jmd" // Allowed works 
// // var 9e = 11 // Not allowed variable name cannot start from a number 
// {
//     if (a>0) {
//         a += c 
//         let elf = 1.22
//         console.log(`In the if block elf: ${elf}`)
//     }
//     let edf = 1.52
//     console.log(`In the block edf: ${edf}`)
//     // console.log(`In the block elf: ${elf}`) // This statement does not work as the scope is limited to the if block
//     console.log(a)
// }
// // console.log(`Outside the block elf: ${elf}`) // Won't work as the scope is local to the block 
// // console.log(`Outside the block edf: ${edf}`) // Won't work as the scope is local to the if block
// console.log(a)
// const hell = 0
// // hell += 1  // Not allowed as a constant variable can never be changed once assigned 
// console.log(hell)
// // Typeof operator 
// console.log(typeof a, typeof b, typeof c)

// /*
// Primitive Data Types 
//     Null - nothing // typeof null is also given to as an object 
//     Number - 1,1.9,1000000,0, NaN(is a number)
//     String - "hello", "ababd"
//     Symbol 
//     Boolean - true , false
//     BigInt - bada integer 
//     Undefined - variable initialized but not defined any value 
// */

// let alo = 0
// let men = 9.77
// let op = true
// let qyu = "kaise ho"
// let aars = undefined
// let tea = NaN
// let uv = null
// let doblu = "*&^&^%"
// let exwhyzed = 20**100
// let babu = {
//     naam : "nahibataunga",
//     kon : "pyaar"
// }
// console.log(alo,men,op,qyu,aars,tea,uv,doblu,exwhyzed,babu)
// console.log(typeof alo,typeof men,typeof op,typeof qyu,typeof aars,typeof tea,typeof uv,typeof doblu,typeof exwhyzed,typeof babu)


// // Prime number code 

// const PrimeChecker = (input) => {
//     for (let i = 2; i < input; i++) {
//         if(input%i === 0){
//             console.log(`${input} is not Prime`)
//             return false
//         }
//     }
//     console.log(`${input} is Prime`)
//     return true
// }
// console.log(PrimeChecker(11))


// //  ``-> this is called backtic and this is used for template literals
// // template literal means ${} this is syntax is of template literals 

// // String manipulations

// /* strings are immutable means if one string is created it can not be changed all the operations performed will be performed but not on the original string  */
// const abc = "Hello            "

// console.log(abc.length)
// console.log(abc.toLocaleLowerCase())
// console.log(abc.toLocaleUpperCase())
// console.log(abc.slice(0,4)) //  ek kamm deta hai last se 
// console.log(abc.replace("l","a"))
// console.log(abc.indexOf("l",3)) //  gives -1 if the particular char is not present in the string
// console.log(abc.concat("hii","babu"))
// console.log(abc.trim()) // removes wide spaces

// alert("hello")
// let b = prompt("Hello");
// let isTrue = confirm("CONFIRM KARO");
// if (isTrue) {
//     console.log("True")
// } else {
//     console.log("False")
// }

// Var global scopped hota hai chahe ek block kai andar hi kyo naa use kara ho var ko still vo humesha globally 
// variable ko edit kar dega

// console.log("JMD")

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// students = {
//     "name": "ronak",
//     "marks": 8.36,
//     height: 6.2
// }

// for (const key in students) {
//     const element = students[key];
//     console.log(key + " : " + students[key])
// }

// let b = 80;
// var c = 9;

// let d = 0
// if (b > c) {
//     d = b - c;
// } else if (c > b) {
//     d = c - b;
// } else {
//     d = 0;
// }

// let e = b > c ? (b - c) : (c - b)
// console.log(d, e) 

// a = Math.random() * 100
// console.log(a)


/*
    Faulty Calculator 

    where,
    + -> -
    - -> /
    * -> +
    / -> **

    this calc does this mistake 10% of the times 
*/


// let input1 = Number(prompt("Enter first number: "));
// let input2 = Number(prompt("Enter second number: "));

// const faulty_Cal = (input1, input2) => {
//     if (Math.random() * 100 <= 10) {
//         let operatorr = prompt("Enter which operation is to be performed: ");
//         if (operatorr == "+") {
//             let result = input1 - input2;
//             console.log("inside<10 block and performed '-' operation.")
//             return result;
//         } else if (operatorr == "-") {
//             let result = input1 / input2;
//             console.log("inside<10 block and performed '/' operation.")
//             return result;
//         } else if (operatorr == "*") {
//             let result = input1 + input2;
//             console.log("inside<10 block and performed '+' operation.")
//             return result;
//         } else if (operatorr == "/") {
//             let result = input1 ** input2;
//             console.log("inside<10 block and performed '**' operation.")
//             return result;
//         }
//     } else {
//         let operatorr = prompt("Enter which operation is to be performed: ");
//         if (operatorr == "+") {
//             let result = input1 + input2;
//             console.log("inside>10 block and performed '+' operation.")
//             return result;
//         } else if (operatorr == "-") {
//             let result = input1 - input2;
//             console.log("inside>10 block and performed '-' operation.")
//             return result;
//         } else if (operatorr == "*") {
//             let result = input1 * input2;
//             console.log("inside>10 block and performed '*' operation.")
//             return result;
//         } else if (operatorr == "/") {
//             let result = input1 / input2;
//             console.log("inside>10 block and performed '/' operation.")
//             return result;
//         }
//     }
// }
// let ans = faulty_Cal(input1, input2);
// console.log(ans);


// let mah_name = "Ronak";

// console.log(mah_name)
// console.log(mah_name[0])
// console.log(mah_name[1])
// console.log(mah_name[2])
// console.log(mah_name[3])
// console.log(mah_name[4])
// console.log(mah_name[5])
// console.log(mah_name.length)
// console.log("My name is", mah_name)
// console.log(`My name is ${mah_name}`)



// let nickname = mah_name.slice(1)
// nickname = nickname.toUpperCase()
// console.log(nickname)
// console.log(nickname.toUpperCase())
// console.log(nickname.toLowerCase())
// console.log(nickname.replace("ak", "jmd"))
// console.log(nickname.concat("hello", "bruh", "kaiseHO"))

// let white_space = "     hello"
// console.log(white_space.trim())


/*
    random name generator by combining list of adjectives and shop name and another word 

    adjectives: 
        crazy 
        amazing 
        fire
    shop name: 
        engine 
        foods 
        garments
    another word:
        bruh
        chill 
        guy
    
*/

// const adjec = () => {
//     let var1 = "crazy";
//     let var2 = "amazing"; 
//     let var3 = "fire";

//     rand = Math.floor(Math.random()*3);

//     if(rand == 0){
//         return var1;
//     }
//     else if(rand == 1){
//         return var2;
//     }
//     else{
//         return var3;
//     }
// }

// const shop_name = () => {
//     let var1 = "engine";
//     let var2 = "foods"; 
//     let var3 = "garments";

//     rand = Math.floor(Math.random()*3);

//     if(rand == 0){
//         return var1;
//     }
//     else if(rand == 1){
//         return var2;
//     }
//     else{
//         return var3;
//     }
// }

// const another_word = () => {
//     let var1 = "bruh";
//     let var2 = "chill"; 
//     let var3 = "guy";

//     rand = Math.floor(Math.random()*3);

//     if(rand == 0){
//         return var1;
//     }
//     else if(rand == 1){
//         return var2;
//     }
//     else{
//         return var3;
//     }
// }

// let final_name = adjec()+shop_name()+another_word()
// console.log(final_name)

// Strings are immutable means that if we change a string all the changes are done in a new string and the original string is intacked 
// But arrays are mutable means that all the changes done on a array will reflect in the original array 


// let arr = [1,2,3,4,5,10]

// console.log(arr.length)
// arr[6] = 77
// arr[7] = 78
// arr[10] = 90
// console.log(arr)
// let arr2 = (arr.map((val,index,arr) => {
//     return val*val;
// }))
// console.log(arr2)

// console.log(arr.filter((val)=>{
//     return val>5 ? true:false 
// }))


// document.title = "ILOBE_____";

// let colours = ["red", "blue", "black", "green", "yellow"];
// let classBox = document.getElementsByClassName("box"); // gives an array 

// console.log(classBox);
// document.querySelector(".box").style.background = "red"; // returns the first element of the class
// classBox[2].style.background = "yellow";.

// console.log(document.querySelectorAll(".box")); // returns a nodelist means a list of all the divs of the selected class
// let qsaBox = document.querySelectorAll(".box");


// for (let i = 0; i < classBox.length; i++) {
//     let index = Math.floor(Math.random() * 5);
//     console.log(index);
//     classBox[index].style.background = colours[index];
// }

// qsaBox.forEach(e => {
//     e.style.color = "white"
// });

// let button = document.getElementById("btn");

// button.addEventListener("click", (e) => {
//     document.querySelector(".box2").innerHTML = "why did you click"
// })


// console.log("Jai Mata Di")
// console.log("JMD")

// setTimeout(() => {
//     console.log("hello")
// }, 2000);
// setTimeout(() => {
//     console.log("hello2")
// }, 1000);


// console.log("Hello world")

// Destructuring 

let arr = [1, 2, 3, 4, 5, 6]

let [a, b, ...rest] = arr

let obj = {
    aa: "hello",
    bb: "hello",
    cc: "hello",
    4: "hello"
}

let {
    aa,
    bb,
    ...rest1
} = obj
// arr.forEach(e => {
//     console.log(e)
// });


// console.log(a)
// console.log(b)
// console.log(rest)
// console.log(aa)
// console.log(bb)
// console.log(rest1)

const sum = (a, b, c, d) => {
    return a + b + c + d
}

// console.log(...obj["aa"])
// console.log(sum(...arr))


var abc = 7

{
    abc = 8
    console.log(abc)
}
console.log(abc)