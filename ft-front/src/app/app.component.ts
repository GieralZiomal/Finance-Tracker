import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  usern: string = '';
  pass: string = '';  

  ngOnInit(): void {
      const storedToken = localStorage.getItem('auth_token');
      if (storedToken) {
        this.authService.setToken(storedToken);
    }
    

  }

  constructor(public authService: AuthService) { }

  login() {
    console.log(this.usern,this.pass)
    this.authService.login(this.usern,this.pass).subscribe(
      response => {
        this.authService.setToken(response.token);
        localStorage.setItem('auth_token', response.token);
        this.authService.userId = response.user_id;
      },
      error => {
          console.log("Error")
      }
    );
  }

  logoutt() {
    this.authService.logout();
  }

}
