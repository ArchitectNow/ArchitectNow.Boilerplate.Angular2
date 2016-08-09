import { provideRouter, RouterConfig } from "@angular/router";
import { HomeComponent } from "./features/home/home.component";

export const routes: RouterConfig = [
    {path: 'index.html', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes, {enableTracing: true})
];

export const APP_BASE_PROVIDERS = [];