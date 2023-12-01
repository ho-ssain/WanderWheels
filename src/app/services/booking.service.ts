import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCarById, createNewBooking } from '../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}

  GetCarById(carId: string) {
    return this.http.get(GetCarById + carId);
  }

  createNewBooking(obj: any) {
    return this.http.post(createNewBooking, obj);
  }
}
