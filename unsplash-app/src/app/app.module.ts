import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './services/data.service';
import { PhotoWallComponent } from './components/photo-wall/photo-wall.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PhotoWallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
