"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var tasks_component_1 = require("./tasks/tasks.component");
var categories_component_1 = require("./categories/categories.component");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var my_dialog_component_1 = require("./my-dialog/my-dialog.component");
var category_dialog_component_1 = require("./category-dialog/category-dialog.component");
var update_dialog_component_1 = require("./update-dialog/update-dialog.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                sidebar_component_1.SidebarComponent,
                tasks_component_1.TasksComponent,
                categories_component_1.CategoriesComponent,
                my_dialog_component_1.MyDialogComponent,
                category_dialog_component_1.CategoryDialogComponent,
                update_dialog_component_1.UpdateDialogComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatDialogModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            entryComponents: [
                my_dialog_component_1.MyDialogComponent, category_dialog_component_1.CategoryDialogComponent, update_dialog_component_1.UpdateDialogComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map