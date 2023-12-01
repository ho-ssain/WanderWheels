import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  locationId: string = '';
  locations: any[] = [];
  fromLocation: string = '';
  toLocation: string = '';
  availableCars: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.locationId = res.locationId;
      this.fromLocation = this.locationId;
      this.getCarsFromLocation();
    });
  }

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
    this.carService.GetAllLocations().subscribe((res: any) => {
      this.locations = res.data;
    });
  }

  getCarsFromLocation() {
    this.carService
      .GetAllCarsByLocation(this.locationId)
      .subscribe((res: any) => {
        this.availableCars = res.data;
      });
  }

  onLocationChange() {
    this.carService
      .GetAllCarsByLocation(this.fromLocation)
      .subscribe((res: any) => {
        this.availableCars = res.data;
      });
  }

  makeBooking(carId: number) {
    this.router.navigate(['/booking', this.fromLocation, carId]);
  }
}
