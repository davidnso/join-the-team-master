import { MongoDriverFactory } from "./MongoConnectorFactory";
import {MongoDriver} from "./MongoConnector"
MongoDriverFactory.build()
  .then( (datastore) => {})
  .catch(e => {
    throw e;
  });
export class useApp{
  constructor(private connector: MongoDriver){

  }
  getTasks(){
    console.log('this ran successfully')
    return this.connector.listTasks()
  }
}