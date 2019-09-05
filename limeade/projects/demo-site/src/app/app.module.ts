import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgLimeadeModule } from 'ng-limeade';

import { AppComponent } from './app.component';

import {ToastFactoryService} from '../../../ng-limeade/src/lib/services/toast-factory.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLimeadeModule
  ],
  providers: [ToastFactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
