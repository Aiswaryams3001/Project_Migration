import { Component } from '@angular/core';
import { ViewserviceService } from 'src/app/viewservice.service';

@Component({
  selector: 'app-viewquery',
  templateUrl: './viewquery.component.html',
  styleUrls: ['./viewquery.component.scss']
})
export class ViewqueryComponent {
  constructor(private viewservice:ViewserviceService){}
  Dataarray: any[] = [];


  ngOnInit():void{
    this.viewservice.getQuerydata().subscribe((res) => {

    this.Dataarray = res;
      
      })
  }

}
