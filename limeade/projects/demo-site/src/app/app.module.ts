import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgLimeadeModule } from 'ng-limeade';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLimeadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
