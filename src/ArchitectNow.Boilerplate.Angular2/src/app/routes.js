"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./features/home/home.component");
exports.routes = [
    { path: 'index.html', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: home_component_1.HomeComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes, { enableTracing: true })
];
exports.APP_BASE_PROVIDERS = [];
//# sourceMappingURL=routes.js.map