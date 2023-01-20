import { Component } from '@angular/core';
import { ViewserviceService } from 'src/app/viewservice.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-editstsbypolice',
  templateUrl: './editstsbypolice.component.html',
  styleUrls: ['./editstsbypolice.component.scss']
})
export class EditstsbypoliceComponent {
  applicationId: any;

  public dataarray:any;

  EditstsbypoliceForm: FormGroup;

  constructor(private route:ActivatedRoute, private fb:FormBuilder,private viewservice:ViewserviceService,private router:Router) {

    this.route.paramMap.subscribe((params: ParamMap) =>{

      this.applicationId= params.get('id')
      console.log(this.applicationId)

    })


this.EditstsbypoliceForm=this.fb.group({
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
  PoliceDate:['']

})
}
ngOnInit(): void 
{
  this.viewservice.getApplicationBaseId(this.applicationId).subscribe((data:any) =>{

    this.dataarray = data;
    this.EditstsbypoliceForm.setValue({

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


editStsbyPolice()
{
this.viewservice.updateapplicationdata(this.EditstsbypoliceForm.value)
this.router.navigate(['policehome/policeview'])
}
}

