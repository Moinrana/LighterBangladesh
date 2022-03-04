import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/admin/account/account.component';
import { MembersComponent } from './components/admin/members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
    , children: [
      { path: '', component: DashboardComponent }
      , { path: 'account', component: AccountComponent }
      , { path: 'members', component: MembersComponent }
      
    ]
  }
  , { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
