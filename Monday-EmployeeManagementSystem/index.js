
import Employee from "./Model/Employee.js"
import readLineAsync from "./Utils/ReadUtils.js"
// import {uuidv4} from "uuid"
import { v4 as uuidv4 } from 'uuid';

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

const main= async()=>
    {
        displayUserMenu();
        let userOpt = await readLineAsync('Please enter the choice from above menu !')
        // here we will perfrom the check that the value should pe proper and validated 
        while(userOpt){
            switch(userOpt){
                case "1":
                    {
                        console.log("Addingf the employee")
                        let employee = new Employee(
                            uuidv4(),
                            await readLineAsync('Please enter the name'),
                            await readLineAsync('Please enter the age'),
                            await readLineAsync('Please enter the email'),
                            await readLineAsync('Please enter the contact ')  
                            );

                        console.log("Enterd data is "+employee)    
                        userOpt=false
                        break;
                    }
                case "2":
                        // here call the add logic 
                        console.log("finding the employee by Id")
                        userOpt=false
                    break;
                default :
                    break;
            }
        }
    }
    // read thew input to proceed further 

main()