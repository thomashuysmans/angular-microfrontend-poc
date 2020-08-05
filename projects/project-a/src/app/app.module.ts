import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloWorldWidgetComponent } from './hello-world-widget/hello-world-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    HelloWorldWidgetComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customElement = createCustomElement(HelloWorldWidgetComponent, { injector: this.injector})
    customElements.define('project-a-widget', customElement);
  }

 }
