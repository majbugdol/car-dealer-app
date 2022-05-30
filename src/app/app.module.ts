import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AsideComponent } from './layout/aside/aside.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarCardComponent } from './components/car-card/car-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AsideComponent,
    FooterComponent,
    MainComponent,
    CarListComponent,
    CarCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
