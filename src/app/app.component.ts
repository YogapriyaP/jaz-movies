import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { DvdComponent } from './dvd/dvd.component';
import { CartdetailsService } from './cartdetails.service';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movie-app';

  filterItems: any;

  constructor(public service: CartdetailsService) {}

  ngOnInit() {}

  
}
