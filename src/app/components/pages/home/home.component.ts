import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  popularCars: any[] = [];
  locations: any[] = [];
  fromLocation: string = '';
  toLocation: string = '';

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.getAllCars();
    this.getAllLocations();
  }

  getAllCars() {
    this.carService.GetAllCars().subscribe((res: any) => {
      this.popularCars = res.data;
      console.log(this.popularCars);
    });
  }

  getAllLocations() {
    this.carService.GetAllLocations().subscribe((res: any) => {
      this.locations = res.data;
    });
  }

  navigationToSearchPage() {
    this.router.navigate(['/search', this.fromLocation]);
  }
}
