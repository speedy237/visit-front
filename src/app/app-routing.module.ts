import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeVisitorComponent } from './components/home-visitor/home-visitor.component';
import { HomeExposantComponent } from './components/home-exposant/home-exposant.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { TypologyComponent } from './components/typology/typology.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpVisitorComponent } from './components/sign-up-visitor/sign-up-visitor.component';
import { ChoiceComponent } from './components/choice/choice.component';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent },
  {path: 'home-visitor',component: HomeVisitorComponent},
  {path: 'home-exposant',component: HomeExposantComponent},
  {path: 'statistic',component: StatisticComponent},
  {path: 'typology',component: TypologyComponent},
  {path: 'home',component: HomeComponent},
  {path: 'sign-up-exposant',component: SignUpComponent},
  {path: 'sign-up-visitor',component: SignUpVisitorComponent},
  {path: 'choice',component: ChoiceComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
