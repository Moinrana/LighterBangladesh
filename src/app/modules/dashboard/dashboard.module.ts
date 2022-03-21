import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HomeComponent } from '../../home/home.component';
import { AccountComponent } from '../../components/admin/account/account.component';
import { MembersComponent } from '../../components/admin/members/members.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AccountComponent,
    MembersComponent
  ],
  imports: [
    FormsModule
    , CommonModule
    , RouterModule
    , SharedModule
    , MatCardModule
    , MatToolbarModule
    , MatButtonModule
    , FlexLayoutModule
    , MatInputModule
    , MatFormFieldModule
    , MatSidenavModule
    , MatDividerModule
    , HttpClientModule
  ],
  providers: [],
})
export class DashboardModule { }
