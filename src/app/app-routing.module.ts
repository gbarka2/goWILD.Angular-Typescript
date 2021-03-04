import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllParksComponent } from './all-parks/all-parks.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'parks', component:AllParksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
