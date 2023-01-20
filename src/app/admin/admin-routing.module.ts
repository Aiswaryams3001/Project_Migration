import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EditstsComponent } from './editsts/editsts.component';
import { ViewapplicationsComponent } from './viewapplications/viewapplications.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { ViewqueryComponent } from './viewquery/viewquery.component';

const routes: Routes = [ {
  path: '',
  component: AdminLayoutComponent,
  children: [
  { path: '', component: AdminhomeComponent },
  
  { path: 'viewapplications', component: ViewapplicationsComponent},
  { path: 'viewmore/:id', component: ViewmoreComponent },
  { path: 'viewquery', component: ViewqueryComponent },
  { path: 'editsts/:id', component:EditstsComponent },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
