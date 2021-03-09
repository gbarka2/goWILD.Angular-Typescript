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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselImagesService} from './carousel-images.service';
import { ParkAccordianComponent } from './park-accordian/park-accordian.component';
import { ParkCarouselComponent } from './park-carousel/park-carousel.component'

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
    ParkComponent,
    ParkAccordianComponent,
    ParkCarouselComponent
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
        path:'parks/:id', 
        component:ParkComponent
      },
      {
        path:'parks', 
        component:AllParksComponent
      }
    ]),
    HttpClientModule,
    NgbModule
  ],
  providers: [CarouselImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
