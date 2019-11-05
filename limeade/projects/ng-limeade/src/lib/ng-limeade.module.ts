import { NgModule } from '@angular/core';
import { NgLimeadeComponent } from './ng-limeade.component';
import { ToastComponent } from './toast/toast.component';
import { CommonModule } from '@angular/common';
import { ToastFactoryComponent } from './toast-factory/toast-factory.component';
import { ToastFactoryService } from './services/toast-factory.service';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

export {ToastInterface} from './models/ToastInterface';

@NgModule({
  declarations: [NgLimeadeComponent, ToastComponent, ToastFactoryComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [],
  exports: [NgLimeadeComponent, ToastComponent, ToastFactoryComponent]
})
export class NgLimeadeModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
