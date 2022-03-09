import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { RegistrationComponent } from './registration/registration.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    DashboardModule
    , BrowserModule
    , BrowserAnimationsModule
    , AppRoutingModule
    , MatCardModule
    , MatToolbarModule
    , MatButtonModule
    , FlexLayoutModule
    , MatInputModule
    , MatFormFieldModule
    , FormsModule
    , ReactiveFormsModule
    , CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
