import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "form", component: FormComponent},
  {path: "weather", component: WeatherComponent},
  {path: "**", redirectTo: "details", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
