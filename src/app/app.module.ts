import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './services/data.service';
import { PhotoWallComponent } from './components/photo-wall/photo-wall.component';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PhotoWallComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
