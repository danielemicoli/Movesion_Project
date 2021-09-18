import { Component, OnInit } from '@angular/core';
import { Icompany } from '../interfaces/icompany';
import { HomepageService } from '../services/homepage.service';
import { Company } from '../classes/company'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  newCompany:any = [
    {
      name!: '',
      address!:'',
      phone!:'',
      revenue!: '',
      
     }]
  companyList:any 

  constructor(private service:HomepageService) {
    // this,company = company;
   }
  
  
  ngOnInit(): void {
    this.companyList = this.service.getCompanies()
    console.log(this.companyList)
  }

  addCompany(){
    // this.service.

  }
  
}