import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss']
})
export class AddnewComponent {

  typeofMod: any;
  nameg: any;
  amount: any;
  dateofMod: any;

  constructor(private authService: AuthService, private http: HttpClient) { }

  getData(n:string,a:string,s:string,d:string) 
  {

    this.typeofMod = s
    this.nameg = n
    this.amount = a
    this.dateofMod = d
    
    this.postData()

  }

  postData() {
    const requestData = {
      owner: 1,
      typeofMod: this.typeofMod,
      name: this.nameg,
      amount: this.amount,
      dateofMod: this.dateofMod
    };

    this.http.post<any>('http://127.0.0.1:8000/api/get/', requestData).subscribe(
      (data) => {
        console.log('Posted data successfully:', data);
      },
      (error) => {
        console.error('Error posting data:', error);
      }
    );
  }

  onMouseEnter() {
    const element = document.getElementById('subButt');
    if (element) {
      element.style.backgroundColor = '#3F2E3E';
    }
  }

  onMouseLeave() {
    const element = document.getElementById('subButt');
    if (element) {
      element.style.backgroundColor = 'black';
    }
  }

}
