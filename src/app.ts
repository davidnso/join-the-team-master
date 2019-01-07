import { MongoDriverFactory } from "./MongoConnectorFactory";
import * as exp from "express";

import {expressDriver} from './api-routes/expressDriver';
const Driver = expressDriver;
var app = exp(); 
var myData; 

app.listen(3000);
MongoDriverFactory.build()
  .then( (datastore) => {
  Driver.startDriver();
  myData = datastore
  })
  .catch(e => {
    throw e;
  });
export {myData}
 