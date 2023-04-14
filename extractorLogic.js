const { read } = require('fs');


const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class Employee{
    constructor(id, name){
        this._id = id
        this._name = name
    }

    toString(){
        return `Id : ${this._id} Name : ${this._name} `;
    }
}
let map = new Map();
// function readInput(str){    
//     return  readLine.question(str, name=>{
//         if(name.includes("!")){
//             readLine.close()
//             return '' 
//         }            
//         readLine.close()
//         return name
//     });
    
// }


const readInput = async()=>{
    const response = await read
}

let response=readInput("Enter the name ")
console.log("Response"+ response)


// console.log(map)



// [
//     [k][v]
//     []
// ]


// {    }


// /// ----------
// class Row {
//     _srNo
//     _ext 
//     _misc 
//     _jun 
//     _directoryNo
//     _date
//     _time 
//     _duration
//     _billAmt
//     _acc 
//     _flag
//     constructor(srNo, ext,misc, jun, directoryNo, date,time ,duration,billAmt,acc ,flag){
//             this._srNo=srNo

//     }
//     toCsvString(){

//     }
//     toArray(){

//     }
//     toObject(){

//     }
// }

// class Person {
//     #firstName
//     #lastName
//     constructor(firstName, lastName){
//         this.#firstName=firstName
//         this.#lastName= lastName
//     }

//     toString() {
//         return `{firstName : ${this.#firstName}, lastName : ${this.#lastName} }`;
//    } 
// }


// //  Rest vs Spread 

// // names= [
// //     "Don",
// //     "Alex",
// //     "Bob",
// // ]


// // function getData(firstFriend,second, ... otherFrnds){
// //     console.log(`First One is ${firstFriend} the sond is also here as ${second} while others are ${otherFrnds}` )
// // }
// // console.log(...names)
// // getData("aaaaa","bbbbb","cccc","dddddd","eeeee4e","fff")

// // function getValidRow(row){
// //     let cols = row.split(/\s+'/)
// //     switch (cols.length){
// //         case 8:
// //         {
// //             break
// //         }
// //         case 9:
// //         {
// //             break
// //         }
// //         case 10:
// //         {
// //             break
// //         }
// //         default :
// //         console.log("Skipped as not valid"+ row)
// //     }
// // }