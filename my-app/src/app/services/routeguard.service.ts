import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  
  private login = false;
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  return this.login
    // return this.login;
  }

  loginFunc(username: string, password:string){
    // alert(email + ' '+password)
    
    if(username === 'admin' && password === '12345'){
    this.login = true
    let obj = username + password
    
    localStorage.setItem('key', JSON.stringify(obj))

  }else(alert('Username e/o Password errate')

)

}

logout(){
  this.login = false
}}
