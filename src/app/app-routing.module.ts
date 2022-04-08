import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DvdComponent } from './dvd/dvd.component';
import { DownloadComponent } from './download/download.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'dvd',component:DvdComponent},
  {path:'download',component:DownloadComponent},
  {path:'cart',component:CartComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
