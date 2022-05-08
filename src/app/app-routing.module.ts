import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:card-search',
    component: HomeComponent,
  },
  {
    path: 'card-info/:name',
    component: CardInfoComponent

  },
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: 'admin-page',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
