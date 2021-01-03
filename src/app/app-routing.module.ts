import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: ()=> import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "description",
    loadChildren: ()=> import("./job-description/job-description.module").then(m => m.JobDescriptionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
