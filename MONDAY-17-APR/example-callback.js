// let data=(resonse=>{
//     secondAPI(response, next=>{
//         thirdAPI(final=>{
//                 console.log("Third APi call "+ final)
//         })
//     })
// })


// data()
// difference between callbacks and promises ?

//  What are promises ?

// is verymuch similar to the promise in reallife 

// states --> 1 Pending, 2 Resolved (good)  3. rejected 
// fetch('some URL')
// .then(response=> console.log(response))
// .catch(error=>console.log(error))

// const infomation= function(){
//     console.log("2. This is something that is an example of delayed code execution"+ new Date())
// }

// console.log("1. demosntrationg the sequence before the call back !! " + new Date())
// // 1 second = 1000 ms 
// setTimeout(infomation, 3000)
// console.log("3. demosntrationg the sequence after the callback !! "+ new Date())

// // Async Programming 

// function print(someArgs){
//     someArgs()
// }


// function someMore(){
//     console.log("I am Inner One")
// }

// // they make sure that a function is not going to run before the task is completed,
// // but will run right after the task is completed 

// print(someMore)