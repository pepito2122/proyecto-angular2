import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Addcomponent } from './components/addTask/add.component';
import { ADDRCONFIG } from 'dns';
import { LisTaskComponent } from './components/lis-task/lis-task.component';
@NgModule({
  declarations: [
    AppComponent,
    Addcomponent,
    LisTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
