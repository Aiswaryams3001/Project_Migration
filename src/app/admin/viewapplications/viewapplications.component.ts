import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewserviceService } from 'src/app/viewservice.service';

@Component({
  selector: 'app-viewapplications',
  templateUrl: './viewapplications.component.html',
  styleUrls: ['./viewapplications.component.scss']
})
export class ViewapplicationsComponent {
  constructor(private viewservice:ViewserviceService,private router:Router){}
  Dataarray: any[] = [];
  clicked = false;

  onSelectStatus(status:any)
  {
    console.log(status);

    this.viewservice.getApplicationdatabystatus(status).subscribe((res) => {

      this.Dataarray = res;
        
    })


  }


  ngOnInit(){
  }
  onSubmitEdit(item:any)
  {
   this.router.navigate(['/adminhome/editsts,'])

  }

SendData(item:any){
if(item.status == 'Application Send to Police for verification'  )
{
  alert("Data already sent to police")
}
else if(item.status == 'Application Verified' || item.status == 'Application not Verified' || item.status == 'Application Approved')
{
  alert("Data already sent to police")
}
else if(item.status == 'Application Rejected' || item.status == 'Application Pending due to insufficient data')
{
  alert("Application pending")
}
else
{
item.status = 'Application Send to Police for verification'
this.viewservice.sendDatatoPolice(item);
this.viewservice.updateapplicationdata(item)
alert('Successfully sent data to ' + item.district + ' Police for verification')
}
}

}
