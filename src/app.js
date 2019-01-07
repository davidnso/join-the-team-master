"use strict";
exports.__esModule = true;
var MongoConnectorFactory_1 = require("./MongoConnectorFactory");
var exp = require("express");
var expressDriver_1 = require("./api-routes/expressDriver");
var Driver = expressDriver_1.expressDriver;
var app = exp();
var myData;
exports.myData = myData;
app.listen(3000);
MongoConnectorFactory_1.MongoDriverFactory.build()
    .then(function (datastore) {
    Driver.startDriver();
    exports.myData = myData = datastore;
})["catch"](function (e) {
    throw e;
});
