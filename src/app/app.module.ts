import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AllParksComponent } from './all-parks/all-parks.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ArticlesComponent } from './articles/articles.component';
import { ParksComponent } from './parks/parks.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ParkComponent } from './park/park.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AllParksComponent,
    FooterComponent,
    ContactComponent,
    SearchComponent,
    CarouselComponent,
    ArticlesComponent,
    ParksComponent,
    HomepageComponent,
    ParkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomepageComponent
      },
      {
        path:'parks', 
        component:AllParksComponent
      }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
