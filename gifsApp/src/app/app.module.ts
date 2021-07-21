import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import {GifsModule} from "./gifs/gifs.module";

@NgModule({
  declarations: [
    AppComponent,
    GifsPageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
