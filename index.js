import { createInterface} from 'readline';

const readLine = createInterface({
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
const readLineAsync = msg =>{
    return new Promise(resolve=>{
      readLine.question(msg, userEntry=>{
        resolve(userEntry);
      })
    })
}

const readInput = async()=>{
    const response = await readLineAsync("Please enter something !");
    readLine.close()
    console.log("The Response was "+ response);
}
readInput()



// function readInput(str){    
//     return  readLine.question(str, name=>{
//         if(name.includes("!")){
//             readLine.close()
//             return '' 
//         }            
//         readLine.close()
//         return name
//     })
// }






// let response=readInput("Enter the name ")
// console.log("Response"+ response)




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


// const fs = require("fs");

// function getCallDurations(data) {
//     const calls = new Map();

//     data.forEach(call => {

//         const dir = call.dir;
//         const [mins, seconds] = call.duration.split(":");

//         const timeSec = (parseInt(mins) * 60) + parseInt(seconds);

//         if (calls.has(call.ext)) {
//             const dirMap = calls.get(call.ext);

//             if (dirMap.has(dir)) {
//                 dirMap.set(dir, dirMap.get(dir) + timeSec);
//             } else {
//                 dirMap.set(dir, timeSec);
//             }
//         } else {
//             const dirMap = new Map();
//             dirMap.set(dir, timeSec);

//             calls.set(call.ext, dirMap);
//         }
//     });

//     return calls;
// }

// function testFileRead() {
//   const callBackFileRead = (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//    // console.log(`The Shape of Data ${data} \n The data as below : `);
    
//     //const rows = data
//     data
//       .trim()
//       .split("\n")
//       .map((row) => {
//         let rowda=row.split(/\s+/)
//         console.log(getCallDurations(rowda))
//       });

      
// // console.log(rows)
//     // const worksheet = XLSX.utils.aoa_to_sheet(rows);
//     // const workbook = XLSX.utils.book_new();
//     // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     // XLSX.writeFile(workbook, "output.xlsx");
//   };

//   fs.readFile("0912.TXT", "utf8", callBackFileRead);
// }

// testFileRead();