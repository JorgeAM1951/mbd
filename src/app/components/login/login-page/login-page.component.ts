import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({ templateUrl: 'login-page.component.html' })
export class LoginPageComponent implements OnInit {

  private username: string | undefined;
  private passwd: string | undefined;
  

  constructor(
    private userService: UserService,
    private router: Router
  ){}
  ngOnInit(): void {
    
  }

  login(): void{
    this.userService.login(this.username as string, this.passwd as string).then(res => {
      if(res.length == 1){
        console.log("Log In succesfull");
        this.router.navigate(['admin'])
      }else if(res.length == 0){
        console.log("No user with those credentials");
      } else {
        console.log("ERR: Check database");
      }
    });
    
  }
}