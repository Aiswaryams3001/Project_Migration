import { Component } from '@angular/core';
import { ViewserviceService } from 'src/app/viewservice.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-policeviewmore',
  templateUrl: './policeviewmore.component.html',
  styleUrls: ['./policeviewmore.component.scss']
})
export class PoliceviewmoreComponent {
  applicationId :any;
  Dataarray: any[] = [];
  registerForm:FormGroup;
  disabled:any;
  constructor(private route:ActivatedRoute, private Fb:FormBuilder,private viewservice:ViewserviceService) {
  
    this.route.paramMap.subscribe((params: ParamMap) =>{
  
      this.applicationId= params.get('id')
  
    })
    this.registerForm= this.Fb.group({
    applicationId:[''],
    firstName:[''],
    lastName:[''],
    email:[''],
    phone:[''],
    gender:[''],
    date:[''],
    address1:[''],
    address2:[''],
    city:[''],
    district:[''],
    state:[''],
    pincode:[''],
    place_to_Migrate:[''],
    purpose_to_Migrate:[''],
    aadharNumber:[''],
    status:['']
    })
  }
  
  ngOnInit():void{
    this.registerForm.disable();
    this.viewservice.getApplicationBaseId(this.applicationId).subscribe((data:any) =>{
  
      this.Dataarray = data;
      this.registerForm.setValue({
  
        applicationId:data.applicationId,
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        phone:data.phone,
        gender:data.gender,
        date:data.date,
        address1:data.address1,
        address2:data.address2,
        city:data.city,
        district:data.district,
        state:data.state,
        pincode:data.pincode,
        place_to_Migrate:data.place_to_Migrate,
        purpose_to_Migrate:data.purpose_to_Migrate,
        aadharNumber:data.aadharNumber,
        status:data.status
        
      });
      });
  }
}

