import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { DogComponent } from './components/dog.component';
import { CatComponent } from './components/cat.component';
import { CustomerComponent } from './component/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogComponent,
    CatComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
