"use strict";
exports.__esModule = true;
var mongodb_1 = require("mongodb");
var MongoConnector_1 = require("./MongoConnector");
var es6_promise_1 = require("es6-promise");
// Set the connection url based on the defaults provided
var url = 'mongodb://localhost:27017';
var MongoDriverFactory = /** @class */ (function () {
    function MongoDriverFactory() {
    }
    MongoDriverFactory.build = function () {
        return new es6_promise_1.Promise(function (resolve, reject) {
            mongodb_1.MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
                if (err)
                    reject(err);
                resolve(new MongoConnector_1.MongoDriver(client));
            });
        });
    };
    return MongoDriverFactory;
}());
exports.MongoDriverFactory = MongoDriverFactory;
