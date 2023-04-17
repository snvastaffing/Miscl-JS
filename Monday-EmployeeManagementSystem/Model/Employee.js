export default class Employee{
    constructor(id, name, age, email, password){
        this._id=parseInt(id)
        this._name=name
        this._age=parseInt(age)
        this.email=email
        this.password=password
    }
}