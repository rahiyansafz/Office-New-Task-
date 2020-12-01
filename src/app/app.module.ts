import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TextDetailComponent } from './text-detail/text-detail.component';
import { ObjDetailComponent } from './obj-detail/obj-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TextDetailComponent, ObjDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
