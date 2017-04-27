import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from "./share/share.module";
import { ROUTING } from "./app.routes";
import { ConsoleModule } from "./console/console.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ConsoleModule,
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
