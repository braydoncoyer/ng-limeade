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

## Basic Setup

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

Add the `limeade-toast-factory` component to the top-level component ( in this case, `app-root` ) to ensure that toasts persist between routes.

```html
<div class="toasts-container">
  <limeade-toast-factory></limeade-toast-factory>
</div>
```

Inject the `ToastFactoryService` into your component and call the `showToast` function to trigger a new toast in your application.
If you do not pass any configuration into the `showToast` function, a `Success` toast will be created. For information on how to configure and create different types of toasts, see the Configuration section below.

```typescript

import {ToastFactoryService} from 'ng-limeade';

@Component({...})
export class AppComponent {
  constructor(private toastService: ToastFactoryService) {}

  showSuccessToast() {
    this.toastService.showToast();
  }
}
```

## Configuration
While NgLimeade was created to allow you to incorporate toast notifications in your application with minimal setup, the library provides many configuration options that will allow you to cater notifications to your needs.
### Types of Toasts  
There are four types of toasts currently available in NgLimeade:
* Success
* Info
* Warning
* Error


### Creating a Toast
Import `ToastInterface` from `'ng-limeade'` and create a new object of type `ToastInterface` and set your configuration settings.
Pass the variable into the `showToast` function to display a new toast in your application.

```typescript

import {ToastFactoryService, ToastInterface} from 'ng-limeade';

@Component({...})
export class AppComponent {
  constructor(private toastService: ToastFactoryService) {}

  showSuccessToast() {
      const toast: ToastInterface = {
          type: 'warning',
          title: 'Warning!',
          description: 'Something went wrong!'
      };
    this.toastService.showToast(toast);
  }
}
```

#### Toast Options
| Option            | Type                           | Default           | Description                                                                                                                                    |
| ----------------- | ------------------------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| type              | 'success', 'info', 'warning', or 'error'                       | 'success'             | Used to determine the type of toast to be created as well as the icon to be used                                                                                                            |
| title       | string                        | 'Success!'             | The title to be shown inside the toast. The color is determined by the type of toast                                                                                                                             
| description           | string                         | null              | The description displays below the title and can consist of multiple lines of text                                                                                                                 
| iconName   | string                         | 'check'              | The Font Awesome icon name to be displayed inside the toast    
