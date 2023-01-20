import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewserviceService } from 'src/app/viewservice.service';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-editsts',
  templateUrl: './editsts.component.html',
  styleUrls: ['./editsts.component.scss']
})
export class EditstsComponent implements OnInit{
  
  applicationId: any;

  public dataarray:any;

  EditstsForm: FormGroup;

  constructor(private route:ActivatedRoute, private fb:FormBuilder,private viewservice:ViewserviceService,private router:Router) {

    this.route.paramMap.subscribe((params: ParamMap) =>{

      this.applicationId= params.get('id')

    })
  

  this.EditstsForm=this.fb.group({
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
    status:[''],
    Remarks:[''],
    AdminDate:[''],
    PoliceDate:[''],
    FromDate:['']
  
  })
}
  ngOnInit(): void 
  {
    this.viewservice.getApplicationBaseId(this.applicationId).subscribe((data:any) =>{

      this.dataarray = data;
      this.EditstsForm.setValue({

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
        status:data.status,
        Remarks:data.remarks,
        AdminDate:data.adminDate,
        PoliceDate:data.policeDate,
        FromDate:data.fromDate
      });
      });
  }
  EditSts()
  {
    this.viewservice.updateapplicationdata(this.EditstsForm.value)
    this.router.navigate(['/adminhome/viewapplications'])

  }
}
