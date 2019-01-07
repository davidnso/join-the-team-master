"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getTask = function () {
        return this.http.get('/api/tasks');
    };
    DataService.prototype.getCategories = function () {
        return this.http.get('/api/Categories');
    };
    DataService.prototype.deleteThisTask = function (id) {
        return this.http.delete('/api/tasks/' + id);
    };
    DataService.prototype.deleteGeneralTask = function (id) {
        return this.http.delete('/api/tasks/' + id);
    };
    DataService.prototype.addTask = function (input) {
        return this.http.post('/api/tasks/', {
            text: input,
            completed: false
        }).subscribe();
    };
    DataService.prototype.addCategory = function (input) {
        return this.http.post('/api/Categories/', {
            name: input,
            tasks: null
        }).subscribe();
    };
    DataService.prototype.deleteCategory = function (id) {
        return this.http.delete('/api/Categories/' + id);
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map