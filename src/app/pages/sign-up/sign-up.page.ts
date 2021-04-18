import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit() {
  }
  LoginWithPassword(){
    this.router.navigate(['/register'])
  }
  loginGoogle(){
    this.auth.Googlelogin()

  }
  login(){
    this.router.navigate(['/login'])
  }
}
