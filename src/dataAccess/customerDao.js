import { CUSTOMER } from "../data/types.js";
import { users } from "../data/users.js";

export default class CustomerDao {
    constructor(){
        this.customers = []

        users.map((u) => {
            if (u.type === CUSTOMER) {
              this.customers.push(u);
            }
          });
    }

    getAll(){
        return this.customers
    }

    add(customer){
        this.customers.push(customer);
    }
}