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

  loginFunc(email: string, password:string){
    // alert(email + ' '+password)
    if(email === 'admin@admin.com' && password === '12345'){
    this.login = true
  }else(alert('Credenziali errate')

  )
}}
