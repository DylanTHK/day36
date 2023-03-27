import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToplevelComponent } from './toplevel/toplevel.component';
import { MedlevelComponent } from './medlevel/medlevel.component';
import { BotlevelComponent } from './botlevel/botlevel.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToplevelComponent,
    MedlevelComponent,
    BotlevelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
