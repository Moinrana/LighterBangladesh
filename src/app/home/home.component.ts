import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public gotoDashboard(): void {
    this.router.navigateByUrl("/admin/dashboard");
  }
  public gotoLogin(): void {
    this.router.navigateByUrl("/login");
  }

}
