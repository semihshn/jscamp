import { BaseLogger } from "./baseLogger.js";

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo : " + data)
    }
}