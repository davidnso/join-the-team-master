"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('workspace-project App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AppPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to taskApp!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map