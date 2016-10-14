import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { routes } from "./routes";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
 
    ]
})
export class AppModule {}
