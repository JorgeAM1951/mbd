import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({ templateUrl: 'login-page.component.html' })
export class LoginPageComponent implements OnInit {

  private username: string | undefined;
  private passwd: string | undefined;
  

  constructor(
    private userService: UserService
  ){}
  ngOnInit(): void {
    
  }

  login(): void{
    let validate = this.userService.login(this.username as string, this.passwd as string);
    
  }
}