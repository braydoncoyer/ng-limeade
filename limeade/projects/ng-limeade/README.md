# NgLimeade

DEMO: https://ngx-toastr.netlify.com/

## Features

- Toast Component Injection without being passed `ViewContainerRef`
- No use of `*ngFor`. Fewer dirty checks and higher performance.
- AoT compilation and lazy loading compatible
- Component inheritance for custom toasts
- SystemJS/UMD rollup bundle
- Animations using Angular's
  [Web Animations API](https://angular.io/docs/ts/latest/guide/animations.html)
- Output toasts to an optional target directive



1). Install Font Awesome dependencies
2). Inject ToastFactoryService into component
3). In markup, add '<limeade-toast-factory></limeade-toast-factory>' component to page
4). 


## Dependencies
Before installing NgLimeade, install the following Font Awesome dependencies:

```bash
$ @fortawesome/angular-fontawesome
$ @fortawesome/fontawesome-svg-core
$ @fortawesome/free-regular-svg-icons
$ @fortawesome/free-solid-svg-icons
```

## Installation

```bash
npm install ng-limeade
```

## Setup

Import the `ToastFactoryService` into your root `AppModule`, and add the `NgLimeadeModule` to the imports array.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {NgLimeadeModule} from 'ng-limeade';
 
@NgModule({
    imports: [
        BrowserModule,
        NgLimeadeModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Add the `limeade-toast-factory` component to the base `app-root` component to ensure that toasts persist between routes.

```html
<div class="toasts-container">
  <limeade-toast-factory></limeade-toast-factory>
</div>
```

Inject the `ToastFactoryService` into your component and call the `showToast` function to trigger a new toast in your application.

```typescript

import {ToastFactoryService, ToastInterface} from 'ng-limeade';

@Component({...})
export class AppComponent {
  constructor(private toastService: ToastFactoryService) {}

  showSuccess() {
    this.toastService.showToast('success');
  }
}
```
