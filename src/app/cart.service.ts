import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any = [];
  constructor() {}

  addToCart(product: any) {
    this.items.push(product);
  }

  getItemsLength() {
    return this.items.length;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
