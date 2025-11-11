import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasStandalone } from './components/personas-standalone/personas-standalone';

@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandalone
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas
  ],
  bootstrap: [App]
})
export class AppModule { }
