import { HomeComponent } from "./components/home/home.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
    {path: 'index.html', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeComponent}
];