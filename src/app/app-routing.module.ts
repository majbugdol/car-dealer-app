import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CarsComponent } from './pages/cars/cars.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
