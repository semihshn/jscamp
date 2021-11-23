import { users } from "../data/users.js";

export default class UserDao {
    constructor(){
        this.users = users
    }

    getAll(){
        return this.users
    }
}