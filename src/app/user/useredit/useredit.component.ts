import { Component } from '@angular/core';
import { ViewserviceService } from 'src/app/viewservice.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent {
  applicationId :any;
  Dataarray: any[] = [];
  EditregisterForm:FormGroup;
  disabled:any;
  constructor(private route:ActivatedRoute, private Fb:FormBuilder,private viewservice:ViewserviceService,public router:Router) {
  
    this.route.paramMap.subscribe((params: ParamMap) =>{
  
      this.applicationId= params.get('id')
  
    })
    this.EditregisterForm= this.Fb.group({
    applicationId:[''],
    Firstname:[''],
    Lastname:[''],
    Email:[''],
    Phoneno:[''],
    gender:[''],
    Dob:[''],
    Address1:[''],
    Address2:[''],
    City:[''],
    District:[''],
    State:[''],
    Pincode:[''],
    PlacetoMigrate:[''],
    PurposetoMigrate:[''],
    AadharNumber:[''],
    Status:['']
    })
  }
  
  ngOnInit():void{
    
    this.viewservice.getApplicationBaseId(this.applicationId).subscribe((data:any) =>{
  
      this.Dataarray = data;
      this.EditregisterForm.setValue({
  
        applicationId:data.applicationId,
        Firstname:data.firstName,
        Lastname:data.lastName,
        Email:data.email,
        Phoneno:data.phone,
        gender:data.gender,
        Dob:data.date,
        Address1:data.address1,
        Address2:data.address2,
        City:data.city,
        District:data.district,
        State:data.state,
        Pincode:data.pincode,
        PlacetoMigrate:data.place_to_Migrate,
        PurposetoMigrate:data.purpose_to_Migrate,
        AadharNumber:data.aadharNumber,
        Status:data.status
        
      });
      });
  }

  registerSubmit(){
    this.viewservice.updateapplicationdata(this.EditregisterForm.value)
    alert("Updated Successfully");
    this.router.navigate(['/userhome/userviewsts'])

  }
}
