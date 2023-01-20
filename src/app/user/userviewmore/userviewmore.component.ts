import { Component } from '@angular/core';
import { ViewserviceService } from 'src/app/viewservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-userviewmore',
  templateUrl: './userviewmore.component.html',
  styleUrls: ['./userviewmore.component.scss']
})
export class UserviewmoreComponent {
  applicationId :any;
  Dataarray: any[] = [];
  UserregisterForm:FormGroup;
  disabled:any;
  constructor(private route:ActivatedRoute, private Fb:FormBuilder,private viewservice:ViewserviceService) {
  
    this.route.paramMap.subscribe((params: ParamMap) =>{
  
      this.applicationId= params.get('id')
  
    })
    this.UserregisterForm= this.Fb.group({
    applicationId:[''],
    Firstname:[''],
    Lastname:[''],
    Email:[''],
    phone:[''],
    gender:[''],
    Dob:[''],
    Address1:[''],
    Address2:[''],
    City:[''],
    District:[''],
    State:[''],
    Pincode:[''],
    PlacetoMigrate:[''],
    purpose_to_Migrate:[''],
    AadharNumber:[''],
    Status:[''],
    FromDate:['']
    })
  }
  
  ngOnInit():void{
    this.UserregisterForm.disable();
    this.viewservice.getApplicationBaseId(this.applicationId).subscribe((data:any) =>{
  
      this.Dataarray = data;
      this.UserregisterForm.setValue({
  
        applicationId:data.applicationId,
        Firstname:data.firstName,
        Lastname:data.lastName,
        Email:data.email,
        phone:data.phone,
        gender:data.gender,
        Dob:data.date,
        Address1:data.address1,
        Address2:data.address2,
        City:data.city,
        District:data.district,
        State:data.state,
        Pincode:data.pincode,
        PlacetoMigrate:data.place_to_Migrate,
        purpose_to_Migrate:data.purpose_to_Migrate,
        AadharNumber:data.aadharNumber,
        Status:data.status,
        FromDate:data.fromDate
      });
      });
  }
}

