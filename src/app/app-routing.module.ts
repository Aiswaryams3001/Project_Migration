import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

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


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
