import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginAuth: LoginService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (!this.loginAuth.isAuthenticated()) {
      this.router.navigate(["/login"]);
      return false;
    }
    let role = route.data['role'] as string;

    if (this.loginAuth.hasRole(role)) {
      return true;
    } else {
      alert(`Hola, disculpa tiene rol ${this.loginAuth.usuario.role} y no tienes acceso a este recurso`);
      this.router.navigate(["/"]);
      return false;
    }

  }



}
