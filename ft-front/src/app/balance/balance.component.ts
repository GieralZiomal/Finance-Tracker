import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  myData: any[] = [];
  plusArray: number[] = [];
  minusArray: number[] = [];
  balance: number | undefined;
  user: string | undefined; // Używamy string, ponieważ getUser() zwraca nazwę użytkownika

  constructor(public authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/get/').subscribe(
      data => {
        this.myData = data;
        this.calculateBalance();
      },
      error => {
        console.error('An error occurred:', error);
      } 
    );
  }

  calculateBalance() {
    this.plusArray = this.myData.filter(item => item.typeofMod === "Receipts").map(item => item.amount);
    this.minusArray = this.myData.filter(item => item.typeofMod === "Expenses").map(item => item.amount);

    const sumOfPlus = this.plusArray.reduce((accumulator, input) => accumulator + input, 0);
    const sumOfMinus = this.minusArray.reduce((accumulator, input) => accumulator + input, 0);

    this.balance = sumOfPlus - sumOfMinus;
  }

  logoutt() {
    this.authService.logout();
  }


}
