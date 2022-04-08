import { Component, OnInit } from '@angular/core';
import { CartdetailsService } from '../cartdetails.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(public service: CartdetailsService) {}

  ngOnInit(): void {
    this.cartItems = this.service.addedItems;
  }

  removeCartItem(item: any, mode: string) {
    if (mode == 'dvd') {
      this.service.updateStocks(item, 'remove');
      this.cartItems.forEach((value, index) => {
        if (value == item) {
          this.cartItems.splice(index, 1);
          item = undefined;
        }
      });
    } else {
      item.available=1;
      this.cartItems.forEach((value, index) => {
        if (value == item) {
          this.cartItems.splice(index, 1);
          item = undefined;
        }
      });
    }
  }
  proceedToBuy() {
    if (this.cartItems.length == 1) {
      alert(`${this.cartItems.length} movie Purchased`);
    } else {
      alert(`${this.cartItems.length} movies Purchased`);
    }
    
    this.cartItems = this.service.clearCart();
  }
}
