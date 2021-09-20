import { Component, OnInit } from '@angular/core';
import { Icompany } from '../interfaces/icompany';
import { HomepageService } from '../services/homepage.service';
import { Company } from '../classes/company'
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  // validatingForm: FormGroup;
  users!: any;
  companyList:Company [] = [];
  id:number = 0
  name:string = '';
  address: string = '';
  phone: string = '';
  revenue: string = '';


  constructor(private homePageservice:HomepageService,
    private LoginService:LoginService) {
  }

  
  
  ngOnInit(): void {
    this.companyList = this.homePageservice.getCompanies()
    // this.homePageservice.getCompanies().subscribe(resp => console.log(resp))
    
  }
  getLetter(){
    return localStorage.getItem('key'),
    console.log(this.getLetter)
  }
    
  

  addCompany(){
    let companyList :Company = new Company (this.id,this.name, this.address, this.phone, this.revenue);
    this.homePageservice.addCompany(companyList)
    console.log(this.companyList)


    // if (Object.keys(companyList).length === 0) {
    //   console.log("No properties")
  
  }
  removeCompany(i:number):void{
    this.homePageservice.removeCompany(i)
  }
  
  }