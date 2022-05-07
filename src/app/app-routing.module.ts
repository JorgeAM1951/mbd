import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';

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
    path: 'admin/login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
