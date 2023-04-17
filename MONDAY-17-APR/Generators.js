// reading a book and left without a bookmark 

// this would emulate the pizza guy rining the door bell 
let someExternalcondition = true

function doSomething(){
    console.log("eeading chapter 1")
    console.log("now chapter 2")
    if(someExternalcondition){
        return "taking the pizza delivery"   
    }
    console.log("excercise")
    console.log("about to finish")
}

// in this contrast the generators are the functions those can be or they are capabale of being stopped and 
// continue again and they do not start from beigining they resume from where they left last time 

// is a function thet produces the sequenc eof reasults instead of a single value that is shown as of above example 

function * doGenerator(){  // this esterik denotes that it is a generator 
    console.log("reading chapter 1")
    yield 'bookmark 1'
    console.log("now chapter 2")
    yield 'bookmark 2'
    console.log("excercise")
    yield "taking the pizza delivery"   
    console.log("about to finish")
}

const generatorObj = doGenerator()
console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)
// console.log(generatorObj.next().value)

