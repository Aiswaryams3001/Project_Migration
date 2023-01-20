import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewserviceService } from 'src/app/viewservice.service';

@Component({
  selector: 'app-view-application-sts',
  templateUrl: './view-application-sts.component.html',
  styleUrls: ['./view-application-sts.component.scss']
})
export class ViewApplicationStsComponent {
  constructor(private viewservice:ViewserviceService,private router:Router){}
  Dataarray: any[] = [];
 
  ngOnInit(){
    var phone =localStorage.getItem('phone');
    this.viewservice.UserGetApplicationdata(phone).subscribe((res) => {

    this.Dataarray = res;
      
      })
  }
}
