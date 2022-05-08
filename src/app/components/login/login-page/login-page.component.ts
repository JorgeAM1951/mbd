import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({ templateUrl: 'login-page.component.html' })
export class LoginPageComponent implements OnInit {

  username: string | undefined;
  passwd: string | undefined;
  

  constructor(
    private userService: UserService,
    private router: Router
  ){}
  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm): void{
    this.userService.login(this.username as string, this.passwd as string).then(res => {
      if(res.length == 1){
        console.log("Log In succesfull");
        sessionStorage.setItem("isLogged", "true");
        this.router.navigate(['admin-page']);
      }else if(res.length == 0){
        console.log("No user with those credentials");
      } else {
        console.log("ERR: Check database");
      }
    });
    
  }
}

