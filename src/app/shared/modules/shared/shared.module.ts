import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardComponent } from '../../widgets/card/card.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'

import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent
  ],
  imports: [
    CommonModule
    , MatDividerModule
    , MatToolbarModule
    , MatIconModule
    , MatButtonModule
    , FlexLayoutModule
    , MatMenuModule
    , MatListModule
    , RouterModule
  ]
  ,
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent
  ]
})
export class SharedModule { }
