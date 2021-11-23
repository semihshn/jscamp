import { EMPLOYEE } from "../data/types.js";
import { users } from "../data/users.js";

export default class EmployeeDao {
    constructor(){
        this.employees = [];

        users.map((u) => {
            if (u.type === EMPLOYEE) {
              this.employees.push(u);
            }
          });
    }

    getAll(){
        return this.employees
    }

    add(employee){
        this.employees.push(employee);
    }
}