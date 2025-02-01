import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "../../../app.router";
import { AppComponent } from "../../../app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignupComponent } from "../signup/signup.component";
import { DemoAngularMaterialModule } from "../../../DemoAngularMaterialModule";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DemoAngularMaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }