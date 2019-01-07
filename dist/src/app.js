"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MongoConnectorFactory_1 = require("./MongoConnectorFactory");
var exp = require("express");
var body = require("body-parser");
var expressDriver_1 = require("./api-routes/expressDriver");
var Driver = expressDriver_1.expressDriver;
var app = exp();
app.use(body.json());
app.listen(3000);
MongoConnectorFactory_1.MongoDriverFactory.build()
    .then(function (datastore) {
    Driver.createDriver(datastore);
})
    .catch(function (e) {
    throw e;
});
//# sourceMappingURL=app.js.map