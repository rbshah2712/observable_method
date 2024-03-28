import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrefreModule } from './prefre/prefre.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrefreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
