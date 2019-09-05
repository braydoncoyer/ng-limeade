import { NgModule } from '@angular/core';
import { NgLimeadeComponent } from './ng-limeade.component';
import { ToastComponent } from './toast/toast.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [NgLimeadeComponent, ToastComponent],
  imports: [
    CommonModule
  ],
  exports: [NgLimeadeComponent, ToastComponent]
})
export class NgLimeadeModule { }
