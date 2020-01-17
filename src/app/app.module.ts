import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule , MatIconModule , MatInputModule , MatCardModule } from '@angular/material'
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule , MatInputModule ,MatIconModule , NgMatSearchBarModule , MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
