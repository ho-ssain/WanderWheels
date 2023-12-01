import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AddNewCar,
  GetAllCarsByLocation,
  GetAllCarsByOwnerId_URL,
  GetAllCars_URL,
  GetAllLocations,
} from '../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  GetAllLocations() {
    return this.http.get(GetAllLocations);
  }

  GetAllCarsByOwnerId(id: number) {
    return this.http.get(GetAllCarsByOwnerId_URL + id);
  }

  AddNewCar(car: any) {
    debugger;
    return this.http.post(AddNewCar, car);
  }

  GetAllCars() {
    return this.http.get(GetAllCars_URL);
  }

  GetAllCarsByLocation(locId: string) {
    return this.http.get(GetAllCarsByLocation + locId);
  }
}
