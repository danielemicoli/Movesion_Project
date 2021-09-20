import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../classes/company';
import { FormGroup, FormControl, Validators } from '@angular/forms';


// import { of } from 'rxjs'
// import 'rxjs/add/observable/of';
import { Icompany } from '../interfaces/icompany';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  companyList:Company [] = [
  ];
;
  //  const newCompany = new Observable()


  constructor() { }


  getCompanies(){
    return this.companyList
    // return this.http.get<Icompany>(this.newCompany)
  }
  addCompany(newCompany:Company){
    return this.companyList.push(newCompany)
  }
  // createCompany(companyList: any) {
  //   return (this.newCompany,companyList);
  // }

  removeCompany(index:number){
    this.companyList.splice(index, 1)

  }
  
}
