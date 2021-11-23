import BusinessRules from "../core/utilities/businessRules.js";
import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import UserService from "./userService.js";

export default class CustomerService {
  constructor(loggerService) {
    this.customers = [];
    this.loggerService = loggerService;
    this.userService = new UserService();
    this.businessRules = new BusinessRules();

    users.map((u) => {
      if (u.type === "customer") {
        this.customers.push(u);
      }
    });
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

    if (result) {
      return result;
    }

    this.customers.push(customer);
    this.loggerService.log(customer.firstName);
  }

  listCustomers() {
    return this.customers;
  }

  getCustomerById(id) {
    return this.customers.find((u) => u.id === id);
  }

  getCustomersSorted() {
    return this.customers.sort((customer1, customer2) => {
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
