import BusinessRules from "../core/utilities/businessRules.js"
import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
import CustomerService from "./customerService.js"
import EmployeeService from "./employeeService.js"

export default class UserService{
    constructor(loggerService) {
        this.users = []
        this.errors = []
        this.loggerService = loggerService
    }

    add(user) {

        result=BusinessRules.run(
            checkUserValidityForErrors(user,"id","firstName","lastName","age","city"),
                this.checkOfAge(user))

        if (result) {
            return result;
        }
            
        this.users.push(user)
        this.loggerService.log(user.firstName)
    }

    checkUserValidityForErrors(user,...requiredFields) {
        let hasErrors = false
        requiredFields.map(field=>{
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} is required`, user))
            }
        })

        return hasErrors
    }

    checkOfAge(user){
        if (Number.isNaN(Number.parseInt(+user.age))) {
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
            return true
        }
        return false
    }

}