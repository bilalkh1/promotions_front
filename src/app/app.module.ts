import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ButtonComponent from 'src/stories/button.component';
import { StoriesModule } from 'src/stories/stories.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoriesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
