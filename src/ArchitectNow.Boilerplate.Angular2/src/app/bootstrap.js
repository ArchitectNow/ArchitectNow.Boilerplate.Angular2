"use strict";
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var routes_1 = require("./routes");
var forms_1 = require("@angular/forms");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    routes_1.APP_ROUTER_PROVIDERS,
    routes_1.APP_BASE_PROVIDERS,
    forms_1.provideForms()
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=bootstrap.js.map