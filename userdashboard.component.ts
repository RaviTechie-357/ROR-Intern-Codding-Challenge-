import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from '../services/store-service.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent implements OnInit {
  stores: any[] = [];

  constructor(private storeService: StoreServiceService) {}

  ngOnInit(): void {
    this.storeService.getStores().subscribe((data: any[]) => {
      this.stores = data;
    });
  }

  submitRating(storeId: number, rating: number): void {
    this.storeService.submitRating(storeId, rating).subscribe({
      next: () => {
        alert('Rating submitted successfully!');
      },
      error: () => {
        alert('Failed to submit rating!');
      }
    });
  }
}