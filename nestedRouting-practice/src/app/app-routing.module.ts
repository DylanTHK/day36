import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotlevelComponent } from './botlevel/botlevel.component';
import { HomeComponent } from './home/home.component';
import { MedlevelComponent } from './medlevel/medlevel.component';
import { ToplevelComponent } from './toplevel/toplevel.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "toplevel", component: ToplevelComponent,
    children: [
      {path: "medlevel", component: MedlevelComponent,
        children: [
          {path: "botlevel", component: BotlevelComponent}
        ]}
    ]
  },
  {path: "**", redirectTo: "toplevel", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
