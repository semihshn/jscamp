import BusinessRules from "../core/utilities/businessRules.js";
import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import UserService from "./userService.js";

export default class EmployeeService {
  constructor(loggerService) {
    this.employees = [];
    this.loggerService = loggerService;
    this.userService = new UserService();
    this.businessRules = new BusinessRules();

    users.map((u) => {
      if (u.type === "employee") {
        this.employees.push(u);
      }
    });
  }

  add(employee) {
    let result = this.businessRules.run(
      this.userService.checkOfAge(employee),
      this.userService.checkUserValidityForErrors(
        employee,
        "id",
        "firstName",
        "lastName",
        "age",
        "city",
        "salary"
      )
    );

    if (result) {
      return result;
    }

    this.employees.push(employee);
    this.loggerService.log(employee.firstName);
  }
}
