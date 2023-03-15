import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public router: Router, public http:HttpClient) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let loginValue = sessionStorage.getItem('login');
    if (loginValue) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  get(url: string):Observable<any>{
    return this.http.get(url);
  }


}
