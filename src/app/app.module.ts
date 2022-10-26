import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Imports the Drag and Drop
import { DragAndDropModule } from '@progress/kendo-angular-utils';
import { UtilsModule } from "@progress/kendo-angular-utils";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DragAndDropModule, UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
