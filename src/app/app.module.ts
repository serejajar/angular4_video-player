import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import {
  NewProfilesComponent,
  VPlayerComponent,
  ProfileCardComponent,
  ProfileVideosComponent,
  ToDatePipe
} from './profile-view/index';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent,
    NewProfilesComponent,
    VPlayerComponent,
    ProfileCardComponent,
    ProfileVideosComponent,
    ToDatePipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
