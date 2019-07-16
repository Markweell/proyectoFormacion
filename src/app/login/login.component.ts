import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
    init_plugins();
  }
  ingresar(){
    console.log('flag', "as");

    this.routes.navigate(['../dashboard']);
  }
}
