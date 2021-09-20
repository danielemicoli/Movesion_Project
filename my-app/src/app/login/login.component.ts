import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import { RouteguardService } from '../services/routeguard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username = '';
    password = '';

    // signinError!:string;
    //  jsonResp!:any;
  constructor(private routeGuardService: RouteguardService,
    private router:Router,
    ) {
     }

  ngOnInit(): void {
    
  }
  loginUser(){
    this.routeGuardService.loginFunc(this.username,this.password)
// console.log(this.username +' ' +this.password)
    // this.loginService.loginForm(objLog)
    // .subscribe(resp => {
    //   console.log(resp);
    //   this.jsonResp = JSON.stringify(resp)
    //   localStorage.setItem('risposta', this.jsonResp)

    //   alert('logingiusto')
    // })
    // this.loginService.login(this.logObj).subscribe(response =>{ 
    //   console.log(response)

    // this.routeGuardService.loginUser(response)
    this.router.navigate(['/home'])
  }   

    }
  




