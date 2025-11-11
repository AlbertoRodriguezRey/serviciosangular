import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasStandalone } from './components/personas-standalone/personas-standalone';
import { CochesComponent } from './components/coches-component/coches-component';
import { ServiceCoches } from './services/service.coches';

@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
    CochesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandalone
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches
  ],
  bootstrap: [App]
})
export class AppModule { }
