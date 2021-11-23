import BusinessRules from "../core/utilities/businessRules.js";
import EmployeeDao from "../dataAccess/employeeDao.js";
import UserService from "./userService.js";

export default class EmployeeService {
  constructor(loggerService,employeeDao) {
    this.employeeDao=employeeDao
    this.loggerService = loggerService;
    this.userService = new UserService();
    this.businessRules = new BusinessRules();
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
    )

    if (!result) {
      return result;
    }else {
        this.employeeDao.add(employee);
        this.loggerService.log(employee.firstName);
    }
  }

  listEmployees() {
    return this.employeeDao.getAll();
  }

}
