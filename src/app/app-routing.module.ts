import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './componentes/homepage/homepage.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import {PrivadoPageComponent} from './componentes/privado-page/privado-page.component';
import {BotFoundPageComponent} from './componentes/bot-found-page/bot-found-page.component';
const routes: Routes = [

  {path: '', component: HomepageComponent},
  {path:'login',component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'privado', component: PrivadoPageComponent},
  {path: '**', component: BotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
