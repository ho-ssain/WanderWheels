import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { BookingComponent } from './components/pages/booking/booking.component';
import { CarsComponent } from './components/pages/cars/cars.component';
import { AccessComponent } from './components/pages/access/access.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'search/:locationId',
    component: SearchComponent,
  },
  {
    path: 'booking/:locationId/:carId',
    component: BookingComponent,
  },
  {
    path: 'cars',
    component: CarsComponent,
  },
  {
    path: 'sign-up',
    component: AccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
