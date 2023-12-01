import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../services/booking.service';
import { CarService } from '../../../services/car.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  currentUser: any;
  carId: string = '';
  locationId: string = '';
  carDetails: any;
  bookingObj: any = {
    bookingId: 0,
    customerId: 0,
    fromLocationId: 0,
    toLocationId: 0,
    travelDate: '2023-11-30T20:56:13.602Z',
    startTime: 'string',
    carId: 0,
    pickupAddress: '',
    alternateContactNo: '',
    invoiceNo: '',
    isComplete: true,
  };
  locations: any[] = [];

  constructor(
    activatedRoute: ActivatedRoute,
    private carService: CarService,
    private bookingService: BookingService,
    private userService: UserService
  ) {
    this.getAllLocations();
    activatedRoute.params.subscribe((res: any) => {
      this.locationId = res.locationId;
      this.carId = res.carId;
      this.getCarDetails();
      this.bookingObj.carId = this.carId;
    });
    this.currentUser = this.userService.currentUser;
    this.bookingObj.customerId = this.currentUser.data.userId;
  }

  getCarDetails() {
    this.bookingService.GetCarById(this.carId).subscribe((res: any) => {
      this.carDetails = res.data;
    });
  }

  getAllLocations() {
    this.carService.GetAllLocations().subscribe((res: any) => {
      this.locations = res.data;
    });
  }

  createBooking() {
    this.bookingService
      .createNewBooking(this.bookingObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Booking Success!!!');
        } else {
          alert(res.message);
        }
      });
  }
}
