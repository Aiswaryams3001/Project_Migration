import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent } from './login/login.component';
import { ApplicationRegComponent } from './user/application-reg/application-reg.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ViewApplicationStsComponent } from './user/view-application-sts/view-application-sts.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ViewapplicationsComponent } from './admin/viewapplications/viewapplications.component';
import { ViewmoreComponent } from './admin/viewmore/viewmore.component';
import { PolicehomeComponent } from './police/policehome/policehome.component';
import { PoliceLayoutComponent } from './police/police-layout/police-layout.component';
import { HeaderComponent } from './police/header/header.component';
import { FooterComponent } from './police/footer/footer.component';
import { PoliceviewapplicationComponent } from './police/policeviewapplication/policeviewapplication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserRegisterComponent,
    LoginComponent,
    ApplicationRegComponent,
    UserhomeComponent,
    ViewApplicationStsComponent,
    AdminhomeComponent,
    ViewapplicationsComponent,
    ViewmoreComponent,
    PolicehomeComponent,
    PoliceLayoutComponent,
    HeaderComponent,
    FooterComponent,
    PoliceviewapplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
