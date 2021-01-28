import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonsArrayComponent } from './buttons-array/buttons-array.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { ResultAreaComponent } from './result-area/result-area.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsArrayComponent,
    InputAreaComponent,
    ResultAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
