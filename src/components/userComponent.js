import { MongoLogger } from "../core/logging/mongoLogger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"
import Employee from "../models/employee.js"
import CustomerDao from "../dataAccess/customerDao.js"
import EmployeeDao from "../dataAccess/employeeDao.js"
import UserDao from "../dataAccess/userDao.js"

console.log("User component yüklendi")

let userService = new UserService(new MongoLogger(),new UserDao())
let customerService = new CustomerService(new MongoLogger(),new CustomerDao())
let employeeService = new EmployeeService(new MongoLogger(),new EmployeeDao())

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
// userService.add(user1)
// userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))




let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("--------------------------")


let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","26","123456");
customerToAdd.type = "customer"

let employeeToAdd = new Employee(1,"Semih","Şahan","Kahramanmaraş","22","3500");
employeeToAdd.type = "employee"

customerService.add(customerToAdd)
employeeService.add(employeeToAdd)
console.log(customerService.listCustomers())
console.log(employeeService.listEmployees())
console.log(userService.errors)
console.log(customerService.getCustomersSorted())
//22.00 Dersteyiz