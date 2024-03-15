import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-compo-get',
  templateUrl: './compo-get.component.html',
  styleUrls: ['./compo-get.component.scss']
})
export class CompoGetComponent implements OnInit {
  myData: any = [];
  currentDisplayedData: any[] = [];
  totalItems: number = 0;
  itemsPerPage: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any>('http://127.0.0.1:8000/api/get/').subscribe(
      data => {
        this.myData = data;
        this.totalItems = this.myData.length;
        this.updateDisplayedData(0)
      },
      error => {
        console.error('An error occurred:', error);
      } 
    );        
  }

  updateDisplayedData(pageIndex: number): void {
    const startIndex = pageIndex * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.currentDisplayedData = this.myData.slice(startIndex, endIndex);
  }
  

  onPageChange(event: any): void {
    const pageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.updateDisplayedData(pageIndex);
  }  
}
