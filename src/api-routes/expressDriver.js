"use strict";
exports.__esModule = true;
var exp = require("express");
var body = require("body-parser");
var main_page_1 = require("./main-page");
var task_controller_1 = require("./task-controller");
var categories_controller_1 = require("./categories-controller");
var app = exp();
var expressDriver = /** @class */ (function () {
    function expressDriver() {
    }
    expressDriver.startDriver = function () {
        app.listen(4000);
        app.use(body.json());
        //get the welcome page..
        app.get('/', main_page_1.mainPage);
        //get the tasks list...
        app.get('/api/tasks', task_controller_1.getTasks);
        //post tasks to DB
        app.post('/api/tasks', task_controller_1.postTasks);
        //delete task from DB
        app["delete"]('/api/tasks/:_id', task_controller_1.deleteTask);
        //update task in DB 
        app.put('/api/tasks/:_id', task_controller_1.updateTask);
        //get categories
        app.get('/api/categories', categories_controller_1.getCategories);
        //post categories
        app.post('/api/categories', categories_controller_1.postCategory);
        //delete categories
        app["delete"]('/api/categories/:_id', categories_controller_1.deleteCategory);
        //update category 
        app.put('/api/categories/:_id', categories_controller_1.updateCategory);
        //add tasks to category
        app.patch('/api/categories/:_id', categories_controller_1.addTaskstoCategory);
        //remove tasks from category
        app["delete"]('/api/categories/update/:_id', categories_controller_1.removeTasksFromCategory);
    };
    return expressDriver;
}());
exports.expressDriver = expressDriver;
