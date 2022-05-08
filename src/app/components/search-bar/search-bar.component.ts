import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.router.navigate(['search/', form.value.search])
  }

  openLoginPage(): void {
    if(sessionStorage.getItem("isLogged") === "true"){
      this.router.navigate(['admin-page'])
    } else{
    this.router.navigate(['login-page'])
    }
  }

}
