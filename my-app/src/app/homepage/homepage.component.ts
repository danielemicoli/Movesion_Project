import { Component, OnInit } from '@angular/core';
import { Icompany } from '../interfaces/icompany';
import { HomepageService } from '../services/homepage.service';
import { Company } from '../classes/company'
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // validatingForm: FormGroup;

  companyList:Company [] = [];
  id:number = 0
  name:string = '';
  address: string = '';
  phone: string = '';
  revenue: string = '';

  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   address: new FormControl('', Validators.required),
  //   phone: new FormControl('', Validators.required),
  //   revenue: new FormControl('', Validators.required),

  // })
// newCompany: any;
  constructor(private homePageservice:HomepageService) {
    // this,company = company;
  }
  // input.ng-touched.ng-invalid{

  
  
  ngOnInit(): void {
    this.companyList = this.homePageservice.getCompanies()
    // this.homePageservice.getCompanies().subscribe(resp => console.log(resp))
    
  }

  addCompany(){
    let companyList :Company = new Company (this.id,this.name, this.address, this.phone, this.revenue);
    this.homePageservice.addCompany(companyList)
    console.log(this.companyList)
    // this.input.nativeElement.value = '';


    // if (Object.keys(companyList).length === 0) {
    //   console.log("No properties")
  
  }
  removeCompany(i:number):void{
    this.homePageservice.removeCompany(i)
  }
  
  }