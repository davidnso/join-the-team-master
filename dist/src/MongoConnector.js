"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var MongoDriver = /** @class */ (function () {
    function MongoDriver(client) {
        this.client = client;
        this.tasks = client.db('task-service').collection('tasks');
        this.categories = client.db('task-service').collection('categories');
    }
    /**
     * Destroy connection to the database
     *
     * @memberof MongoDriver
     */
    MongoDriver.prototype.disconnect = function () {
        this.client.close();
    };
    /**
     * Inserts a given task into the database
     *
     * @param {*} task to be inserted into the database
     * @returns
     * @memberof MongoDriver
     */
    MongoDriver.prototype.createTask = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tasks.insertOne(task)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.insertedId.toHexString().toString()];
                }
            });
        });
    };
    /**
     * Retrieves a task from the database
     *
     * @param {string} id of the task to retrieve
     * @returns
     * @memberof MongoDriver
     */
    MongoDriver.prototype.readTask = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tasks.findOne({ _id: new mongodb_1.ObjectID(id) })];
                    case 1:
                        task = _a.sent();
                        return [2 /*return*/, task];
                }
            });
        });
    };
    /**
     * Modifies a task in the database by overwriting it with the given task
     *
     * @param {*} task the task to modify, must contain an id representing a task that currently exists in the database
     * @memberof MongoDriver
     */
    MongoDriver.prototype.updateTask = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tasks.updateOne({ _id: new mongodb_1.ObjectID(task._id) }, { $set: __assign({}, task) })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lists all tasks in the database
     *
     * @returns
     * @memberof MongoDriver
     */
    MongoDriver.prototype.listTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tasks.find({}).toArray()];
                    case 1:
                        tasks = _a.sent();
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    /**
     * Deletes a task
     *
     * @param {*} id of the task to delete
     * @memberof MongoDriver
     */
    MongoDriver.prototype.deleteTask = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tasks.deleteOne({ _id: new mongodb_1.ObjectID(id) })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Crates a new category in the database
     *
     * @param {string} name the name of the new category
     * @returns
     * @memberof MongoDriver
     */
    MongoDriver.prototype.createCategory = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categories.insertOne({ name: name })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.insertedId.toHexString().toString()];
                }
            });
        });
    };
    /**
     * Lists all categories in the database
     *
     * @returns
     * @memberof MongoDriver
     */
    MongoDriver.prototype.listCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categories.find({}).toArray()];
                    case 1:
                        categories = _a.sent();
                        return [2 /*return*/, categories];
                }
            });
        });
    };
    /**
     * Retrieves a category from the database
     *
     * @param {string} id of the category to retrieve
     * @returns
     * @memberof MongoDriver
     */
    MongoDriver.prototype.readCategory = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categories.findOne({ _id: new mongodb_1.ObjectID(id) })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Modifies a category's name in the database
     *
     * @param {string} categoryId the id of the category in the database
     * @param {string} name the new name of the category
     * @memberof MongoDriver
     */
    MongoDriver.prototype.updateCategory = function (categoryId, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categories.updateOne({ _id: new mongodb_1.ObjectID(categoryId) }, {
                            $set: { name: name }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Adds a list of existing tasks to an existing category
     *
     * @param {string} categoryId the id of the category in which to add the task
     * @param {string[]} taskList a list of task ids to add to the category
     * @memberof MongoDriver
     */
    MongoDriver.prototype.addTasksToCategory = function (categoryId, taskList) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categories.updateOne({ _id: new mongodb_1.ObjectID(categoryId) }, { $push: { tasks: { $each: taskList.map(function (taskId) { return new mongodb_1.ObjectID(taskId); }) } } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Removes a list of existing tasks from an existing category
     *
     * @param {string} categoryId the id of the category from which to remove the tasks
     * @param {string[]} taskList a list of task ids to add to the category
     * @memberof MongoDriver
     */
    MongoDriver.prototype.removeTasksFromCategory = function (categoryId, taskList) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categories.updateOne({ _id: new mongodb_1.ObjectID(categoryId) }, { $pull: { tasks: { $each: taskList.map(function (taskId) { return new mongodb_1.ObjectID(taskId); }) } } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes a category from the database
     *
     * @param {string} id of the category to delete
     * @memberof MongoDriver
     */
    MongoDriver.prototype.deleteCategory = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categories.deleteOne({ _id: new mongodb_1.ObjectID(id) })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return MongoDriver;
}());
exports.MongoDriver = MongoDriver;
//# sourceMappingURL=MongoConnector.js.map