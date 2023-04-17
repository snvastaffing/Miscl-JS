
import readLineAsync from "./Utils/ReadUtils"

// define the start point of the program 

const displayUserMenu =()=>{
    console.log("========================Main Menu=========================")
    console.log("1. To add an Employee")
    console.log("2. View Employee By Id ")
    console.log("3. View Employee By Email")
    console.log("4. View Employee by name")
    console.log("5. To add an Employee")
    console.log("press ~ to exit")
}

const main=async ()=>
    displayUserMenu();
    const userOpt = await readLineAsync('Please enter the choice from above menu !')
    // here we will perfrom the check that the value should pe proper and validated 
    while(isValidStringUserOptions(userOpt)){
        switch(userOpt){
            case "1":
                console.log("Addingf the employee")
                    // here call the add logic 
                break;
            case "2":
                    // here call the add logic 
                    console.log("finding the employee by Id")
                break;
            default :
                break;
        }
    }
    // read thew input to proceed further 

main()