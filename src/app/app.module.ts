import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrefreModule } from './prefre/prefre.module';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    PrefreModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
