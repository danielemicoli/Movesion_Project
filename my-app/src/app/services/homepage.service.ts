import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  companyList:any
  newCompany:any = [
    {
    id:1,
    name: '',
    address:'',
    phone:'',
    revenue: 1,
    
   } ]


  constructor() { }


  getCompanies(){
    return this.companyList
  }
  // createCompany(companyList: any) {
  //   return (this.newCompany,companyList);
  // }
}
