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
import { MatDialogModule } from "@angular/material/dialog";

import { RegistrationComponent } from './registration/registration.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddMemberDialogComponent } from './components/admin/add-member-dialog/add-member-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AddMemberDialogComponent
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
    , MatDialogModule
    , FormsModule
    , ReactiveFormsModule
    , CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
