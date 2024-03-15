import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  myData: any;
  plusArray: any[] = [];
  minusArray: any[] = [];
  balance: any;
  user: any;

  constructor(public authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any>('http://127.0.0.1:8000/api/get/').subscribe(
      data => {
        this.myData = data;
        this.calculateBalance(); // Wywołanie calculateBalance() po otrzymaniu danych
      },
      error => {
        console.error('An error occurred:', error);
      } 
    );
  }
  
  
  calculateBalance() {
    console.log(this.myData);
    for (let i = 0; i < this.myData.length; i++) {
      if (this.myData[i].typeofMod === "Receipts") {
        this.plusArray.push(this.myData[i].amount);
      }
    }
    for (let i = 0; i < this.myData.length; i++) {
      if (this.myData[i].typeofMod === "Expenses") {
        this.minusArray.push(this.myData[i].amount);
      }
    }

    console.log(this.plusArray)
    console.log(this.minusArray)

    const sumOfPlus = this.plusArray.reduce((accumulator: number, input: number): number => accumulator + input);
    const sumOfMinus = this.minusArray.reduce((accumulator: number, input: number): number => accumulator + input);

    this.balance = sumOfPlus - sumOfMinus

  }
  

}
