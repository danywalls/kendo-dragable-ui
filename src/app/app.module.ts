import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragAndDropModule } from '@progress/kendo-angular-utils';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
