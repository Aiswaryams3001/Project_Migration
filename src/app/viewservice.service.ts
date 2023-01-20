import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {

  constructor(private http: HttpClient) { }
  login(loginInfo:Array<string>){

    return this.http.post("https://localhost:7230/api/UserRegister/LoginUser",{

    UserName:loginInfo[0],

    Password:loginInfo[1],

  },

  {

    responseType:'text',
 
  });

}
loginPolice(loginInfo:Array<string>){

  return this.http.post("https://localhost:7230/api/Police/LoginPolice",{

  UserName:loginInfo[0],

  Password:loginInfo[1],

},

{

  responseType:'text',

});

}
 sendData(data : any)
 {
 // console.log(data);
  this.http.post("https://localhost:7230/api/UserRegister/InsertRegister",data).toPromise().then(result => { console.log(result); })
 }
 sendApplicationData(data : any)
 {
 // console.log(data);
  this.http.post("https://localhost:7230/api/Application/InsertApplications",data).toPromise().then(result => { console.log(result); })
 }

 getApplicationdata() {

  return this.http.get<any>('https://localhost:7230/api/Application/viewapplications')
  
  }

  getApplicationBaseId(applicationId: any) {
    return this.http.get<any>('https://localhost:7230/api/Application/ViewApplicationById/'+ applicationId)
  }

  updateapplicationdata(data:any){
    this.http.post("https://localhost:7230/api/Application/UpdateApplication", data).toPromise().then(result =>
  
    { console.log(result); })
   }

   sendDatatoPolice(data : any)
   {
   // console.log(data);
    this.http.post("https://localhost:7230/api/UserRegister/InsertRegister",data).toPromise().then(result => { console.log(result); })
   }

   sendContact(data : any)
 {
 // console.log(data);
  this.http.post("https://localhost:7230/api/Contact/InsertQuery",data).toPromise().then(result => { console.log(result); })
 }

 getQuerydata() {

  return this.http.get<any>('https://localhost:7230/api/Contact/viewquery')
  
  }

  
  ViewApplicationdatabyPolice() {

  return this.http.get<any>('https://localhost:7230/api/Application/ViewApplicationByPolice')
  
  }
  UserGetApplicationdata(phone:string|null|undefined)
  {

    return this.http.get<any>('https://localhost:7230/api/Application/Userviewapplications/' + phone)
    
}

PoliceGetApplicationdata(district:string|null|undefined,status:string|null|undefined)
{

  return this.http.get<any>('https://localhost:7230/api/Application/Policeviewapplications/' + district + '/'+status)
  
}


Register(phone:any){

  return this.http.get<any>('https://localhost:7230/api/UserRegister/CheckUser/' + phone)
}

getApplicationdatabystatus(status:any)
{
  return this.http.get<any>('https://localhost:7230/api/Application/viewapplicationsbystatus/' + status)

}
getPhoneno(name:any)

{

  return this.http.get<any>('https://localhost:7230/api/UserRegister/GetPhone/' + name)

}

}

