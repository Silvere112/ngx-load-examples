import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { NgxLoadModule } from "ngx-load";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxLoadModule,
        MatButtonModule,
        MatTableModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
