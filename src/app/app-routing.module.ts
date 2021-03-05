import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllParksComponent } from './all-parks/all-parks.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ParksComponent } from './parks/parks.component'

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
