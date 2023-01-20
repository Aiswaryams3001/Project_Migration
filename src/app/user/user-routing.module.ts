import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRegComponent } from './application-reg/application-reg.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserviewmoreComponent } from './userviewmore/userviewmore.component';
import { ViewApplicationStsComponent } from './view-application-sts/view-application-sts.component';

const routes: Routes = [{
  path: '',
  component: UserLayoutComponent,
  children: [
  { path: '', component: UserhomeComponent },
  
  { path: 'apply', component: ApplicationRegComponent },
  { path: 'viewsts', component: ViewApplicationStsComponent},
  { path: 'userviewmore/:id', component: UserviewmoreComponent},
  { path: 'useredit/:id', component: UsereditComponent}
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
