import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewserviceService } from 'src/app/viewservice.service';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private viewservice: ViewserviceService,
    private router: Router
  ) {}
  ContactForm = this.fb.group({
    Name: [''],
    Email: [''],
    Subject: [''],
    Message: [''],
   
  });
  Onsubmit() {
    // console.log(this.MyForm.value)
    this.viewservice.sendContact(this.ContactForm.value);
    alert('Your message has been sent. Thank you!');
    this.router.navigate(['/home/contactus']);
  }
 ngOnInit():void
 {

 }

}
