"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exp = require("express");
var app = exp();
var expressDriver = /** @class */ (function () {
    function expressDriver() {
        this.ExpressDriver;
    }
    expressDriver.createDriver = function (datastore) {
        app.get('/', function (req, res) {
            res.send('Welcome to the Task API!');
        });
        app.get('/api/tasks', function (req, res) {
            datastore.listTasks().then(function (tasks) {
                res.send(tasks);
                console.log('tasks should display');
            }).catch(function () {
                console.error('you messed up.');
            });
        });
        app.post('/api/tasks', function (req, res) {
            var task = req.body;
            datastore.createTask(task).then(function () {
                res.send('"it worked again... woo');
                console.log("it worked again... woo");
            }).catch(function () {
                console.log('try again.');
            });
        });
        app.delete('/api/tasks/:_id', function (req, res) {
            var id = req.params._id;
            datastore.deleteTask(id).then(function () {
                res.send('task deleted');
            }).catch((function () {
                res.send('it did not work.');
            }));
        });
        app.put('/api/tasks/:_id', function (req, res) {
            var update = req.body + req.params._id;
            var updateable = req.params.id;
            datastore.updateTask(update)
                .then(function () {
                res.send('Task updated.');
            }).catch(function () {
                res.send("Task not updated.");
            });
        });
        app.get('/api/categories', function (req, res) {
            datastore.listCategories().then(function (data) {
                res.send(data);
                console.log('Categories should be listed.');
            }).catch(function () {
                res.send("Categories not listed. ");
            });
        });
        app.post('/api/categories', function (req, res) {
            var Category = req.body;
            datastore.createCategory(Category)
                .then((function () {
                console.log(Category + ' Was added to the DB.');
            })).catch(function () {
                console.log('The category was not added. ');
                res.send('post categories not working.');
            });
        });
        app.delete('/api/categories/:_id', function (req, res) {
            var deleteThis = req.params._id;
            datastore.deleteCategory(deleteThis)
                .then(function () {
                console.log(deleteThis + 'was deleted');
                res.send('not deleted.');
            }).catch(function () {
                console.log('Category not deleted.');
                res.send('delete function not working');
            });
        });
        app.patch('/api/categories/:_id', function (req, res) {
            var updateID = req.params._id;
            var updateName = req.body;
            datastore.updateCategory(updateID, updateName)
                .then(function () {
                console.log(updateName + ' was added to the DB using ID#:' + updateID);
                res.send('category updated.');
            }).catch(function () {
                res.send('not updated.');
            });
        });
        app.patch('/api/categories/:_id', function (req, res) {
            var categoryID = req.params._id;
            var tasksList = req.body;
            datastore.addTasksToCategory(categoryID, tasksList)
                .then(function () {
                res.send(tasksList + 'was added to the category ' + categoryID);
                console.log('success');
            }).catch(function () {
                res.send(tasksList + ' Was not added to the category');
            });
        });
        app.delete('/api/categories/update/:_id', function (req, res) {
            var categoryID = req.params._id;
            var tasksList = req.body;
            datastore.removeTasksFromCategory(categoryID, tasksList)
                .then(function () {
                res.send(tasksList + ' was removed from the DB');
            }).catch(function () {
                res.send(tasksList + " was not removed from the DB");
            });
        });
    };
    return expressDriver;
}());
exports.expressDriver = expressDriver;
//# sourceMappingURL=expressDriver.js.map