import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  visibleSidebar: boolean=true
  step: number = 2;

  constructor(public router: Router) {}
  ngOnInit(): void {}
  public logout(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Logout Succesfull',
      showConfirmButton: false,
      timer: 1000
    })
    sessionStorage.removeItem('login')
    this.router.navigate(['/login']);
  }
  public isActive(base: string): boolean {
    return this.router.url === base;//.includes(`${base}`);
}


}
