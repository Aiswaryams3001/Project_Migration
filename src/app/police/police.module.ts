import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliceRoutingModule } from './police-routing.module';
import { EditstsbypoliceComponent } from './editstsbypolice/editstsbypolice.component';
import { PoliceviewmoreComponent } from './policeviewmore/policeviewmore.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RemarksbypoliceComponent } from './remarksbypolice/remarksbypolice.component';

@NgModule({
  declarations: [
    EditstsbypoliceComponent,
    PoliceviewmoreComponent,
    RemarksbypoliceComponent
  ],
  imports: [
   CommonModule,
    PoliceRoutingModule,
    ReactiveFormsModule,
   
  ]
})
export class PoliceModule { }