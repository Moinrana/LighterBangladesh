import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HomeComponent } from '../../home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
    , RouterModule
    , SharedModule
    , MatCardModule
    , MatToolbarModule
    , MatButtonModule
    , FlexLayoutModule
    , MatInputModule
    , MatFormFieldModule
    , MatSidenavModule
  ]
})
export class DashboardModule { }
