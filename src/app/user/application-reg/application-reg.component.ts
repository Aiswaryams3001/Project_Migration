import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ViewserviceService } from 'src/app/viewservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application-reg',
  templateUrl: './application-reg.component.html',
  styleUrls: ['./application-reg.component.scss']
})
export class ApplicationRegComponent implements OnInit {
  constructor(private http: HttpClient,private fb:FormBuilder, private viewservice:ViewserviceService,private router:Router) { }

  registerForm=this.fb.group({
    Firstname:[''],
    Lastname:[''],
    Email:[''],
    Phone:[''],
    gender:[''],
    Date:[''],
    Address1:[''],
    Address2:[''],
    City:[''],
    District:[''],
    State:[''],
    Pincode:[''],
    Place_to_Migrate:[''],
    Purpose_to_Migrate:[''],
    AadharNumber:[''],
    Status:['Application Received'],
    Remarks:[''],
    FromDate:['']
  })


  ngOnInit(): void {

  }


  registerSubmitted(){

    this.viewservice.sendApplicationData(this.registerForm.value)
    alert("Application Submitted Successfully");
    this.router.navigate(['/userhome'])

  }
  

}
