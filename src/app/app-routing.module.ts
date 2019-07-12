import { NgModule } from '@angular/core';

import { PagesComponent } from './pages/pages.component';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegistrerComponent } from './login/registrer.component';


const routes: Routes = [

  {path: '', loadChildren: './pages/pages.module#PageModule'},
  {path: 'login', component: LoginComponent},
  {path: 'registrer', component: RegistrerComponent},
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
