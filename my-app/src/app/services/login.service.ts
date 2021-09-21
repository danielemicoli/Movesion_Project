import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users!: any[];
  // private login = false;




  constructor() { 
    this.users = [{
      username: 'admin', password:'12345'
    }]
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   this.loginForm();
  //   return this.login
  getLetter(){
    return localStorage.getItem('key')
  }


  loginForm(jsonResp:any){
    return jsonResp

    // let userAccepted = this.users
    // .filter(x => x.username === username)
    // .filter(y => y.password ===password);
    // if(userAccepted && userAccepted.length === 1){
    //   localStorage.setItem('currentUser', JSON.stringify({}))
    // }
    // if(localStorage.getItem('risposta') !== null){
    //   this.login = true;
    //   console.log('vero')
    // }else{
    //   this.login = false;
      // this.router.navigate(['login'])
    }

    
  }

