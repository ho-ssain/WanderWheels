import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent implements OnInit {
  currentUser: any;
  carList: any[] = [];
  locations: any[] = [];
  CarAccessoriess: any = {
    accessoriesId: 0,
    accessoriesTitle: '',
    showOnWebsite: false,
    carId: 0,
  };

  car: any = {
    carId: 0,
    brand: '',
    name: '',
    pricingDescription: '',
    pricing: 0,
    locationId: 0,
    registeredOn: '2023-11-29T18:54:25.368Z',
    imageUrl: '',
    vehicleNo: '',
    ownerUserId: 0,
    ZoomCarAccessoriess: [],
  };

  constructor(
    private carService: CarService,
    private userService: UserService
  ) {
    this.currentUser = this.userService.currentUser;
  }

  ngOnInit(): void {
    this.getCars();
    this.getAllLocations();
  }

  getCars() {
    this.carService
      .GetAllCarsByOwnerId(this.currentUser.data.userId)
      .subscribe((res: any) => {
        this.carList = res.data;
      });
  }

  getAllLocations() {
    this.carService.GetAllLocations().subscribe((res: any) => {
      this.locations = res.data;
    });
  }

  open() {
    const model = document.getElementById('newCar');
    if (model != null) model.style.display = 'block';
  }

  close() {
    const model = document.getElementById('newCar');
    if (model != null) model.style.display = 'none';
  }

  add() {
    const obj = JSON.stringify(this.CarAccessoriess);
    this.car.ZoomCarAccessoriess.push(JSON.parse(obj));
    this.CarAccessoriess = {
      accessoriesId: 0,
      accessoriesTitle: '',
      showOnWebsite: false,
      carId: 0,
    };
  }

  addNewCar() {
    debugger;
    this.car.ownerUserId = this.currentUser.data.userId;
    this.carService.AddNewCar(this.car).subscribe((res: any) => {
      if (res.result) {
        alert('Car Created!');
        this.getCars();
        this.close();
        this.car = {
          carId: 0,
          brand: '',
          name: '',
          pricingDescription: '',
          pricing: 0,
          locationId: 0,
          registeredOn: '2023-11-29T18:54:25.368Z',
          imageUrl: '',
          vehicleNo: '',
          ownerUserId: 0,
          ZoomCarAccessoriess: [],
        };
      } else {
        alert(res.message);
      }
    });
  }
}
