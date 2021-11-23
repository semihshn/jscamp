import { BaseLogger } from "./baseLogger.js";

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic : " + data)
    }
}