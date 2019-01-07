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
var data_service_1 = require("../data.service");
var material_1 = require("@angular/material");
var my_dialog_component_1 = require("../my-dialog/my-dialog.component");
var http_1 = require("@angular/common/http");
var update_dialog_component_1 = require("../update-dialog/update-dialog.component");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(data, dialog, http) {
        this.data = data;
        this.dialog = dialog;
        this.http = http;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getCategories().subscribe(function (data) { return _this.Categories$ = data; });
    };
    CategoriesComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(my_dialog_component_1.MyDialogComponent, {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    CategoriesComponent.prototype.openUpdateDialog = function (id) {
        var dialogRef = this.dialog.open(update_dialog_component_1.UpdateDialogComponent, {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    CategoriesComponent.prototype.deleteTask = function (id) {
        // const url = "http://localhost:3000/tasks/"+id; 
        //document.write(url);
        this.data.deleteThisTask(id).subscribe();
        window.location.reload();
        // this.http.delete('http://localhost:3000/tasks/'+id)
        //console.log(id)
    };
    CategoriesComponent.prototype.deleteThisCategory = function (id) {
        console.log(id);
        this.data.deleteCategory(id).subscribe();
        window.location.reload();
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'app-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.scss']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, material_1.MatDialog, http_1.HttpClient])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map