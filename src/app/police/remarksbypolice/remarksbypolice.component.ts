import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ParamMap } from '@angular/router';
import { Router,ActivatedRoute } from '@angular/router';
import { ViewserviceService } from 'src/app/viewservice.service';

@Component({
  selector: 'app-remarksbypolice',
  templateUrl: './remarksbypolice.component.html',
  styleUrls: ['./remarksbypolice.component.scss']
})
export class RemarksbypoliceComponent {
  applicationId: any;

  public dataarray:any;

  RemarksbypoliceForm: FormGroup;

  constructor(private route:ActivatedRoute, private fb:FormBuilder,private viewservice:ViewserviceService,private router:Router) {

    this.route.paramMap.subscribe((params: ParamMap) =>{

      this.applicationId= params.get('id')
      console.log(this.applicationId)

    })


this.RemarksbypoliceForm=this.fb.group({
  applicationId:[''],
  Firstname:[''],
  Lastname:[''],
  Email:[''],
  phone:[''],
  gender:[''],
  date:[''],
  Address1:[''],
  Address2:[''],
  City:[''],
  District:[''],
  State:[''],
  Pincode:[''],
  place_to_Migrate:[''],
  purpose_to_Migrate:[''],
  AadharNumber:[''],
  Status:[''],
  Remarks:[''],
  FromDate:[''],
  PoliceDate:[''],

})
}
ngOnInit(): void 
{
  this.viewservice.getApplicationBaseId(this.applicationId).subscribe((data:any) =>{

    this.dataarray = data;
    this.RemarksbypoliceForm.setValue({

      applicationId:data.applicationId,
      Firstname:data.firstName,
      Lastname:data.lastName,
      Email:data.email,
      phone:data.phone,
      gender:data.gender,
      date:data.date,
      Address1:data.address1,
      Address2:data.address2,
      City:data.city,
      District:data.district,
      State:data.state,
      Pincode:data.pincode,
      place_to_Migrate:data.place_to_Migrate,
      purpose_to_Migrate:data.purpose_to_Migrate,
      AadharNumber:data.aadharNumber,
      Status:data.status,
      Remarks:data.remarks,
      FromDate:data.fromDate,
      PoliceDate:data.policeDate
    });
    });
}


remarksbyPolice()
{
this.viewservice.updateapplicationdata(this.RemarksbypoliceForm.value)
this.router.navigate(['policehome/policeview'])
}
}
