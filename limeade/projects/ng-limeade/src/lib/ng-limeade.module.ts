import { NgModule } from '@angular/core';
import { NgLimeadeComponent } from './ng-limeade.component';
import { ToastComponent } from './toast/toast.component';
import { CommonModule } from '@angular/common';
import { ToastFactoryComponent } from './toast-factory/toast-factory.component';
import { ToastFactoryService } from './services/toast-factory.service';

// export { ToastFactoryService } from './services/toast-factory.service';

export {ToastInterface} from './models/ToastInterface';

@NgModule({
  declarations: [NgLimeadeComponent, ToastComponent, ToastFactoryComponent],
  imports: [ CommonModule ],
  providers: [],
  exports: [NgLimeadeComponent, ToastComponent, ToastFactoryComponent]
})
export class NgLimeadeModule {
}
