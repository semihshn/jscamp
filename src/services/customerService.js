import BusinessRules from "../core/utilities/businessRules.js";
import CustomerDao from "../dataAccess/customerDao.js";
import UserService from "./userService.js";

export default class CustomerService {
  constructor(loggerService,customerDao) {
    this.customerDao = customerDao
    this.loggerService = loggerService;
    this.userService = new UserService();
    this.businessRules = new BusinessRules();
  }

  add(customer) {
    let result = this.businessRules.run(
      this.userService.checkUserValidityForErrors(
        customer,
        "id",
        "firstName",
        "lastName",
        "age",
        "city"
      ),
      this.userService.checkOfAge(customer)
    );

    if (!result) {
      return result;
    }else {
        this.customerDao.add(customer);
        this.loggerService.log(customer.firstName);
    }
  }

  listCustomers() {
    return this.customerDao.getAll();
  }

  getCustomerById(id) {
    return this.customerDao.getAll().find((u) => u.id === id);
  }

  getCustomersSorted() {
    return this.customerDao.getAll().sort((customer1, customer2) => {
      if (customer1.firstName > customer2.firstName) {
        return 1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }
}
