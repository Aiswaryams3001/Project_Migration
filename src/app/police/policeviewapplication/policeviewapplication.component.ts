import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewserviceService } from 'src/app/viewservice.service';

@Component({
  selector: 'app-policeviewapplication',
  templateUrl: './policeviewapplication.component.html',
  styleUrls: ['./policeviewapplication.component.scss']
})
export class PoliceviewapplicationComponent {
  constructor(private viewservice:ViewserviceService,private router:Router){}
  Dataarray: any[] = [];

  onSelectStatus(status:any)

  {

    console.log(status);

    let district=localStorage.getItem('district')

    this.viewservice.PoliceGetApplicationdata(district,status).subscribe((res) => {

    this.Dataarray = res;
      })
  }
  ngOnInit(){
    
  }
}
