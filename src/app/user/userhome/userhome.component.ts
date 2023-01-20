import { Component, OnInit } from '@angular/core';
import { ViewserviceService } from 'src/app/viewservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {
  public item=localStorage.getItem('firstname');
  constructor(private viewservice:ViewserviceService){}
  ngOnInit():void{
    
  }
}
