"use strict";
exports.__esModule = true;
var MongoConnectorFactory_1 = require("./MongoConnectorFactory");
MongoConnectorFactory_1.MongoDriverFactory.build()
    .then(function (datastore) {
    var task = { 'text': 'If this works then i understand',
        'completed': false };
    datastore.createTask(task);
    datastore.deleteCategory('5c1be6c497feeb299e323295');
})["catch"](function (e) {
    throw e;
});
/*export class useApp{
  constructor(private connector: MongoDriver){

  }
  getTasks(){s
    console.log('this ran successfully')
    return this.connector.listTasks()
  }
}*/ 
