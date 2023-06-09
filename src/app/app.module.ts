import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeExposantComponent } from './components/home-exposant/home-exposant.component';
import { HomeVisitorComponent } from './components/home-visitor/home-visitor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavExpComponent } from './components/nav-exp/nav-exp.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { TypologyComponent } from './components/typology/typology.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpVisitorComponent } from './components/sign-up-visitor/sign-up-visitor.component';
import { HomeComponent } from './components/home/home.component';
import { ChoiceComponent } from './components/choice/choice.component';
 

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeExposantComponent,
    HomeVisitorComponent,
    NavExpComponent,
    StatisticComponent,
    TypologyComponent,
    SignUpComponent,
    SignUpVisitorComponent,
    HomeComponent,
    ChoiceComponent,
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
