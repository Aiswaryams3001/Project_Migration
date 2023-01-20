import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ViewapplicationsComponent } from './admin/viewapplications/viewapplications.component';
import { ViewmoreComponent } from './admin/viewmore/viewmore.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent } from './login/login.component';
import { ApplicationRegComponent } from './user/application-reg/application-reg.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ViewApplicationStsComponent } from './user/view-application-sts/view-application-sts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-module/home-module.module').then(
        (m) => m.HomeModuleModule
      ),
  },
  {
    path: 'adminhome',
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: 'userhome',
    loadChildren: () =>
      import('./user/user.module').then(
        (m) => m.UserModule
      ),
  },
  {
    path: 'policehome',
    loadChildren: () =>
      import('./police/police.module').then(
        (m) => m.PoliceModule
      ),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegisterComponent }

];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
