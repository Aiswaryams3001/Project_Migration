import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewserviceService } from '../viewservice.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit{
  Dataarray: any[] = [];
  isUserValid: boolean = false;
  constructor(
    private fb: FormBuilder,
    private viewservice: ViewserviceService,
    private router: Router
  ) {}
  RegForm = this.fb.group({
    Firstname: [''],
    Lastname: [''],
    Email: [''],
    Phone: [''],
    Username: [''],
    Password: [''],
    ConfirmPassword: [''],
  });
  Onsubmit() {
    var firstname: any;
    var lastname : any;
    var phone : any;
    var email:any;
   
    if(this.RegForm.value != null)
    {
    firstname = this.RegForm.value['Firstname'];
    lastname = this.RegForm.value['Lastname'];
    phone = this.RegForm.value['Phone'];
    email = this.RegForm.value['Email'];
    }
    // console.log(this.MyForm.value)
    if(this.RegForm.value['Password'] != this.RegForm.value['ConfirmPassword'])
    {
      alert('Passwords are not matching');
    }
    else
    {
      this.viewservice.Register(phone).subscribe((res) => {

        this.Dataarray = res;
        console.log(this.Dataarray.length);
     

      if(this.Dataarray.length > 0 )
      {
          alert("Phoneno already exit")
      }

      else{
          this.viewservice.sendData(this.RegForm.value);
          alert('Registered Successfully');
          this.router.navigate(['/home']);
        }
      });
    }
  }
  ngOnInit() {
    console.log('register');
  }

}
