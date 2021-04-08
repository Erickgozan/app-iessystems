import { Component, EventEmitter,OnInit,Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean = true;


  constructor(public loginAuth:LoginService,
    private router:Router) { }

  ngOnInit(): void {
  }


  public logout():void{
    this.loginAuth.logout();
    this.router.navigate(["/login"]);
  }

}
