import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  stats: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/admin/dashboard').subscribe({
      next: (data) => {
        this.stats = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
