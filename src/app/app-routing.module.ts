import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CarsComponent } from './pages/cars/cars.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
