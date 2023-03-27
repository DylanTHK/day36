import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './component/customer.component';
import { CatComponent } from './components/cat.component';
import { DogComponent } from './components/dog.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "dog", component: DogComponent },
  {path: "cat", component: CatComponent },
  {path: "customer/:id", component: CustomerComponent },
  {path: "**", redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
