export default class Employee{
    constructor(id, name, age, email,contact){
        this._id=parseInt(id)
        this._name=name
        this._age=parseInt(age)
        this._email=email
        this._contact= contact        
    }

    toString(){
        return `Id:${this._id}|Name:${this._name}|Age:${this._age}|Contact:${this.contact}|Email:${this._email}`;
    }
}