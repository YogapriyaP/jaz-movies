import { Component, OnInit } from '@angular/core';
import { CartdetailsService } from '../cartdetails.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {
  constructor(public service: CartdetailsService) {}

  cartItems: any[] = [];
  moviesListDownload: any[] = [];
  available:number=0;

  ngOnInit(): void {
    this.moviesListDownload = this.service.moviesListDownload;
  }
  

  addToCart(movie: any) {
     this.available=this.service.addToCart(movie);
  }

  filterData(value: any) {
    this.moviesListDownload = [];
    this.moviesListDownload = this.service.filterData(value, 'download');
  }

  clearFilter() {
    this.moviesListDownload = this.service.moviesListDownload;
  }

  get moviesList()
  {
    return this.service.moviesList;
  }


}
