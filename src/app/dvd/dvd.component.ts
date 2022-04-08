import { Component, OnInit } from '@angular/core';
import { CartdetailsService } from '../cartdetails.service';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss'],
})
export class DvdComponent implements OnInit {
  cartItems: any[] = [];
  noOfCartEntries: number = 0;
  moviesList: any[] = [];
  languages: any[] = [];

  constructor(public service: CartdetailsService) {}

  ngOnInit(): void {
    this.moviesList = this.service.moviesList;
  }

  addtoCart(movie: any) {
    this.service.addToCart(movie);
    this.reduceStockNumber(movie);
  }

  reduceStockNumber(movie: { stocks: number }) {
    if (movie.stocks >= 1) {
      movie.stocks = this.service.updateStocks(movie, 'add');
    } else {
      movie.stocks = 0;
      movie.stocks = this.service.updateStocks(movie, 'add');
    }
  }

  filterData(value: any) {
    this.moviesList = [];
    this.moviesList = this.service.filterData(value, 'dvd');
  }
  clearFilter() {
    this.moviesList = this.service.moviesList;
  }
}
