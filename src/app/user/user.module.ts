import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserviewmoreComponent } from './userviewmore/userviewmore.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsereditComponent } from './useredit/useredit.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserLayoutComponent,
    UserviewmoreComponent,
    UsereditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
